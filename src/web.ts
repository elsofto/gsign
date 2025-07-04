import { WebPlugin } from '@capacitor/core';

import type { GSignPlugin } from './definitions';

export class GSignWeb extends WebPlugin implements GSignPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
