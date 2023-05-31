/*
My own watcher to monitor the folders in api and 
some other files i will use often

I will be manually adding folders since recursive does not work on linux, 
which i am using right now
*/ 

const fs = require('fs')
var exec = require('child_process').exec

const PORT = 1337

function notice() {
    // run sails
    exec(`sails l --port ${PORT}`, (error, stdout, stderr) => {
        // if (error) {
        //   console.error(`exec error: ${error}`);
        //   return;
        // }
        console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
    })

}

function kill(runner) {
    exec(`fuser ${PORT}/tcp`, (error, stdout, stderr) => {
        // if (error) {
        //   console.error(`exec error: ${error}`);
        //   return;
        // }
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
    })
    exec(`fuser -k ${PORT}/tcp`, (error, stdout, stderr) => {
        // if (error) {
        //   console.error(`exec error: ${error}`);
        //   return;
        // }
        // console.log(`stdout: ${stdout}`);
        // console.error(`stderr: ${stderr}`);
    })

}

let count = 0

fs.watch('./api/', (eventType, filename) => {
    if (eventType == 'change') {
        count++
        if (count == 1) {
            console.log('Restarting server...')
            kill()
            setTimeout(() => {
                notice()
            }, 2000)
            count = 0
            setTimeout(() => {
                console.log('Server running...')
            }, 15000)
        }
    }

})

fs.watch('./api/', (eventType, filename) => {
    if (eventType == 'change') {
        count++
        if (count == 1) {
            console.log('Restarting server...')
            kill()
            setTimeout(() => {
                notice()
            }, 2000)
            count = 0
            setTimeout(() => {
                console.log('Server running...')
            }, 15000)
        }
    }

})

console.log('Running sails server...')
notice()
setTimeout(() => {
    console.log('Server running...')
}, 13000)