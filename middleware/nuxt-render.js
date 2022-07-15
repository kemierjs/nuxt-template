const {Nuxt, Builder} = require('nuxt')
let config = require('../services/nuxt.config');

const isDev = process.env.NODE_ENV !== 'production'

module.exports = ()=>  {
    // We get Nuxt instance
    const nuxt = new Nuxt(config)
    if (isDev) {
        new Builder(nuxt).build();
    }
    return ({req, res}) => {
        nuxt.render(req, res)
    };

};
