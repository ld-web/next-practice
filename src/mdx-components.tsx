import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children, ...rest }) => (
      <a
        href={href}
        target="_blank"
        className="p-1 bg-gray-50 dark:bg-slate-800 underline underline-offset-4"
        {...rest}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="text-gray-950 dark:text-gray-200 bg-slate-300 dark:bg-slate-800 p-1">
        {children}
      </code>
    ),
    ...components,
  };
}
