/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.\/node_modules\/php-wasm\/php-web\.*/i,
      loader: "file-loader",
    });

    // config.experiments = {
    //   asyncWebAssembly: true,
    //   layers: true,
    // };
    return config;
  },
};

export default nextConfig;
