let closeAppRef = document.querySelector('#closeApp')

closeAppRef.addEventListener('click',logoutUser)


function logoutUser() {
    console.log('Hello')
    window.location.href ='/index.html'
    localStorage.clear()
}