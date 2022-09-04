module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: 'aforo255',
        password: 'Aforo255#2050',
        database: 'db_identity',
        host: 'localhost',
        port: 5433,
        ssl: { 
            rejectUnauthorized: false 
        },
    }
}