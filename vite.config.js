const reactRefresh = require('@vitejs/plugin-react-refresh');

module.exports = {
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  optimizeDeps: {
    include: ['@firebase/app']
  },
};
