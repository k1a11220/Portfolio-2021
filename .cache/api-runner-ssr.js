var plugins = [{
      plugin: require('/Users/son/Documents/GitHub/portfolio/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"G-G1XN48781B","head":true,"anonymize":true},
    },{
      plugin: require('/Users/son/Documents/GitHub/portfolio/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/styles/typography"},
    },{
      plugin: require('/Users/son/Documents/GitHub/portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Beomsoo Son","short_name":"Beomsoo Son","description":"I'm Beomsoo Son, an Engineer and Designer based in Suwon, South Korea focused on Industrial design engineering and Digital product design.","lang":"ko","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/images/icon.png","icon_options":{"purpose":"any maskable"},"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"abfded2d68398b0949c75a0894fbf871"},
    },{
      plugin: require('/Users/son/Documents/GitHub/portfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/son/Documents/GitHub/portfolio/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/son/Documents/GitHub/portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/son/Documents/GitHub/portfolio/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
