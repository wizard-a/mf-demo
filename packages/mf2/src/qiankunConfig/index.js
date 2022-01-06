import { history } from 'umi';
import config from './appConfig';
import styles from './index.less';

const generateConfig = (entryPrefix) => {
  const routes = [];
  const apps = [];
  config.forEach((item) => {
    if (!(item.enable === false)) {
      // 生成路由
      routes.push({
        path: item.activePath,
        microApp: item.name,
        microAppProps: {
          autoSetLoading: true,
          className: styles.appClassName,
          wrapperClassName: styles.wrapperClass,
        },
      });
      // 生成应用
      apps.push({
        name: item.name,
        entry: entryPrefix
          ? `${entryPrefix}/${item.name}`
          : `//localhost:${item.port}`,
      });
    }
  });

  return {
    routes,
    apps,
  };
};

export default generateConfig;
