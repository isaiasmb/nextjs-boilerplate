/* eslint-disable @typescript-eslint/no-var-requires */

const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

console.log('isProd: ', isProd)

const withPWA = require('next-pwa')

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: !isProd
})

module.exports = nextConfig
