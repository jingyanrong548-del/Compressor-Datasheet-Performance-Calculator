// --- 应用程序逻辑 ---

// --- DOM 元素引用 ---
const dom = {
    // 通用
    manufacturerSelect: document.getElementById('manufacturer'),
    errorDiv: document.getElementById('error-message'),
    errorText: document.getElementById('error-text'),

    // Danfoss 计算器元素
    calcForm: document.getElementById('calc-form'),
    resultsDiv: document.getElementById('results'),
    modelSelect: document.getElementById('model'),
    refrigerantSelect: document.getElementById('refrigerant'),
    staticParamsDiv: document.getElementById('static-params'),
    staticParamsWrapper: document.getElementById('static-params').parentElement, // 用于隐藏整个section
    resultFields: {
        heating: document.getElementById('result-heating'),
        cooling: document.getElementById('result-cooling'),
        power: document.getElementById('result-power'),
        cop: document.getElementById('result-cop'),
        eer: document.getElementById('result-eer'),
        current: document.getElementById('result-current'),
        massFlow: document.getElementById('result-massFlow')
    },

    // Nidec 浏览器元素
    nidecViewer: document.getElementById('nidec-viewer'),
    nidecRefrigerantSelect: document.getElementById('nidec-refrigerant'),
    nidecTablesContainer: document.getElementById('nidec-tables-container')
};

// --- 事件监听器 ---

// 监听制造商选择，这是主模式切换器
dom.manufacturerSelect.addEventListener('change', handleManufacturerChange);

// 监听 Danfoss 计算器表单提交
dom.calcForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 隐藏旧结果和错误
    dom.resultsDiv.classList.add('hidden');
    dom.errorDiv.classList.add('hidden');

    // 获取输入
    const manufacturer = dom.manufacturerSelect.value;
    const model = dom.modelSelect.value;
    const refrigerant = dom.refrigerantSelect.value;
    const tc = parseFloat(document.getElementById('temp-cond').value);
    const to = parseFloat(document.getElementById('temp-evap').value);

    if (isNaN(tc) || isNaN(to)) {
        showError('请输入有效的温度值。');
        return;
    }

    // 检查数据是否存在
    if (!allPerformanceData[manufacturer] || !allPerformanceData[manufacturer][model]) {
        showError('未找到所选制造商和型号的数据。');
        return;
    }
    
    // 注意：allPerformanceData[manufacturer] 此时指向 sy...ModelData 变量
    const modelData = allPerformanceData[manufacturer][model];
    
    if (!modelData.refrigerants[refrigerant]) {
        showError('未找到所选制冷剂的数据。');
        return;
    }

    const data = modelData.refrigerants[refrigerant];
    
    // 检查边界
    const tcRange = [data.condTemps[0], data.condTemps[data.condTemps.length - 1]];
    const toRange = [data.evapTemps[0], data.evapTemps[data.evapTemps.length - 1]];

    if (tc < tcRange[0] || tc > tcRange[1]) {
        showError(`冷凝温度 (${tc}°C) 超出范围 [${tcRange[0]}°C, ${tcRange[1]}°C]`);
        return;
    }
    if (to < toRange[0] || to > toRange[1]) {
        showError(`蒸发温度 (${to}°C) 超出范围 [${toRange[0]}°C, ${toRange[1]}°C]`);
        return;
    }

    // 查找索引
    const tcIdx = findIndices(tc, data.condTemps);
    const toIdx = findIndices(to, data.evapTemps);

    if (!tcIdx || !toIdx) {
        showError('无法在数据表中找到匹配的温度索引。');
        return;
    }
    
    const results = {};
    let hasError = false;

    // 对每种性能进行插值
    for (const key in data.data) {
        const valueGrid = data.data[key];
        const result = interpolate(tc, to, data.condTemps, data.evapTemps, tcIdx, toIdx, valueGrid);
        
        if (result.error) {
            showError(result.error);
            hasError = true;
            break;
        }
        results[key] = result.value;
    }

    if (!hasError) {
        displayResults(results);
    }
});

