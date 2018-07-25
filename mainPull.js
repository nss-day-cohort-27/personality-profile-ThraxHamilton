function loadDatabase(nameTag){
    const databaseString = localStorage.getItem(nameTag);
    return JSON.parse(databaseString);
  }
  
  loadDatabase('AlikeType')

  function personOne (array) {
     const newList = `${array.name}`
     return newList
  }

  function personTwo (array){
      const newList = `${array.name}`
      return newList
  }

  function personThree (array){
    const newList = `${array.name}`
    return newList
}

function personFour (array){
    const newList = `${array.name}`
    return newList
}
  

const getbarry = document.querySelector('#barry')
console.log(personOne(alikeTypeDatabase.pres[0]));
// getbarry.innerHTML = personOne(alikeTypeDatabase[0]);

const getseah = document.querySelector('#sean')
console.log(personTwo(alikeTypeDatabase.bond[0]));

const getmorph = document.querySelector('#morph')
console.log(personThree(alikeTypeDatabase.matrix[0]));

const getoprah = document.querySelector('#oprah')
console.log(personFour(alikeTypeDatabase.oprah[0]));



// getbarry.innerHTML = personOne((alikeTypeDatabase.barry[0]));