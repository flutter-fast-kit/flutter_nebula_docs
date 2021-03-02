import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Nebula',
  favicon: 'https://i.loli.net/2021/03/01/QkNy5GYcMKuU4Pr.png',
  logo: 'https://i.loli.net/2021/03/01/QkNy5GYcMKuU4Pr.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  locales: [['zh-CN', '简体中文']],
  navs: {
    'zh-CN': [
      null,
      { title: '演示', path: 'http://192.168.1.39:19911/' },
      { title: 'GitLab', path: 'http://gitlab.tqxd.com/aitd_exchange/aitd_exchange_mobile/flutter/flutter_nebula' },
      { title: '更新日志', path: 'http://gitlab.tqxd.com/aitd_exchange/aitd_exchange_mobile/flutter/flutter_nebula' },
    ],
  },
});
