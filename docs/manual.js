const viewer = document.getElementById('image-viewer');
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
  const body = viewer.querySelector('.viewer-body');
  const figure = button.closest('figure');
  const stage = button.querySelector('.image-stage').cloneNode(true);
  stage.querySelector('img').loading = 'eager';
  const width = button.querySelector('img').naturalWidth;
  if (width && width < 600) {
    stage.style.maxWidth = `${width * 2}px`;
    stage.style.marginInline = 'auto';
  }
  body.replaceChildren(stage, figure.querySelector('figcaption').cloneNode(true));
  const legend = figure.querySelector('.callout-legend');
  if (legend) body.append(legend.cloneNode(true));
  viewer.showModal();
}));
viewer?.querySelector('[data-close]').addEventListener('click', () => viewer.close());
viewer?.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
