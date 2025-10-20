
function getRandomInt() {
    return Math.floor(Math.random() * 6)
}
function getEmail(name, company) {
    let email = name + "@" + company + ".is";
    email = removeIcelandicLetters(email);
    return email;
}
function removeIcelandicLetters(str) {
  const map = {
    'á': 'a', 'ð': 'd', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ý': 'y',
    'þ': 'th', 'æ': 'ae', 'ö': 'o',
    'Á': 'A', 'Ð': 'D', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U', 'Ý': 'Y',
    'Þ': 'Th', 'Æ': 'Ae', 'Ö': 'O', ' ':''
  };
 
  return str.replace(/[áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ ]/g, match => map[match]);
}

let companies = ["Bónus", "Hagkaup", "Olís", "Stórkaup", "Zara"]
companies.push("Eldum rétt");
getEmail("Kalli", "Zara");


let employee = {
    name: "Gunnar Helgason",
    age: 36,
    country: "Iceland",
    company: companies[getRandomInt()]
}
let employee2 = {
    name: "Felix Bergsson",
    age: 26,
    country: "Iceland",
    company: companies[getRandomInt()]
}
let employee3 = {
    name: "Gísli Marteinsson",
    age: 16,
    country: "Iceland",
    company: companies[getRandomInt()]
}
let employees = [employee, employee2, employee3];
employees.forEach(tempEmployee =>
    console.log(getEmail(tempEmployee.name, tempEmployee.company)
));

let firstEmployee = employees.find(emp => emp.age > 25);
//console.log(firstEmployee);

//1. Print only employee names
employees.forEach(tempEmployee => {
    const div = document.createElement("div");
    div.id = removeIcelandicLetters(tempEmployee.name)
    div.className = removeIcelandicLetters(tempEmployee.company.toLowerCase())
    output.append(div)
    const pname = document.createElement("p");
    pname.textContent = "Nafn: "+ tempEmployee.name;
    div.appendChild(pname);
    const page = document.createElement("p");
    page.textContent = "Aldur: "+ tempEmployee.age;
    div.appendChild(page);
    const pcompany = document.createElement("p");
    pcompany.textContent = "Fyrirtæki: "+ tempEmployee.company;
    div.appendChild(pcompany);
    const pemail = document.createElement("p");
    pemail.textContent = "Email: "+ getEmail(tempEmployee.name, tempEmployee.company);
    div.appendChild(pemail);
}

);
//Bónus bleikur
//Hagkaup appelsínugulur
//Olís Grænn
//Zara svartur með hvítum stöfum
//Eldum rétt ljósgrænt
//2. Count how many employees work at each company
let companyCounts = {};
employees.forEach(currentEmployee => {
    if(!companyCounts[currentEmployee.company]){
        companyCounts[currentEmployee.company] = 0;
    }
    companyCounts[currentEmployee.company]++;
})
console.log(companyCounts);

//3. Print only the names of employees older than 25
employees.forEach(currentEmployee => {
    if(currentEmployee.age > 25) {
        console.log(currentEmployee.name);
    } else {
        console.log("Sorry you are not old enough")
    }
})





