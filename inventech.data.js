// inventech.data.js
// 包含 英华特 (Invotech) 压缩机热泵应用选型数据
// 数据从 "英华特热泵专用涡旋压缩机-202507.pdf" 转录

var inventechData = {
    "LowAmbientHeating": {
        "R410A": {
            "name": "R410A 低环温供暖",
            "conditions": "名义工况: 蒸发温度-7℃, 冷凝温度50℃, 吸气过热度10K, 过冷度5K, EVI: ON [cite: 260]",
            "models": [
                { "model": "YW110C1-V100", "HP": 4, "Displ_cc": 46.6, "Capacity_W": 15267, "Power_W": 4032, "COP": 3.79 },
                { "model": "YW135C1-V100", "HP": 5, "Displ_cc": 59.2, "Capacity_W": 18317, "Power_W": 4801, "COP": 3.81 },
                { "model": "YW135C2-V100", "HP": 5, "Displ_cc": 59.2, "Capacity_W": 19872, "Power_W": 5629, "COP": 3.53 },
                { "model": "YW152C2-V100", "HP": 6, "Displ_cc": 67.8, "Capacity_W": 21932, "Power_W": 5799, "COP": 3.85 },
                { "model": "YW160C1-V100", "HP": 6, "Displ_cc": 67.8, "Capacity_W": 24007, "Power_W": 6205, "COP": 3.85 },
                { "model": "YW185C1-V1D0", "HP": 6.5, "Displ_cc": 77, "Capacity_W": 25066, "Power_W": 6668, "COP": 3.76 },
                { "model": "YW245C1-V1D0", "HP": 9, "Displ_cc": 102.9, "Capacity_W": 33400, "Power_W": 8900, "COP": 3.75 },
                { "model": "YW270C1-V1D0", "HP": 10, "Displ_cc": 115.5, "Capacity_W": 38300, "Power_W": 10000, "COP": 3.83 },
                { "model": "YW320C1-V1D0", "HP": 12, "Displ_cc": 131.6, "Capacity_W": 42670, "Power_W": 11170, "COP": 3.82 },
                { "model": "YW340C1-V1D5", "HP": 13, "Displ_cc": 143.1, "Capacity_W": 48941, "Power_W": 13069, "COP": 3.74 },
                { "model": "YW400C1-V1D5", "HP": 15, "Displ_cc": 167.2, "Capacity_W": 55413, "Power_W": 14528, "COP": 3.81 },
                { "model": "YW550C1-V100", "HP": 20, "Displ_cc": 235.6, "Capacity_W": 76152, "Power_W": 19526, "COP": 3.88 },
                { "model": "YW630C1-V100", "HP": 25, "Displ_cc": 256.9, "Capacity_W": 71800, "Power_W": 21130, "COP": 3.4 },
                { "model": "YW650C1-V100", "HP": 25, "Displ_cc": 265.5, "Capacity_W": 75100, "Power_W": 22071, "COP": 3.41 },
                { "model": "YW1360C1G-V100", "HP": 50, "Displ_cc": 540, "Capacity_W": 155560, "Power_W": 45000, "COP": 3.46 }
            ]
        },
        "R32": {
            "name": "R32 低环温供暖",
            "conditions": "名义工况: 蒸发温度-7℃, 冷凝温度50℃, 吸气过热度10K, 过冷度5K, EVI: ON [cite: 260]",
            "models": [
                { "model": "YW630D1-V100", "HP": 25, "Displ_cc": 256.9, "Capacity_W": 76400, "Power_W": 22500, "COP": 3.4 }
            ]
        },
        "R22": {
            "name": "R22 低环温供暖 (?)",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K, EVI: OFF [cite: 276]",
            "models": [
                { "model": "YW135A1-V100", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 18000, "Power_W": 4500, "COP": 4 },
                { "model": "YW160A1-V100", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 21040, "Power_W": 5260, "COP": 4 },
                { "model": "YW185A1-V100", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 24670, "Power_W": 6170, "COP": 4 },
                { "model": "YW285A1-V100", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 39675, "Power_W": 9750, "COP": 4.07 },
                { "model": "YW320A1-V100", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 43917, "Power_W": 10737, "COP": 4.09 }
            ]
        },
        "R407C": {
            "name": "R407C 低环温供暖 (?)",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K, EVI: OFF [cite: 267]",
            "models": [
                { "model": "YW135T1-V100", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 19700, "Power_W": 4970, "COP": 3.96 },
                { "model": "YW205T1-V100", "HP": 8, "Displ_cc": 123, "Capacity_W": 27983, "Power_W": 7258, "COP": 3.86 }
            ]
        }
    },
    "HotWater": {
        "R410A": {
            "name": "R410A 热泵热水",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K [cite: 340]",
            "models": [
                { "model": "YW110C1-100", "HP": 4, "Displ_cc": 46.6, "Capacity_W": 14577, "Power_W": 3877, "COP": 3.76 },
                { "model": "YW135C1-100", "HP": 5, "Displ_cc": 59.2, "Capacity_W": 18593, "Power_W": 4893, "COP": 3.8 },
                { "model": "YW160C1-100", "HP": 6, "Displ_cc": 67.8, "Capacity_W": 21403, "Power_W": 5603, "COP": 3.82 },
                { "model": "YW185C1-100", "HP": 6.5, "Displ_cc": 77, "Capacity_W": 25350, "Power_W": 6850, "COP": 3.7 },
                { "model": "YW245C1-100", "HP": 9, "Displ_cc": 102.9, "Capacity_W": 33400, "Power_W": 8900, "COP": 3.75 },
                { "model": "YW270C1-100", "HP": 10, "Displ_cc": 115.5, "Capacity_W": 37321, "Power_W": 9821, "COP": 3.8 },
                { "model": "YW320C1-100", "HP": 12, "Displ_cc": 131.6, "Capacity_W": 41660, "Power_W": 10922, "COP": 3.81 },
                { "model": "YW340C1-105", "HP": 13, "Displ_cc": 143.1, "Capacity_W": 48166, "Power_W": 12945, "COP": 3.72 },
                { "model": "YW400C1-105", "HP": 15, "Displ_cc": 167.2, "Capacity_W": 54286, "Power_W": 14286, "COP": 3.8 },
                { "model": "YW550C1-100", "HP": 20, "Displ_cc": 235.6, "Capacity_W": 77200, "Power_W": 19700, "COP": 3.92 },
                { "model": "YW630C1-100", "HP": 25, "Displ_cc": 256.9, "Capacity_W": 83900, "Power_W": 21400, "COP": 3.92 }
            ]
        },
        "R407C": {
            "name": "R407C 热泵热水",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K [cite: 348]",
            "models": [
                { "model": "YW135T1-100", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 17520, "Power_W": 4550, "COP": 3.85 },
                { "model": "YW160T1-100", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 20480, "Power_W": 5320, "COP": 3.85 },
                { "model": "YW185T1-100", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 23991, "Power_W": 6231, "COP": 3.85 },
                { "model": "YW205T1-100", "HP": 8, "Displ_cc": 123, "Capacity_W": 26717, "Power_W": 6979, "COP": 3.83 },
                { "model": "YW320T1-100", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 41285, "Power_W": 10565, "COP": 3.91 },
                { "model": "YW400T1-100", "HP": 15, "Displ_cc": 246, "Capacity_W": 50730, "Power_W": 13110, "COP": 3.87 },
                { "model": "YW450T1-100", "HP": 17, "Displ_cc": 265.5, "Capacity_W": 54750, "Power_W": 14150, "COP": 3.87 },
                { "model": "YW650T1-100", "HP": 25, "Displ_cc": 392, "Capacity_W": 77273, "Power_W": 20268, "COP": 3.81 }
            ]
        },
        "R22": {
            "name": "R22 热泵热水",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K [cite: 398]",
            "models": [
                { "model": "YW75A1-100", "HP": 3, "Displ_cc": 46.6, "Capacity_W": 10200, "Power_W": 2630, "COP": 3.88 },
                { "model": "YW110A1-100", "HP": 4, "Displ_cc": 67.8, "Capacity_W": 15000, "Power_W": 3800, "COP": 3.95 },
                { "model": "YW135A1-100", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 18000, "Power_W": 4500, "COP": 4 },
                { "model": "YW160A1-100", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 21040, "Power_W": 5260, "COP": 4 },
                { "model": "YW185A1-100", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 24670, "Power_W": 6170, "COP": 4 },
                { "model": "YW205A1-100", "HP": 8, "Displ_cc": 123, "Capacity_W": 27470, "Power_W": 6910, "COP": 3.98 },
                { "model": "YW285A1-100", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 37875, "Power_W": 9375, "COP": 4.04 },
                { "model": "YW320A1-100", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 41400, "Power_W": 10710, "COP": 3.86 },
                { "model": "YW360A1-105", "HP": 13, "Displ_cc": 210, "Capacity_W": 48014, "Power_W": 12424, "COP": 3.86 },
                { "model": "YW400A1-100", "HP": 15, "Displ_cc": 246, "Capacity_W": 52943, "Power_W": 13128, "COP": 4.03 },
                { "model": "YW450A1-100", "HP": 17, "Displ_cc": 265.5, "Capacity_W": 56500, "Power_W": 14250, "COP": 3.96 },
                { "model": "YW650A1-100", "HP": 25, "Displ_cc": 392, "Capacity_W": 86293, "Power_W": 21273, "COP": 4.05 }
            ]
        }
    },
    "HighTempDrying": {
        "R134a": {
            "name": "R134a 热泵烘干",
            "conditions": "名义工况 (1-19): ET: 7.2°C, CT: 54.4°C, SH: 11.1K, SC: 8.3K[cite: 417]. (20-21): ET: 10°C, CT: 75°C, SH: 5K, SC: 10K [cite: 420]",
            "models": [
                { "model": "YW38J1-100", "HP": 2, "Displ_cc": 33.3, "Capacity_W": 5000, "Power_W": 1199, "COP": 4.17 },
                { "model": "YW38J2-100", "HP": 2, "Displ_cc": 33.3, "Capacity_W": 5126, "Power_W": 1226, "COP": 4.18 },
                { "model": "YW55J1-100", "HP": 3, "Displ_cc": 46.6, "Capacity_W": 7180, "Power_W": 1689, "COP": 4.25 },
                { "model": "YW80J1-100", "HP": 4, "Displ_cc": 67.8, "Capacity_W": 10430, "Power_W": 2437, "COP": 4.28 },
                { "model": "YW80J2-100", "HP": 4, "Displ_cc": 67.8, "Capacity_W": 10450, "Power_W": 2450, "COP": 4.27 },
                { "model": "YW100J1-100", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 13000, "Power_W": 3023, "COP": 4.3 },
                { "model": "YW120J1-100", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 15530, "Power_W": 3612, "COP": 4.3 },
                { "model": "YW132J1-100", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 17415, "Power_W": 4045, "COP": 4.31 },
                { "model": "YW137J1-100", "HP": 7, "Displ_cc": 108.9, "Capacity_W": 17861, "Power_W": 4108, "COP": 4.35 },
                { "model": "YW155J1-100", "HP": 8, "Displ_cc": 123, "Capacity_W": 18830, "Power_W": 4400, "COP": 4.28 },
                { "model": "YW180J1-100", "HP": 9, "Displ_cc": 145.4, "Capacity_W": 23450, "Power_W": 5450, "COP": 4.3 },
                { "model": "YW180J1-610", "HP": 9, "Displ_cc": 142, "Capacity_W": 23400, "Power_W": 5200, "COP": 4.5 },
                { "model": "YW200J1-100", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 25540, "Power_W": 5940, "COP": 4.3 },
                { "model": "YW240J1-100", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 29220, "Power_W": 6720, "COP": 4.35 },
                { "model": "YW240J1-610", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 29000, "Power_W": 6500, "COP": 4.46 },
                { "model": "YW265J1-105", "HP": 13, "Displ_cc": 210, "Capacity_W": 32471, "Power_W": 11173, "COP": 2.9 },
                { "model": "YW288J1-105", "HP": 15, "Displ_cc": 238.3, "Capacity_W": 35087, "Power_W": 12109, "COP": 2.9 },
                { "model": "YW290J1-100", "HP": 15, "Displ_cc": 246, "Capacity_W": 38050, "Power_W": 8960, "COP": 4.25 },
                { "model": "YW315J1-100", "HP": 17, "Displ_cc": 265.5, "Capacity_W": 41200, "Power_W": 9770, "COP": 4.22 },
                { "model": "YW390J1-100", "HP": 20, "Displ_cc": 332.8, "Capacity_W": 49357, "Power_W": 16340, "COP": 3.02 },
                { "model": "YW470J1-100", "HP": 25, "Displ_cc": 392, "Capacity_W": 56776, "Power_W": 18738, "COP": 3.03 }
            ]
        },
        "R134a_EVI": {
            "name": "R134a 热泵烘干 (EVI)",
            "conditions": "名义工况 (1-5): ET: 7.2°C, CT: 54.4°C, SH: 11.1K, SC: 8.3K[cite: 440]. (6-8): ET: 10°C, CT: 75°C, SH: 5K, SC: 10K [cite: 442]",
            "models": [
                { "model": "YW120J1-V100", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 16270, "Power_W": 3756, "COP": 4.33 },
                { "model": "YW132J1-V100", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 19157, "Power_W": 4450, "COP": 4.3 },
                { "model": "YW200J1-V100", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 26758, "Power_W": 6178, "COP": 4.33 },
                { "model": "YW240J1-V100", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 30614, "Power_W": 6989, "COP": 4.38 },
                { "model": "YW290J1-V100", "HP": 15, "Displ_cc": 246, "Capacity_W": 47256, "Power_W": 14877, "COP": 3.18 },
                { "model": "YW315J1-V100", "HP": 17, "Displ_cc": 265.5, "Capacity_W": 50694, "Power_W": 16118, "COP": 3.15 },
                { "model": "YW390J1-V100", "HP": 20, "Displ_cc": 332.8, "Capacity_W": 59069, "Power_W": 18707, "COP": 3.16 },
                { "model": "YW470J1-V100", "HP": 25, "Displ_cc": 392, "Capacity_W": 67366, "Power_W": 21574, "COP": 3.12 }
            ]
        }
    },
    "UltraHighTempHeating": {
        "R515B": {
            "name": "R515B 工业高温热泵",
            "conditions": "名义工况: 蒸发温度10℃, 冷凝温度85℃, 吸气过热度10K, 过冷度10K [cite: 495]",
            "models": [
                { "model": "YW132K1G-100", "HP": 7, "Displ_cc": 108, "Capacity_W": 11301, "Power_W": 4780, "COP": 2.37 },
                { "model": "YW240K1G-100", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 19782, "Power_W": 8495, "COP": 2.33 },
                { "model": "YW290K1G-100", "HP": 15, "Displ_cc": 246, "Capacity_W": 25437, "Power_W": 10508, "COP": 2.42 },
                { "model": "YW470K1G-100", "HP": 25, "Displ_cc": 392, "Capacity_W": 39181, "Power_W": 16687, "COP": 2.34 }
            ]
        },
        "R245fa": {
            "name": "R245fa 工业高温热泵 (EVI)",
            "conditions": "名义工况: 蒸发温度50℃, 冷凝温度120℃, 吸气过热度5K, 过冷度10K, EVI: ON [cite: 528]",
            "models": [
                { "model": "YW470L1G-V100", "HP": 25, "Displ_cc": 392, "Capacity_W": 51300, "Power_W": 17060, "COP": 3.01 }
            ]
        },
        "R1233zd(E)": {
            "name": "R1233zd(E) 工业高温热泵 (EVI)",
            "conditions": "名义工况: 蒸发温度50℃, 冷凝温度120℃, 吸气过热度5K, 过冷度10K, EVI: ON [cite: 583]",
            "models": [
                { "model": "YW390M1G-V100", "HP": 20, "Displ_cc": 332, "Capacity_W": 42300, "Power_W": 13800, "COP": 3.07 }
            ]
        }
    },
    "Inverter": {
        "R410A_DC": {
            "name": "R410A 直流变频 (EVI)",
            "conditions": "名义工况 (1-4): ET: 5°C, CT: 55°C, SH: 11.1K, SC: 8.3K, EVI: OFF, 4500rpm[cite: 592]. (5): ET: -7°C, CT: 50°C, SH: 10K, SC: 5K, EVI: ON, 4500rpm [cite: 593]",
            "models": [
                { "model": "YIW38C1G-100", "Displ_cc": 38, "Capacity_W": 19319, "Power_W": 5155, "COP": 3.75, "Freq_Range": "1800-5400" },
                { "model": "YIW38C2G-100", "Displ_cc": 38, "Capacity_W": 19300, "Power_W": 5020, "COP": 3.84, "Freq_Range": "1800-5400" },
                { "model": "YIW42C1G-100", "Displ_cc": 42, "Capacity_W": 21384, "Power_W": 5690, "COP": 3.76, "Freq_Range": "1800-5400" },
                { "model": "YIW72C1G-V100", "Displ_cc": 72, "Capacity_W": 35391, "Power_W": 9205, "COP": 3.84, "Freq_Range": "1800-5400" },
                { "model": "YIW130C1G-V100", "Displ_cc": 130, "Capacity_W": 55575, "Power_W": 16704, "COP": 3.33, "Freq_Range": "1500-7200" }
            ]
        },
        "R134a_DC": {
            "name": "R134a 直流变频",
            "conditions": "名义工况 (1-4): ET: 7.2°C, CT: 54.4°C, SH: 11.1K, SC: 8.3K, 4500rpm[cite: 640]. (5): ET: 10°C, CT: 75°C, SH: 5K, SC: 10K, 4500rpm [cite: 641]",
            "models": [
                { "model": "YIW60J1G-100", "Displ_cc": 60, "Capacity_W": 14421, "Power_W": 3510, "COP": 4.11, "Freq_Range": "1800-5400" },
                { "model": "YIW60J2G-100", "Displ_cc": 60, "Capacity_W": 14431, "Power_W": 3560, "COP": 4.05, "Freq_Range": "1800-5400" },
                { "model": "YIW72J1G-100", "Displ_cc": 72, "Capacity_W": 16933, "Power_W": 4139, "COP": 4.09, "Freq_Range": "1800-5400" },
                { "model": "YIW72J2G-100", "Displ_cc": 72, "Capacity_W": 17340, "Power_W": 4286, "COP": 4.05, "Freq_Range": "1800-5400" },
                { "model": "YIW130J1G-100", "Displ_cc": 130, "Capacity_W": 30016, "Power_W": 10619, "COP": 3.87, "Freq_Range": "1800-7200" } // Note: COP is 3.87 in table, 2.83 in text. Table [cite: 630] says 3.87. I will use 3.87
            ]
        },
        "R515B_AC": {
            "name": "R515B 交流变频",
            "conditions": "名义工况: 蒸发温度10℃, 冷凝温度85℃, 吸气过热度10K, 过冷度10K, 3600rpm [cite: 689]",
            "models": [
                { "model": "YNW168K1G-100", "Displ_cc": 167.2, "Capacity_W": 21540, "Power_W": 8825, "COP": 2.44, "Freq_Range": "2700-4200" }
            ]
        }
    },
    "SilentEnhanced": {
        "R407C_Silent": {
            "name": "R407C 静音加强型",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K [cite: 696]",
            "models": [
                { "model": "YW160T1-621", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 20849, "Power_W": 5595, "COP": 3.72 },
                { "model": "YW185T1-621", "HP": 7, "Displ_cc": 108, "Capacity_W": 22550, "Power_W": 6100, "COP": 3.7 },
                { "model": "YW205T1-621", "HP": 8, "Displ_cc": 123, "Capacity_W": 26700, "Power_W": 6990, "COP": 3.82 },
                { "model": "YW320T1-621", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 40723, "Power_W": 10796, "COP": 3.77 }
            ]
        },
        "R410A_Silent": {
            "name": "R410A 静音加强型",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K, EVI: OFF [cite: 633]",
            "models": [
                { "model": "YW110C1-621", "HP": 4, "Displ_cc": 46.6, "Capacity_W": 15590, "Power_W": 4311, "COP": 3.62 },
                { "model": "YW135C1-621", "HP": 5, "Displ_cc": 59.2, "Capacity_W": 18167, "Power_W": 4854, "COP": 3.74 },
                { "model": "YW160C1-621", "HP": 6, "Displ_cc": 67.8, "Capacity_W": 21410, "Power_W": 5962, "COP": 3.6 },
                { "model": "YW185C1-621", "HP": 7, "Displ_cc": 77, "Capacity_W": 24766, "Power_W": 6866, "COP": 3.61 },
                { "model": "YW270C1-621", "HP": 10, "Displ_cc": 115.5, "Capacity_W": 38600, "Power_W": 10161, "COP": 3.8 },
                { "model": "YW320C1-621", "HP": 12, "Displ_cc": 127.8, "Capacity_W": 41418, "Power_W": 10821, "COP": 3.83 },
                { "model": "YW270C1-V621", "HP": 10, "Displ_cc": 115.5, "Capacity_W": 37875, "Power_W": 10236, "COP": 3.7 },
                { "model": "YW320C1-V621", "HP": 12, "Displ_cc": 127.8, "Capacity_W": 41418, "Power_W": 11020, "COP": 3.76 }
            ]
        },
        "R134a_Silent": {
            "name": "R134a 静音加强型",
            "conditions": "名义工况: 蒸发温度7.2℃, 冷凝温度54.4℃, 吸气过热度11.1K, 过冷度8.3K [cite: 734]",
            "models": [
                { "model": "YW55J1-621", "HP": 3, "Displ_cc": 46.6, "Capacity_W": 7036, "Power_W": 1689, "COP": 4.17 },
                { "model": "YW100J1-621", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 13000, "Power_W": 3200, "COP": 4.1 },
                { "model": "YW120J1-621", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 15397, "Power_W": 3541, "COP": 4.4 },
                { "model": "YW240J1-621", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 29220, "Power_W": 6720, "COP": 4.35 }
            ]
        },
        "R22_Silent": {
            "name": "R22 静音加强型",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K, EVI: OFF [cite: 745]",
            "models": [
                { "model": "YW135A1-621", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 18155, "Power_W": 4788, "COP": 3.79 },
                { "model": "YW160A1-621", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 21246, "Power_W": 5540, "COP": 3.83 },
                { "model": "YW185A1-621", "HP": 7, "Displ_cc": 108, "Capacity_W": 23303, "Power_W": 6012, "COP": 3.88 },
                { "model": "YW205A1-621", "HP": 8, "Displ_cc": 123, "Capacity_W": 27580, "Power_W": 7000, "COP": 3.94 },
                { "model": "YW245A1-621", "HP": 9, "Displ_cc": 145.4, "Capacity_W": 33450, "Power_W": 8403, "COP": 3.98 },
                { "model": "YW285A1-621", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 37636, "Power_W": 9337, "COP": 4.03 },
                { "model": "YW320A1-621", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 41605, "Power_W": 10767, "COP": 3.86 }
            ]
        }
    },
    "ExplosionProof": {
        "R410A_EX": {
            "name": "R410A 防爆型",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K, EVI: OFF [cite: 787]",
            "models": [
                { "model": "YW75C1-10X", "HP": 3, "Displ_cc": 32.2, "Capacity_W": 10626, "Power_W": 2826, "COP": 3.76 },
                { "model": "YW110C1-10X", "HP": 4, "Displ_cc": 46.6, "Capacity_W": 14577, "Power_W": 3877, "COP": 3.76 },
                { "model": "YW135C1-10X", "HP": 5, "Displ_cc": 59.2, "Capacity_W": 18593, "Power_W": 4893, "COP": 3.8 },
                { "model": "YW135C1-V10X", "HP": 5, "Displ_cc": 59.2, "Capacity_W": 18317, "Power_W": 4801, "COP": 3.81 },
                { "model": "YW160C1-10X", "HP": 6, "Displ_cc": 67.8, "Capacity_W": 21403, "Power_W": 5603, "COP": 3.82 },
                { "model": "YW160C1-V10X", "HP": 6, "Displ_cc": 67.8, "Capacity_W": 22417, "Power_W": 5827, "COP": 3.85 },
                { "model": "YW185C1-10X", "HP": 6.5, "Displ_cc": 77, "Capacity_W": 25350, "Power_W": 6850, "COP": 3.7 },
                { "model": "YW185C1-V10X", "HP": 6.5, "Displ_cc": 77, "Capacity_W": 25350, "Power_W": 6850, "COP": 3.7 },
                { "model": "YW245C1-10X", "HP": 9, "Displ_cc": 102.9, "Capacity_W": 33400, "Power_W": 8900, "COP": 3.75 },
                { "model": "YW270C1-10X", "HP": 10, "Displ_cc": 115.5, "Capacity_W": 37321, "Power_W": 9821, "COP": 3.8 },
                { "model": "YW270C1-V10X", "HP": 10, "Displ_cc": 115.5, "Capacity_W": 38300, "Power_W": 10000, "COP": 3.83 },
                { "model": "YW320C1-10X", "HP": 12, "Displ_cc": 131.6, "Capacity_W": 41660, "Power_W": 10922, "COP": 3.81 },
                { "model": "YW320C1-V10X", "HP": 12, "Displ_cc": 131.6, "Capacity_W": 42670, "Power_W": 11170, "COP": 3.82 },
                { "model": "YW340C1-10X", "HP": 13, "Displ_cc": 143.1, "Capacity_W": 48166, "Power_W": 12945, "COP": 3.72 },
                { "model": "YW340C1-V10X", "HP": 13, "Displ_cc": 143.1, "Capacity_W": 48941, "Power_W": 13069, "COP": 3.74 },
                { "model": "YW400C1-10X", "HP": 15, "Displ_cc": 167.2, "Capacity_W": 54286, "Power_W": 14286, "COP": 3.8 },
                { "model": "YW400C1-V10X", "HP": 15, "Displ_cc": 167.2, "Capacity_W": 55413, "Power_W": 14528, "COP": 3.81 }
            ]
        },
        "R22_EX": {
            "name": "R22 防爆型",
            "conditions": "名义工况: 蒸发温度5℃, 冷凝温度55℃, 吸气过热度11.1K, 过冷度8.3K [cite: 751]",
            "models": [
                { "model": "YW75A1-10X", "HP": 3, "Displ_cc": 46.6, "Capacity_W": 10200, "Power_W": 2630, "COP": 3.88 },
                { "model": "YW75A1-V10X", "HP": 3, "Displ_cc": 46.6, "Capacity_W": 11470, "Power_W": 2870, "COP": 4 },
                { "model": "YW110A1-10X", "HP": 4, "Displ_cc": 67.8, "Capacity_W": 15000, "Power_W": 3800, "COP": 3.95 },
                { "model": "YW135A1-10X", "HP": 5, "Displ_cc": 83.4, "Capacity_W": 18000, "Power_W": 4500, "COP": 4 },
                { "model": "YW160A1-10X", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 21040, "Power_W": 5260, "COP": 4 },
                { "model": "YW185A1-10X", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 24670, "Power_W": 6170, "COP": 3.99 },
                { "model": "YW185A1-V10X", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 24670, "Power_W": 6178, "COP": 4.03 },
                { "model": "YW285A1-10X", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 37875, "Power_W": 9375, "COP": 4.04 },
                { "model": "YW285A1-V10X", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 39675, "Power_W": 9750, "COP": 4.07 },
                { "model": "YW320A1-10X", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 41400, "Power_W": 10710, "COP": 3.86 },
                { "model": "YW320A1-V10X", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 43917, "Power_W": 10737, "COP": 4.09 }
            ]
        },
        "R134a_EX": {
            "name": "R134a 防爆型",
            "conditions": "名义工况 (1-13): ET: 7.2°C, CT: 54.4°C, SH: 11.1K, SC: 8.3K, EVI: ON[cite: 808]. (14): ET: 10°C, CT: 75°C, SH: 5K, SC: 10K [cite: 809]",
            "models": [
                { "model": "YW55J1-10X", "HP": 3, "Displ_cc": 46.6, "Capacity_W": 7180, "Power_W": 1689, "COP": 4.25 },
                { "model": "YW80J1-10X", "HP": 4, "Displ_cc": 67.8, "Capacity_W": 10430, "Power_W": 2437, "COP": 4.28 },
                { "model": "YW100J1-10X", "HP": 5, "Displ_cc": 83.3, "Capacity_W": 13000, "Power_W": 3023, "COP": 4.3 },
                { "model": "YW120J1-10X", "HP": 6, "Displ_cc": 98.3, "Capacity_W": 15530, "Power_W": 3612, "COP": 4.3 },
                { "model": "YW132J1-10X", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 17415, "Power_W": 4045, "COP": 4.31 },
                { "model": "YW132J1-V10X", "HP": 6.5, "Displ_cc": 108, "Capacity_W": 19157, "Power_W": 4450, "COP": 4.38 },
                { "model": "YW137J1-10X", "HP": 7, "Displ_cc": 108.9, "Capacity_W": 17861, "Power_W": 4108, "COP": 4.35 },
                { "model": "YW155J1-10X", "HP": 8, "Displ_cc": 123, "Capacity_W": 18830, "Power_W": 4400, "COP": 4.28 },
                { "model": "YW180J1-10X", "HP": 9, "Displ_cc": 145.4, "Capacity_W": 23450, "Power_W": 5450, "COP": 4.3 },
                { "model": "YW200J1-10X", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 25540, "Power_W": 5940, "COP": 4.3 },
                { "model": "YW200J1-V10X", "HP": 10, "Displ_cc": 167.2, "Capacity_W": 26758, "Power_W": 6178, "COP": 4.33 },
                { "model": "YW240J1-10X", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 29220, "Power_W": 6720, "COP": 4.35 },
                { "model": "YW240J1-V10X", "HP": 12, "Displ_cc": 189.1, "Capacity_W": 30614, "Power_W": 6989, "COP": 4.38 },
                { "model": "YW265J1-10X", "HP": 13, "Displ_cc": 210, "Capacity_W": 32471, "Power_W": 11173, "COP": 2.9 }
            ]
        }
    }
};