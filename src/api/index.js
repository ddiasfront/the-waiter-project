import { auth, database, provider } from "../constants/firebase";

export function getMenu(key, callback) {
    database.ref('menu').once('value')
        .then(function(snapshot) {
            menu = snapshot.val();
            callback(key, menu);
        })
        .catch(error => callback(false, null, error));
}
