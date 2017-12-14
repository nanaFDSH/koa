// config files:
const productionConfig = './config-production.js';   // 存储默认的配置；
const testConfig = './config-test.js';  // 存储用于测试的配置。

const fs = require('fs');

var config = null;

// console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
    console.log(`Load${productionConfig}...`)
    config = require(productionConfig);
} else {
    try {
        if (fs.statSync(testConfig).isFile()) {
            console.log(`Load${testConfig}...`)
            config = Object.assign(config, require(testConfig));
        }
    } catch (err) {
        console.log(`Cannot load${testConfig}.`)
    }
}

module.exports = config;