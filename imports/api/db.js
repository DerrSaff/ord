import {Database, aql} from 'arangojs';

let db = new Database(`http://127.0.0.1:8529`);
db.useDatabase("ord");
db.useBasicAuth("andrew", "password");

export default db