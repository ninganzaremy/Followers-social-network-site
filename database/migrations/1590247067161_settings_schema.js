'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingsSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')

      table.timestamps()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = SettingsSchema
