module.exports = {
  siteMetadata: {
    title: `Paróquia São João Batista - Macaé/RJ`,
    metaDescription: `Notícias, artigos e informações sobre a Paróquia São João Batista de Macaé/RJ`,
    description: `O site está em manutenção. Estamos trabalhando para melhor servir. Voltaremos em breve.`,
    //description: `Website temporário. Em breve será disponibilizado nesse endereço o site da Paróquia administrado pela Pascom.`,
    author: `https://vfcardoso.dev`,
    siteUrl: `https://paroquiasaojoaobatistamacae.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paróquia São João Batista - Macaé/RJ`,
        short_name: `PSJB-Macaé/RJ`,
        start_url: `/`,
        background_color: `#BF244E`,
        theme_color: `#BF244E`,
        display: `minimal-ui`,
        icon: `src/images/brasao.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-167401438-1',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          { 
            family: `Merriweather`,
          }
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
  ],
}
