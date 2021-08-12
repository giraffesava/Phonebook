//Gettind data from localStorage
const data = JSON.parse(localStorage.getItem('persist:root'))
const users = data && JSON.parse(data.data)

export default users
