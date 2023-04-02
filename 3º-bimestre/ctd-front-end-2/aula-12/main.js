const nameRef = document.querySelector('#name')
const actionButtonRef = document.querySelector('#actionButton')

function nextPage() {

    const user = {
        name: nameRef.value,
        age: 22,
        phone: '21112212',
        picture: 'https://asdede'
    }

    const userJson = JSON.stringify(user)

    localStorage.setItem('user', userJson)

}

actionButtonRef.addEventListener('click', nextPage)