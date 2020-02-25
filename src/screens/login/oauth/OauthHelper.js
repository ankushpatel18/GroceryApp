import getOauthManagerInstance from './OauthManagerHelper';

export default class OauthHelper {

    constructor(manager) {
        if (typeof (manager) === 'object') {
            this.manager = manager;
        } else {
            throw new Error('### Invalid Oauth Manager Instance');
        }
    }

    static build = () => {
        return new Promise((resolve, reject) => {
            getOauthManagerInstance().then(manager => {
                resolve(new OauthHelper(manager));
            })
                .catch(err => reject(err));
        })
    }

    authenticateUserViaGoogle() {
        return new Promise((resolve, reject) => {
            this.manager.authorize('google', { scopes: 'profile' }).then(resp => {
                console.log('Google Login Details' + JSON.stringify(resp))
                resolve(true);
                // const googleUrl = 'https://www.googleapis.com/plus/v1/people/me';
                // this.manager
                //     .makeRequest('google', googleUrl)
                //     .then(resp => {
                //         console.log('Google User Data -> ', resp.data);
                //     });

            })
                .catch(err => {
                    console.log('There was an error' + err.message);
                    reject(err);
                });
        })


    }

    authenticateUserViaFacebook() {
        return new Promise((resolve, reject) => {
            this.manager.authorize('facebook', { scopes: 'email' }).then(resp => {
                console.log('##FB Users Details' + JSON.stringify(resp))
                resolve(true);
                // this.manager
                //     .makeRequest('facebook', '/me?fields=email', {
                //         headers: { 'Content-Type': 'application/java' }
                //     })
                //     .then(resp => {
                //         console.log('##FB Login Data -> ', resp.data);
                //     });

            })
                .catch(err => {
                    console.log('There was an error' + err.message);
                    reject(err);
                });
        })

    }

}