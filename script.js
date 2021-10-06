    // Detect the browser and changing website favicon , title dynamically

    let title = document.getElementById("title");

    let faviconImg = document.getElementById("faviconImg");

    let userAgent = navigator.userAgent;
    let browser;
    if (userAgent.match(/edg/i)) {
        browser = "edge";
        title.innerHTML = " Edge | Detect User Browser | Nosib Biswas";
        faviconImg.href = "./logos/edge.png";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browser = "Firefox";
        title.innerHTML = " firefox | Detect User Browser | Nosib Biswas";
        faviconImg.href = "./logos/firefox.png";
    } else if (userAgent.match(/opr\//i)) {
        browser = "opera";
        title.innerHTML = " Opera | Detect User Browser | Nosib Biswas";
        faviconImg.href = "./logos/opera.png";
    } else if (userAgent.match(/chrome|chromium|crios/i)) {
        browser = "chrome";
        title.innerHTML = " Chrome | Detect User Browser | Nosib Biswas";
        faviconImg.href = "./logos/chrome.png";
    } else if (userAgent.match(/safari/i)) {
        browser = "safari";
        title.innerHTML = " Safari | Detect User Browser | Nosib Biswas";
        faviconImg.href = "./logos/safari.png";
    } else {
        alert("Other browser");
    }
    const logo = document.querySelector(`.logos .${browser}`);
    if (logo) {
        logo.style.opacity = "1";
    }

    //changing the inner html of the span with "footer_year" id to the given year(2021)

    function getCurrentYear() {
        return new Date().getFullYear(); // returns the year via local timing
    }

    document.getElementById("footer_year").innerHTML = getCurrentYear();