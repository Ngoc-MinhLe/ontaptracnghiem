import json
import re

def convert_table_txt_to_js(txt_filename, js_filename, variable_name):
    questions = []
    
    try:
        # Đọc file, loại bỏ các dòng trống hoàn toàn để dễ xử lý
        with open(txt_filename, 'r', encoding='utf-8-sig') as f:
            lines = [line.strip() for line in f.readlines() if line.strip()]
    except Exception as e:
        print(f"❌ Lỗi đọc file: {e}")
        return

    current_q = None
    
    for i in range(len(lines)):
        line = lines[i]
        
        # 1. Nếu dòng chỉ là MỘT CON SỐ (VD: "1", "2", "130") -> Bắt đầu câu hỏi mới
        if line.isdigit():
            # Lưu câu trước đó nếu đã gom đủ đáp án
            if current_q and len(current_q["options"]) >= 2:
                questions.append(current_q)
            
            current_q = {
                "q": "",
                "options": [],
                "ans": -1
            }
            
            # Dòng ngay bên dưới con số CHẮC CHẮN là Nội dung câu hỏi
            if i + 1 < len(lines):
                current_q["q"] = lines[i+1]
            
            # Dòng bên dưới nữa CHẮC CHẮN là Đáp án đúng (A, B, C hoặc D)
            if i + 2 < len(lines) and lines[i+2].upper() in ['A', 'B', 'C', 'D']:
                ans_char = lines[i+2].upper()
                current_q["ans"] = ord(ans_char) - 65 # Đổi A->0, B->1...
                
        # 2. Bắt các dòng bắt đầu bằng A., B., C., D. (Bỏ qua mấy dòng điểm 0,25)
        elif re.match(r'^[A-D][\.\:\-\)]', line, re.IGNORECASE):
            if current_q is not None:
                opt_text = re.sub(r'^[A-D][\.\:\-\)]\s*', '', line, flags=re.IGNORECASE).strip()
                current_q["options"].append(opt_text)

    # Lưu câu hỏi cuối cùng của file
    if current_q and len(current_q["options"]) >= 2:
        questions.append(current_q)

    # Xuất ra định dạng JS chuẩn
    js_data = json.dumps(questions, ensure_ascii=False, indent=4)
    js_content = f"// Dữ liệu SEO WEB - {len(questions)} câu\nconst {variable_name} = {js_data};"

    with open(js_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"✅ THÀNH CÔNG RỰC RỠ THẬT: Đã quét chuẩn xác {len(questions)} câu hỏi!")

# --- THỰC THI ---
print("Đang đọc cấu trúc bảng từ file TXT...")
convert_table_txt_to_js('Ngân hàng câu hỏi SEO WEB_ELC704 nộp.txt', 'data_seo_web.js', 'questionsData')