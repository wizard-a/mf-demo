import generateConfig from './qiankunConfig/index';


export const qiankun = new Promise((resolve) => {
  const entryPrefix =
    process.env.NODE_ENV === 'production' ? window.location.origin : null;
  const res = generateConfig(entryPrefix);
  resolve(res);
}).then((config) => {
  return config; // const {router, apps} = config;
});

