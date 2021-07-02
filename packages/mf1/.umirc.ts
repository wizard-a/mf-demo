import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  // publicPath:'//localhost:3000/',
  webpack5: {},
  // dynamicImport:{},
  mfsu:{},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "mf1",
        library: { type: 'umd', name: 'mf1' },
        filename: 'remoteEntry.js',
        exposes: {
          "./Button": './src/components/button/index',
        },
        shared: { react: { eager: true }, "react-dom": { eager: true } },
      }])
  },
});
