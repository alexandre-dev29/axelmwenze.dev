// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    publicEmailJsKey: process.env.EMAILJS_PUBLICK_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'devprojectbucket.s3.amazonaws.com'],
  },
};

module.exports = withNx(nextConfig);