// 监听 Danfoss 内部的选择框变化
dom.modelSelect.addEventListener('change', updateRefrigerantAndParams);

// --- 核心功能函数 ---

/**
 * 初始化下拉列表
 */
function initializeSelectors() {
    // 页面加载时，初始化制造商、型号和制冷剂的下拉列表
    // 默认选择 Danfoss 并触发计算器UI的显示
    handleManufacturerChange();
}

/**
 * 主模式切换：Danfoss (计算器) vs Nidec (浏览器)
 */
function handleManufacturerChange() {
    const manufacturer = dom.manufacturerSelect.value;
    dom.errorDiv.classList.add('hidden'); // 切换时隐藏错误

    if (manufacturer === "Nidec") {
        // 切换到 Nidec 浏览器模式
        dom.calcForm.classList.add('hidden');
        dom.staticParamsWrapper.classList.add('hidden');
        dom.resultsDiv.classList.add('hidden');
        dom.nidecViewer.classList.remove('hidden');
        
        // 初始化 Nidec 浏览器 (如果尚未初始化)
        initializeNidecViewer();
    } else {
        // 切换到 Danfoss (或其他) 计算器模式
        dom.calcForm.classList.remove('hidden');
        dom.staticParamsWrapper.classList.remove('hidden');
        dom.nidecViewer.classList.add('hidden');
        // resultsDiv 保持隐藏，直到计算
        
        // 运行原有的丹佛斯型号更新逻辑
        updateDanfossModelSelect();
    }
}

// --- Danfoss 计算器特定函数 ---

/**
 * 更新 Danfoss 模型下拉列表
 */
function updateDanfossModelSelect() {
    const manufacturer = dom.manufacturerSelect.value;
    // 此时 allPerformanceData[manufacturer] 必定已定义
    const models = allPerformanceData[manufacturer] ? Object.keys(allPerformanceData[manufacturer]) : [];
    
    dom.modelSelect.innerHTML = ''; // 清空
    models.forEach(model => {
        // 确保只添加 Danfoss 的型号 (sy...)，而不是 Nidec 的数据 (R22...)
        if (allPerformanceData[manufacturer][model] && allPerformanceData[manufacturer][model].staticParams) {
             const option = document.createElement('option');
            option.value = model;
            // 修复：为所有型号添加 (50Hz) 标识
            option.textContent = `${model} (50Hz)`;
            dom.modelSelect.appendChild(option);
        }
    });

    // 触发制冷剂和参数的更新
    updateRefrigerantAndParams();
}

/**
 * 更新 Danfoss 制冷剂下拉列表和静态参数
 */
function updateRefrigerantAndParams() {
    const manufacturer = dom.manufacturerSelect.value;
    const model = dom.modelSelect.value;

    if (!manufacturer || !model || !allPerformanceData[manufacturer] || !allPerformanceData[manufacturer][model] || !allPerformanceData[manufacturer][model].staticParams) {
        dom.refrigerantSelect.innerHTML = '';
        dom.staticParamsDiv.innerHTML = '';
        return;
    }

    const modelData = allPerformanceData[manufacturer][model];

    // 1. 更新制冷剂
    const refrigerants = Object.keys(modelData.refrigerants);
    dom.refrigerantSelect.innerHTML = ''; // 清空
    refrigerants.forEach(ref => {
        const option = document.createElement('option');
        option.value = ref;
        option.textContent = ref;
        dom.refrigerantSelect.appendChild(option);
    });

    // 2. 更新静态参数
    const params = modelData.staticParams;
    dom.staticParamsDiv.innerHTML = ''; // 清空
    for (const key in params) {
        const paramDiv = document.createElement('div');
        paramDiv.className = "bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200";
        paramDiv.innerHTML = `
            <span class="block text-sm text-gray-500">${key}</span>
            <span class="text-lg font-medium text-gray-700">${params[key]}</span>
        `;
        dom.staticParamsDiv.appendChild(paramDiv);
    }
}

