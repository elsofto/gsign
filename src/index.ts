import { registerPlugin } from '@capacitor/core';

import type { GSignPlugin } from './definitions';


const GSign = registerPlugin<GSignPlugin>('GSign', {
  web: () => import('./web').then((m) => new m.GSignWeb()),
});

export * from './definitions';
export { GSign };
