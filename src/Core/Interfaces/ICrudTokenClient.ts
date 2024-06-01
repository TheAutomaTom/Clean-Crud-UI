export interface ICrudTokenClient{

  RefreshToken(token: string): Promise<string>;

}