/**
 * 显示计算结果 (Danfoss)
 */
function displayResults(results) {
    dom.resultFields.heating.textContent = `${results.heating.toFixed(2)} W`;
    dom.resultFields.cooling.textContent = `${results.cooling.toFixed(2)} W`;
    dom.resultFields.power.textContent = `${results.power.toFixed(2)} W`;
    dom.resultFields.cop.textContent = `${results.cop.toFixed(2)}`;
    dom.resultFields.eer.textContent = `${results.eer.toFixed(2)}`;
    dom.resultFields.current.textContent = `${results.current.toFixed(2)} A`;
    dom.resultFields.massFlow.textContent = `${results.massFlow.toFixed(2)} kg/h`;
    
    dom.resultsDiv.classList.remove('hidden');
    dom.errorDiv.classList.add('hidden');
}

// --- Nidec 浏览器特定函数 ---

let nidecInitialized = false;
/**
 * 初始化 Nidec 浏览器 (填充制冷剂并设置监听器)
 */
function initializeNidecViewer() {
    if (nidecInitialized) {
        displayNidecTables(); // 如果已初始化，只需刷新表格
        return;
    }
    
    const nidecData = allPerformanceData["Nidec"];
    if (!nidecData) {
        showError("Nidec 数据加载失败。");
        return;
    }

    const refrigerants = Object.keys(nidecData);
    dom.nidecRefrigerantSelect.innerHTML = ''; // 清空

    refrigerants.forEach(ref => {
        const option = document.createElement('option');
        option.value = ref;
        option.textContent = ref;
        dom.nidecRefrigerantSelect.appendChild(option);
    });
    
    // 监听 Nidec 制冷剂选择变化
    dom.nidecRefrigerantSelect.addEventListener('change', displayNidecTables);

    // 立即显示默认制冷剂的表格
    displayNidecTables();
    
    nidecInitialized = true;
}

/**
 * 显示 Nidec 选型表格
 */
