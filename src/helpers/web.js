const backendHost = 'https://ceevo-server.herokuapp.com/';
// const backendHost = 'http://localhost:2000/'

export function register(data) {
    return new Promise((res, rej) => {

        fetch(`${backendHost}auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)
            });
    })


}
export function login(email, password) {
    return new Promise((res, rej) => {

        fetch(`${backendHost}auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)

            });
    })
}
export function verify(userId, uniqueString) {
    return new Promise((res, rej) => {

        fetch(`${backendHost}auth/verify/${userId}/${uniqueString}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)
            });
    })

}
export function forgottenPassword(email) {
    return new Promise((res, rej) => {

        fetch(`${backendHost}users/confirm-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)

            });
    })
}
export function changePassword(password, userId) {
    return new Promise((res, rej) => {

        fetch(`${backendHost}users/change-password/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)

            });
    })
}

export function getRandomJoke() {
    return new Promise((res, rej) => {
        fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd71cac2453mshaa620c20fed535bp18040cjsna6dd45bb989b',
                'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                res(result)
            }).catch((err) => {
                rej(err)
            });
    })
}