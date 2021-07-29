// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-tsx": () => import("./../../../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-about-tsx": () => import("./../../../src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-categories-tsx": () => import("./../../../src/pages/categories.tsx" /* webpackChunkName: "component---src-pages-categories-tsx" */),
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-templates-post-template-tsx": () => import("./../../../src/templates/post_template.tsx" /* webpackChunkName: "component---src-templates-post-template-tsx" */)
}

