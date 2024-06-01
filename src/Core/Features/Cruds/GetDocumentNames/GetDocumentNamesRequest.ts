export class GetDocumentNamesRequest{
  Token: string;
  Page: number;
  PerPage: number;
  
  constructor(
    token: string,
    page: number,
    perPage: number
  ) {
    this.Token = token;
    this.Page = page;
    this.PerPage = perPage;
  }

}
