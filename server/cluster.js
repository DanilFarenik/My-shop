const cluster = require('cluster');
const os = require('os');
const pid = process.pid;


if (cluster.isMaster) {

    const cpusCount = os.cpus().length;

    console.log(`CPUs ${cpusCount}`);
    console.log(`Master start: ${pid}`);

    for (let i = 0; i < cpusCount; i++) {
        const worker = cluster.fork();

        worker.on('exit', () => {
            console.log(`Worcer died! Pid: ${worker.process.pid}`);

            cluster.fork();
        });
    }
} else {
    require('./worker.js')
}