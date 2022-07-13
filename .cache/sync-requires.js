
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/pages/404.js")),
  "component---src-pages-all-posts-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/pages/all-posts.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/pages/index.js")),
  "component---src-pages-popular-post-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/pages/popular-post.js")),
  "component---src-pages-small-card-posts-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/pages/small-card-posts.js")),
  "component---src-pages-tags-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/pages/tags.js")),
  "component---src-templates-category-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/templates/category.js")),
  "component---src-templates-page-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/templates/page.js")),
  "component---src-templates-single-post-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/templates/single-post.js")),
  "component---src-templates-tag-js": preferDefault(require("/Users/andrew/Desktop/magicShop/shivuk/blog/src/templates/tag.js"))
}

