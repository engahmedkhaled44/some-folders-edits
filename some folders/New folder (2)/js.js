document.addEventListener("DOMContentLoaded", function () {
    // إزالة النص البديل (alt) من صورة الشعار
    var imgElement = document.querySelector('.navbar-brand img');
    if (imgElement) {
      imgElement.removeAttribute('alt');
    }
  
    // تغيير نصوص جهات الاتصال
    setTimeout(() => {
      const whats = document.querySelector('.s-contacts-list-vertical > div:nth-of-type(1) a > span:nth-of-type(2)');
      if (whats) whats.textContent = "واتساب";
  
      const mobile = document.querySelector('.s-contacts-list-vertical > div:nth-of-type(2) a > span:nth-of-type(2)');
      if (mobile) mobile.textContent = "جوال";
  
      const email = document.querySelector('.s-contacts-list-vertical > div:nth-of-type(3) a > span:nth-of-type(2)');
      if (email) email.textContent = "ايميل";
  
      // تحسين أنماط جهات الاتصال
      const contactsList = document.querySelector('.s-contacts-list-vertical');
      if (contactsList) {
        contactsList.style.flexDirection = 'row';
        contactsList.style.justifyContent = 'center';
        contactsList.style.gap = '20px';
        contactsList.style.alignItems = 'center';
      }
  
      const contactSlot = document.querySelector('#contact-slot');
      if (contactSlot) {
        contactSlot.style.backgroundColor = 'transparent';
        contactSlot.style.padding = '20px';
        contactSlot.style.borderRadius = '.375rem';
        contactSlot.style.display = 'flex';
        contactSlot.style.justifyContent = 'center';
        contactSlot.style.alignItems = 'center';
      }
  
      const contactItems = document.querySelectorAll('.s-contacts-item');
      contactItems.forEach(item => {
        item.style.display = 'flex';
        item.style.flexDirection = 'column';
        item.style.alignItems = 'center';
        item.style.gap = '10px';
      });
  
      const contactIcons = document.querySelectorAll('.s-contacts-icon');
      contactIcons.forEach(icon => {
        icon.style.marginRight = 'auto';
        icon.style.marginLeft = 'auto';
        icon.style.border = 'none';
        icon.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        icon.style.transform = 'perspective(500px) rotateY(10deg)';
        icon.style.transition = 'transform 0.3s, box-shadow 0.3s';
        icon.style.width = '50px';
        icon.style.height = '50px';
        icon.style.borderRadius = '50%';
        icon.style.backgroundColor = '#EEEEEE';
      });
  
      contactIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
          icon.style.transform = 'perspective(500px) rotateY(20deg)';
          icon.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });
  
        icon.addEventListener('mouseout', () => {
          icon.style.transform = 'perspective(500px) rotateY(10deg)';
          icon.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
      });
    }, 1000);
  
    // إصلاح صور طرق الدفع
    const paymentImages = document.querySelectorAll('.s-payments-list img.lazy');
    const fallbackImages = [
      "https://i.postimg.cc/m2n1HWj3/Mada-Logo-svg.png", // Mada
      "https://i.postimg.cc/Dy4yRJQs/Visa-Logo-2006.png", // Visa
      "https://i.postimg.cc/52q1MwXH/apple-pay-og-twitter.jpg", // Apple Pay
      "https://saudipedia.com/saudipedia/uploads/images/2023/12/14/84660.jpg", // STC Pay
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/640px-Google_Pay_Logo.svg.png", // Google Pay
      "https://example.com/path/to/cod-image.png" // COD (رابط بديل)
    ];
  
    paymentImages.forEach((img, index) => {
      if (img.src === "undefined" || img.classList.contains('error')) {
        img.src = fallbackImages[index] || fallbackImages[0];
        img.classList.remove('error');
        img.setAttribute('data-ll-status', 'loaded');
      }
    });
  
    const invalidImages = document.querySelectorAll('.s-payments-list img[src="undefined"]');
    invalidImages.forEach(img => img.remove());
  });
  
  // إضافة زر الوضع الليلي
  const parentDiv = document.querySelector('.flex.items-center.justify-end');
  if (parentDiv) {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
    darkModeToggle.style.cssText = `
        cursor: pointer;
        font-size: 23px;
        border: none;
        background: transparent;
        border: 1px solid white;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        margin-left: 12px;
    `;
    darkModeToggle.innerHTML = '🌙';
    parentDiv.prepend(darkModeToggle);
  
    (function () {
      const body = document.body;
      const currentMode = localStorage.getItem('theme') || 'light';
      if (currentMode === 'dark') {
        applyDarkMode();
      } else {
        applyLightMode();
      }
  
      darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
          applyLightMode();
          localStorage.setItem('theme', 'light');
        } else {
          applyDarkMode();
          localStorage.setItem('theme', 'dark');
        }
      });
  
      function applyDarkMode() {
        body.classList.add('dark');
        darkModeToggle.innerHTML = '🌞';
      }
  
      function applyLightMode() {
        body.classList.remove('dark');
        darkModeToggle.innerHTML = '🌙';
      }
    })();
  }
  
  // إضافة أيقونة التمرير للأعلى
  const scrollIcon = document.createElement("div");
  scrollIcon.id = "scroll-icon";
  scrollIcon.style.position = "fixed";
  scrollIcon.style.bottom = "20px";
  scrollIcon.style.right = "20px";
  scrollIcon.style.width = "50px";
  scrollIcon.style.height = "50px";
  scrollIcon.style.display = "none";
  scrollIcon.style.alignItems = "center";
  scrollIcon.style.justifyContent = "center";
  scrollIcon.style.cursor = "pointer";
  scrollIcon.style.zIndex = "1000";
  
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "progress-circle");
  svg.setAttribute("viewBox", "0 0 36 36");
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.transform = "rotate(-90deg)";
  
  const circleBg = document.createElementNS("http://www.w3.org/2000/svg", "path");
  circleBg.setAttribute("class", "circle-bg");
  circleBg.setAttribute("d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831");
  circleBg.setAttribute("fill", "none");
  circleBg.setAttribute("stroke", "#f3f3f3");
  circleBg.setAttribute("stroke-width", "3.8");
  
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "path");
  circle.setAttribute("class", "circle");
  circle.setAttribute("d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831");
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "#4caf50");
  circle.setAttribute("stroke-width", "3.8");
  circle.setAttribute("stroke-linecap", "round");
  circle.style.transition = "stroke-dasharray 0.3s ease";
  
  svg.appendChild(circleBg);
  svg.appendChild(circle);
  
  const arrow = document.createElement("div");
  arrow.textContent = "↑";
  arrow.style.position = "absolute";
  arrow.style.fontSize = "22px";
  arrow.style.fontWeight = "bold";
  arrow.style.color = "#4caf50";
  arrow.style.pointerEvents = "none";
  
  scrollIcon.appendChild(svg);
  scrollIcon.appendChild(arrow);
  document.body.appendChild(scrollIcon);
  
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    circle.style.strokeDasharray = `${scrollPercentage}, 100`;
    if (scrollTop > 300) {
      scrollIcon.style.display = "flex";
    } else {
      scrollIcon.style.display = "none";
    }
  });
  
  scrollIcon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // حفظ واستعادة موضع التمرير
  window.addEventListener('beforeunload', function () {
    const currentPage = window.location.pathname;
    localStorage.setItem(`scrollPosition-${currentPage}`, window.scrollY);
  });
  
  window.addEventListener('load', function () {
    const currentPage = window.location.pathname;
    const scrollPosition = localStorage.getItem(`scrollPosition-${currentPage}`);
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  });
  
  // إضافة واتساب عائم
  const whatsappFloat = document.createElement('div');
  whatsappFloat.className = 'whatsapp-float';
  
  const whatsappPopup = document.createElement('div');
  whatsappPopup.className = 'whatsapp-popup';
  whatsappPopup.style.display = 'none';
  
  const popupContent = `
    <div class="popup-header">
      <div class="avatar-container">
        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="Avatar" class="avatar-img">
        <span class="support-text">الدعم الفني</span>
      </div>
      <button class="close-popup">×</button>
    </div>
    <div class="chat-body" id="chat-body"></div>
    <div class="chat-footer">
      <input type="text" id="whatsapp-message" placeholder="اكتب رسالتك هنا" class="chat-input">
      <button id="send-whatsapp" class="whatsapp-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </div>`;
  
  whatsappPopup.innerHTML = popupContent;
  whatsappFloat.appendChild(whatsappPopup);
  
  const whatsappIcon = document.createElement('img');
  whatsappIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
  whatsappIcon.alt = 'WhatsApp';
  whatsappIcon.className = 'whatsapp-icon';
  
  whatsappFloat.appendChild(whatsappIcon);
  document.body.appendChild(whatsappFloat);
  
  const style = document.createElement('style');
  style.innerHTML = `
  .whatsapp-float {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 100;
  }
  
  .whatsapp-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  .whatsapp-icon:hover {
    transform: scale(1.1);
  }
  
  .whatsapp-popup {
    position: fixed;
    bottom: 90px;
    left: 20px;
    width: 300px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 0;
    z-index: 101;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #25d366;
    color: white;
    padding: 10px;
  }
  
  .avatar-container {
    display: flex;
    align-items: center;
  }
  
  .avatar-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .support-text {
    font-size: 16px;
    font-weight: bold;
  }
  
  .close-popup {
    background: none;
    border: none;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
  
  .chat-body {
    flex-grow: 1;
    padding: 10px;
    background-color: #e5ddd5;
    overflow-y: auto;
    max-height: 300px;
  }
  
  .chat-message {
    margin-bottom: 10px;
    display: flex;
  }
  
  .chat-message.sent {
    justify-content: flex-end;
  }
  
  .chat-message p {
    max-width: 70%;
    padding: 10px;
    border-radius: 10px;
    background-color: #dcf8c6;
    margin: 0;
  }
  
  .chat-footer {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-top: 1px solid #ccc;
  }
  
  .chat-input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-right: 10px;
  }
  
  .whatsapp-button {
    background-color: #25d366;
    color: white;
    padding: 10px;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }
  
  .whatsapp-button:hover {
    transform: scale(1.1);
  }
  
  .whatsapp-button svg {
    fill: white;
  }`;
  document.head.appendChild(style);
  
  whatsappIcon.addEventListener('click', function () {
    whatsappPopup.style.display = (whatsappPopup.style.display === 'none') ? 'block' : 'none';
  });
  
  document.querySelector('.close-popup').addEventListener('click', function () {
    whatsappPopup.style.display = 'none';
  });
  
  function getReply(message) {
    message = message.toLowerCase().trim();
  
    if (message.includes("السلام عليكم")) {
      return "وعليكم السلام ورحمة الله وبركاته! كيف يمكنني مساعدتك اليوم؟ 🤗";
    } else if (message.includes("مرحبا")) {
      return "مرحبًا بك! 🌟 كيف يمكنني أن أكون في خدمتك؟";
    } else if (message.includes("كيفكم")) {
      return "الحمد لله نحن بخير، ونأمل أن تكون أنت أيضًا بخير. كيف يمكنني مساعدتك؟ 🌟";
    } else if (message.includes("هلا")) {
      return "أهلًا وسهلًا! 🌼 كيف أساعدك اليوم؟";
    } else if (message.includes("مشكلة")) {
      return "عذرًا لسماع ذلك! 🛠️ أخبرني بالمشكلة بالتفصيل وسأحاول مساعدتك في حلها.";
    } else if (message.includes("؟") || message.includes("سؤال")) {
      return "بالطبع! أسعد بالإجابة على سؤالك. ما هو سؤالك؟ 🧐";
    } else if (message.includes("كيف") || message.includes("طريقة")) {
      return "أبشر! سأشرح لك بالتفصيل. ما الذي تريد معرفته؟ 🧐";
    } else if (message.includes("مساعدة") || message.includes("ساعدني")) {
      return "بالطبع! أنا هنا لمساعدتك. ما هي المشكلة التي تواجهها؟ 💬";
    } else if (message.includes("شكرًا")) {
      return "العفو! 😊 دائمًا في خدمتك. هل هناك شيء آخر تحتاجه؟";
    } else if (message.includes("عفوا")) {
      return "لا شكر على واجب! 🌟 نحن هنا لخدمتك دائمًا.";
    } else if (message.includes("معلومات") || message.includes("تفاصيل")) {
      return "بالطبع! ما هي المعلومات أو التفاصيل التي تريدها؟ 📚";
    } else if (message.includes("مبروك")) {
      return "مبروك! 🎉 نتمنى لك المزيد من التوفيق والنجاح!";
    } else if (message.includes("وداعًا")) {
      return "إلى اللقاء! 🌞 نتمنى لك يومًا سعيدًا. إذا احتجت أي شيء، نحن هنا!";
    } else {
      const randomReplies = [
        "شكرًا لتواصلك معنا! 😊 هل هناك شيء آخر تحتاجه؟",
        "أنا هنا لمساعدتك! 💬 أخبرني بما تحتاجه.",
        "هل يمكنك توضيح طلبك أكثر؟ 🧐",
        "أهلاً بك! 🌟 كيف يمكنني مساعدتك اليوم؟",
        "نحن هنا لخدمتك! 💪 ما الذي تبحث عنه؟"
      ];
      return randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }
  }
  
  document.getElementById('send-whatsapp').addEventListener('click', sendMessage);
  document.getElementById('whatsapp-message').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  
  function sendMessage() {
    var message = document.getElementById('whatsapp-message').value;
    if (message.trim() !== '') {
      var chatBody = document.getElementById('chat-body');
      var messageBubble = document.createElement('div');
      messageBubble.className = 'chat-message sent';
      messageBubble.innerHTML = `<p>${message}</p>`;
      chatBody.appendChild(messageBubble);
      chatBody.scrollTop = chatBody.scrollHeight;
      document.getElementById('whatsapp-message').value = '';
      var typingBubble = document.createElement('div');
      typingBubble.className = 'chat-message';
      typingBubble.innerHTML = `<p>...</p>`;
      chatBody.appendChild(typingBubble);
      chatBody.scrollTop = chatBody.scrollHeight;
      setTimeout(() => {
        chatBody.removeChild(typingBubble);
        var reply = getReply(message);
        var replyBubble = document.createElement('div');
        replyBubble.className = 'chat-message';
        replyBubble.innerHTML = `<p>${reply}</p>`;
        chatBody.appendChild(replyBubble);
        chatBody.scrollTop = chatBody.scrollHeight;
        setTimeout(() => {
          whatsappPopup.style.display = 'none';
          chatBody.innerHTML = '';
          var whatsappLink = `https://wa.me/+9665006818010?text=${encodeURIComponent(message)}`;
          window.location.href = whatsappLink;
        }, 3000);
      }, 2000);
    } else {
      alert('يرجى كتابة رسالة قبل الإرسال.');
    }
  }
  
  // إضافة رسالة تنبيه لاختيار خيارات المنتج
  const sallaProductOptions = document.querySelector('salla-product-options');
  if (sallaProductOptions) {
    const alertMessage = document.createElement('p');
    alertMessage.textContent = "الرجاء اختيار أحد هذا الاختيارات للتمكن من اتمام الشراء";
    alertMessage.style.backgroundColor = '#ffdddd';
    alertMessage.style.color = '#a94442';
    alertMessage.style.padding = '15px';
    alertMessage.style.border = '1px solid #a94442';
    alertMessage.style.borderRadius = '5px';
    alertMessage.style.marginBottom = '10px';
    alertMessage.style.fontWeight = 'bold';
    alertMessage.style.textAlign = 'center';
    sallaProductOptions.insertBefore(alertMessage, sallaProductOptions.firstChild);
  }
  
  
  setTimeout(() => {
    const mada = document.querySelector('.s-payments-list > li:first-of-type > img');
    if (mada) mada.src = "https://i.postimg.cc/m2n1HWj3/Mada-Logo-svg.png";
    
    const visa = document.querySelector('.s-payments-list > li:nth-of-type(2) > img');
    if (visa) visa.src = "https://i.postimg.cc/Dy4yRJQs/Visa-Logo-2006.png";
    
    const pay = document.querySelector('.s-payments-list > li:nth-of-type(3) > img');
    if (pay) pay.src = "https://i.postimg.cc/52q1MwXH/apple-pay-og-twitter.jpg";
    
    const googlePay = document.querySelector('.s-payments-list > li:nth-of-type(4) > img');
    if (googlePay) googlePay.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png";
  
    const stcPay = document.querySelector('.s-payments-list > li:nth-of-type(5) > img');
    if (stcPay) stcPay.src = "https://stcpay.com.sa/wp-content/uploads/2024/01/logo-2.svg";
  }, 1000);
  
  
  
  
  
  
  (function () {
      if (window.innerWidth > 991) {
          document.addEventListener('contextmenu', (e) => e.preventDefault());
          document.addEventListener('keydown', (e) => {
              if (e.key === 'F12' || 
                  (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
                  (e.ctrlKey && e.key === 'U')) {
                  e.preventDefault();
                  return false;
              }
          });
  
          const detectDevTools = () => {
              const threshold = 150;
              if (window.outerWidth && window.innerWidth && (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold)) {
                  console.log("DevTools detected");
                  // window.location.href = 'about:blank';  // قم بتعطيله للاختبار
              }
          };
  
          const detectDebugger = () => {
              const start = new Date().getTime();
              // debugger; // قم بتعطيله للاختبار
              const end = new Date().getTime();
              if (end - start > 100) {
                  console.log("Debugger detected");
                  // window.location.href = 'about:blank';  // قم بتعطيله للاختبار
              }
          };
  
          const startDetection = () => {
              setInterval(() => {
                  detectDevTools();
                  detectDebugger();
              }, 500); 
          };
  
          window.onload = () => {
              detectDevTools();
              detectDebugger();
              startDetection();
          };
      }
  })();
  
  
  document.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.6) return; // تقليل عدد النجوم بنسبة 40%
  
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);
  
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
  
    setTimeout(() => {
      star.style.opacity = "0";
      star.style.transform = "scale(1.2)";
    }, 10);
  
    setTimeout(() => {
      star.remove();
    }, 400); // تقليل وقت بقاء النجوم
  });
  
  if (!document.querySelector("#star-style")) {
    const style = document.createElement("style");
    style.id = "star-style";
    style.textContent = `
      .star {
        position: absolute;
        width: 12px;
        height: 12px;
        background: radial-gradient(circle, gold 40%, transparent 80%);
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 5px gold ;
        opacity: 1;
        transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        z-index: 1000;
      }
    `;
    document.head.appendChild(style);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
      // إنشاء وتطبيق أنماط CSS ديناميكيًا
      const style = document.createElement("style");
      style.innerHTML = `
          .features-section {
  background: transparent;
    padding: 20px 20px;
    max-width: 90%;
    margin: 40px auto;
    text-align: center;
    width: 100%;
          }
          .features-section h2 {
              font-size: 2em;
              margin-bottom: 20px;
              color: black;
          }
          .features-container {
              display: flex;
              align-items: center;
                justify-content: center;
              gap: 20px;
          }
          
          @media(max-width: 991px) {
            .features-container {
                flex-direction: column;
          }
          }
          .feature {
              background: white;
              color: black;
              padding: 20px;
              border-radius: 10px;
              width: 300px;
              font-size: 1.2em;
              font-weight: bold;
              box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              text-align: center;
              position: relative;
              overflow: hidden;
              cursor: pointer;
              overflow: visible;
          }
          .feature-hover {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: var(--1);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              opacity: 0;
              transform: scale(0.8);
              transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .feature:hover .feature-hover {
              opacity: 1;
              transform: scale(1);
          }
        .payment-icons {
  display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
    top: 60px;
    left: 0;
  }
  .payment-icons img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 5px;
  }
  
  .payment-icons img:hover {
    transform: translateY(-7px);
  }
          .feature.active .payment-icons {
              opacity: 1;
          }
      `;
      document.head.appendChild(style);
  
      function createFeaturesSection() {
          const section = document.createElement("section");
          section.className = "features-section";
  
          const title = document.createElement("h2");
          title.innerText = "مميزات المتجر";
          section.appendChild(title);
  
          const container = document.createElement("div");
          container.className = "features-container";
  
          const features = [
              { icon: "🎧", text: "دعم متواصل", hoverText: "💬 دعم فني على مدار الأسبوع" },
              { icon: "🚀", text: "شحن سريع", hoverText: "🚚 شحن سريع لكل أنحاء المملكة" },
              { icon: "💳", text: "تمتع بخدمات دفع متعددة", hoverText: "💸 طرق دفع متنوعة" }
          ];
  
          features.forEach((feature, index) => {
              const div = document.createElement("div");
              div.className = "feature";
              div.innerHTML = `${feature.icon} ${feature.text}`;
              
              const hoverText = document.createElement("div");
              hoverText.className = "feature-hover";
              hoverText.innerText = feature.hoverText;
              div.appendChild(hoverText);
  
              if (index === 2) {
                  const iconsContainer = document.createElement("div");
                  iconsContainer.className = "payment-icons";
  
                  const paymentIcons = [
                      "https://cdn.salla.network/images/payment/google_pay_mini.png",
                      "https://cdn.salla.network/images/payment/apple_pay_mini.png",
                      "https://cdn.salla.network/images/payment/stc_pay_mini.png",
                      "https://cdn.salla.network/images/payment/credit_card_mini.png",
                      "https://cdn.salla.network/images/payment/mada_mini.png"
                  ];
  
                  paymentIcons.forEach(src => {
                      const img = document.createElement("img");
                      img.src = src;
                      iconsContainer.appendChild(img);
                  });
  
                  div.appendChild(iconsContainer);
                  div.addEventListener("click", () => {
                      div.classList.toggle("active");
                  });
              }
              
              container.appendChild(div);
          });
  
          section.appendChild(container);
          
          const footer = document.querySelector("footer");
          if (footer && footer.parentNode) {
              footer.parentNode.insertBefore(section, footer);
          } else {
              document.body.appendChild(section);
          }
      }
  
      createFeaturesSection();
  });
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
      // إنشاء وتطبيق أنماط CSS ديناميكيًا
      const style = document.createElement("style");
      style.innerHTML = `
          .popup-image {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 300px;
              height: auto;
              display: none;
              z-index: 1000;
              background: white;
              padding: 10px;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }
      `;
      document.head.appendChild(style);
  
  
  
      // استهداف العنصر الثاني (شحن سريع)
      const features = document.querySelectorAll(".feature");
      if (features.length > 1) {
          features[1].addEventListener("click", () => {
              popupImage.style.display = "block";
              setTimeout(() => {
                  popupImage.style.display = "none";
              }, 3000);
          });
      }
  });
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
      // إنشاء وتطبيق أنماط CSS ديناميكيًا
      const style = document.createElement("style");
      style.innerHTML = `
          .popup-image {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 300px;
              height: auto;
              display: none;
              z-index: 1000;
              background: white;
              padding: 10px;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }
      `;
      document.head.appendChild(style);
  
      // استهداف العنصر الثاني (شحن سريع)
      const features = document.querySelectorAll(".feature");
      if (features.length > 1) {
          features[0].addEventListener("click", () => {
              popupImage.style.display = "block";
              setTimeout(() => {
                  popupImage.style.display = "none";
              }, 3000);
          });
      }
  });
  
  (function () {
      if (window.innerWidth > 991) {
          document.addEventListener('contextmenu', (e) => e.preventDefault());
          document.addEventListener('keydown', (e) => {
              if (e.key === 'F12' || 
                  (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
                  (e.ctrlKey && e.key === 'U')) {
                  e.preventDefault();
                  return false;
              }
          });
  
          const detectDevTools = () => {
              const threshold = 150;
              if (window.outerWidth && window.innerWidth && (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold)) {
                  console.log("DevTools detected");
                  // window.location.href = 'about:blank';  // قم بتعطيله للاختبار
              }
          };
  
          const detectDebugger = () => {
              const start = new Date().getTime();
              // debugger; // قم بتعطيله للاختبار
              const end = new Date().getTime();
              if (end - start > 100) {
                  console.log("Debugger detected");
                  // window.location.href = 'about:blank';  // قم بتعطيله للاختبار
              }
          };
  
          const startDetection = () => {
              setInterval(() => {
                  detectDevTools();
                  detectDebugger();
              }, 500); 
          };
  
          window.onload = () => {
              detectDevTools();
              detectDebugger();
              startDetection();
          };
      }
  })();