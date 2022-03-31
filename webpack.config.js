
const jsx = {
  test: /\.jsx?/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react']
    }
  }
};

const file_types = {
  rules: [
    jsx
  ]
};

const entry = '/Users/c/top/tiny/index.jsx';

const output = {
  filename: 'bundle.js',
  path: '/Users/c/top/tiny/dist'
};

const config_obj = {
  entry:          entry,
  output:         output,
  module:         file_types
};

module.exports = (env) => {
  return config_obj;
};