function displayNidecTables() {
    const refrigerant = dom.nidecRefrigerantSelect.value;
    const nidecData = allPerformanceData["Nidec"];
    
    if (!nidecData || !nidecData[refrigerant]) {
        dom.nidecTablesContainer.innerHTML = '<p class="text-gray-500">未找到该制冷剂的数据。</p>';
        return;
    }

    const applications = nidecData[refrigerant];
    dom.nidecTablesContainer.innerHTML = ''; // 清空旧表格

    // 遍历该制冷剂下的所有应用 (例如 "Standard_3ph", "VaporInjection_3ph")
    for (const appKey in applications) {
        const appData = applications[appKey];
        
        // 1. 创建容器
        const appContainer = document.createElement('div');
        appContainer.className = 'border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white';

        // 2. 创建标题和工况
        const headerDiv = document.createElement('div');
        headerDiv.className = 'p-4 bg-gray-50 border-b border-gray-200';
        headerDiv.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-700">${appData.name || appKey}</h3>
            <p class="text-sm text-gray-600 mt-1">${appData.conditions}</p>
        `;
        appContainer.appendChild(headerDiv);
        
        // 3. 创建表格
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'overflow-x-auto';
        
        const table = document.createElement('table');
        table.className = 'min-w-full divide-y divide-gray-200';
        
        // 3a. 创建表头
        const thead = document.createElement('thead');
        thead.className = 'bg-gray-100';
        thead.innerHTML = `
            <tr>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">型号 (Model)</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">匹数 (HP)</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排量 (cc)</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排量 (m³/h)</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">制热量 (W)</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">功率 (W)</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COP</th>
                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EER</th>
            </tr>
        `;
        table.appendChild(thead);
        
        // 3b. 创建表体
        const tbody = document.createElement('tbody');
        tbody.className = 'bg-white divide-y divide-gray-200';
        
        appData.models.forEach(model => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-50';
            tr.innerHTML = `
                <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">${model.model || 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.HP || 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.Displ_cc || 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.Displ_m3h || 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.Capacity_W ? model.Capacity_W.toLocaleString() : 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.Power_W ? model.Power_W.toLocaleString() : 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.COP || 'N/A'}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${model.EER || 'N/A'}</td>
            `;
            tbody.appendChild(tr);
        });
        
        table.appendChild(tbody);
        tableWrapper.appendChild(table);
        appContainer.appendChild(tableWrapper);
        
        // 4. 将完整的应用容器添加到页面
        dom.nidecTablesContainer.appendChild(appContainer);
    }
}


// --- 通用函数 ---

/**
 * 显示错误信息
 */
function showError(message) {
    dom.errorText.textContent = message;
    dom.errorDiv.classList.remove('hidden');
    dom.resultsDiv.classList.add('hidden');
}

/**
 * 查找值在数组中的边界索引
 * @returns {object} { i1: lowerIndex, i2: upperIndex }
 */
function findIndices(val, arr) {
    const exactIndex = arr.indexOf(val);
    if (exactIndex !== -1) {
        return { i1: exactIndex, i2: exactIndex };
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (val >= arr[i] && val <= arr[i+1]) {
            return { i1: i, i2: i + 1 };
        }
    }
    if (val === arr[arr.length - 1]) {
         return { i1: arr.length - 1, i2: arr.length - 1 };
    }
    return null; 
}

/**
 * 线性插值
 * @returns {number}
 */
function linearInterp(x, x1, x2, y1, y2) {
    if (x1 === x2) return y1;
    return ((x2 - x) / (x2 - x1)) * y1 + ((x - x1) / (x2 - x1)) * y2;
}

/**
 * 双线性插值
 * @returns {object} { value: number } 或 { error: string }
 */
function interpolate(tc, to, condTemps, evapTemps, tcIdx, toIdx, valueGrid) {
    const { i1: i_tc1, i2: i_tc2 } = tcIdx;
    const { i1: i_to1, i2: i_to2 } = toIdx;

    const tc1 = condTemps[i_tc1];
    const tc2 = condTemps[i_tc2];
    const to1 = evapTemps[i_to1];
    const to2 = evapTemps[i_to2];

    // 获取四个角的值
    const Q11 = valueGrid[i_tc1][i_to1];
    const Q12 = valueGrid[i_tc1][i_to2];
    const Q21 = valueGrid[i_tc2][i_to1];
    const Q22 = valueGrid[i_tc2][i_to2];

    // 检查 null (超出工作范围)
    if (Q11 === null || Q12 === null || Q21 === null || Q22 === null) {
        return { error: `输入点 (${to}°C, ${tc}°C) 处于数据表的无效工作范围内 (缺少插值点)。` };
    }

    // 1. 精确匹配
    if (i_tc1 === i_tc2 && i_to1 === i_to2) {
        return { value: Q11 };
    }

    // 2. 1D 插值 (在网格线上)
    // 2a. tc 固定, to 变化 (水平插值)
    if (i_tc1 === i_tc2) {
        const value = linearInterp(to, to1, to2, Q11, Q12);
        return { value: value };
    }
    // 2b. to 固定, tc 变化 (垂直插值)
    if (i_to1 === i_to2) {
        const value = linearInterp(tc, tc1, tc2, Q11, Q21);
        return { value: value };
    }

    // 3. 2D 插值 (双线性)
    // 沿 tc 方向插值 (垂直)
    const R1 = linearInterp(tc, tc1, tc2, Q11, Q21);
    const R2 = linearInterp(tc, tc1, tc2, Q12, Q22);
    
    // 沿 to 方向插值 (水平)
    const P = linearInterp(to, to1, to2, R1, R2);

    return { value: P };
}

// --- 初始化 ---
initializeSelectors();