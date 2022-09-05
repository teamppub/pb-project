module.exports = {
  'process.env.BACKEND_URL':
    process.env.NODE_ENV === 'production'
      ? 'https://teamppub.github.io/pb-project'
      : '',
};
