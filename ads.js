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
    // Nếu người dùng đã bấm xử lý thì không làm phiền lại trong phiên này
    if (sessionStorage.getItem('adblock_dismissed')) return;

    setTimeout(() => {
        const fakeAd = document.createElement('div');
        fakeAd.innerHTML = '&nbsp;'; // Thêm nội dung để tránh lỗi chiều cao = 0 tự nhiên
        fakeAd.className = 'adsbox ad-placement doubleclick ad-banner';
        fakeAd.style.display = 'block';
        fakeAd.style.position = 'absolute';
        fakeAd.style.top = '-9999px';
        fakeAd.style.height = '1px'; // Gán kích thước rõ ràng
        fakeAd.style.width = '1px';
        document.body.appendChild(fakeAd);

        setTimeout(() => {
            const isBlocked = fakeAd.offsetHeight === 0 || window.getComputedStyle(fakeAd).display === 'none';
            fakeAd.remove();
            if (isBlocked) {
                // Hiển thị Modal Popup ngay giữa màn hình (Tối ưu cho cả Mobile & Desktop)
                const modal = document.createElement('div');
                modal.id = 'anti-adblock-modal';
                modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:2147483647; display:flex; align-items:center; justify-content:center; padding:20px; box-sizing:border-box; backdrop-filter:blur(3px);';
                modal.innerHTML = `
                    <div style="background:#fff; padding:24px 20px; border-radius:16px; max-width:400px; width:100%; text-align:center; box-shadow:0 20px 25px -5px rgba(0,0,0,0.1); font-family:sans-serif;">
                        <div style="font-size:48px; margin-bottom:12px;">😢</div>
                        <h4 style="margin:0 0 12px 0; color:#b45309; font-size:20px; font-weight:bold;">Bạn đang chặn quảng cáo?</h4>
                        <p style="margin:0 0 20px 0; font-size:15px; color:#4b5563; line-height:1.6;">Hệ thống được duy trì miễn phí nhờ một phần doanh thu quảng cáo. Tuy nhiên, trình duyệt của bạn (hoặc Cốc Cốc) đang chặn hiển thị mất rồi.<br><br>Vui lòng <b>tắt khiên bảo vệ</b> hoặc <b>trình chặn quảng cáo</b> cho trang web này để ủng hộ team nhé! ❤️</p>
                        <button onclick="sessionStorage.setItem('adblock_dismissed', 'true'); location.reload();" style="background:#f59e0b; color:#fff; border:none; padding:12px 24px; border-radius:8px; font-size:15px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 6px -1px rgba(245,158,11,0.2); margin-bottom:12px;">Đã tắt, Tải lại trang</button>
                        <button onclick="sessionStorage.setItem('adblock_dismissed', 'true'); document.getElementById('anti-adblock-modal').remove();" style="background:transparent; color:#6b7280; border:none; font-size:13px; cursor:pointer; text-decoration:underline;">Bỏ qua lần này</button>
                    </div>
                `;
                document.body.appendChild(modal);
            }
        }, 200);
    }, 2000);
});