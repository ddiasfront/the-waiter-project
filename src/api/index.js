import { auth, database, provider } from "../constants/firebase";

/** Get the menu first items */

export const getMenuOnEnter = () => new Promise((resolve) => {
    let query = database.ref('menu').orderByKey().startAt('0').limitToFirst(5)
    query.on('value', function(snap) {
        let menu = snap.val();
        snap.forEach(function(childSnapshot, index, array) {
            if (snap.val().length -1 == childSnapshot.key ){
                resolve([childSnapshot.key, menu]);
            }
        });
    })
})

/**
 * Gets the items of the menu based on parameters ( lazy loading ).
 * @constructor
 * @param {string} startAt - Key of the starting item.
 * @param {number} limit - Limit of the return.
 */

export const getMenuOnLazyLoading = (startAt, limit) => new Promise((resolve) => {
    var newItems = []
    let queryStartAt = parseInt(startAt) + 1
    let query = database.ref('menu').orderByKey().startAt(queryStartAt.toString()).limitToFirst(limit)

    query.on('value', function(snap){
        if (Array.isArray(snap.val())) {
            var myObj = []
            snap.forEach((item) => {
                myObj.push({
                    Name: item.val().Name,
                    Description:item.val().Description,
                    Photo: item.val().Photo,
                    Price: item.val().Price,
                    key: item.key
                })
            })
            resolve(myObj)
        }
        else if (typeof snap.val() === 'object') {
            newItems = []
            snap.forEach(function(item) {
                newItems.push({
                    Name: item.val().Name,
                    Description:item.val().Description,
                    Photo: item.val().Photo,
                    Price: item.val().Price,
                    key:item.key})
            })
            resolve(newItems)
        }
    })
})