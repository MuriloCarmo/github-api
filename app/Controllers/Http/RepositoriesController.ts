// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Repository from "App/Models/Repository";

export default class RepositoriesController {
  public async store({request, response}) {
    try {
      const dataToCreate = request.only(['name', 'stargazers_count', 'language']);
      await Repository.create(dataToCreate);
      response.json(dataToCreate);
    } catch (e) {
      response.json("Erro Ao Criar curso", e);
    }
  }

  public async listAll() {
    return await Repository.all();
  }

  public async listOne({params, response}) {
    try {
      console.log("Entrou aqui");
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
