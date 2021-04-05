const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const campers = [
    {
      name: 'ada',
    },
    {
      name: 'hudson'
    }
  ]

  const services = [
    {
      name: 'Camping & Festivals',
      slug: 'camping-and-festivals'
    },
    {
      name: 'Parties & Proms',
      slug: 'parties-and-proms'
    },
    {
      name: 'Weddings',
      slug: 'weddings'
    },
    {
      name: 'Other',
      slug: 'other'
    },
  ]

  campers.map(camper => {
    createPage({
      path: `meet-the-buses/${camper.name}`,
      component: path.resolve('./src/templates/VehicleTemplate/index.tsx'),
      context: {
        name: camper.name
      }
    })
  })

  services.map(service => {
    createPage({
      path: `services/${service.slug}`,
      component: path.resolve('./src/templates/ServiceTemplate/index.tsx'),
      context: {
        slug: service.slug
      }
    })
  })
}