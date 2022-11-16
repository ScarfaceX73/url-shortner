import axios from 'axios'
const login = async (payload) => {
    try {
        const url = "https://jwt-auth-be-123.herokuapp.com/users/login"
        const response = await axios.post(url, { ...payload }, { withCredentials: true, responseType: 'json' })
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

export { login }