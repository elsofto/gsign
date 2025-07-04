import { WebPlugin } from '@capacitor/core';

import type { GSignOptions, GSignPlugin, GSignResult } from './definitions';


export class GSignWeb extends WebPlugin implements GSignPlugin {
  async signIn(options: GSignOptions): Promise<GSignResult> {
    console.log('GSignWeb.signIn', options);

    return {
      idToken: 'idToken',
    };
  }
}
