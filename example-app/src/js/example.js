import { GSign } from 'gsign';

window.testSign = async () => {
  const res = await GSign.signIn({
    clientId: '228029454374-vlm9e3dm310c0md459r6s7slvc472ah4.apps.googleusercontent.com',
    serverClientId: '228029454374-qhoupesluaqq9irngpfc0cflu0986vca.apps.googleusercontent.com',
    scopes: [ 'email', 'profile' ],
  });
  console.log(res);
};
