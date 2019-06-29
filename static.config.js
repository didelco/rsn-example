import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const { data: countries } = await axios.get('https://restcountries.eu/rest/v2/all')
    return [
      {
        path: '/countries',
        getData: () => ({
          countries,
        }),
        children: countries.map(country => ({
          path: `/${country.name}`,
          template: 'src/containers/Country',
          getData: () => ({
            country,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),

    ['react-static-plugin-markdown', { renderComponent: 'src/containers/ContentPage' }],
  ],
}
