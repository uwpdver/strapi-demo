module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b32c5a9d4b0e78501716c151ccb6f8d'),
  },
});
