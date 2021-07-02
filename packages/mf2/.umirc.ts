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
  webpack5: {},
  dynamicImport:{},
  chainWebpack(memo) {
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "mf2",
        remotes: {
          mf1: "mf1@//localhost:3000/remoteEntry.js"
        },
        shared: { react: { eager: true }, "react-dom": { eager: true } },
      }])
  },
});
