const db = require('../db/db')

async function select(query = {}) {
    try {

        const selected = await db('agentes').where(query)
        const isSingular = Object.keys(query).length === 1 && 'id' in query

        if (!selected) {
            return false
        }

        return isSingular ? selected[0] : selected

    } catch (error) {
        console.error(error)
        return false
    }
}

async function insert(object) {
    try {

        const inserted = await db('agentes').insert(object, ["*"])

        if (!inserted) {
            return false
        }

        return inserted[0]

    } catch (error) {
        console.error(error)
        return false
    }
}

async function update(id, updatedObject) {
    try {

        const updated = await db('agentes').where({id: id}).update(updatedObject, ["*"])

        if (!updated) {
            return false
        }

        return updated[0]

    } catch (error) {
        console.error(error)
        return false
    }
}

async function remove(id) {
    try {

        const removed = await db('agentes').where({id: id}).del()

        if (!removed) {
            return false
        }

        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

module.exports = {
    select,
    insert,
    update,
    remove,
}