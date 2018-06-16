import { auth, database, provider } from "../constants/firebase";

//QUERY FOR GETTING FIRST 5 MENU ITEMS ON LOADING MENU
export function getMenuFirst(key, callback) {
    let query = database.ref('menu').orderByKey().startAt('0').limitToFirst(5)
    query.on('value', function(snap) {
        menu = snap.val();
        keyVal = snap.key
        callback(key, menu);
        //STORE ON THE HOC STATE THE LAST QUERIED ITEM KEY SO WE CAN GET THE NEXT QUERY FROM IT ( CALLBACK )
        snap.forEach(function(childSnapshot, index, array) {
            if (snap.val().length -1 == childSnapshot.key ){
            callback('LastQueriedItemKey', childSnapshot.key)
            }
        });
    })
}


// QUERY FOR GETTING ITENS BY RANGE SPECIFIED VIA ARGUMENT, WICH IS THE STARTAT ARGUMENT, LIMITING TO 5 ITENS BY QUERY
export function getRange(startAt, _handleQueryState, _handleState) {
    var newItems = []
    let queryStartAt = parseInt(startAt) + 1
    let query = database.ref('menu').orderByKey().startAt(queryStartAt.toString()).limitToFirst(5)
    // FIREBASE SOMETIMES RETURNS ARRAYS OR OBJECTS, HERE WE THREAT EACH TYPE ON A DIFFERENT WAY SO WE CAN RETURN ALWAYS AN TYPE OF OBJECT WICH IS ARRAY
    query.on('value', function(snap){
        if (Array.isArray(snap.val())) {
            var myObj = []
            snap.val().map((item) => {
                myObj.push(item)
            })   
            _handleQueryState(myObj)
        }
        else if (typeof snap.val() === 'object') {
            newItems = []
            snap.forEach(function(item) {
                newItems.push(item.val())
            })
            _handleQueryState(newItems)
        }
        // ALWAYS SETTING THE LAST ITEM QUERIED ON THE HOC STATE SO WE CAN CONTINUE TO QUERY FROM IT
        snap.forEach(function(item) {
            _handleState('LastQueriedItemKey', item.key)
        })
    })
}