// ==========================================
// QUẢN LÝ QUẢNG CÁO TẬP TRUNG CHO TOÀN HỆ THỐNG
// ==========================================

// 1. CHÈN MÃ GOOGLE ADSENSE (Google Tự Động)
// Khi bạn có tài khoản AdSense, chỉ cần xóa dấu /* và */ ở đoạn dưới, rồi thay mã ca-pub của bạn vào
(function() {
    var adScript = document.createElement('script');
    adScript.async = true;
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9672443275074363";
    adScript.crossOrigin = "anonymous";
    document.head.appendChild(adScript);
})();

// 2. CHÈN BANNER QUẢNG CÁO THỦ CÔNG (Affiliate/Sponsor)
// Tự động chèn khối quảng cáo vào bất kỳ trang nào có thẻ <div id="ad-banner-slot">
window.addEventListener('DOMContentLoaded', () => {
    const adSlots = document.querySelectorAll('#ad-banner-slot');
    const bannerHTML = `
        <a href="#" class="block bg-gray-200 rounded-xl overflow-hidden border border-gray-300 relative group text-center flex flex-col items-center justify-center h-20 md:h-28 shadow-inner hover:shadow-md transition-transform hover:scale-[1.01] duration-300">
            <span class="bg-gray-700/50 text-white px-2 py-0.5 rounded text-[10px] font-bold absolute top-2 left-2 backdrop-blur-sm">Quảng cáo</span>
            <i class="fas fa-bullhorn text-gray-400 text-3xl mb-1 md:mb-2"></i>
            <p class="text-gray-500 font-medium text-sm md:text-base">Không gian dành cho Banner Quảng Cáo hoặc Đối tác tài trợ</p>
        </a>
    `;
    adSlots.forEach(slot => {
        slot.innerHTML = bannerHTML;
    });
});