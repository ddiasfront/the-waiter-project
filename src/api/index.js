import { auth, database, provider } from "../constants/firebase";

export function getMenuFirst(key, callback) {
    let query = database.ref('menu').orderByKey().startAt('0').limitToFirst(5)
    query.on('value', function(snap) {
        menu = snap.val();
        keyVal = snap.key
        callback(key, menu);
        snap.forEach(function(childSnapshot, index, array) {
            if (snap.val().length -1 == childSnapshot.key ){
            callback('LastQueriedItemKey', childSnapshot.key)
            }
        });
    })
}

export function getRange(startAt, _handleQueryState, _handleState) {
    var newItems = []
    let queryStartAt = parseInt(startAt) + 1
    console.log(queryStartAt, 'starting at')
    let query = database.ref('menu').orderByKey().startAt(queryStartAt.toString()).limitToFirst(5)
    query.on('value', function(snap){

        if (Array.isArray(snap.val())) {
            console.log(snap.val(), 'array')
            var myObj = []
            snap.val().map((item) => {
                myObj.push(item)
            })   
            _handleQueryState(myObj)
        }
        else if (typeof snap.val() === 'object') {
            console.log(snap.val(), 'object')
            newItems = []
            snap.forEach(function(item) {
                newItems.push(item.val())
                console.log(item.val(), 'item to array')
            })
            _handleQueryState(newItems)
        }
        // else {
        //     console.log(snap.val(), 'array')
        // }

        // console.log(snap.val())



     

        snap.forEach(function(item) {
            _handleState('LastQueriedItemKey', item.key)
        })

        // console.log(myObj[myObj.length-1] ,'Last item from object')


        // snap.forEach(function(item) {
        //     let newitem = item.val()
        //     newItems.push(newitem)
        //     console.log(newitem, 'new item')
        //     console.log(newItems, 'new items')
        //     _handleQueryState(newItems)
        //     _handleState('LastQueriedItemKey', item.key)
        // });
        // _handleQueryState(itemsQueried)
    })
    // console.log(newItems, 'out of scope query')
}