import {Database} from 'arangojs';

const db = async() => {
  try {
    const db_connect = new Database();
    db_connect.useDatabase("ord");
  }
  catch (err) {
    console.log("error", err);
  }

}

export default db
