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
    adsterraScript.type = 'text/javascript';
    adsterraScript.src = "https://pl28968969.profitablecpmratenetwork.com/ae/81/99/ae8199e12c20894823b5c98b54726626.js";
    document.body.appendChild(adsterraScript);

    // 4. PHÁT HIỆN TRÌNH CHẶN QUẢNG CÁO (ANTI-ADBLOCK)
    setTimeout(() => {
        const fakeAd = document.createElement('div');
        fakeAd.className = 'adsbox ad-placement doubleclick ad-banner';
        fakeAd.style.display = 'block';
        fakeAd.style.position = 'absolute';
        fakeAd.style.top = '-9999px';
        document.body.appendChild(fakeAd);

        setTimeout(() => {
            const isBlocked = fakeAd.offsetHeight === 0 || window.getComputedStyle(fakeAd).display === 'none';
            fakeAd.remove();
            if (isBlocked) {
                // Hiển thị hộp thoại nhỏ nhắc nhở (Toast Notification)
                const toast = document.createElement('div');
                toast.innerHTML = `<div style="position:fixed; bottom:20px; right:20px; background:#fff; border-left:4px solid #f59e0b; padding:16px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.1); z-index:9999; max-width:300px; font-family:sans-serif;">
                    <h4 style="margin:0 0 8px 0; color:#b45309; font-size:16px; font-weight:bold;">Đang chặn quảng cáo? 😢</h4>
                    <p style="margin:0 0 12px 0; font-size:13px; color:#4b5563; line-height:1.5;">Hệ thống được duy trì miễn phí nhờ một phần doanh thu quảng cáo. Bạn hãy tắt trình chặn quảng cáo (hoặc khiên bảo vệ của Cốc Cốc/Brave) cho trang web này để ủng hộ team nhé! ❤️</p>
                    <button onclick="this.parentElement.parentElement.remove()" style="background:#f3f4f6; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-size:12px; font-weight:bold; color:#374151;">Đã hiểu và Đóng</button>
                </div>`;
                document.body.appendChild(toast);
            }
        }, 200);
    }, 2000);
});