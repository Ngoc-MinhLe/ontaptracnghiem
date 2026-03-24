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

    // 3. MÃ ADSTERRA TỰ ĐỘNG CHÈN VÀO CUỐI TRANG (NGAY TRÊN THẺ </BODY>)
    const adsterraScript = document.createElement('script');
    adsterraScript.src = "https://pl28968969.profitablecpmratenetwork.com/ae/81/99/ae8199e12c20894823b5c98b54726626.js";
    document.body.appendChild(adsterraScript);
});