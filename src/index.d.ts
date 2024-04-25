export interface StatementMeta {
  id: string;
  title: string;
}

declare module "*.mdx" {
  export const meta: StatementMeta;
}
