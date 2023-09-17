export function filterTemplateTags(posts) {
  const filterMenu = document.querySelector(".tags");

  posts.forEach(({ tags }) => {
    tags
      .filter(tag => tag) // filter out any falsy tags
      .forEach(tag => {
        filterMenu.insertAdjacentHTML('beforeend', `<li><a class="dropdown-item" href="/home.html?tag=${tag}">${tag}</a></li>`);
      });
  });
}
