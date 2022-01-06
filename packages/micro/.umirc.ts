import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/demo', component: '@/pages/index' },
  ],
  fastRefresh: {},
  webpack5: {},
  qiankun: {
    slave: {},
  },
  dynamicImport:{},
  // mfsu:{},
  chainWebpack(memo) {
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "mf3",
        remotes: {
          mf21: "mf1@//localhost:3000/remoteEntry.js"
        },
        shared: { react: { eager: true }, "react-dom": { eager: true } },
      }])
  },
});
