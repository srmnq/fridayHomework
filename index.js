console.clear()

const people = [
  {name: 'Dalia', role: 'boss', age: 29},
  {name: 'Gesche', role: 'advisor', age: 29},
  {name: 'Jan', role: 'coach', age: 35},
  {name: 'Jerry', role: 'head coach', age: 39},
]

// without Dalia
const staff = people.filter(person => person.name !== 'Dalia')

console.log(isBossInList(people)) // -> true
console.log(isBossInList(staff)) // -> false

function isBossInList (list) {
 return list.some(person => person.role.includes('boss'))
}


console.log(getRoles(staff)) // -> ['advisor', 'coach', 'head coach']

function getRoles (list) {
  return list.map(person => person.role)
}


console.log(getRolesAlphabetically(staff)) 
// -> ['advisor', 'coach', 'head coach']

function getRolesAlphabetically (list) {
  // andere richtung =return list.reverse().map(person => person.role)
  return list.sort().map(person => person.role)
}


console.log(getOldestMember(people)) 
// -> {name: 'Jerry', age: 39}

function getOldestMember (list) {
  const item =list.sort((a,b) => b.age-a.age)[0]
  const newObj = {name : item.name, age : item.age}
  return newObj
}


console.log(totalAge(people)) 
// -> 132

function totalAge (list) {
 return list.reduce((a,b) => (a+b.age),0)
}


console.log(getRoleWithLongestName(people)) 
// -> head coach

function getRoleWithLongestName (list) {
 
  return list.sort((a,b) =>b.role.length-a.role.length)[0].role
  //sort((a,b) => a.role.length-b.role.length)
}


console.log(getShortestName(people)) 
// -> 'Jan'

function getShortestName (list) {
  return list.sort((a,b)=> (a.name.length-b.name.length))[0].name
}


console.log(filterByAge(people, 29)) 
// -> ['Dalia', 'Gesche']

function filterByAge (list, age) {
 return list.filter(person => person.age ===age).map(person => person.name)
}


console.log(filterOlderThan(people, 29)) 
// -> ['Jan', 'Jerry']

function filterOlderThan (list, age) {
  return list.filter(person => person.age > age).map(person => person.name) 
}


console.log(addSalaryByMultiplyingAgeWith1000(people)) 
/* -> [
  {name: 'Dalia', role: 'boss', age: 29, salary: 29000},
  {name: 'Gesche', role: 'advisor', age: 29, salary: 29000},
  {name: 'Jan', role: 'coach', age: 34, salary: 34000},
  {name: 'Jerry', role: 'head coach', age: 39, salary: 39000},
]
*/

function addSalaryByMultiplyingAgeWith1000 (list) {
  list.forEach(person => person.salary = (person.age*1000))
  return list
}


console.log(justNameAndSalary(people)) 
/* -> [
  {name: 'Dalia', salary: 29000},
  {name: 'Gesche', salary: 29000},
  {name: 'Jan', salary: 34000},
  {name: 'Jerry', salary: 39000},
]
*/

function justNameAndSalary (list) {
  const nameAndSalary = []
  list.forEach(object => nameAndSalary.push({name:object.name, salary:object.salary}))
// return const NameandSalary {name:list.name, salary:list.salary}
  return nameAndSalary
}


console.log(totalSalaryOfTutorsAndAdvisors(people)) 
// -> 63000

function totalSalaryOfTutorsAndAdvisors (list) {
 return list.filter(person => (person.role === 'coach' || person.role === 'advisor')).reduce((a,b)=>a+b.salary,0)
}


//console.log(salaryHTMLList(people)) 
// -> '<ul><li>29000</li><li>29000</li><li>34000</li><li>39000</li></ul>'

//function salaryHTMLList (list) {
//return'<ul>'+ String(list.map(person => '<li>' + person.salary + '<li>')) +'<ul>'
   }

//console.log(salaryHTMLList(people)) 
// -> '<ul><li>29000</li><li>29000</li><li>34000</li><li>39000</li></ul>'

function salaryHTMLList (list) {
const html = list.reduce((a,b)=>a+'<li>' + b.salary + '<li>', '')
 return '<ul>' + html + '<ul>'

}