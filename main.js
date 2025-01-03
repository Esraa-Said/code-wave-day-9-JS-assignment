const usersDiv = document.querySelector(".users");
let number = Number(prompt("enter the no. of persons:"));

while (isNaN(number)) {
  number = Number(prompt("Invalid input\nenter the no. of persons:"));
}
if (number > 0) {
  let table = document.createElement("table");
  table.innerHTML = `<thead><tr><th>Name</th><th>Age</th></tr></thead>`;
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (let i = 1; i <= number; i++) {
    let name = prompt(`enter user ${i} name: `);
    while (name.length <= 3 || name.length >= 10) {
      name = prompt(
        "the name length should be more than 3 characters and less than 10 characters."
      );
    }

    let age = Number(prompt(`enter user ${i} age: `));
    while (isNaN(age) || age < 10 || age >= 60) {
      age = prompt(
        "the age should be number greater than 10 and less than 60."
      );
    }
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${age}</td>`;
    tbody.appendChild(row);
  }

  usersDiv.appendChild(table);
} else {
    let h1 = document.createElement("h1");
    h1.innerHTML = "NO Persons";
    usersDiv.appendChild(h1);
}
