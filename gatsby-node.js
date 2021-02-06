exports.createPages = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/meet-the-buses/)) {
    page.matchPath = "/*"
    createPage(page)
  }
}