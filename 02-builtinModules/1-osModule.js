const os = require('os');

// current user info

console.log('current user info =>', os.userInfo());

// system uptime (returns sec)
console.log('running hours ==>', os.uptime() / 3600);//hr

// return bunch of info

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    version: os.version(),
    network: os.networkInterfaces()
}

console.log('currentOs ==>', currentOs)
