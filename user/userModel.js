const db = require('../database/dbConfig');

module.exports = {
    insert,
    get,
    getBy,
    getById,
    remove
};

async function insert(user) {
    const [id] = await db('users').insert(user);
    return getById(id);
}

function get() {
    return db('users');
}

function getBy(filter) {
    return db('users').where(filter).first();
}

function getById(id) {
    return db('users').where({ id }).first();
}

function remove(id) {
    return getById(id).then(user => {
        return db('users').where({ id }).del().then(count => {
            return user;
        });
    });
}