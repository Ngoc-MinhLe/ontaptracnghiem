// ==========================================
// QUẢN LÝ QUẢNG CÁO TẬP TRUNG CHO TOÀN HỆ THỐNG
// ==========================================

// 1. CHÈN MÃ GOOGLE ADSENSE (Google Tự Động)
// Khi bạn có tài khoản AdSense, chỉ cần xóa dấu /* và */ ở đoạn dưới, rồi thay mã ca-pub của bạn vào
/*
(function() {
    var adScript = document.createElement('script');
    adScript.async = true;
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9672443275074363";
    adScript.crossOrigin = "anonymous";
    document.head.appendChild(adScript);
})();
*/

// 2. CHÈN BANNER QUẢNG CÁO ADSTERRA
// Tự động chèn khối quảng cáo vào bất kỳ trang nào có thẻ <div id="ad-banner-slot">
window.addEventListener('DOMContentLoaded', () => {
    const adSlots = document.querySelectorAll('#ad-banner-slot');
    const adsterraBannerCode = `
        <!-- DÁN MÃ BANNER (ví dụ: 728x90 hoặc 468x60) CỦA ADSTERRA VÀO ĐÂY -->
    `;
    adSlots.forEach(slot => {
        slot.innerHTML = adsterraBannerCode;
    });

    // 3. MÃ ADSTERRA TỰ ĐỘNG CHÈN VÀO CUỐI TRANG
    const adsterraScript = document.createElement('script');
    adsterraScript.type = 'text/javascript';
    adsterraScript.src = "https://pl28968969.profitablecpmratenetwork.com/ae/81/99/ae8199e12c20894823b5c98b54726626.js";

    document.body.appendChild(adsterraScript);

    // 4. CHÈN LỜI KÊU GỌI ỦNG HỘ TỰ ĐỘNG (Dùng chung cho tất cả các môn)
    const quizContainer = document.getElementById('quiz-container');
    const adBannerSlot = document.getElementById('ad-banner-slot');
    
    // Chỉ chèn vào những trang có khung thi trắc nghiệm (để không đè lên trang chủ)
    if (quizContainer && adBannerSlot && !document.getElementById('donation-appeal-block')) {
        const donationBlock = document.createElement('div');
        donationBlock.id = 'donation-appeal-block';
        donationBlock.className = 'mb-8 bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center gap-6';
        donationBlock.innerHTML = `
            <div class="flex-shrink-0 mx-auto md:mx-0">
                <div class="inline-block p-1 bg-white rounded-xl shadow-md border-2 border-dashed border-blue-200">
                    <div class="bg-gray-100 w-32 h-32 flex items-center justify-center rounded-lg overflow-hidden">
                        <img src="QRdonate.jpg" alt="Mã QR Ủng hộ" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<div class=\\'p-2 text-center text-[10px] text-gray-400 font-medium\\'>Lỗi tải ảnh QR</div>'">
                    </div>
                </div>
            </div>
            <div class="text-center md:text-left flex-grow text-gray-800">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-2">
                    <i class="fas fa-heart text-blue-700"></i> ỦNG HỘ DUY TRÌ SERVER
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 italic">Đồng hành cùng hệ thống ôn tập</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-2">
                    Hệ thống vận hành phi lợi nhuận hỗ trợ sinh viên. Mọi đóng góp (mời team cốc cà phê ☕) hoặc một hành động nhỏ như <strong>tắt trình chặn quảng cáo (tắt khiên bảo vệ trên Cốc Cốc/Brave)</strong> đều sẽ giúp team có thêm kinh phí duy trì server. Trân trọng cảm ơn sự ủng hộ của các bạn! ❤️
                </p>
                <p class="text-xs font-bold text-blue-800 italic">Quét mã QR hoặc click vào quảng cáo để tiếp thêm động lực cho team phát triển nhé!</p>
            </div>
        `;
        // Chèn hộp kêu gọi vào ngay giữa quảng cáo banner và danh sách câu hỏi
        adBannerSlot.parentNode.insertBefore(donationBlock, adBannerSlot.nextSibling);
    }
});