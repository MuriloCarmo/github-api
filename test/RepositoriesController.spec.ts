import test from 'japa';
import supertest from "supertest";
import Database from "@ioc:Adonis/Lucid/Database";
import {RepositoryFactory} from "Database/factories/RepositoryFactory";

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;
const api = supertest(BASE_URL + "/api");

test.group("Test RepositoriesController", (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  });

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction();
  })

  test("POST /repositories - should create a Store/repositories", async (assert) => {
    let newStoreMock = (await RepositoryFactory.makeStubbed()).serialize();
    const {name, stargazers_count, repository_created_at, description, url, forks, language} = newStoreMock;
    console.log('teste ', newStoreMock);

    const {body} = await api.post("/saverepositories").send({
      name,
      stargazers_count,
      repository_created_at,
      description,
      url,
      forks,
      language
    }).expect(200);


    assert.containsAllKeys(body, [
      "name",
      "stargazers_count",
      "repository_created_at",
      "description",
      "url",
      "forks",
      "language"
    ]);
  });

});
