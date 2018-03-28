import {Database, aql} from 'arangojs';

const db = async() => {
  try {
    const db_connect = new Database();
    db_connect.useDatabase("ord");
    db_connect.useBasicAuth("andrew", "password");
  }
  catch (err) {
    console.log("error", err);
  }

}

export default db
