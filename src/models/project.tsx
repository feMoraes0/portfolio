import Network from '../helpers/network';

export default {
  async getProjects(quantity?:number, sort?:string): Promise<Array<object>> {
    if(!quantity)
      quantity = 5;
    if(!sort)
      sort = "update"

    const data = await Network.getData(`https://api.github.com/users/feMoraes0/repos?sort=${sort}&per_page=${quantity}`)

    const convertData = data.map((project: any) => {
      return {
        name: project.name,
        updated_at: project.updated_at,
        description: project.description,
        url: project.html_url,
        language: project.language
      };
    });

    return convertData;
  }
}