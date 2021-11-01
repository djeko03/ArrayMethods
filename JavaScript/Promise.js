console.log('Request data...');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working',
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data)
        }, 2000)
    }).then(clientData => {
        console.log('Data received', clientData);
    }) 
})