console.log('WBALLZ')


const alikeTypeDatabase = {}

alikeTypeDatabase.pres = []
alikeTypeDatabase.bond = []
alikeTypeDatabase.matrix = []
alikeTypeDatabase.oprah = []


const barack = {
    name: 'Barack Obama',
    occupation: 'President of the United States'
}

const sean = {
    name: 'Sean Connery',
    occupation: 'International Spy'
}

const morph = {
    name: 'Morpheus',
    occupation: 'Pilot'
}

const oprah = {
    name: 'Oprah Winfrey',
    occupation: 'Everything'
}


alikeTypeDatabase.pres.push(barack);
alikeTypeDatabase.bond.push(sean);
alikeTypeDatabase.matrix.push(morph);
alikeTypeDatabase.oprah.push(oprah);
// console.log(alikeTypeDatabase.pres)

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(alikeTypeDatabase, 'AlikeType')
const homeStorage = JSON.parse(localStorage.getItem("AlikeType"))