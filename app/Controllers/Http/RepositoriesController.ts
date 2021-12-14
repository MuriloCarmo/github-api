// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Repository from "App/Models/Repository";

export default class RepositoriesController {
  public async store({request, response}) {
    try {
      const dataToCreate = request.body(['name', 'stargazers_count', 'repository_created_at', 'description', 'url', 'forks', 'language']);
      await Repository.create(dataToCreate);
      response.json(dataToCreate);
    } catch (e) {
      response.json("Erro Ao Salvar Repositório", e);
      console.log(e);
    }
  }

  public async listAll() {
    return await Repository.all();
  }

  public async listOne({params, response}) {
    try {
      const result = await Repository.find(params.id);
      if (result) {
        return result;
      } else {
        response.json("Repositório não Encontrado!");
      }

    } catch (e) {
      console.error(e);
    }
  }


}
