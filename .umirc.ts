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
      { title: '演示', path: 'https://flutter-nebula.surge.sh/' },
      { title: 'Github', path: 'https://github.com/flutter-fast-kit/flutter_nebula' },
      { title: '更新日志', path: 'https://github.com/flutter-fast-kit/flutter_nebula/blob/master/CHANGELOG.md' },
    ],
  },
});
