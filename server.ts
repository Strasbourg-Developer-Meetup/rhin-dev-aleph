import { serve } from "aleph/react-server";
import MDXLoader from "aleph/react/mdx-loader";
import routes from "./routes/_export.ts";

// check https://mdxjs.com/docs/extending-mdx
import remarkFrontmatter from "https://esm.sh/remark-frontmatter@4.0.1";
import remarkGFM from "https://esm.sh/remark-gfm@3.0.1";
import rehypeHighlight from "https://esm.sh/rehype-highlight@5.0.2";
import rehypeSlug from "https://esm.sh/rehype-slug@5.0.1";
import unocss from "./unocss.config.ts";

serve({
  loaders: [
    new MDXLoader({
      remarkPlugins: [remarkFrontmatter, remarkGFM],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
      providerImportSource: "@mdx-js/react",
    }),
  ],
  router: {
    glob: "./routes/**/*.{tsx,mdx,md}",
    routes,
  },
  ssr: true,
  unocss,
});
