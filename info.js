const alice = {
  firstName: 'Alice',
  lastName : 'Liddell',
  age: 27,
  language: ['Js', 'Css', 'Html', 'Reactjs'],
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Scala', 'Ruby', 'Swift', 'r'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['php', 'c', 'python', 'Ruby',],
}

const printInfo = (person) => {
  // person is an object
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
  console.log(`language: ${person.language}`)
}
const canVote = (person) => {
  if (person.age >= 18) {
    return console.log(true)
    }
    else {
      return console.log(false)
    }
  }
  const mostSkilledDev = (alice, bob) => {
  if (alice.language.length > bob.language.length) {
    console.log(`${alice.firstName} is born to code.`)} else if (alice.language.length < bob.language.length) {
      console.log(`${bob.firstName} is born to code.`)
    }
    else if (alice.language.length === bob.language.length) { 
      console.log(`Draw:${alice.firstName} and ${bob.firstName} are lead devs.`)
    }

  }
printInfo(alice)
canVote(alice)
console.log(' ')

printInfo(bob)
canVote(bob)
console.log(' ')

printInfo(charlie)
canVote(charlie)

mostSkilledDev(alice, bob)
