import Repository from "App/Models/Repository";
import Factory from "@ioc:Adonis/Lucid/Factory";

// @ts-ignore
export const RepositoryFactory = Factory.define(Repository, async ({faker}) => {
  return {
    name: faker.company.companyName(),
    stargazers_count: faker.datatype.number(),
    repository_created_at: faker.date.past(),
    description: faker.lorem.words(10),
    url: faker.lorem.words(2),
    forks: faker.datatype.number(),
    language: faker.lorem.word(),
  };
}).build();
