// Copy BibTeX to clipboard
function copyBibtex() {
  const code = document.getElementById('bibtex-code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copy-btn-label');
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = original; }, 1800);
  });
}

// Before/after Grad-CAM comparison slider
(function () {
  const compare = document.querySelector('.compare');
  if (!compare) return;
  const after = compare.querySelector('.compare-after');
  const handle = compare.querySelector('.compare-handle');
  const range = document.getElementById('compare-range');

  function setPosition(pct) {
    pct = Math.min(100, Math.max(0, pct));
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + '%';
  }

  if (range) {
    range.addEventListener('input', (e) => setPosition(Number(e.target.value)));
  }

  let dragging = false;
  compare.addEventListener('pointerdown', () => { dragging = true; });
  window.addEventListener('pointerup', () => { dragging = false; });
  compare.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const rect = compare.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(pct);
    if (range) range.value = pct;
  });
})();
