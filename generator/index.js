module.exports = (api, options, rootOptions) => {
  // const utils = require('./utils')(api);
  // 命令
  api.extendPackage({
    scripts: {
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'lint': 'vue-cli-service lint',
      'build-formal': 'vue-cli-service build --mode build-formal',
      'build-test': 'vue-cli-service build --mode build-test'
    }
  });

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      'core-js': '^2.6.5',
      'vue': '^2.6.6',
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1',
      'xlsx': '^0.14.0',
      '@sentry/browser': '^4.6.6',
      '@sentry/integrations': '^5.0.8',
      'filesaver': '^0.0.13',
      'iview': '^3.1.3',
      'axios': '^0.16.2'
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '^3.5.0',
      '@vue/cli-plugin-eslint': '^3.5.0',
      '@vue/cli-service': '^3.5.0',
      '@vue/eslint-config-standard': '^4.0.0',
      'babel-eslint': '^10.0.1',
      'eslint': '^5.8.0',
      'eslint-plugin-vue': '^5.0.0',
      'node-sass': '^4.9.0',
      'sass-loader': '^7.1.0',
      'vue-template-compiler': '^2.5.21'
    }
  });

  // postcss
  // api.extendPackage({
  //   postcss: {
  //     plugins: {
  //       autoprefixer: {}
  //     }
  //   }
  // });

  // 删除 vue-cli3 默认目录
  // api.render(files => {
  //   Object.keys(files)
  //     .filter(path => path.startsWith('src/') || path.startsWith('public/'))
  //     .forEach(path => delete files[path]);
  // });

  // 公共基础目录和文件
  api.render('./template');

  // 屏蔽 generator 之后的文件写入操作
  // writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过
  // api.onCreateComplete(() => {
  //   process.env.VUE_CLI_SKIP_WRITE = true;
  //   if (options.application === 'mobile') {
  //     utils.deleteDir('./src/vendor');
  //   }
  // });
};
