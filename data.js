// data.js (聚合器)
// --- 性能数据 ---
// 这个文件汇集了所有独立的压缩机型号数据。
// allPerformanceData 变量由 app.js 使用。

var allPerformanceData = {
    "Danfoss": {
        // "型号": 变量名 (来自对应的 .data.js 文件)
        "SY240": sy240ModelData,
        "SY300": sy300ModelData,
        "SY380": sy380ModelData
    },
    
    // 添加 Nidec 数据
    // nidecData 变量来自 nidec.data.js (已在 index.html 中此文件之前加载)
    "Nidec": nidecData
};