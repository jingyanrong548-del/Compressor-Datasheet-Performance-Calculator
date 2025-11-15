// nidec.data.js
// 包含 Nidec (尼得科) 压缩机热泵应用选型数据
// 数据从 "尼得科选型手册 热泵 C.R HP 25.8.pdf" (CR-HP-50/60-R07) 50Hz 表格转录

var nidecData = {
    "R22": {
        "Standard_1ph": {
            "name": "标准热泵 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW80A-B1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 7919, "Power_W": 2066, "COP": 3.8, "EER": 13.0 },
                { "model": "XW102A-B1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 10906, "Power_W": 2778, "COP": 3.9, "EER": 13.4 },
                { "model": "XW145A-B1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 15450, "Power_W": 3978, "COP": 3.9, "EER": 13.3 }
            ]
        },
        "Standard_3ph": {
            "name": "标准热泵 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW80A-A1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 7885, "Power_W": 1984, "COP": 4.0, "EER": 13.6 },
                { "model": "XW102A-A1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 10868, "Power_W": 2724, "COP": 4.0, "EER": 13.6 },
                { "model": "XW145A-A1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 15551, "Power_W": 3704, "COP": 4.2, "EER": 14.3 },
                { "model": "XW190A-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 18402, "Power_W": 4590, "COP": 4.0, "EER": 13.7 },
                { "model": "XW220A-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 22302, "Power_W": 5454, "COP": 4.1, "EER": 14.0 },
                { "model": "XW245A-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 24983, "Power_W": 6109, "COP": 4.1, "EER": 14.0 },
                { "model": "XW295A-A1-100", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 29233, "Power_W": 7273, "COP": 4.0, "EER": 13.7 },
                { "model": "XW380A-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 37864, "Power_W": 9356, "COP": 4.0, "EER": 13.8 },
                { "model": "XW430A-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 43105, "Power_W": 10567, "COP": 4.1, "EER": 13.9 },
                { "model": "XW460A-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 45905, "Power_W": 11337, "COP": 4.0, "EER": 13.8 },
                { "model": "XW520A-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 53006, "Power_W": 13090, "COP": 4.0, "EER": 13.8 },
                { "model": "XW770A-A1-100", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 76473, "Power_W": 18727, "COP": 4.1, "EER": 13.9 },
                { "model": "XW880A-A1-100", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 87145, "Power_W": 21597, "COP": 4.0, "EER": 13.8 },
                { "model": "XW1080A-A1-100", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 108312, "Power_W": 27913, "COP": 3.9, "EER": 13.3 }
            ]
        },
        "VaporInjection_1ph": {
            "name": "补气增焓 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV80A-B1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 7918, "Power_W": 2085, "COP": 3.8, "EER": 13.0 },
                { "model": "XWV102A-B1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 11277, "Power_W": 3133, "COP": 3.6, "EER": 12.3 },
                { "model": "XWV145A-B1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 15448, "Power_W": 3977, "COP": 3.9, "EER": 13.3 }
            ]
        },
        "VaporInjection_3ph": {
            "name": "补气增焓 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV80A-A1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 7884, "Power_W": 1983, "COP": 4.0, "EER": 13.6 },
                { "model": "XWV102A-A1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 11144, "Power_W": 3000, "COP": 3.7, "EER": 12.7 },
                { "model": "XWV145A-A1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 15549, "Power_W": 3703, "COP": 4.2, "EER": 14.3 },
                { "model": "XWV190A-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 18423, "Power_W": 4611, "COP": 4.0, "EER": 13.6 },
                { "model": "XWV220A-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 22328, "Power_W": 5480, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV245A-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 25011, "Power_W": 6138, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV295A-A1-100", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 29267, "Power_W": 7307, "COP": 4.0, "EER": 13.7 },
                { "model": "XWV380A-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 37928, "Power_W": 9400, "COP": 4.0, "EER": 13.8 },
                { "model": "XWV430A-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 43154, "Power_W": 10616, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV460A-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 45958, "Power_W": 11390, "COP": 4.0, "EER": 13.8 },
                { "model": "XWV520A-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 53067, "Power_W": 13152, "COP": 4.0, "EER": 13.8 },
                { "model": "XWV770A-A1-100", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 76467, "Power_W": 18721, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV880A-A1-100", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 87138, "Power_W": 21590, "COP": 4.0, "EER": 13.8 },
                { "model": "XWV1080A-A1-100", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 108304, "Power_W": 27904, "COP": 3.9, "EER": 13.3 }
            ]
        },
        "DigitalScroll_3ph": {
            "name": "数码涡旋 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWD190A-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 18402, "Power_W": 4590, "COP": 4.0, "EER": 13.7 },
                { "model": "XWD220A-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 22302, "Power_W": 5454, "COP": 4.1, "EER": 14.0 },
                { "model": "XWD245A-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 24983, "Power_W": 6109, "COP": 4.1, "EER": 14.0 },
                { "model": "XWD295A-A1-100", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 29233, "Power_W": 7273, "COP": 4.0, "EER": 13.7 },
                { "model": "XWD380A-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 37864, "Power_W": 9356, "COP": 4.0, "EER": 13.8 },
                { "model": "XWD430A-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 43105, "Power_W": 10567, "COP": 4.1, "EER": 13.9 },
                { "model": "XWD460A-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 45905, "Power_W": 11337, "COP": 4.0, "EER": 13.8 },
                { "model": "XWD520A-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 53006, "Power_W": 13090, "COP": 4.0, "EER": 13.8 }
            ]
        }
    },
    "R134a": {
        "Standard_1ph": {
            "name": "标准热泵 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW50B-B1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 5262, "Power_W": 1467, "COP": 3.6, "EER": 12.3 },
                { "model": "XW65B-B1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 7156, "Power_W": 2001, "COP": 3.6, "EER": 12.2 },
                { "model": "XW95B-B1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 10259, "Power_W": 2819, "COP": 3.6, "EER": 12.4 }
            ]
        },
        "Standard_3ph": {
            "name": "标准热泵 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW35B-A1-100", "HP": 1.5, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 3502, "Power_W": 964, "COP": 3.6, "EER": 12.4 },
                { "model": "XW50B-A1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 5224, "Power_W": 1351, "COP": 3.9, "EER": 13.2 },
                { "model": "XW65B-A1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 6721, "Power_W": 1726, "COP": 3.9, "EER": 13.3 },
                { "model": "XW80B-A1-100", "HP": 3.5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 8070, "Power_W": 2036, "COP": 4.0, "EER": 13.5 },
                { "model": "XW95B-A1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 10192, "Power_W": 2455, "COP": 4.1, "EER": 14.0 },
                { "model": "XW120B-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 12000, "Power_W": 2933, "COP": 4.1, "EER": 14.0 },
                { "model": "XW145B-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 14500, "Power_W": 3519, "COP": 4.1, "EER": 14.1 },
                { "model": "XW160B-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 15745, "Power_W": 3827, "COP": 4.1, "EER": 14.1 },
                { "model": "XW180B-A1-100", "HP": 7.5, "Displ_m3h": 21.0, "Displ_cc": 120.8, "Capacity_W": 17889, "Power_W": 4284, "COP": 4.2, "EER": 14.3 },
                { "model": "XW190B-A1-100", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 19500, "Power_W": 4779, "COP": 4.1, "EER": 13.9 },
                { "model": "XW210B-A1-100", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 21550, "Power_W": 5255, "COP": 4.1, "EER": 14.0 },
                { "model": "XW250B-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 25000, "Power_W": 6068, "COP": 4.1, "EER": 14.1 },
                { "model": "XW280B-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 28500, "Power_W": 6924, "COP": 4.1, "EER": 14.1 },
                { "model": "XW300B-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 30691, "Power_W": 7479, "COP": 4.1, "EER": 14.0 },
                { "model": "XW340B-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 34500, "Power_W": 8293, "COP": 4.2, "EER": 14.2 },
                { "model": "XW500B-A1-100", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 50519, "Power_W": 12376, "COP": 4.1, "EER": 13.9 },
                { "model": "XW580B-A1-100", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 57407, "Power_W": 14767, "COP": 4.1, "EER": 13.8 },
                { "model": "XW710B-A1-100", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 71089, "Power_W": 18295, "COP": 3.9, "EER": 13.3 }
            ]
        },
        "VaporInjection_1ph": {
            "name": "补气增焓 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV50B-B1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 5262, "Power_W": 1467, "COP": 3.6, "EER": 12.3 },
                { "model": "XWV65B-B1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 7156, "Power_W": 2001, "COP": 3.6, "EER": 12.2 },
                { "model": "XWV95B-B1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 10259, "Power_W": 2819, "COP": 3.6, "EER": 12.4 }
            ]
        },
        "VaporInjection_3ph": {
            "name": "补气增焓 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV50B-A1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 5224, "Power_W": 1351, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV65B-A1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 6721, "Power_W": 1726, "COP": 3.9, "EER": 13.3 },
                { "model": "XWV95B-A1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 10192, "Power_W": 2485, "COP": 4.1, "EER": 14.0 },
                { "model": "XWV120B-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 12027, "Power_W": 2960, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV145B-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 14518, "Power_W": 3537, "COP": 4.1, "EER": 14.0 },
                { "model": "XWV160B-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 15730, "Power_W": 3812, "COP": 4.1, "EER": 14.1 },
                { "model": "XWV180B-A1-100", "HP": 7.5, "Displ_m3h": 21.0, "Displ_cc": 120.8, "Capacity_W": 17889, "Power_W": 4284, "COP": 4.2, "EER": 14.3 },
                { "model": "XWV190B-A1-100", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 19524, "Power_W": 4803, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV210B-A1-100", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 21576, "Power_W": 5282, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV250B-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 25031, "Power_W": 6098, "COP": 4.1, "EER": 14.0 },
                { "model": "XWV280B-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 28635, "Power_W": 6960, "COP": 4.1, "EER": 14.1 },
                { "model": "XWV300B-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 30691, "Power_W": 7480, "COP": 4.1, "EER": 14.0 },
                { "model": "XWV340B-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 34542, "Power_W": 8335, "COP": 4.1, "EER": 14.2 },
                { "model": "XWV500B-A1-100", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 50520, "Power_W": 12379, "COP": 4.1, "EER": 13.9 },
                { "model": "XWV580B-A1-100", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 57408, "Power_W": 14168, "COP": 4.1, "EER": 13.8 },
                { "model": "XWV710B-A1-100", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 71091, "Power_W": 18296, "COP": 3.9, "EER": 13.3 }
            ]
        },
        "DigitalScroll_1ph": {
            "name": "数码涡旋 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XD50B-B1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 5245, "Power_W": 1467, "COP": 3.6, "EER": 12.3 },
                { "model": "XD65B-B1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 7164, "Power_W": 2001, "COP": 3.6, "EER": 12.2 },
                { "model": "XD95B-B1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 10271, "Power_W": 2819, "COP": 3.6, "EER": 12.4 }
            ]
        },
        "DigitalScroll_3ph": {
            "name": "数码涡旋 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XD50B-A1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 5230, "Power_W": 1351, "COP": 3.9, "EER": 13.2 },
                { "model": "XD65B-A1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 6729, "Power_W": 1726, "COP": 3.9, "EER": 13.3 },
                { "model": "XD95B-A1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 10205, "Power_W": 2485, "COP": 4.1, "EER": 14.0 },
                { "model": "XD120B-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 12015, "Power_W": 2933, "COP": 4.1, "EER": 14.0 },
                { "model": "XD145B-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 14815, "Power_W": 3584, "COP": 4.1, "EER": 14.1 },
                { "model": "XD160B-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 15734, "Power_W": 3831, "COP": 4.1, "EER": 14.0 },
                { "model": "XD180B-A1-100", "HP": 7.5, "Displ_m3h": 21.0, "Displ_cc": 120.8, "Capacity_W": 17911, "Power_W": 4284, "COP": 4.2, "EER": 14.3 },
                { "model": "XD190B-A1-100", "HP": 8, "Displ_m3h": 22.9, "Displ_cc": 131.0, "Capacity_W": 19758, "Power_W": 4917, "COP": 4.0, "EER": 13.7 },
                { "model": "XD210B-A1-100", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 21940, "Power_W": 5424, "COP": 4.0, "EER": 13.8 },
                { "model": "XD250B-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 25557, "Power_W": 6346, "COP": 4.0, "EER": 13.8 },
                { "model": "XD280B-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 29037, "Power_W": 7163, "COP": 4.1, "EER": 13.8 },
                { "model": "XD300B-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 31467, "Power_W": 7729, "COP": 4.1, "EER": 13.9 },
                { "model": "XD340B-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 35867, "Power_W": 8958, "COP": 4.0, "EER": 13.6 },
                { "model": "XD500B-A1-100", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 50582, "Power_W": 13379, "COP": 4.1, "EER": 14.0 },
                { "model": "XD580B-A1-100", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 57478, "Power_W": 14168, "COP": 4.1, "EER": 13.9 },
                { "model": "XD710B-A1-100", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 71177, "Power_W": 18296, "COP": 3.9, "EER": 13.3 }
            ]
        }
    },
    "R410A": {
        "Standard_1ph": {
            "name": "标准热泵 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW80C-B1-100", "HP": 2, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 8132, "Power_W": 2355, "COP": 3.5, "EER": 11.8 },
                { "model": "XW102C-B1-100", "HP": 3, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 11477, "Power_W": 3165, "COP": 3.6, "EER": 12.4 },
                { "model": "XW145C-B1-100", "HP": 4, "Displ_m3h": 8.0, "Displ_cc": 45.8, "Capacity_W": 14957, "Power_W": 4149, "COP": 3.6, "EER": 12.3 }
            ]
        },
        "Standard_3ph": {
            "name": "标准热泵 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW80C-A1-100", "HP": 2, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 8123, "Power_W": 2315, "COP": 3.5, "EER": 12.0 },
                { "model": "XW102C-A1-100", "HP": 3, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 11488, "Power_W": 3018, "COP": 3.8, "EER": 13.0 },
                { "model": "XW145C-A1-100", "HP": 4, "Displ_m3h": 8.0, "Displ_cc": 45.8, "Capacity_W": 14989, "Power_W": 3881, "COP": 3.9, "EER": 13.2 },
                { "model": "XW190C-A1-100", "HP": 5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 18964, "Power_W": 4920, "COP": 3.9, "EER": 13.2 },
                { "model": "XW220C-A1-100", "HP": 6, "Displ_m3h": 11.9, "Displ_cc": 68.4, "Capacity_W": 22567, "Power_W": 5825, "COP": 3.9, "EER": 13.2 },
                { "model": "XW245C-A1-100", "HP": 7, "Displ_m3h": 12.8, "Displ_cc": 73.6, "Capacity_W": 24467, "Power_W": 6412, "COP": 3.8, "EER": 13.0 },
                { "model": "XW260C-A1-100", "HP": 7.5, "Displ_m3h": 13.9, "Displ_cc": 79.8, "Capacity_W": 26465, "Power_W": 6914, "COP": 3.8, "EER": 13.1 },
                { "model": "XW295C-A1-100", "HP": 8, "Displ_m3h": 15.4, "Displ_cc": 88.6, "Capacity_W": 29251, "Power_W": 7570, "COP": 3.9, "EER": 13.2 },
                { "model": "XW380C-A1-100", "HP": 10, "Displ_m3h": 20.2, "Displ_cc": 116.3, "Capacity_W": 38358, "Power_W": 9901, "COP": 3.9, "EER": 13.2 },
                { "model": "XW430C-A1-100", "HP": 12, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 42847, "Power_W": 11031, "COP": 3.9, "EER": 13.3 },
                { "model": "XW460C-A1-100", "HP": 13, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 47634, "Power_W": 12171, "COP": 3.9, "EER": 13.2 },
                { "model": "XW520C-A1-100", "HP": 15, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 55641, "Power_W": 14399, "COP": 3.9, "EER": 13.2 },
                { "model": "XW770C-A1-100", "HP": 20, "Displ_m3h": 41.0, "Displ_cc": 235.5, "Capacity_W": 77670, "Power_W": 19969, "COP": 3.9, "EER": 13.3 },
                { "model": "XW880C-A1-100", "HP": 25, "Displ_m3h": 46.0, "Displ_cc": 264.5, "Capacity_W": 86867, "Power_W": 22179, "COP": 3.9, "EER": 13.4 },
                { "model": "XW1080C-A1-100", "HP": 30, "Displ_m3h": 59.9, "Displ_cc": 344.0, "Capacity_W": 112770, "Power_W": 28290, "COP": 4.0, "EER": 13.6 }
            ]
        },
        "VaporInjection_1ph": {
            "name": "补气增焓 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV80C-B1-100", "HP": 2, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 8132, "Power_W": 2356, "COP": 3.5, "EER": 11.8 },
                { "model": "XWV102C-B1-100", "HP": 3, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 11478, "Power_W": 3166, "COP": 3.6, "EER": 12.4 },
                { "model": "XWV145C-B1-100", "HP": 4, "Displ_m3h": 8.0, "Displ_cc": 45.8, "Capacity_W": 14958, "Power_W": 4151, "COP": 3.6, "EER": 12.3 }
            ]
        },
        "VaporInjection_3ph": {
            "name": "补气增焓 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV80C-A1-100", "HP": 2, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 8124, "Power_W": 2316, "COP": 3.5, "EER": 12.0 },
                { "model": "XWV102C-A1-100", "HP": 3, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 11490, "Power_W": 3019, "COP": 3.8, "EER": 13.0 },
                { "model": "XWV145C-A1-100", "HP": 4, "Displ_m3h": 8.0, "Displ_cc": 45.8, "Capacity_W": 14990, "Power_W": 3883, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV190C-A1-100", "HP": 5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 18978, "Power_W": 4934, "COP": 3.8, "EER": 13.1 },
                { "model": "XWV220C-A1-100", "HP": 6, "Displ_m3h": 11.9, "Displ_cc": 68.4, "Capacity_W": 22583, "Power_W": 5842, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV245C-A1-100", "HP": 7, "Displ_m3h": 12.8, "Displ_cc": 73.6, "Capacity_W": 24296, "Power_W": 6284, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV260C-A1-100", "HP": 7.5, "Displ_m3h": 13.9, "Displ_cc": 79.8, "Capacity_W": 26468, "Power_W": 6917, "COP": 3.8, "EER": 13.1 },
                { "model": "XWV295C-A1-100", "HP": 8, "Displ_m3h": 15.4, "Displ_cc": 88.6, "Capacity_W": 29273, "Power_W": 7592, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV380C-A1-100", "HP": 10, "Displ_m3h": 20.2, "Displ_cc": 116.3, "Capacity_W": 38387, "Power_W": 9929, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV430C-A1-100", "HP": 12, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 42879, "Power_W": 11063, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV460C-A1-100", "HP": 13, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 47070, "Power_W": 12207, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV520C-A1-100", "HP": 15, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 55685, "Power_W": 14440, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV770C-A1-100", "HP": 20, "Displ_m3h": 41.0, "Displ_cc": 235.5, "Capacity_W": 77678, "Power_W": 19977, "COP": 3.9, "EER": 13.3 },
                { "model": "XWV880C-A1-100", "HP": 25, "Displ_m3h": 46.0, "Displ_cc": 264.5, "Capacity_W": 86876, "Power_W": 22108, "COP": 3.9, "EER": 13.4 },
                { "model": "XWV1080C-A1-100", "HP": 30, "Displ_m3h": 59.9, "Displ_cc": 344.0, "Capacity_W": 112781, "Power_W": 28301, "COP": 4.0, "EER": 13.6 }
            ]
        },
        "DigitalScroll_3ph": {
            "name": "数码涡旋 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWD190C-A1-100", "HP": 5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 18964, "Power_W": 4920, "COP": 3.9, "EER": 13.2 },
                { "model": "XWD520C-A1-100", "HP": 15, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 55641, "Power_W": 14399, "COP": 3.9, "EER": 13.2 }
            ]
        },
        "DigitalScroll_VaporInjection_3ph": {
            "name": "数码涡旋 + 补气 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV190C-A1-100", "HP": 5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 18978, "Power_W": 4934, "COP": 3.8, "EER": 13.1 },
                { "model": "XWV520C-A1-100", "HP": 15, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 55685, "Power_W": 14440, "COP": 3.9, "EER": 13.2 }
            ]
        }
    },
    "R32": {
        "Standard_1ph": {
            "name": "标准热泵 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW102D-B1-100", "HP": 3, "Displ_m3h": 5.3, "Displ_cc": 30.3, "Capacity_W": 10643, "Power_W": 3074, "COP": 3.5, "EER": 11.8 },
                { "model": "XW145D-B1-100", "HP": 4, "Displ_m3h": 7.4, "Displ_cc": 42.7, "Capacity_W": 14877, "Power_W": 4166, "COP": 3.6, "EER": 12.2 },
                { "model": "XW190D-B1-100", "HP": 5, "Displ_m3h": 9.5, "Displ_cc": 54.4, "Capacity_W": 18994, "Power_W": 5509, "COP": 3.4, "EER": 11.8 }
            ]
        },
        "Standard_3ph": {
            "name": "标准热泵 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XW102D-A1-100", "HP": 3, "Displ_m3h": 5.3, "Displ_cc": 30.3, "Capacity_W": 10568, "Power_W": 3001, "COP": 3.5, "EER": 12.0 },
                { "model": "XW145D-A1-100", "HP": 4, "Displ_m3h": 7.4, "Displ_cc": 42.7, "Capacity_W": 14617, "Power_W": 3907, "COP": 3.7, "EER": 12.8 },
                { "model": "XW190D-A-100", "HP": 5, "Displ_m3h": 9.5, "Displ_cc": 54.6, "Capacity_W": 18512, "Power_W": 5027, "COP": 3.7, "EER": 12.6 },
                { "model": "XW220D-A1-100", "HP": 6, "Displ_m3h": 11.0, "Displ_cc": 63.3, "Capacity_W": 22575, "Power_W": 5811, "COP": 3.9, "EER": 13.3 },
                { "model": "XW245D-A-100", "HP": 7, "Displ_m3h": 11.9, "Displ_cc": 68.4, "Capacity_W": 24297, "Power_W": 6246, "COP": 3.9, "EER": 13.3 },
                { "model": "XW260D-A1-100", "HP": 7.5, "Displ_m3h": 12.8, "Displ_cc": 73.6, "Capacity_W": 26358, "Power_W": 6823, "COP": 3.9, "EER": 13.2 },
                { "model": "XW295D-A1-100", "HP": 8, "Displ_m3h": 14.0, "Displ_cc": 80.4, "Capacity_W": 29088, "Power_W": 7540, "COP": 3.9, "EER": 13.2 },
                { "model": "XW380D-A1-100", "HP": 10, "Displ_m3h": 18.5, "Displ_cc": 106.4, "Capacity_W": 38268, "Power_W": 9760, "COP": 3.9, "EER": 13.4 },
                { "model": "XW430D-A-100", "HP": 12, "Displ_m3h": 20.2, "Displ_cc": 116.3, "Capacity_W": 41881, "Power_W": 10528, "COP": 4.0, "EER": 13.6 },
                { "model": "XW460D-A-100", "HP": 13, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 47160, "Power_W": 11779, "COP": 4.0, "EER": 13.7 },
                { "model": "XW520D-A1-100", "HP": 15, "Displ_m3h": 27.6, "Displ_cc": 158.7, "Capacity_W": 57680, "Power_W": 14805, "COP": 3.9, "EER": 13.3 },
                { "model": "XW770D-A1-100", "HP": 20, "Displ_m3h": 38.9, "Displ_cc": 223.4, "Capacity_W": 79328, "Power_W": 20239, "COP": 3.9, "EER": 13.4 },
                { "model": "XW880D-A1-100", "HP": 25, "Displ_m3h": 44.3, "Displ_cc": 254.4, "Capacity_W": 89910, "Power_W": 22674, "COP": 4.0, "EER": 13.5 },
                { "model": "XW1080D-A1-100", "HP": 30, "Displ_m3h": 55.5, "Displ_cc": 318.9, "Capacity_W": 113599, "Power_W": 28000, "COP": 4.1, "EER": 13.9 }
            ]
        },
        "VaporInjection_1ph": {
            "name": "补气增焓 (1-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV102D-B1-100", "HP": 3, "Displ_m3h": 5.3, "Displ_cc": 30.3, "Capacity_W": 10643, "Power_W": 3076, "COP": 3.5, "EER": 11.8 },
                { "model": "XWV145D-B1-100", "HP": 4, "Displ_m3h": 7.4, "Displ_cc": 42.7, "Capacity_W": 14877, "Power_W": 4166, "COP": 3.6, "EER": 12.2 },
                { "model": "XWV190D-B1-100", "HP": 5, "Displ_m3h": 9.5, "Displ_cc": 54.4, "Capacity_W": 18994, "Power_W": 5509, "COP": 3.4, "EER": 11.8 }
            ]
        },
        "VaporInjection_3ph": {
            "name": "补气增焓 (3-Phase)",
            "conditions": "ET 5°C / CT 55°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XWV102D-A1-100", "HP": 3, "Displ_m3h": 5.3, "Displ_cc": 30.3, "Capacity_W": 10568, "Power_W": 3001, "COP": 3.5, "EER": 12.0 },
                { "model": "XWV145D-A1-100", "HP": 4, "Displ_m3h": 7.4, "Displ_cc": 42.7, "Capacity_W": 14617, "Power_W": 3907, "COP": 3.7, "EER": 12.8 },
                { "model": "XWV190D-A-100", "HP": 5, "Displ_m3h": 9.5, "Displ_cc": 54.6, "Capacity_W": 18512, "Power_W": 5027, "COP": 3.7, "EER": 12.6 },
                { "model": "XWV220D-A1-100", "HP": 6, "Displ_m3h": 11.0, "Displ_cc": 63.3, "Capacity_W": 22575, "Power_W": 5811, "COP": 3.9, "EER": 13.3 },
                { "model": "XWV245D-A1-100", "HP": 7, "Displ_m3h": 11.9, "Displ_cc": 68.4, "Capacity_W": 24297, "Power_W": 6246, "COP": 3.9, "EER": 13.3 },
                { "model": "XWV260D-A1-100", "HP": 7.5, "Displ_m3h": 12.8, "Displ_cc": 73.6, "Capacity_W": 26358, "Power_W": 6823, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV295D-A1-100", "HP": 8, "Displ_m3h": 14.0, "Displ_cc": 80.4, "Capacity_W": 29088, "Power_W": 7540, "COP": 3.9, "EER": 13.2 },
                { "model": "XWV380D-A1-100", "HP": 10, "Displ_m3h": 18.5, "Displ_cc": 106.4, "Capacity_W": 38268, "Power_W": 9760, "COP": 3.9, "EER": 13.4 },
                { "model": "XWV430D-A1-100", "HP": 12, "Displ_m3h": 20.2, "Displ_cc": 116.3, "Capacity_W": 41881, "Power_W": 10528, "COP": 4.0, "EER": 13.6 },
                { "model": "XWV460D-A1-100", "HP": 13, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 47160, "Power_W": 11779, "COP": 4.0, "EER": 13.7 },
                { "model": "XWV520D-A1-100", "HP": 15, "Displ_m3h": 27.6, "Displ_cc": 158.7, "Capacity_W": 57680, "Power_W": 14805, "COP": 3.9, "EER": 13.3 },
                { "model": "XWV770D-A1-100", "HP": 20, "Displ_m3h": 38.9, "Displ_cc": 223.4, "Capacity_W": 79328, "Power_W": 20239, "COP": 3.9, "EER": 13.4 },
                { "model": "XWV880D-A1-100", "HP": 25, "Displ_m3h": 44.3, "Displ_cc": 254.4, "Capacity_W": 89910, "Power_W": 22674, "COP": 4.0, "EER": 13.5 },
                { "model": "XWV1080D-A1-100", "HP": 30, "Displ_m3h": 55.5, "Displ_cc": 318.9, "Capacity_W": 113599, "Power_W": 28000, "COP": 4.1, "EER": 13.9 }
            ]
        }
    },
    "R290": {
        "Standard_1ph": {
            "name": "标准热泵 (1-Phase)",
            "conditions": "E.T. -7°C / C.T. 50°C / Superheat 5K / Subcooling 4K",
            "models": [
                { "model": "XW28F-B1-100", "HP": 1.2, "Displ_m3h": 3.8, "Displ_cc": 21.6, "Capacity_W": 3046, "Power_W": 1148, "COP": 2.7, "EER": 9.1 },
                { "model": "XW32F-B1-100", "HP": 1.4, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 3479, "Power_W": 1262, "COP": 2.8, "EER": 9.4 },
                { "model": "XW40F-B1-100", "HP": 1.7, "Displ_m3h": 5.3, "Displ_cc": 30.5, "Capacity_W": 4158, "Power_W": 1471, "COP": 2.8, "EER": 9.7 },
                { "model": "XW48F-B1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 4856, "Power_W": 1629, "COP": 3.0, "EER": 10.2 },
                { "model": "XW56F-B1-100", "HP": 2.5, "Displ_m3h": 7.4, "Displ_cc": 42.7, "Capacity_W": 5963, "Power_W": 2076, "COP": 2.9, "EER": 9.8 },
                { "model": "XW64F-B1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 6649, "Power_W": 2245, "COP": 3.0, "EER": 10.1 },
                { "model": "XW76F-B1-100", "HP": 3.5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 8060, "Power_W": 2794, "COP": 2.9, "EER": 9.8 },
                { "model": "XW90F-B1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 9513, "Power_W": 3136, "COP": 3.0, "EER": 10.4 },
                { "model": "XW108F-B1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 11139, "Power_W": 3423, "COP": 3.3, "EER": 11.1 }
            ]
        },
        "Standard_3ph": {
            "name": "标准热泵 (3-Phase)",
            "conditions": "E.T. -7°C / C.T. 50°C / Superheat 5K / Subcooling 4K",
            "models": [
                { "model": "XW28F-A1-100", "HP": 1.2, "Displ_m3h": 3.8, "Displ_cc": 21.6, "Capacity_W": 3000, "Power_W": 1039, "COP": 2.9, "EER": 9.9 },
                { "model": "XW32F-A1-100", "HP": 1.4, "Displ_m3h": 4.4, "Displ_cc": 25.0, "Capacity_W": 3434, "Power_W": 1150, "COP": 3.0, "EER": 10.2 },
                { "model": "XW40F-A1-100", "HP": 1.7, "Displ_m3h": 5.3, "Displ_cc": 30.5, "Capacity_W": 4130, "Power_W": 1339, "COP": 3.1, "EER": 10.5 },
                { "model": "XW48F-A1-100", "HP": 2, "Displ_m3h": 6.1, "Displ_cc": 34.8, "Capacity_W": 4805, "Power_W": 1512, "COP": 3.2, "EER": 10.9 },
                { "model": "XW56F-A1-100", "HP": 2.5, "Displ_m3h": 7.4, "Displ_cc": 42.7, "Capacity_W": 5874, "Power_W": 1850, "COP": 3.2, "EER": 10.8 },
                { "model": "XW64F-A1-100", "HP": 3, "Displ_m3h": 8.4, "Displ_cc": 48.0, "Capacity_W": 6567, "Power_W": 2031, "COP": 3.2, "EER": 11.0 },
                { "model": "XW76F-A1-100", "HP": 3.5, "Displ_m3h": 10.0, "Displ_cc": 57.5, "Capacity_W": 8080, "Power_W": 2386, "COP": 3.4, "EER": 11.6 },
                { "model": "XW90F-A1-100", "HP": 4, "Displ_m3h": 11.7, "Displ_cc": 67.2, "Capacity_W": 9410, "Power_W": 2793, "COP": 3.4, "EER": 11.5 },
                { "model": "XW108F-A1-100", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 11240, "Power_W": 3330, "COP": 3.4, "EER": 11.5 },
                { "model": "XW130F-A1-100", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 13611, "Power_W": 3961, "COP": 3.4, "EER": 11.7 },
                { "model": "XW145F-A1-100", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 14888, "Power_W": 4424, "COP": 3.4, "EER": 11.5 },
                { "model": "XW160F-A1-100", "HP": 8, "Displ_m3h": 21.0, "Displ_cc": 120.8, "Capacity_W": 16710, "Power_W": 4939, "COP": 3.4, "EER": 11.6 },
                { "model": "XW200F-A1-100", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 20339, "Power_W": 6057, "COP": 3.4, "EER": 11.5 },
                { "model": "XW230F-A1-100", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 23682, "Power_W": 7032, "COP": 3.4, "EER": 11.5 },
                { "model": "XW260F-A1-100", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 26765, "Power_W": 7584, "COP": 3.5, "EER": 12.1 },
                { "model": "XW280F-A1-100", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 28850, "Power_W": 8429, "COP": 3.4, "EER": 11.7 },
                { "model": "XW320F-A1-100", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 32802, "Power_W": 9747, "COP": 3.4, "EER": 11.5 }
            ]
        }
    },
    "R515B": {
        "DigitalScroll_3ph": {
            "name": "高温数码涡旋 (3-Phase)",
            "conditions": "ET 30°C / CT 95°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XD140E-A1-101", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 14214, "Power_W": 4673, "COP": 3.0, "EER": 10.4 },
                { "model": "XD170E-A1-101", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 17770, "Power_W": 5845, "COP": 3.0, "EER": 10.4 },
                { "model": "XD190E-A1-101", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 19523, "Power_W": 6649, "COP": 2.9, "EER": 9.7 },
                { "model": "XD210E-A1-101", "HP": 7.5, "Displ_m3h": 21.8, "Displ_cc": 125.3, "Capacity_W": 20965, "Power_W": 7345, "COP": 2.9, "EER": 9.7 },
                { "model": "XD230E-A1-101", "HP": 8, "Displ_m3h": 22.8, "Displ_cc": 131.0, "Capacity_W": 23661, "Power_W": 8272, "COP": 2.9, "EER": 9.8 },
                { "model": "XD260E-A1-101", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 25760, "Power_W": 8757, "COP": 2.9, "EER": 10.1 },
                { "model": "XD300E-A1-101", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 30752, "Power_W": 10735, "COP": 2.9, "EER": 9.8 },
                { "model": "XD330E-A1-101", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 33888, "Power_W": 11467, "COP": 3.0, "EER": 10.1 },
                { "model": "XD360E-A1-101", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 206.9, "Capacity_W": 36085, "Power_W": 12176, "COP": 3.0, "EER": 10.1 },
                { "model": "XD420E-A1-101", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 41798, "Power_W": 14458, "COP": 2.9, "EER": 9.9 },
                { "model": "XD600E-A1-101", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 60469, "Power_W": 21183, "COP": 2.9, "EER": 9.7 },
                { "model": "XD700E-A1-101", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 69162, "Power_W": 24228, "COP": 2.9, "EER": 9.7 },
                { "model": "XD840E-A1-101", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 84102, "Power_W": 29462, "COP": 2.9, "EER": 9.7 }
            ]
        },
        "DigitalScroll_VaporInjection_3ph": {
            "name": "高温数码涡旋 + 补气 (3-Phase)",
            "conditions": "ET 30°C / CT 95°C / Superheat 11.1K / Subcooling 8.3K",
            "models": [
                { "model": "XDV140E-A1-101", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 14214, "Power_W": 4673, "COP": 3.0, "EER": 10.4 },
                { "model": "XDV170E-A1-101", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 17770, "Power_W": 5845, "COP": 3.0, "EER": 10.4 },
                { "model": "XDV190E-A1-101", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 19523, "Power_W": 6649, "COP": 2.9, "EER": 9.7 },
                { "model": "XDV210E-A1-101", "HP": 7.5, "Displ_m3h": 21.8, "Displ_cc": 125.3, "Capacity_W": 20965, "Power_W": 7345, "COP": 2.9, "EER": 9.7 },
                { "model": "XDV230E-A1-101", "HP": 8, "Displ_m3h": 22.8, "Displ_cc": 131.0, "Capacity_W": 23661, "Power_W": 8272, "COP": 2.9, "EER": 9.8 },
                { "model": "XDV260E-A1-101", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 25760, "Power_W": 8757, "COP": 2.9, "EER": 10.1 },
                { "model": "XDV300E-A1-101", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 30752, "Power_W": 10735, "COP": 2.9, "EER": 9.8 },
                { "model": "XDV330E-A1-101", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 33888, "Power_W": 11467, "COP": 3.0, "EER": 10.1 },
                { "model": "XDV360E-A1-101", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 206.9, "Capacity_W": 36085, "Power_W": 12176, "COP": 3.0, "EER": 10.1 },
                { "model": "XDV420E-A1-101", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 41798, "Power_W": 14458, "COP": 2.9, "EER": 9.9 },
                { "model": "XDV600E-A1-101", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 60469, "Power_W": 21183, "COP": 2.9, "EER": 9.7 },
                { "model": "XDV700E-A1-101", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 69162, "Power_W": 24228, "COP": 2.9, "EER": 9.7 },
                { "model": "XDV840E-A1-101", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 84102, "Power_W": 29462, "COP": 2.9, "EER": 9.7 }
            ]
        }
    },
    "R245fa": {
        "DigitalScroll_3ph": {
            "name": "高温数码涡旋 (3-Phase)",
            "conditions": "ET 50°C / CT 120°C / Superheat 5K / Subcooling 10K",
            "models": [
                { "model": "XD100G-A1-101", "HP": 5, "Displ_m3h": 14.1, "Displ_cc": 82.0, "Capacity_W": 10287, "Power_W": 3446, "COP": 3.0, "EER": 10.1 },
                { "model": "XD120G-A1-101", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 11977, "Power_W": 3908, "COP": 3.1, "EER": 10.5 },
                { "model": "XD130G-A1-101", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 13249, "Power_W": 4417, "COP": 3.0, "EER": 10.2 },
                { "model": "XD145G-A1-101", "HP": 7.5, "Displ_m3h": 21.8, "Displ_cc": 125.3, "Capacity_W": 14890, "Power_W": 4934, "COP": 3.0, "EER": 10.3 },
                { "model": "XD160G-A1-101", "HP": 8, "Displ_m3h": 22.8, "Displ_cc": 131.0, "Capacity_W": 16325, "Power_W": 5553, "COP": 2.9, "EER": 10.0 },
                { "model": "XD180G-A1-101", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 18047, "Power_W": 6063, "COP": 3.0, "EER": 10.2 },
                { "model": "XD210G-A1-101", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 21070, "Power_W": 7049, "COP": 3.0, "EER": 10.2 },
                { "model": "XD235G-A1-101", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 23714, "Power_W": 7905, "COP": 3.0, "EER": 10.2 },
                { "model": "XD250G-A1-101", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 206.9, "Capacity_W": 25805, "Power_W": 8566, "COP": 3.0, "EER": 10.3 },
                { "model": "XD290G-A1-101", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 29413, "Power_W": 9909, "COP": 3.0, "EER": 10.1 },
                { "model": "XD400G-A1-101", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 40650, "Power_W": 13253, "COP": 3.1, "EER": 10.5 },
                { "model": "XD460G-A1-101", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 46282, "Power_W": 15150, "COP": 3.1, "EER": 10.4 },
                { "model": "XD580G-A1-101", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 57976, "Power_W": 19655, "COP": 2.9, "EER": 10.0 }
            ]
        },
        "DigitalScroll_VaporInjection_3ph": {
            "name": "高温数码涡旋 + 补气 (3-Phase)",
            "conditions": "ET 50°C / CT 120°C / Superheat 5K / Subcooling 10K",
            "models": [
                { "model": "XDV100G-A1-101", "HP": 5, "Displ_m3h": 14.1, "Displ_cc": 82.0, "Capacity_W": 10287, "Power_W": 3446, "COP": 3.0, "EER": 10.1 },
                { "model": "XDV120G-A1-101", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 11977, "Power_W": 3908, "COP": 3.1, "EER": 10.5 },
                { "model": "XDV130G-A1-101", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 13249, "Power_W": 4417, "COP": 3.0, "EER": 10.2 },
                { "model": "XDV145G-A1-101", "HP": 7.5, "Displ_m3h": 21.8, "Displ_cc": 125.3, "Capacity_W": 14890, "Power_W": 4934, "COP": 3.0, "EER": 10.3 },
                { "model": "XDV160G-A1-101", "HP": 8, "Displ_m3h": 22.8, "Displ_cc": 131.0, "Capacity_W": 16325, "Power_W": 5553, "COP": 2.9, "EER": 10.0 },
                { "model": "XDV180G-A1-101", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 18047, "Power_W": 6063, "COP": 3.0, "EER": 10.2 },
                { "model": "XDV210G-A1-101", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 21070, "Power_W": 7049, "COP": 3.0, "EER": 10.2 },
                { "model": "XDV235G-A1-101", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 23714, "Power_W": 7905, "COP": 3.0, "EER": 10.2 },
                { "model": "XDV250G-A1-101", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 206.9, "Capacity_W": 25805, "Power_W": 8566, "COP": 3.0, "EER": 10.3 },
                { "model": "XDV290G-A1-101", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 29413, "Power_W": 9909, "COP": 3.0, "EER": 10.1 },
                { "model": "XDV400G-A1-101", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 40650, "Power_W": 13253, "COP": 3.1, "EER": 10.5 },
                { "model": "XDV460G-A1-101", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 46282, "Power_W": 15150, "COP": 3.1, "EER": 10.4 },
                { "model": "XDV580G-A1-101", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 57976, "Power_W": 19655, "COP": 2.9, "EER": 10.0 }
            ]
        }
    },
    "R1233zd(E)": {
        "DigitalScroll_3ph": {
            "name": "高温数码涡旋 (3-Phase)",
            "conditions": "ET 70°C / CT 145°C / Superheat 5K / Subcooling 10K",
            "models": [
                { "model": "XD120H-A1-101", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 12361, "Power_W": 4428, "COP": 2.8, "EER": 9.5 },
                { "model": "XD150H-A1-101", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 15105, "Power_W": 5464, "COP": 2.8, "EER": 9.4 },
                { "model": "XD160H-A1-101", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 16417, "Power_W": 5958, "COP": 2.8, "EER": 9.4 },
                { "model": "XD200H-A1-101", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 20346, "Power_W": 7596, "COP": 2.7, "EER": 9.1 },
                { "model": "XD220H-A1-101", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 22399, "Power_W": 8207, "COP": 2.7, "EER": 9.3 },
                { "model": "XD260H-A1-101", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 26045, "Power_W": 9437, "COP": 2.8, "EER": 9.4 },
                { "model": "XD290H-A1-101", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 29593, "Power_W": 10583, "COP": 2.8, "EER": 9.5 },
                { "model": "XD320H-A1-101", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 31756, "Power_W": 11413, "COP": 2.8, "EER": 9.5 },
                { "model": "XD360H-A1-101", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 36415, "Power_W": 13338, "COP": 2.7, "EER": 9.3 },
                { "model": "XD510H-A1-101", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 50885, "Power_W": 18298, "COP": 2.8, "EER": 9.5 },
                { "model": "XD580H-A1-101", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 57911, "Power_W": 20833, "COP": 2.8, "EER": 9.5 },
                { "model": "XD720H-A1-101", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 72934, "Power_W": 27400, "COP": 2.7, "EER": 9.1 }
            ]
        },
        "DigitalScroll_VaporInjection_3ph": {
            "name": "高温数码涡旋 + 补气 (3-Phase)",
            "conditions": "ET 70°C / CT 145°C / Superheat 5K / Subcooling 10K",
            "models": [
                { "model": "XDV120H-A1-101", "HP": 5, "Displ_m3h": 14.3, "Displ_cc": 82.0, "Capacity_W": 12361, "Power_W": 4428, "COP": 2.8, "EER": 9.5 },
                { "model": "XDV150H-A1-101", "HP": 6, "Displ_m3h": 17.2, "Displ_cc": 98.7, "Capacity_W": 15105, "Power_W": 5464, "COP": 2.8, "EER": 9.4 },
                { "model": "XDV160H-A1-101", "HP": 7, "Displ_m3h": 19.1, "Displ_cc": 109.5, "Capacity_W": 16417, "Power_W": 5958, "COP": 2.8, "EER": 9.4 },
                { "model": "XDV200H-A1-101", "HP": 8, "Displ_m3h": 22.6, "Displ_cc": 129.9, "Capacity_W": 20346, "Power_W": 7596, "COP": 2.7, "EER": 9.1 },
                { "model": "XDV220H-A1-101", "HP": 9, "Displ_m3h": 25.4, "Displ_cc": 146.0, "Capacity_W": 22399, "Power_W": 8207, "COP": 2.7, "EER": 9.3 },
                { "model": "XDV260H-A1-101", "HP": 10, "Displ_m3h": 29.4, "Displ_cc": 168.7, "Capacity_W": 26045, "Power_W": 9437, "COP": 2.8, "EER": 9.4 },
                { "model": "XDV290H-A1-101", "HP": 12, "Displ_m3h": 33.5, "Displ_cc": 192.8, "Capacity_W": 29593, "Power_W": 10583, "COP": 2.8, "EER": 9.5 },
                { "model": "XDV320H-A1-101", "HP": 13, "Displ_m3h": 36.0, "Displ_cc": 207.0, "Capacity_W": 31756, "Power_W": 11413, "COP": 2.8, "EER": 9.5 },
                { "model": "XDV360H-A1-101", "HP": 15, "Displ_m3h": 40.8, "Displ_cc": 234.4, "Capacity_W": 36415, "Power_W": 13338, "COP": 2.7, "EER": 9.3 },
                { "model": "XDV510H-A1-101", "HP": 20, "Displ_m3h": 58.1, "Displ_cc": 334.0, "Capacity_W": 50885, "Power_W": 18298, "COP": 2.8, "EER": 9.5 },
                { "model": "XDV580H-A1-101", "HP": 25, "Displ_m3h": 66.6, "Displ_cc": 382.6, "Capacity_W": 57911, "Power_W": 20833, "COP": 2.8, "EER": 9.5 },
                { "model": "XDV720H-A1-101", "HP": 30, "Displ_m3h": 80.7, "Displ_cc": 464.0, "Capacity_W": 72934, "Power_W": 27400, "COP": 2.7, "EER": 9.1 }
            ]
        }
    }
};