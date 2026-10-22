'use strict';
// Local-file and iframe compatible: no fetch, storage or external dependency.
(() => {
  const dialog = document.getElementById('image-view');
  if (!(dialog instanceof HTMLDialogElement)) return;
  const enlarged = dialog.querySelector('img');
  const original = dialog.querySelector('[data-original]');
  let restoreFocus = null;
  document.querySelectorAll('[data-zoom]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      restoreFocus = link;
      const image = link.querySelector('img');
      enlarged.src = image.src;
      enlarged.alt = image.alt;
      original.href = image.src;
      dialog.querySelector('.zoom-label').textContent = image.alt;
      const frame = dialog.querySelector('.zoom-shot');
      frame.querySelectorAll('.mark').forEach(marker => marker.remove());
      link.querySelectorAll('.mark').forEach(marker => frame.append(marker.cloneNode(true)));
      const legend = dialog.querySelector('.zoom-callouts');
      legend.replaceChildren();
      link.closest('figure').querySelectorAll('.callouts li').forEach(item => legend.append(item.cloneNode(true)));
      if (!dialog.open) dialog.showModal();
    });
  });
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    enlarged.removeAttribute('src');
    original.removeAttribute('href');
    dialog.querySelector('.zoom-callouts').replaceChildren();
    dialog.querySelectorAll('.zoom-shot .mark').forEach(marker => marker.remove());
    restoreFocus?.focus();
  });
  document.querySelector('[data-print]')?.addEventListener('click', () => {
    const opened = [];
    document.querySelectorAll('details').forEach(detail => {
      if (!detail.open) { opened.push(detail); detail.open = true; }
    });
    const restore = () => { opened.forEach(detail => { detail.open = false; }); };
    window.addEventListener('afterprint', restore, { once: true });
    window.print();
  });
})();
