import { GSign } from 'gsign';

window.testSign = async () => {
  try {
    console.log('Starting Google Sign-In...');
    const res = await GSign.signIn({
      clientId: '228029454374-vlm9e3dm310c0md459r6s7slvc472ah4.apps.googleusercontent.com',
      serverClientId: '228029454374-qhoupesluaqq9irngpfc0cflu0986vca.apps.googleusercontent.com',
      scopes: [ 'email', 'profile' ],
    });
    console.log('Sign-In successful:', res);
    
    // Display user info
    document.getElementById('user-info').innerHTML = `
      <h3>Welcome, ${res.displayName}!</h3>
      <p>Email: ${res.email}</p>
      <p>ID Token: ${res.idToken.substring(0, 50)}...</p>
    `;
  } catch (error) {
    console.error('Sign-In failed:', error);
    document.getElementById('user-info').innerHTML = `
      <h3>Sign-In Failed</h3>
      <p>Error: ${error.message}</p>
    `;
  }
};

window.testSignOut = async () => {
  try {
    console.log('Starting Google Sign-Out...');
    await GSign.signOut();
    console.log('Sign-Out successful');
    document.getElementById('user-info').innerHTML = '<h3>Signed Out</h3>';
  } catch (error) {
    console.error('Sign-Out failed:', error);
    document.getElementById('user-info').innerHTML = `
      <h3>Sign-Out Failed</h3>
      <p>Error: ${error.message}</p>
    `;
  }
};
