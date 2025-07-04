export interface GSignOptions {
  clientId: string;
  serverClientId: string;
  scopes: string[];
}


export interface GSignResult {
  idToken: string;
}


export interface GSignPlugin {
  signIn(options: GSignOptions): Promise<GSignResult>;
}
