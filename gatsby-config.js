module.exports = {
  plugins: [
    // ESLint config
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Source+Sans+Pro:400,400i,700,700i', 'Rubik:300,300i,400,400i,700,700i'],
      },
    },
  ],
};
