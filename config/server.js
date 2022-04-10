module.exports = ({ env }) => ({
  host: env('HOST', '47.115.60.250'),
  port: env.int('PORT', 1337),
  url: 'http://47.115.60.250:1337',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
