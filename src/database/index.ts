import Realm from 'realm';

import DBSCHEME from './schema';
import Config from './config';

var dbInstance: Realm = null;


function initialize(resolve, reject) {
    const dbConfig = {
        path: Config.DB_PATH,
        schema: DBSCHEME,
        schemaVersion: Config.DB_SCHEMA_VERSION,
        deleteRealmIfMigrationNeeded: true
    };
    Realm.open(dbConfig).then(db => {
        dbInstance = db;
        resolve(db);
    })
        .catch(err => {
            reject(err);
        })
}

export default function getDBInstance(): Promise<Realm> {
    return new Promise((resolve, reject) => {
        if (dbInstance && !dbInstance.isClosed) {
            resolve(dbInstance);
        } else {
            initialize(resolve, reject);
        }
    });
}

export function closeDBInstance() {
    if (dbInstance && !dbInstance.isClosed) {
        dbInstance.close();
    }
}

export function cleanUpRealm() {
    if (dbInstance) {
        dbInstance.write(() => {
            for (let schemaIndex in DBSCHEME) {
                const obj = dbInstance.objects(DBSCHEME[schemaIndex].name);
                dbInstance.delete(obj);
            }
        })
    }
}