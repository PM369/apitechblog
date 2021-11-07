module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.techblog369.in',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8c7f7e5c7f91de763e2e77b5052c7f71'),
    },
  },
});
