let {rootDir} = require('../contants/enum');

module.exports = {
    srcDir: '',
    rootDir: rootDir,
    router: {
        base: '/app/'
    },
    telemetry: false,
    ssr: true,
    target: 'server',
}
