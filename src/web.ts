import { WebPlugin } from '@capacitor/core';

import type { GSignOptions, GSignPlugin, GSignResult } from './definitions';

export class GSignWeb extends WebPlugin implements GSignPlugin {
  async signIn(options: GSignOptions): Promise<GSignResult> {
    console.log('GSignWeb.signIn', options);

    // Web implementation would use Google Identity Services
    // For now, return mock data
    return {
      idToken: 'mock-id-token',
      email: 'user@example.com',
      displayName: 'Mock User',
      familyName: 'User',
      givenName: 'Mock',
      profilePictureUri: 'https://example.com/avatar.jpg'
    };
  }

  async signOut(): Promise<void> {
    console.log('GSignWeb.signOut');
    // Web implementation would clear Google Identity Services state
  }
}
