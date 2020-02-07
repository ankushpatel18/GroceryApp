import getDBInstance from './index';
import _ from 'lodash';
const TAG_PAITENT_REPO = 'ProductRepo';

export default class ProductRepo {

    constructor(realmInstance) {
        if (typeof (realmInstance) === 'object') {
            this.realmInstance = realmInstance;
            this.schemaName = 'Products_Schema';
        } else {
            throw new Error('### Invalid Realm instance');
        }
    }

    static build = () => {
        return new Promise((resolve, reject) => {
            getDBInstance().then(instance => {
                resolve(new ProductRepo(instance));
            })
                .catch(err => reject(err));
        })
    }

    getProducts = () => {
        try {
            let products = this.realmInstance.objects(this.schemaName);
            productsArray = _.values(products);
            return productsArray;
        }
        catch (err) {
            console.log("getProducts: " + err);
        }
    }

    getPrimaryKeyId() {
        if (this.realmInstance.objects(this.schemaName).max("id")) {
            return this.realmInstance.objects(this.schemaName).max("id") + 1;
        }
        return 1;
    }

    saveProduct = (product) => {
        try {
            this.realmInstance.write(() => {
                this.realmInstance.create(this.schemaName, { ...product, id: this.getPrimaryKeyId() });
            });
            console.log("saveVital:success ");
        } catch (err) {
            console.log("getProducts: " + err);
        }
    }

    deleteProducts = () => {
        try {
            this.realmInstance.write(() => {
                let oldProducts = this.realmInstance.objects(this.schemaName);
                this.realmInstance.delete(oldProducts);
            });
        } catch (err) {
            console.log("deleteProducts: " + err);
        }
    }
}

