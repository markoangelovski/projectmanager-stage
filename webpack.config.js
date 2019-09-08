module.exports = env => {
  console.log("env from main config is:", `./config/webpack.${env}.js`);
  return require(`./config/webpack.${env}.js`);
};
