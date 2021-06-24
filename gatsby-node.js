const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    query {
      graphcms {
        services {
          id
          title
          slug
        }

        busPages {
          name
          description
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.graphcms.busPages.map(node => {
      createPage({
        path: `meet-the-buses/${node.slug}`,
        component: path.resolve('./src/templates/VehicleTemplate/index.tsx'),
        context: {
          id: node.id,
          slug: node.slug
        }
      })
    })

    result.data.graphcms.services.map(node => {
      createPage({
        path: `services/${node.slug}`,
        component: path.resolve('./src/templates/ServiceTemplate/index.tsx'),
        context: {
          id: node.id,
          slug: node.slug
        }
      })
    })
  })
}