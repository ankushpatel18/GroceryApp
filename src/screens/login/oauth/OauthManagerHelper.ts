import OAuthManager from 'react-native-oauth';

var manager: OAuthManager = null;

function initialize(resolve, reject) {
    console.log('initializing auth');
    try {
        manager = new OAuthManager('com.eshop');
        manager.configure({
            google: {
                callback_url: 'com.eshop',
                client_id: '711282872015-ivgpdg0brh0dmgq218nr1sqcht4qs6g9.apps.googleusercontent.com',
                client_secret: 'O2p7FposZhpNQJTIe6Ut1o4B'
            },
            facebook: {
                client_id: '785330895286911',
                client_secret: 'c1019248d99fa78c31a345df3b246aad'
            }
        });
        resolve(manager);
    } catch (e) {
        console.log(e);
        reject(e);
    }
}

export default function getOauthManagerInstance(): Promise<OAuthManager> {
    return new Promise((resolve, reject) => {
        if (manager) {
            resolve(manager);
        } else {
            initialize(resolve, reject);
        }
    });
}