import createMDX from "@next/mdx";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack: function (config, options) {
    config.module.rules.push(
      {
        test: /\.\/node_modules\/php-wasm\/php-web\.*/i,
        loader: "file-loader",
      },
      {
        test: /\.php$/i,
        use: {
          loader: "raw-loader",
        },
      }
    );

    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMdxFrontmatter],
  },
});

export default withMDX(nextConfig);
