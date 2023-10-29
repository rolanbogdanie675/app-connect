/* sophisticated_code.js */

// This code generates a unique ID for each user and stores their personal information in an array
// It includes functions for searching, editing, and deleting user data

let users = [];

class User {
  constructor(firstName, lastName, email, age) {
    this.id = generateID();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}

function generateID() {
  let id = '';
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 8;
  
  for (let i = 0; i < idLength; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return id;
}

function addUser(firstName, lastName, email, age) {
  const newUser = new User(firstName, lastName, email, age);
  users.push(newUser);
  
  console.log(`User ${newUser.id} added successfully.`);
}

function findUserById(id) {
  const user = users.find(user => user.id === id);
  
  if (user) {
    console.log(`User with ID ${id} found:\n`, user);
  } else {
    console.log(`User with ID ${id} does not exist.`);
  }
}

function editUser(id, updatedFields) {
  const user = users.find(user => user.id === id);
  
  if (user) {
    Object.keys(updatedFields).forEach(field => {
      user[field] = updatedFields[field];
    });
    
    console.log(`User ${id} updated successfully.`);
  } else {
    console.log(`User with ID ${id} does not exist.`);
  }
}

function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  
  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    console.log(`User ${deletedUser.id} deleted successfully.`);
  } else {
    console.log(`User with ID ${id} does not exist.`);
  }
}

// Usage examples:

addUser('John', 'Doe', 'john.doe@example.com', 25);
addUser('Jane', 'Smith', 'jane.smith@example.com', 30);

findUserById(users[0].id);

editUser(users[1].id, { age: 35, email: 'jane.updated@example.com' });
findUserById(users[1].id);

deleteUser(users[1].id);

findUserById(users[1].id);