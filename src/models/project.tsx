import Network from '../helpers/network';
import Typescript from '../assets/languages/typescript.png';
import Javascript from '../assets/languages/javascript.png';
import Php from '../assets/languages/php.png';
import Dart from '../assets/languages/dart.png';

export default {
  async get(quantity?:number, sort?:string): Promise<Array<object>> {
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
  },

  getImage(language: string):string {
    if (language === "TypeScript")
      return Typescript;
    else if (language === "JavaScript")
      return Javascript;
    else if (language === "PHP")
      return Php;
    else if (language === "Dart")
      return Dart;
    return Javascript;
  }
}