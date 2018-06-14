import { auth, database, provider } from "../constants/firebase";

export function getMenu(key, callback, limitToFirst, limitToLast) {
    database.ref('menu').orderByChild('Name').limitToFirst(limitToFirst).limitToLast(limitToLast)
        .then(function(snapshot) {
            menu = snapshot.val();
            callback(key, menu);
        })
        .catch(error => callback(false, null, error));
}
