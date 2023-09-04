module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', //定义未使用
    'react/no-unstable-nested-components': 'off', //嵌套组件
    'react-native/no-inline-styles': 'off', //允许行内样式
    'no-useless-escape': 'off', //正则不必要转义字符校验
    'react-hooks/exhaustive-deps': 'off',
  },
};
