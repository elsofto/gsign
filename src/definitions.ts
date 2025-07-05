export interface GSignOptions {
  clientId: string;
  serverClientId: string;
  scopes: string[];
}

export interface GSignResult {
  idToken: string;
  email: string;
  displayName: string;
  familyName: string;
  givenName: string;
  profilePictureUri?: string;
}

export interface GSignPlugin {
  signIn(options: GSignOptions): Promise<GSignResult>;
  signOut(): Promise<void>;
}
