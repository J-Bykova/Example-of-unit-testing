const axios = require('axios');
const functions = {
  getSumOfNums: (firstNum, secondNum) => firstNum + secondNum,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {firstName: 'Jenny', lastName: 'Bykova'};
    return user;
  },
  fetchUser: (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data)
    .catch(err => 'error')
}

module.exports = functions;

