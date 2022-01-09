module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-G1XN48781B","head":true,"anonymize":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/styles/typography"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"linkImagesToOriginal":true,"maxWidth":3840,"quality":100,"withWebp":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Beomsoo Son","short_name":"Beomsoo Son","description":"I'm Beomsoo Son, an Engineer and Designer based in Suwon, South Korea focused on Industrial design engineering and Digital product design.","lang":"ko","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/images/icon.png","icon_options":{"purpose":"any maskable"},"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"abfded2d68398b0949c75a0894fbf871"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
