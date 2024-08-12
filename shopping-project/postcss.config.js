module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      //设计图为750时，调成1倍图：375 适配375标准屏
      //640调成1倍：320 适配320标准屏
      viewportWidth: 375,
    },
  },
};
