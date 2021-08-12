//Gettind data from localStorage
const data = JSON.parse(localStorage.getItem('persist:root'))
let users
if (data) {
  users = JSON.parse(data.data)
}

export default { users, data }
