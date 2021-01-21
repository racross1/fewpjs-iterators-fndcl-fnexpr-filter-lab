const { objectContaining } = require("expect")

function findMatching(arr, str){
    return arr.filter(n => {
        return n.toUpperCase() === str.toUpperCase()
    }) 
}


function fuzzyMatch(arr, str) {
    return arr.filter(n => {
        return n[0].toUpperCase() === str[0].toUpperCase()
    })     
}

function matchName(arr, str) {
    return arr.filter(obj => {
        if (obj['name'].toUpperCase() === str.toUpperCase()) {
            return obj
        }        
    })
}
    