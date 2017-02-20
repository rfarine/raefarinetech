const { componentsPath, stylesPath, utilsPath } = require('config/paths');

exports.modifyWebpackConfig = function(config, stage) {
  config.removeLoader('css');

  config.loader('css', function(cfg) {
    cfg.test = /\.s?css$/;
    cfg.loader = 'css?-autoprefixer&localIdentName=[local]__[name]__[hash:base64:5]&modules&importLoaders=2&sourceMap!postcss!sass';
    return cfg;
  });

  config.loader('images', function(cfg) {
    cfg.test = /\.(gif|png|jpe?g|svg)$/i;
    cfg.loaders = [
      'file-loader?context=images&name=images/[path][name].[ext]',
      {
        loader: 'image-webpack-loader',
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 4,
          },
          pngquant: {
            quality: '75-90',
            speed: 4
          }
        }
      }
    ];
    return cfg;
  });

  config.merge({
    resolve: [ componentsPath, stylesPath, utilsPath ]
  });

  return config;
}