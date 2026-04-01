import csv
import json

def convert_csv_to_js(csv_filename, js_filename, variable_name):
    questions = []
    current_q = None

    try:
        # Sử dụng utf-8-sig để xử lý lỗi font tiếng Việt (BOM)
        with open(csv_filename, mode='r', encoding='utf-8-sig') as file:
            # Đọc dòng đầu tiên để tự động nhận diện dấu phân cách (, hoặc ;)
            first_line = file.readline()
            delimiter = ';' if ';' in first_line else ','
            
            # Đưa con trỏ đọc file quay lại từ đầu
            file.seek(0)
            
            # Đọc file với dấu phân cách đã nhận diện
            reader = csv.reader(file, delimiter=delimiter)
            
            # Bỏ qua dòng tiêu đề
            next(reader, None)

            for row in reader:
                # Nếu dòng trống hoặc không đủ cột cơ bản thì bỏ qua
                if len(row) < 4:
                    continue

                # Lấy dữ liệu từ các cột tương ứng (TT, Nội dung, Đáp án)
                tt = row[2].strip() if len(row) > 2 else ""
                noidung = row[3].strip() if len(row) > 3 else ""
                dapan = row[4].strip() if len(row) > 4 else ""

                # Bỏ qua các dòng chỉ chứa tiêu đề rỗng (VD: "Chương 1", "Nhóm câu hỏi...")
                if noidung == "" or "Nhóm câu hỏi" in noidung:
                    continue

                # Nếu cột TT (Thứ tự) có nội dung -> Đây là dòng chứa Câu hỏi
                if tt != "":
                    # Đẩy câu hỏi trước đó vào mảng
                    if current_q:
                        questions.append(current_q)
                    
                    # Khởi tạo câu hỏi mới
                    current_q = {
                        "q": noidung,
                        "options": [],
                        "ans": -1
                    }
                
                # Nếu cột TT trống nhưng cột Nội dung có chữ -> Đây là dòng chứa Đáp án
                elif tt == "" and current_q is not None:
                    current_q["options"].append(noidung)
                    
                    # Nếu cột Đáp án (cột E) có chứa ký tự (A, B, C, D) -> Đánh dấu vị trí đáp án đúng
                    if dapan != "":
                        # Mảng trong lập trình bắt đầu từ 0
                        current_q["ans"] = len(current_q["options"]) - 1

            # Đừng quên đẩy câu hỏi cuối cùng vào mảng
            if current_q:
                questions.append(current_q)

        # Chuyển đổi sang định dạng JavaScript
        js_data = json.dumps(questions, ensure_ascii=False, indent=4)
        js_content = f"// File tự động generate từ Python\nconst {variable_name} = {js_data};"

        # Ghi đè ra file .js
        with open(js_filename, mode='w', encoding='utf-8') as js_file:
            js_file.write(js_content)
        
        print(f"✅ THÀNH CÔNG: Đã quét được {len(questions)} câu hỏi lưu vào {js_filename}")

    except FileNotFoundError:
        print(f"❌ LỖI: Không tìm thấy file '{csv_filename}'. Thầy kiểm tra lại tên file nhé!")
    except Exception as e:
        print(f"❌ LỖI KHÔNG XÁC ĐỊNH: {e}")

# --- BẮT ĐẦU CHẠY THỰC THI ---
print("Đang quét dữ liệu từ file Excel CSV...")

# Xử lý Lớp Thường
convert_csv_to_js('ngan_hang_thuong.csv', 'data_thuong.js', 'questionsData')

# Xử lý Lớp CLC
convert_csv_to_js('ngan_hang_clc.csv', 'data_clc.js', 'questionsData')

print("Hoàn tất quy trình!")