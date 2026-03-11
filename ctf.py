fetch("http://localhost:9003/getFlag", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ giveMe: "theFlag" })
})
  .then(r => r.text())
  .then(text => console.log(text));
