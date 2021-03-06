import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class Repository extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public name: string;

  @column()
  public stargazers_count: number;

  @column()
  public repository_created_at: string;

  @column()
  public description: string;

  @column()
  public url: string;

  @column()
  public forks: number;

  @column()
  public language: string;

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
