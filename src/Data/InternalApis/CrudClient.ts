import type { ICrudClient } from "@/Core/Interfaces/ICrudClient";

export class CrudClient implements ICrudClient{

  apiUrl: string;
  apiKey  = import.meta.env.VITE_API_KEY;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL
                    .replace("{ADDRESS}", import.meta.env.VITE_API_ADDRESS)
                    .replace("{PORT}", import.meta.env.VITE_API_PORT)
                    .replace("{VERSION}", import.meta.env.VITE_API_VERSION);
}
    
  GetNames(page: any): string[] {
  
    //https://rapidapi.com/guides/call-graphql-apis-vue
    return ["word1", "word2", "word3"];


  }

}