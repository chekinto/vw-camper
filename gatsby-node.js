exports.createPages = async ({ page, actions }) => {
  console.log('page, actions :>> ', page, actions);
  const { createPage } = actions;

  if (page.path.match(/^\/vehicle/)) {
    page.matchPath = "/vehicle/*"
    createPage(page)
  }
}