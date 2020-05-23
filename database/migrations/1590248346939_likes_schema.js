'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LikesSchema extends Schema {
  up () {
    this.create('likes', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('post_id').unsigned().nullable().references('id').inTable('posts')
      table.integer('comment_id').unsigned().nullable().references('id').inTable('comments')
      table.timestamps()
    })
  }

  down () {
    this.drop('likes')
  }
}

module.exports = LikesSchema
