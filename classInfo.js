

class Human {
  constructor(firstName, lastName, age, [language]) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  run() {
    console.log(`(${this.name})`)
  }
   printInfo ()  {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`language: ${this.language}`)
  }
  canVote()  {
    if (this.age >= 18) {
      return console.log(true)
      }
      else {
        return console.log(false)
      }
    }
  }
    /*
    mostSkilledDev(${this.firstName}, ${this.firstName}) {
      if (this.language.length > this.language.length) {
        console.log(`${this.firstName} is born to code.`)} else if (this.language.length < this.language.length) {
          console.log(`${this.firstName} is born to code.`)
        }
        else if (this.language.length === this.language.length) { 
          console.log(`Draw:${this.firstName} and ${this.firstName} are lead devs.`)
        }
      }
    }
    */
    const alice = new Human('Alice', 'Liddell', 27,['php', 'c', 'python', 'Ruby'])
    const bob = new Human('Bob', 'Lemon', 30, ['Alice', 'Charlie'])
    const charlie = new Human('Charlie', 'Charlot', 8, ['Js', 'Css', 'Html', 'Reactjs'])
   
  alice.run(alice)