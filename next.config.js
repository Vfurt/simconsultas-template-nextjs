const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(new AntdDayjsWebpackPlugin())

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
