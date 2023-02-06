const nav = document.querySelector('nav');

fetch('/api/pages')
  .then(response => response.json())
  .then(pages => {
    const menuItems = pages.map(page => `<li><a href="${page.url}">${page.title}</a></li>`).join('');
    nav.innerHTML = `<ul>${menuItems}</ul>`;
  });