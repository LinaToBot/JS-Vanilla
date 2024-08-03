// nos permite acceder donde estamos dentro de las carpetas
const path = require("path");

// Archivo necesario para trabajar con html.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// modulo objeto donde vive nuestra configuracion de lo que va asuceder

module.exports = {
  mode: "production",
  entry: "./src/index.js", // todo nuestro codigo inicial
  // proyecto compilado y estructurado para mandar a prod
  output: {
    // hacia donde lo voy a poner
    path: path.resolve(__dirname, "dist"),
    // el compilado de toda la app se llamrá asi cuando este listo para prod
    filename: "main.js",
  },
  // estensiones que va usar nuestro prouyectos
  resolve: {
    extensions: [".js"],
  },
  // regla de babel, para que nuestro poryecto sea compatible con todos nuestros navegadores
  module: {
    rules: [
      {
        // estructura de babel, para esto debemos de generar un test para saber como vcamos a identificar estos archivos segun los que se encuentran en nuestro entorno.
        test: /\.m?js$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
        // va a escruir todo lo que encuentre ahi de archivos js
        exclude: /node_modules/,
        // config preestablecida para trabajar topdo nuestro codigo
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    // permite trabajar con los archivos html
    new HtmlWebpackPlugin([
      {
        // inyectar en un archivo html un valor
        inject: true,
        // templete base de html
        template: "./public/index.html",
        //dist es  hacia donde vamos a guardar el template y le podemos poner un nombre
        filename: "./index.html",
      },
    ]),
  ],
};
