import getDBInstance from './index';
import _ from 'lodash';
const TAG_ORDERS_REPO = 'OrdersRepo';

export default class OrdersRepo {

    constructor(realmInstance) {
        if (typeof (realmInstance) === 'object') {
            this.realmInstance = realmInstance;
            this.schemaName = 'Orders_Schema';
        } else {
            throw new Error('### Invalid Realm instance');
        }
    }

    static build = () => {
        return new Promise((resolve, reject) => {
            getDBInstance().then(instance => {
                resolve(new OrdersRepo(instance));
            })
                .catch(err => reject(err));
        })
    }

    getOrders = () => {
        try {
            let orders = this.realmInstance.objects(this.schemaName);
            ordersArray = _.values(orders);
            return ordersArray;
        }
        catch (err) {
            console.log(TAG_ORDERS_REPO+"getOrders: " + err);
        }
    }

    getPrimaryKeyId() {
        if (this.realmInstance.objects(this.schemaName).max("id")) {
            return this.realmInstance.objects(this.schemaName).max("id") + 1;
        }
        return 1;
    }

    saveOrder = (order) => {
        try {
            this.realmInstance.write(() => {
                this.realmInstance.create(this.schemaName, { ...order, id: this.getPrimaryKeyId() });
            });
            console.log(TAG_ORDERS_REPO+"saveOrder:success ");
        } catch (err) {
            console.log(TAG_ORDERS_REPO+"saveOrder: " + err);
        }
    }

    deleteOrders = () => {
        try {
            this.realmInstance.write(() => {
                let orders = this.realmInstance.objects(this.schemaName);
                this.realmInstance.delete(orders);
            });
        } catch (err) {
            console.log("deleteOrders: " + err);
        }
    }
}
