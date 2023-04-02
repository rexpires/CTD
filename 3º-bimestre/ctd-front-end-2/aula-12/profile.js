const userNameRef = document.querySelector('#userName')
const userAgeRef = document.querySelector('#userAge')
const user = JSON.parse(localStorage.getItem('user'))

userNameRef.innerText = user.name
userAgeRef.innerText = user.age