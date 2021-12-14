import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Repositories extends BaseSchema {
  protected tableName = 'repositories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").notNullable();
      table.float("stargazers_count").notNullable();
      table.string("repository_created_at").notNullable();
      table.string("description").notNullable();
      table.string("url").notNullable();
      table.integer("forks").notNullable();
      table.string("language").notNullable();
      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
