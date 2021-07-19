
const http = new easyHTTP();

// GET users
// const users = http.get('https://jsonplaceholder.typicode.com/userss')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// User data 
const data = {
    name: 'shri ram',
    username: 'shriram',
    email: 'shriram@ayodhya.com'
  }

// Create User
// const user = http.post('https://jsonplaceholder.typicode.com/users',data)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/11')
.then(data => console.log('user deleted'))
.catch(err => console.log(err));