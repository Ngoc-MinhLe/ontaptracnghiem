import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, onSnapshot, setDoc, increment, collection, addDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCET0_R6120tj389v5C62NhSLrBIk2CbIw",
  authDomain: "qlylaodong-dev.firebaseapp.com",
  projectId: "qlylaodong-dev",
  storageBucket: "qlylaodong-dev.firebasestorage.app",
  messagingSenderId: "789374516793",
  appId: "1:789374516793:web:29fb38ad0913f8b62e17e8",
  measurementId: "G-M2PJEBLMJF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'hp-university-quiz-system-2026';
const BASE_COUNT = 256418;

let dbSubjects = [];

function getAutoIcon(title) {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("mạng") || lowerTitle.includes("hệ thống")) return "fas fa-network-wired";
    if (lowerTitle.includes("ai") || lowerTitle.includes("trí tuệ")) return "fas fa-robot";
    if (lowerTitle.includes("dữ liệu") || lowerTitle.includes("giải thuật")) return "fas fa-sitemap";
    if (lowerTitle.includes("lập trình") || lowerTitle.includes("code")) return "fas fa-code";
    if (lowerTitle.includes("web") || lowerTitle.includes("seo")) return "fas fa-globe";
    if (lowerTitle.includes("máy tính") || lowerTitle.includes("kiến trúc")) return "fas fa-desktop";
    if (lowerTitle.includes("số")) return "fas fa-microchip";
    if (lowerTitle.includes("thương mại") || lowerTitle.includes("du lịch")) return "fas fa-briefcase";
    return "fas fa-book-open"; 
}

function renderDynamicSubjects() {
    const grid = document.getElementById('subject-grid');
    dbSubjects.forEach(sub => {
        const alreadyExists = Array.from(grid.querySelectorAll('h4')).some(h4 => h4.innerText === sub.title);
        if (!alreadyExists) {
            const card = document.createElement('a');
            card.href = sub.link;
            card.className = "subject-card bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col relative z-10";
            card.innerHTML = `
                ${sub.isHot ? '<div class="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-bl-lg">Hot</div>' : ''}
                <div class="h-28 flex items-center justify-center" style="background-color: ${sub.color}"><i class="${sub.icon} text-white text-4xl"></i></div>
                <div class="p-5 flex-grow text-center"><h4 class="text-lg font-bold text-gray-900 mb-2 leading-tight">${sub.title}</h4><p class="text-gray-500 text-xs italic">${sub.description}</p></div>
                <div class="px-5 py-3 bg-gray-50 border-t flex justify-center items-center"><span class="text-gray-600 font-semibold text-xs uppercase italic">Luyện tập</span></div>
            `;
            grid.appendChild(card);
        }
    });
    document.getElementById('subject-count-badge').innerText = `${11 + dbSubjects.length} Học phần`;
}

function renderAdminList() {
    const list = document.getElementById('added-subjects-list');
    if (dbSubjects.length === 0) {
        list.innerHTML = '<p class="text-xs text-gray-400 italic text-center py-4">Chưa có môn học nào được thêm thủ công.</p>';
        return;
    }
    list.innerHTML = dbSubjects.map(sub => `
        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded flex items-center justify-center text-white" style="background-color: ${sub.color}">
                    <i class="${sub.icon} text-xs"></i>
                </div>
                <span class="font-bold text-sm">${sub.title}</span>
            </div>
            <button onclick="deleteSubject('${sub.id}')" class="text-red-500 hover:bg-red-50 px-3 py-1 rounded text-xs font-bold transition">Xóa</button>
        </div>
    `).join('');
}

// Cần gắn các hàm onclick vào object window để có thể gọi từ file HTML khi dùng `type="module"`
window.openAdmin = () => document.getElementById('adminModal').style.display = 'block';
window.closeAdmin = () => {
    document.getElementById('adminModal').style.display = 'none';
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('admin-content').classList.add('hidden');
};
window.verifyAdmin = () => {
    if(document.getElementById('adminPin').value === "1234") {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('admin-content').classList.remove('hidden');
        renderAdminList();
    } else { alert("Mã PIN không chính xác!"); }
};

window.saveNewSubject = async () => {
    const title = document.getElementById('newTitle').value;
    const link = document.getElementById('newLink').value;
    if(!title || !link) return alert("Vui lòng nhập Tên môn và Link!");
    const data = { title, description: document.getElementById('newDesc').value || "Môn học mới", link, icon: getAutoIcon(title), color: document.getElementById('newColor').value, isHot: document.getElementById('newHot').checked, createdAt: new Date().getTime() };
    try { await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'subjects'), data); alert("Thành công!"); document.getElementById('newTitle').value=''; document.getElementById('newLink').value=''; } catch (e) { alert("Lỗi lưu!"); }
};

window.deleteSubject = async (id) => {
    if(!confirm("Xác nhận xóa môn học này?")) return;
    try { await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'subjects', id)); alert("Đã xóa!"); } catch (e) { alert("Lỗi khi xóa!"); }
};

async function init() {
    try {
        await signInAnonymously(auth);
        const counterRef = doc(db, 'artifacts', appId, 'public', 'data', 'statistics', 'counter');
        await setDoc(counterRef, { visits: increment(1) }, { merge: true });
        onSnapshot(counterRef, (snap) => {
            const val = snap.exists() ? (BASE_COUNT + snap.data().visits) : BASE_COUNT;
            document.getElementById('visit-count').innerText = val.toLocaleString('vi-VN');
        });
        const subjectsCol = collection(db, 'artifacts', appId, 'public', 'data', 'subjects');
        onSnapshot(subjectsCol, (snapshot) => {
            dbSubjects = [];
            snapshot.forEach(doc => dbSubjects.push({ id: doc.id, ...doc.data() }));
            dbSubjects.sort((a,b) => a.createdAt - b.createdAt);
            renderDynamicSubjects();
            if(!document.getElementById('admin-content').classList.contains('hidden')) renderAdminList();
        });
    } catch (err) { console.warn("Firebase Error", err); }
}
window.onload = init;