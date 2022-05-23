module.exports = {
    client: 'mysql',
    connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'ucsm'
    },
    migrations: {
            directory: './db/migration',
    },
    seeds: {
        directory: './db/seed',
    } 
    
}