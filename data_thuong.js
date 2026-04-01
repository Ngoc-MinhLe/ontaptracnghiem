// File tự động generate từ Python
const questionsData = [
    {
        "q": "CPU có cache L1, L2, L3. Trong đó cache nhanh nhất là:",
        "options": [
            "L1",
            "L2",
            "L3",
            "Như nhau, chỉ khác về dung lượng"
        ],
        "ans": 0
    },
    {
        "q": "Mainboard là gì?",
        "options": [
            "Thiết bị lưu trữ",
            "Bo mạch chủ",
            "Thiết bị xuất hình",
            "Thiết bị nhập"
        ],
        "ans": 1
    },
    {
        "q": "Mainboard Micro-ATX có thể lắp vào case ATX không?",
        "options": [
            "Có",
            "Không",
            "Chỉ khi dùng adapter",
            "Chỉ khi nâng cấp BIOS"
        ],
        "ans": 0
    },
    {
        "q": "Nếu CPU không đúng socket với mainboard thì:",
        "options": [
            "Lắp được nhưng máy chạy chậm.",
            "Không lắp được CPU.",
            "Không nhận RAM.",
            "Không có vấn đề gì."
        ],
        "ans": 1
    },
    {
        "q": "Nếu mainboard hỗ trợ DDR5, RAM DDR4 sẽ:",
        "options": [
            "Chạy chậm",
            "Không lắp được",
            "Chạy bình thường",
            "Chạy nửa tốc độ"
        ],
        "ans": 1
    },
    {
        "q": "Nguồn máy tính còn gọi là gì?",
        "options": [
            "GPU",
            "PSU",
            "UPS",
            "ROM"
        ],
        "ans": 1
    },
    {
        "q": "Ổ cứng SSD lưu dữ liệu bằng công nghệ nào?",
        "options": [
            "ổ SSD sử công nghệ lưu trữ từ tính.",
            "ổ SSD sử công nghệ lưu trữ flash.",
            "ổ SSD sử công nghệ lưu trữ đĩa từ và đầu kim đọc dữ liệu",
            "ổ SSD chỉ để đọc dữ liệu. Dữ liệu được ghi vào từ lúc sản xuất."
        ],
        "ans": 1
    },
    {
        "q": "Ổ SSD SATA cần nguồn từ:",
        "options": [
            "Cáp PCI-E",
            "Cáp SATA power",
            "Cáp VGA",
            "Cáp USB"
        ],
        "ans": 1
    },
    {
        "q": "Ổ SSD SATA thường có kích thước phổ biến nào?",
        "options": [
            "3.5 inch",
            "2.5 inch",
            "5 inch",
            "1.8 inch"
        ],
        "ans": 1
    },
    {
        "q": "RAM có chức năng chính là gì?",
        "options": [
            "Lưu trữ tạm thời",
            "Lưu trữ lâu dài",
            "Xuất hình ảnh",
            "Cấp điện"
        ],
        "ans": 0
    },
    {
        "q": "RAM DDR4 thường có bao nhiêu chân?",
        "options": [
            "240",
            "288",
            "184",
            "200"
        ],
        "ans": 1
    },
    {
        "q": "Thiết bị nào giúp làm mát CPU?",
        "options": [
            "Case",
            "Heatsink/Fan",
            "RAM",
            "SSD"
        ],
        "ans": 1
    },
    {
        "q": "Tốc độ đọc/ghi dữ liệu giữu ổ cứng SSD và HDD",
        "options": [
            "Tốc độ đọc/ghi dữ liệu của ổ cứng bằng nhau.",
            "Tốc độ đọc/ghi dữ liệu của ổ cứng HDD nhanh hơn.",
            "Tốc độ đọc/ghi dữ liệu của ổ cứng SSD nhanh hơn.",
            "Tốc độ đọc/ghi dữ liệu của ổ cứng SSD chậm hơn."
        ],
        "ans": 2
    },
    {
        "q": "Card đồ họa rời được cắm vào khe nào trên mainboard?",
        "options": [
            "PCI",
            "PCIe x16",
            "SATA",
            "M.2"
        ],
        "ans": 1
    },
    {
        "q": "Chuẩn giao tiếp của ổ SSD NVMe là gì?",
        "options": [
            "SATA",
            "PCIe",
            "IDE",
            "USB"
        ],
        "ans": 1
    },
    {
        "q": "Điều kiện để RAM chạy Dual Channel",
        "options": [
            "Thiết bị phải có ít nhất 2 thanh RAM, cùng loại, cùng bus và có dung lượng giống nhau.",
            "Thiết bị chỉ cần cắm 2 thanh RAM trở lên.",
            "Thiết bị phải có ít nhất 2 thanh RAM, cùng loại, cùng bus và không cần dung lượng giống nhau.",
            "Thiết bị chỉ cần cắm ít nhất 2 thanh RAM cùng bus."
        ],
        "ans": 0
    },
    {
        "q": "Hai thanh RAM cùng loại DDR3 nhưng có bus là 1333MHz và 1600MHz thì khi cắm:",
        "options": [
            "Không chạy được",
            "Chạy ở 2666 MHz",
            "Hỏng RAM",
            "Không nhận RAM"
        ],
        "ans": 1
    },
    {
        "q": "Khi lắp NVMe cần:",
        "options": [
            "khe M.2",
            "khe PCI",
            "SATA",
            "RAM slot"
        ],
        "ans": 0
    },
    {
        "q": "Mainboard chỉ hỗ trợ RAM 2666MHz nhưng lắp RAM 3200MHz:",
        "options": [
            "RAM chạy 2666MHz",
            "RAM cháy",
            "Máy không chạy",
            "RAM chạy 3200MHz"
        ],
        "ans": 0
    },
    {
        "q": "Mainboard Micro‑ATX nhỏ hơn loại nào?",
        "options": [
            "ATX",
            "Mini‑ITX",
            "Nano‑ITX",
            "Flex‑ATX"
        ],
        "ans": 0
    },
    {
        "q": "Mainboard Mini-ITX là loại thường dùng cho:",
        "options": [
            "Máy nhỏ gọn",
            "Server lớn",
            "Workstation",
            "Gaming tower"
        ],
        "ans": 0
    },
    {
        "q": "Nếu CPU socket khác mainboard:",
        "options": [
            "không lắp được",
            "chạy chậm",
            "không chạy được",
            "RAM lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Ổ SSD nhanh hơn HDD chủ yếu vì lý do nào?",
        "options": [
            "Không có bộ nhớ",
            "Không có bộ phận cơ học",
            "Không cần điện",
            "Không cần mainboard"
        ],
        "ans": 1
    },
    {
        "q": "Ổ SSD NVMe được cắm vào khe nào?",
        "options": [
            "SATA",
            "PCIe",
            "M.2",
            "IDE"
        ],
        "ans": 2
    },
    {
        "q": "RAM bus cao hơn thường mang lại lợi ích gì?",
        "options": [
            "Tăng tốc độ truyền dữ liệu",
            "Giảm dung lượng",
            "Giảm điện áp",
            "Giảm nhiệt"
        ],
        "ans": 0
    },
    {
        "q": "SATA III có tốc độ tối đa lý thuyết bao nhiêu?",
        "options": [
            "300 MB/s",
            "600 MB/s",
            "1 GB/s",
            "6 GB/s"
        ],
        "ans": 1
    },
    {
        "q": "Socket AM4 dùng cho CPU hãng nào?",
        "options": [
            "Intel",
            "AMD",
            "Apple",
            "Qualcomm"
        ],
        "ans": 1
    },
    {
        "q": "Sử dụng 2 thanh RAM cùng loại, khác bus nhưng khi lắp đặt vào bo mạch chủ thì:",
        "options": [
            "chạy theo bus thấp hơn",
            "chạy bus cao hơn",
            "không nhận RAM",
            "chạy bus bằng trung bình của 2 RAM"
        ],
        "ans": 0
    },
    {
        "q": "Thông số Dual Channel RAM giúp:",
        "options": [
            "tăng dung lượng ổ cứng",
            "tăng số nhân CPU",
            "tăng băng thông truy cập bộ nhớ",
            "tăng dung lượng cache"
        ],
        "ans": 2
    },
    {
        "q": "Thông tin “Intel® Core™ i9-8950HK, 4.80 GHz, 12 MB Intel® Smart Cache” mô tả:",
        "options": [
            "Bộ nhớ cache L1 là 12 MB",
            "Bộ nhớ cache L2 là 12 MB",
            "Bộ nhớ cache L3 là 12 MB",
            "Bộ nhớ cache L1+L2+L3 là 12 MB"
        ],
        "ans": 2
    },
    {
        "q": "Thông tin “Intel® Core™ i9-8950HK, 4.80 GHz, 12 MB Intel® Smart Cache” mô tả:",
        "options": [
            "thế hệ thứ 8",
            "thế hệ thứ 9",
            "thế hệ thứ 12",
            "CPU có 9 nhân"
        ],
        "ans": 0
    },
    {
        "q": "GPU rời cần cấp thêm nguồn từ đâu?",
        "options": [
            "PSU qua cáp PCIe",
            "RAM slot",
            "SATA cable",
            "USB port"
        ],
        "ans": 0
    },
    {
        "q": "Khi lắp RAM sai khe trên mainboard hỗ trợ dual channel thì điều gì xảy ra?",
        "options": [
            "Không chạy dual channel",
            "Không lên nguồn",
            "Hỏng RAM",
            "Cháy main"
        ],
        "ans": 0
    },
    {
        "q": "Lắp CPU Intel Gen 12 cần loại socket nào?",
        "options": [
            "LGA1151",
            "LGA1200",
            "LGA1700",
            "AM4"
        ],
        "ans": 2
    },
    {
        "q": "Máy tính bật nguồn nhưng tắt ngay sau vài giây, nguyên nhân có thể là:",
        "options": [
            "Nguồn không đủ công suất",
            "Lỗi ổ cứng hoặc đầy dữ liệu",
            "RAM yếu",
            "Cổng USB hỏng"
        ],
        "ans": 0
    },
    {
        "q": "Ổ HDD 7200RPM nhanh hơn 5400RPM vì lý do gì?",
        "options": [
            "Đĩa quay nhanh hơn",
            "Dung lượng lớn hơn",
            "Có RAM",
            "Có GPU",
            "Chương 2"
        ],
        "ans": 0
    },
    {
        "q": "CPU có Base Clock 2.8 GHz, Turbo Boost 4.0 GHz nghĩa là:",
        "options": [
            "CPU có thể tự động tăng xung lên 4.0 GHz khi cần",
            "CPU luôn chạy 4.0 GHz",
            "CPU không chạy dưới 4 GHz",
            "CPU chỉ chạy 2.8 GHz"
        ],
        "ans": 0
    },
    {
        "q": "CPU được lắp vào đâu trên mainboard?",
        "options": [
            "PCIe slot",
            "RAM slot",
            "CPU socket",
            "SATA port"
        ],
        "ans": 2
    },
    {
        "q": "Khe PCIe x16 thường dùng để lắp thiết bị nào?",
        "options": [
            "RAM",
            "GPU",
            "SSD",
            "CPU"
        ],
        "ans": 1
    },
    {
        "q": "Thông số Socket CPU dùng để:",
        "options": [
            "xác định loại bo mạch chủ tương thích",
            "xác định loại RAM",
            "xác định dung lượng ổ cứng",
            "xác định card màn hình"
        ],
        "ans": 0
    },
    {
        "q": "Khe M.2 trên mainboard thường dùng để lắp linh kiện nào?",
        "options": [
            "RAM",
            "SSD NVMe",
            "GPU",
            "CPU"
        ],
        "ans": 1
    },
    {
        "q": "Lắp SSD NVMe vào khe SATA:",
        "options": [
            "Không lắp được",
            "Chạy chậm",
            "Chạy bình thường",
            "Không nhận RAM"
        ],
        "ans": 0
    },
    {
        "q": "RAM DDR4 không thể lắp vào khe DDR5 vì lý do chính nào?",
        "options": [
            "Khác dung lượng",
            "Khác vị trí rãnh",
            "Khác hãng",
            "Khác màu"
        ],
        "ans": 1
    },
    {
        "q": "CPU quá nhiệt thường do nguyên nhân nào?",
        "options": [
            "Thiếu keo tản nhiệt",
            "Thiếu RAM",
            "Ổ cứng chậm",
            "Thiếu chuột"
        ],
        "ans": 0
    },
    {
        "q": "Lắp SSD NVMe nhưng BIOS không nhận. Nguyên nhân có thể là gì?",
        "options": [
            "Main không hỗ trợ NVMe",
            "RAM lỗi",
            "GPU yếu",
            "Màn hình hỏng"
        ],
        "ans": 0
    },
    {
        "q": "Máy bật nhưng không lên hình, nguyên nhân phổ biến nhất khi lắp ráp?",
        "options": [
            "RAM lỏng",
            "Chuột lỗi",
            "Bàn phím lỗi",
            "Loa lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Nếu PSU công suất quá thấp có thể gây ra hiện tượng gì?",
        "options": [
            "Máy tắt đột ngột",
            "RAM tăng dung lượng",
            "SSD nhanh hơn",
            "GPU mạnh hơn",
            "Chương 3 & 4"
        ],
        "ans": 0
    },
    {
        "q": "Hệ điều hành Windows báo lỗi “Low Disk Space”. Điều này nghĩa là:",
        "options": [
            "Ổ cứng gần đầy",
            "Không nhận ổ cứng",
            "Lỗi ổ cứng",
            "CPU gần đầy"
        ],
        "ans": 0
    },
    {
        "q": "Hệ điều hành Windows báo lỗi “Windows cannot connect to this network”. Nguyên nhân có thể là:",
        "options": [
            "Giao tiếp mạng lỗi",
            "Quá nhiệt CPU hoặc lỗi phần cứng",
            "RAM gần đầy",
            "Không có quyền Administrator"
        ],
        "ans": 0
    },
    {
        "q": "Khi cài phần mềm Office xuất hiện thông báo product key required.",
        "options": [
            "Đã có bản quyền",
            "Không đúng key bản quyền",
            "Cần kích hoạt bản quyền",
            "Office bị lỗi"
        ],
        "ans": 2
    },
    {
        "q": "Khi cài phần mềm xuất hiện thông báo missing DLL.\nNguyên nhân:",
        "options": [
            "Chưa có bản quyền",
            "Chưa cài driver",
            "Thiếu thư viện hệ thống",
            "Thiếu driver"
        ],
        "ans": 2
    },
    {
        "q": "Máy tính báo “Disk 100% usage” trong Task Manager. Nguyên nhân có thể là:",
        "options": [
            "RAM quá lớn",
            "Driver USB chưa cài hoặc bị lỗi",
            "Ổ cứng hoạt động quá tải",
            "Driver mạng lỗi"
        ],
        "ans": 2
    },
    {
        "q": "Nếu hệ điều hành Windows lỗi nhưng có System Image, cần:",
        "options": [
            "Cài lại hệ điều hành",
            "Backup system image",
            "restore system image",
            "Format ổ cứng và cài Windows mới"
        ],
        "ans": 2
    },
    {
        "q": "Nếu hệ điều hành Windows lỗi, phương pháp phục hồi nhanh nhất là:",
        "options": [
            "Restore từng file",
            "Restore System Image",
            "Reinstall Windows",
            "Format ổ cứng"
        ],
        "ans": 1
    },
    {
        "q": "Phần mềm nào thường dùng để backup hệ điều hành Windows?",
        "options": [
            "Disk Cleanup",
            "Acronis True Image",
            "Device Manager",
            "Task Manager"
        ],
        "ans": 1
    },
    {
        "q": "Sau khi cài driver mới, Windows bị màn hình xanh. Giải pháp tốt nhất:",
        "options": [
            "Thay SSD",
            "Rollback driver",
            "Format ổ cứng",
            "Cài Windows mới"
        ],
        "ans": 1
    },
    {
        "q": "Thiết bị lưu trữ nào phù hợp nhất để backup dài hạn?",
        "options": [
            "USB",
            "RAM",
            "HDD",
            "Cache"
        ],
        "ans": 2
    },
    {
        "q": "Trong Hệ điều hành Windows, công cụ nào dùng để tạo bản sao toàn bộ hệ thống?",
        "options": [
            "Disk Cleanup",
            "System Image Backup",
            "Device Manager",
            "Task Manager"
        ],
        "ans": 1
    },
    {
        "q": "Hệ điều hành Windows hiển thị thông báo “Access Denied” khi cài phần mềm. Nguyên nhân:",
        "options": [
            "Thông báo RAM đầy",
            "Không có quyền Administrator",
            "Sai key bản quyền",
            "Thông báo ổ cứng đầy"
        ],
        "ans": 1
    },
    {
        "q": "Máy tính hiển thị lỗi “Operating System Not Found”. Nguyên nhân:",
        "options": [
            "Không có quyền Administrator",
            "Ổ cứng không có hệ điều hành",
            "Windows chưa kích hoạt",
            "Sửa lỗi hệ thống hoặc driver"
        ],
        "ans": 1
    },
    {
        "q": "Máy tính khởi động nhưng dừng ở màn hình “Boot Device Not Found”. Nguyên nhân phổ biến là:",
        "options": [
            "Windows chưa kích hoạt",
            "BIOS không nhận ổ cứng hoặc sai thứ tự boot",
            "Sai key bản quyền",
            "Thiếu driver chipset"
        ],
        "ans": 1
    },
    {
        "q": "Chế độ UEFI khác BIOS Legacy ở điểm nào quan trọng nhất?",
        "options": [
            "Hỗ trợ ổ cứng dung lượng nhỏ hơn",
            "Hỗ trợ GPT và ổ > 2TB",
            "Không cần bootloader",
            "Không hỗ trợ hệ điều hành"
        ],
        "ans": 1
    },
    {
        "q": "Công cụ phổ biến để tạo USB boot Windows là:",
        "options": [
            "LDPlayer",
            "Excel",
            "Rufus",
            "BlueStacks"
        ],
        "ans": 2
    },
    {
        "q": "Để cài Windows theo chuẩn UEFI, ổ cứng phải sử dụng:",
        "options": [
            "MBR",
            "NTFS",
            "FAT16",
            "GPT"
        ],
        "ans": 3
    },
    {
        "q": "Để ghost lại hệ điều hành từ file .gho, chọn:",
        "options": [
            "Disk to Image",
            "Partition to Image",
            "Image to Partition",
            "Format Disk"
        ],
        "ans": 2
    },
    {
        "q": "Định dạng USB phổ biến để tạo USB boot Windows là:",
        "options": [
            "GPT",
            "FAT32",
            "FAT16",
            "exFAT"
        ],
        "ans": 1
    },
    {
        "q": "File sao lưu của Acronis True Image có định dạng:",
        "options": [
            ".iso",
            ".gho",
            ".tib",
            ".img"
        ],
        "ans": 2
    },
    {
        "q": "Khi cài Windows từ USB mà không boot được, cần kiểm tra:",
        "options": [
            "Boot Priority",
            "Ổ cứng",
            "RAM",
            "VGA"
        ],
        "ans": 0
    },
    {
        "q": "Nếu BIOS để chế độ IDE thay vì AHCI, hậu quả có thể là:",
        "options": [
            "RAM chạy chậm",
            "SSD chạy chậm",
            "CPU chạy chậm",
            "VGA lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Nếu cài Windows trên ổ MBR nhưng BIOS đang ở UEFI, sẽ xảy ra:",
        "options": [
            "Cài bình thường",
            "Báo lỗi không cài được",
            "Máy chạy chậm",
            "Không nhận RAM"
        ],
        "ans": 1
    },
    {
        "q": "Nếu ổ cứng đang ở chuẩn MBR, muốn chuyển sang UEFI cần:",
        "options": [
            "Chuyển sang GPT",
            "Format ổ cứng",
            "Cài lại BIOS",
            "Nâng cấp RAM"
        ],
        "ans": 0
    },
    {
        "q": "Nếu pin CMOS hết, máy sẽ gặp hiện tượng:",
        "options": [
            "Không nhận VGA",
            "Mất dữ liệu ổ cứng",
            "Không nhận RAM",
            "Mất thời gian hệ thống"
        ],
        "ans": 3
    },
    {
        "q": "Phần mềm dùng để tạo file .TIB là:",
        "options": [
            "Norton Ghost",
            "Rufus",
            "Acronis True Image",
            "WinRAR"
        ],
        "ans": 2
    },
    {
        "q": "Phân vùng hệ thống (System Partition) trong GPT thường có định dạng:",
        "options": [
            "FAT32",
            "exFAT",
            "NTFS",
            "RAW"
        ],
        "ans": 2
    },
    {
        "q": "Trong Norton Ghost, để sao lưu toàn bộ ổ đĩa, chọn:",
        "options": [
            "Partition to Image",
            "Image to Disk",
            "Disk to Partition",
            "Disk to Image"
        ],
        "ans": 3
    },
    {
        "q": "Trong quá trình tạo USB boot, thao tác “Start” trong Rufus có nghĩa là:",
        "options": [
            "Bắt đầu xóa Windows",
            "Bắt đầu xóa dữ liệu ổ cứng",
            "Bắt đầu ghi file ISO vào USB",
            "Tăng tốc USB",
            "Chương 5"
        ],
        "ans": 2
    },
    {
        "q": "Để cài đặt phần mềm cần quyền:",
        "options": [
            "User",
            "Admin",
            "Guest",
            "Network"
        ],
        "ans": 1
    },
    {
        "q": "Hiện tượng gì nếu bật máy tính không cắm RAM ?",
        "options": [
            "Máy không boot",
            "Máy chạy chậm",
            "Máy không khởi động được",
            "Máy không lên hình"
        ],
        "ans": 0
    },
    {
        "q": "Khe cắm RAM trên mainboard được gọi là gì?",
        "options": [
            "PCIe slot",
            "DIMM slot",
            "SATA port",
            "CPU socket"
        ],
        "ans": 1
    },
    {
        "q": "Khi bật máy, BIOS phát ra 1 tiếng bíp ngắn, điều này thường có nghĩa là:",
        "options": [
            "Lỗi ổ cứng",
            "Lỗi RAM",
            "Hệ thống khởi động bình thường",
            "BIOS chưa update"
        ],
        "ans": 2
    },
    {
        "q": "Khi lắp RAM có tốc độ bus cao hơn mainboard hỗ trợ thì",
        "options": [
            "RAM chạy với tốc độ bus mà mainboard hỗ trợ.",
            "RAM chạy với tốc độ bus tối da của nó.",
            "RAM hỏng",
            "Main hỏng"
        ],
        "ans": 0
    },
    {
        "q": "Máy bật nguồn nhưng không lên hình, nguyên nhân phổ biến nhất là:",
        "options": [
            "RAM lỏng",
            "HDD hỏng",
            "Chuột lỗi",
            "SSD lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy bật nhưng không nhận ổ cứng, nguyên nhân có thể là:",
        "options": [
            "SATA chưa cắm",
            "GPU lỗi",
            "RAM lỗi",
            "CPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy bật nhưng quạt quay mạnh, không lên hình:",
        "options": [
            "RAM lỗi",
            "SSD lỗi",
            "CPU lỗi",
            "PSU chưa cấp điện"
        ],
        "ans": 0
    },
    {
        "q": "Máy bật nhưng tự khởi động lại liên tục, nguyên nhân có thể:",
        "options": [
            "PSU yếu",
            "Chuột lỗi",
            "HDD lỗi",
            "GPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy khởi động nhưng không nhận SSD NVM-E, nguyên nhân có thể:",
        "options": [
            "Thiếu RAM",
            "Lắp sai khe M.2",
            "CPU quá nóng",
            "Main hỏng"
        ],
        "ans": 1
    },
    {
        "q": "Máy không khởi động hệ điều hành Windows sau khi lắp SSD mới.\nNguyên nhân là gì?",
        "options": [
            "Chưa cài hệ điều hành",
            "Thiếu RAM",
            "GPU lỗi",
            "CPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bấm nút nguồn nhưng không có tín hiệu gì (quạt không quay). Nguyên nhân có thể là:",
        "options": [
            "RAM lỗi",
            "PSU chưa cấp điện",
            "GPU lỗi",
            "SSD hỏng"
        ],
        "ans": 1
    },
    {
        "q": "Nếu backup được lưu trên cùng ổ cứng với dữ liệu gốc, rủi ro chính là:",
        "options": [
            "Tốc độ chậm",
            "Mất dữ liệu khi ổ cứng hỏng",
            "Ổ cứng lỗi",
            "Không phục hồi lại được"
        ],
        "ans": 1
    },
    {
        "q": "Nếu dây SATA tiếp xúc không tốt thì:",
        "options": [
            "HDD không nhận",
            "RAM lỗi",
            "Máy không lên hình",
            "Máy tính không khởi động"
        ],
        "ans": 0
    },
    {
        "q": "Nếu mainboard không hỗ trợ NVMe:",
        "options": [
            "Không nhận ổ",
            "Không nhận RAM",
            "Không nhận GPU",
            "SSD cháy"
        ],
        "ans": 0
    },
    {
        "q": "Nếu thiếu bộ phận tản nhiệt cho CPU thì?",
        "options": [
            "Máy chạy bình thường",
            "CPU quá nhiệt",
            "RAM hỏng",
            "SSD hỏng"
        ],
        "ans": 1
    },
    {
        "q": "Sau khi lắp CPU nhưng máy tự tắt sau vài giây, nguyên nhân có thể là:",
        "options": [
            "Không cắm SSD",
            "CPU quá nóng",
            "Chuột lỗi",
            "Thiếu RAM"
        ],
        "ans": 1
    },
    {
        "q": "BIOS không nhận SSD NVMe.\nNguyên nhân có thể:",
        "options": [
            "mainboard không hỗ trợ NVMe",
            "CPU lỗi",
            "quên cắm dây HDMI vào GPU",
            "chưa cắm dây CPU fan"
        ],
        "ans": 0
    },
    {
        "q": "Khi bật máy tính lên bíp liên tục. Nguyên nhân thường là:",
        "options": [
            "RAM lỗi",
            "SSD lỗi",
            "HDD lỗi",
            "GPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy bấm nút nguồn nhưng không có tín hiệu gì, quạt không quay.\nNguyên nhân có thể là:",
        "options": [
            "RAM hỏng",
            "PSU chưa cấp điện",
            "SSD lỗi",
            "GPU lỗi"
        ],
        "ans": 1
    },
    {
        "q": "Máy chạy chậm dù CPU mạnh, nguyên nhân có thể:",
        "options": [
            "GPU mạnh",
            "RAM lớn",
            "PSU mạnh",
            "HDD thay vì SSD"
        ],
        "ans": 3
    },
    {
        "q": "Máy chạy rất chậm dù CPU mạnh, nguyên nhân có thể:",
        "options": [
            "Đang dùng HDD",
            "GPU yếu",
            "RAM lỗi",
            "PSU mạnh"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bật lên tự tắt sau 5 giây. Nguyên nhân có thể:",
        "options": [
            "CPU quá nhiệt",
            "SSD lỗi",
            "RAM lớn",
            "GPU yếu"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bật nguồn, quạt quay nhưng không lên hình. Nguyên nhân phổ biến nhất:",
        "options": [
            "RAM lỏng",
            "SSD lỗi",
            "HDD lỗi",
            "PSU chưa cấp điện"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bật nhưng BIOS không nhận CPU. Nguyên nhân có thể:",
        "options": [
            "BIOS chưa update",
            "SSD lỗi",
            "RAM lỗi",
            "Dây power case cắm sai"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bật nhưng quạt CPU không quay. Nguyên nhân có thể là:",
        "options": [
            "Chưa cắm dây CPU fan",
            "Dây power case cắm sai",
            "PSU không cấp điện",
            "RAM lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bị treo tạm thời khi mở nhiều ứng dụng. Nguyên nhân có thể?",
        "options": [
            "Thiếu RAM",
            "SSD lỗi",
            "GPU lỗi",
            "PSU yếu"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính boot nhưng không vào hệ điều hành Windows, lỗi là?",
        "options": [
            "SSD chưa cài hệ điều hành",
            "GPU lỗi",
            "RAM lỗi",
            "RAM không tương thích"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính boot vào BIOS liên tục. Nguyên nhân có thể là?",
        "options": [
            "BIOS chưa update",
            "Quên cắm dây HDMI vào GPU",
            "Không có ổ boot",
            "CPU lỗi"
        ],
        "ans": 2
    },
    {
        "q": "Máy tính không lưu được thời gian BIOS sau khi tắt máy, nguyên nhân thường là:",
        "options": [
            "Lỗi ổ cứng hoặc đầy dữ liệu",
            "Pin CMOS hết",
            "Lỗi driver",
            "Nguồn không đủ công suất"
        ],
        "ans": 1
    },
    {
        "q": "Máy tính treo hoặc tắt khi sử dụng phần mềm xử lý đồ hoạ.\nNguyên nhân:",
        "options": [
            "RAM yếu",
            "SSD nhỏ",
            "PSU yếu",
            "Dùng HDD"
        ],
        "ans": 2
    },
    {
        "q": "Nếu CPU quá nóng, nguyên nhân thường là?",
        "options": [
            "Thiếu keo tản nhiệt",
            "RAM lỗi",
            "SSD lỗi",
            "GPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Nếu CPU quá nóng, thiết bị nào cần kiểm tra?",
        "options": [
            "Quạt CPU",
            "RAM",
            "VGA",
            "Nguồn"
        ],
        "ans": 0
    },
    {
        "q": "Nếu máy quá nóng khi chạy nhiều ứng dụng:",
        "options": [
            "tản nhiệt kém",
            "RAM nhỏ",
            "SSD nhỏ",
            "PSU mạnh"
        ],
        "ans": 0
    },
    {
        "q": "Phần mềm ứng dụng chạy chậm, nguyên nhân có thể là:",
        "options": [
            "RAM quá nhiều",
            "SSD lớn",
            "CPU yếu",
            "Chưa tạo phân vùng"
        ],
        "ans": 2
    },
    {
        "q": "RAM bus 3200 MHz lắp vào main hỗ trợ 2666 MHz. Ram sẽ nhận:",
        "options": [
            "2666 MHz",
            "3200 MHz",
            "(2666 + 3200) MHz",
            "(2666 + 3200)/2 MHz"
        ],
        "ans": 0
    },
    {
        "q": "SSD SATA lắp vào nhưng không xuất hiện ổ đĩa trong hệ điều hành Windows. Nguyên nhân:",
        "options": [
            "CPU lỗi",
            "chưa tạo phân vùng",
            "mainboard không hỗ trợ NVMe",
            "BIOS chưa update"
        ],
        "ans": 1
    },
    {
        "q": "USB không hoạt động sau khi lắp main mới:",
        "options": [
            "Thiếu driver chipset",
            "RAM lỗi",
            "SSD lỗi",
            "CPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Windows không nhận chính xác thiết bị GPU.\nNguyên nhân:",
        "options": [
            "Chưa cài driver",
            "RAM lỗi",
            "SSD lỗi",
            "CPU lỗi"
        ],
        "ans": 0
    },
    {
        "q": "Máy phát 1 tiếng bíp dài + 2 tiếng bíp ngắn, thường báo lỗi:",
        "options": [
            "Lỗi ổ cứng",
            "Lỗi RAM",
            "Lỗi VGA",
            "Lỗi nguồn"
        ],
        "ans": 2
    },
    {
        "q": "Máy tính bật nguồn nhưng không nghe tiếng bíp POST, nguyên nhân có thể là:",
        "options": [
            "Không có Loa mainboard",
            "RAM hỏng",
            "Không có ổ cứng",
            "Không có VGA"
        ],
        "ans": 0
    },
    {
        "q": "Máy tính bật nguồn nhưng tự khởi động lại liên tục, nguyên nhân phần cứng có thể là:",
        "options": [
            "Lỗi ổ cứng hoặc đầy dữ liệu",
            "RAM yếu",
            "Lỗi VGA",
            "Nguồn yếu hoặc không ổn định"
        ],
        "ans": 3
    },
    {
        "q": "Máy tính phát ra \"tiếng bíp dài liên tục khi khởi động\", thường là lỗi gì?",
        "options": [
            "Lỗi ổ cứng",
            "Lỗi RAM",
            "Lỗi VGA",
            "Lỗi nguồn"
        ],
        "ans": 1
    },
    {
        "q": "Máy Windows khởi động vào Safe Mode. Điều này thường dùng để:",
        "options": [
            "Nguồn PSU không ổn định",
            "Sửa lỗi hệ thống hoặc driver",
            "kiểm tra key bản quyền",
            "Sửa lỗi ổ cứng đầy"
        ],
        "ans": 1
    }
];