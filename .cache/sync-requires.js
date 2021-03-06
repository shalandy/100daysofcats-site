// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/monlily03/100daysofcats-site/100daysofcats/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/monlily03/100daysofcats-site/100daysofcats/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/monlily03/100daysofcats-site/100daysofcats/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/json/404.json"),
  "index.json": require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/json/index.json"),
  "page-2.json": require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/json/page-2.json"),
  "404-html.json": require("/Users/monlily03/100daysofcats-site/100daysofcats/.cache/json/404-html.json")
}