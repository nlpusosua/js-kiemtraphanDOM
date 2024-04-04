users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function filterUsers(users) {
    return users.filter(user => user.age > 25 && user.isStatus === true);
  }

const filteredUsers = filterUsers(users);
console.log(filteredUsers);  

function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
  }
  
const sortedUsers = sortUsersByAge(users);
console.log(sortedUsers);