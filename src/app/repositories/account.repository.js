const { Pool } = require('pg')
const config = require('../config/environments')

const pool = new Pool(config.DB)

const accountRepository = {
    getAccounts: async () => {
        var results = await pool.query('SELECT * FROM account')
        return results.rows
    },
    getAccountById: async (id) => {
        var results = await pool.query('SELECT * FROM account WHERE id = $1', [id])
        return results.rows
    },
    addAccount: async (amount, customerId, fullname) => {
        var results = await pool.query('INSERT INTO account (amount, customerid,fullname) VALUES ($1, $2, $3) RETURNING *', [amount, customerId, fullname])
        return results.rows
    }
}

module.exports = accountRepository;