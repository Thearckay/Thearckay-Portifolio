const API_BASE_URL = 'http://localhost:8080'

const loginHandlerApiConnection = async (jsonToLogin) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonToLogin
        })
        const backendResponse = await response.json()
        return backendResponse

    } catch (error) {
        console.error('Error during login:', error)
        throw error
    }
}

export { loginHandlerApiConnection }