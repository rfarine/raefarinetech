import { stylesPath } from 'config/paths';

exports.modifyWebpackConfig = function(config, stage) {
  config.removeLoader('css');

  config.loader('css', function(cfg) {
    cfg.test = /\.s?css$/;
    cfg.loader = 'css?-autoprefixer&localIdentName=[local]__[name]__[hash:base64:5]&modules&importLoaders=2&sourceMap!postcss!sass';
    return cfg;
  });

  config.merge({
    resolve: [ stylesPath ]
  });

  return config;
}