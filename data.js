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
    }
    // 您可以在这里添加其他制造商
    // "AnotherBrand": { ... }
};