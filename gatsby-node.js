const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    query HeroQuery {
      allGraphCmsBus {
        nodes {
          description
          title
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allGraphCmsBus.nodes.map(node => {
      createPage({
        path: `meet-the-buses/ada`,
        component: path.resolve('./src/templates/VehicleTemplate/index.tsx'),
        context: {
          slug: 'ada'
        }
      })
    })
  });


  // const services = [
  //   {
  //     name: 'Camping & Festivals',
  //     slug: 'camping-and-festivals'
  //   },
  //   {
  //     name: 'Parties & Proms',
  //     slug: 'parties-and-proms'
  //   },
  //   {
  //     name: 'Weddings',
  //     slug: 'weddings'
  //   },
  //   {
  //     name: 'Other',
  //     slug: 'other'
  //   },
  // ]

  // campers.map(camper => {
  //   createPage({
  //     path: `meet-the-buses/${camper.name}`,
  //     component: path.resolve('./src/templates/VehicleTemplate/index.tsx'),
  //     context: {
  //       name: camper.name
  //     }
  //   })
  // })

  // services.map(service => {
  //   createPage({
  //     path: `services/${service.slug}`,
  //     component: path.resolve('./src/templates/ServiceTemplate/index.tsx'),
  //     context: {
  //       slug: service.slug
  //     }
  //   })
  // })
}