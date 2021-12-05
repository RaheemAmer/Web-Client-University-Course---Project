const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')


Form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (Password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (Password.value.length >= 15) {
        messages.push('Password must be less than 15 characters')
    }

    if (Password.value == 'password') {
        messages.push('Password is weak')
    }



    if (messages.length > 0) {
        e.preventDefalt()
        errorElement.innerText = messages.join(',')
    }
})