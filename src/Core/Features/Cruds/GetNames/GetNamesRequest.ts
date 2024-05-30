export class GetNamesRequest{
  Token: string;
  Page: number;
  
  constructor(
    token: string,
    page: number
  ) {
    this.Token = token;
    this.Page = page;
  }

}
