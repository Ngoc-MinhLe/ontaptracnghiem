let currentQuestions = [];
let timerInterval;
let timeRemaining;
let totalQuizQuestions = 40;

function initQuiz(bank, timeMinutes, totalQuestions) {
    totalQuizQuestions = totalQuestions;
    timeRemaining = timeMinutes * 60;
    
    // Lấy ngẫu nhiên các câu hỏi
    currentQuestions = [...bank].sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
    
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    currentQuestions.forEach((item, i) => {
        const labels = ['A', 'B', 'C', 'D'];
        const block = document.createElement('div');
        block.className = 'question-block shadow-sm';
        block.id = `q-block-${i}`;
        
        let optionsHtml = '';
        item.o.forEach((opt, idx) => {
            optionsHtml += `
                <div class="option-item" id="opt-container-${i}-${labels[idx]}">
                    <label>
                        <input type="radio" name="q${i}" value="${labels[idx]}" class="mr-3 w-4 h-4">
                        <span>${labels[idx]}. ${opt}</span>
                    </label>
                </div>
            `;
        });

        block.innerHTML = `
            <p class="text-lg font-bold mb-4">Câu ${i+1}: ${item.q}</p>
            <div class="options-list space-y-1">${optionsHtml}</div>
            <div id="correct-msg-${i}" class="hidden mt-3 font-bold text-green-600">
                <i class="fas fa-check-circle mr-1"></i> Đáp án đúng: ${item.a}
            </div>
        `;
        container.appendChild(block);
    });

    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        let m = Math.floor(timeRemaining / 60);
        let s = timeRemaining % 60;
        document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
        timeRemaining--;
    }, 1000);
}

window.submitQuiz = function() {
    clearInterval(timerInterval);
    let score = 0;
    
    currentQuestions.forEach((item, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const correctMsg = document.getElementById(`correct-msg-${i}`);
        if (correctMsg) correctMsg.classList.remove('hidden');
        
        if (selected) {
            const labelContainer = document.getElementById(`opt-container-${i}-${selected.value}`);
            if (selected.value === item.a) {
                score++;
                if (labelContainer) labelContainer.classList.add('correct');
            } else {
                if (labelContainer) labelContainer.classList.add('wrong');
            }
        }
        const correctOption = document.getElementById(`opt-container-${i}-${item.a}`);
        if (correctOption) correctOption.classList.add('correct');
    });

    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('result-summary').classList.remove('hidden');
    
    const studentNameInput = document.getElementById('student-name');
    const studentClassInput = document.getElementById('student-class');
    if (studentNameInput && studentClassInput) {
        const studentName = studentNameInput.value.trim() || 'Sinh viên ẩn danh';
        const studentClass = studentClassInput.value.trim() || 'Không rõ lớp';
        document.getElementById('result-user-info').innerText = `Sinh viên: ${studentName} - Lớp: ${studentClass}`;
    }
    
    const finalScorePoint = (score / totalQuizQuestions) * 10;
    document.getElementById('final-score').innerText = `${score}/${totalQuizQuestions}`;
    
    let comment = "";
    if (finalScorePoint >= 8) comment = "Rất tốt! Bạn nắm vững kiến thức.";
    else if (finalScorePoint >= 5) comment = "Đã đạt! Hãy ôn tập thêm các câu sai.";
    else comment = "Bạn cần cố gắng nhiều hơn để vượt qua kỳ thi.";
    
    document.getElementById('score-comment').innerText = `${comment} (Điểm quy đổi: ${finalScorePoint.toFixed(2)})`;
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}