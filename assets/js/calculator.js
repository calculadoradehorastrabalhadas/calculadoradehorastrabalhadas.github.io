(function () {
  var root = document.getElementById("calc");
  if (!root) return;
  var rows = root.querySelectorAll("[data-row]");
  var meta = document.getElementById("meta");
  var el = {
    total: document.getElementById("r-total"),
    dec: document.getElementById("r-dec"),
    avg: document.getElementById("r-avg"),
    days: document.getElementById("r-days"),
    bal: document.getElementById("r-bal")
  };
  function toMin(v) {
    if (!v) return null;
    var p = v.split(":");
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function fmt(m) { return pad(Math.floor(m / 60)) + ":" + pad(m % 60); }
  function calc() {
    var total = 0, days = 0;
    rows.forEach(function (r) {
      var i = toMin(r.querySelector(".e").value);
      var s = toMin(r.querySelector(".s").value);
      var b = parseInt(r.querySelector(".b").value, 10) || 0;
      var out = r.querySelector(".t");
      if (i === null || s === null) { out.textContent = "--:--"; return; }
      var d = s - i;
      if (d < 0) d += 1440;
      d = Math.max(0, d - b);
      out.textContent = fmt(d);
      total += d;
      days++;
    });
    var goal = Math.round((parseFloat(String(meta.value).replace(",", ".")) || 0) * 60);
    var diff = total - goal;
    el.total.textContent = fmt(total);
    el.dec.textContent = (total / 60).toFixed(2).replace(".", ",") + " horas";
    el.avg.textContent = days ? fmt(Math.round(total / days)) : "--:--";
    el.days.textContent = days;
    el.bal.textContent = (diff > 0 ? "+" : diff < 0 ? "-" : "") + fmt(Math.abs(diff));
  }
  root.addEventListener("input", calc);
  document.getElementById("limpar").addEventListener("click", function () {
    root.querySelectorAll(".e,.s").forEach(function (x) { x.value = ""; });
    root.querySelectorAll(".b").forEach(function (x) { x.value = "0"; });
    calc();
  });
})();
