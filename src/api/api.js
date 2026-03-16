const API_BASE_URL = 'https://thearckay-portifolio-backend.onrender.com'
const getHeaders = () => {
    const token = localStorage.getItem('token')
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

const verificationTokenHandler = async (token) => {
    const response = await fetch(`${API_BASE_URL}/auth/verify/${token}`, {
        method: 'GET',
        headers: getHeaders()
    }) 

    const backendResponse = await response.json()
    return backendResponse

}

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

const getProjectsHandlerApiConnection = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'GET',
            headers: getHeaders()
        })
        const backendResponse = await response.json()
        return backendResponse

    } catch (error) {
        console.error('Error fetching projects:', error)
        throw error
    }
}

const createProjectHandlerApiConnection = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        })
        const backendResponse = await response.json()
        return backendResponse
    } catch (error) {
        console.error('Error creating project:', error)
        throw error
    }
}

const deleteProjectHandlerApiConnection = async (projectId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
            method: 'DELETE',
            headers: getHeaders()
        })
        const responseStatus = await response.status
        return responseStatus
    } catch (error) {
        console.error('Error deleting project:', error)
        throw error
    }
}

const getProjectHandlerApiConnection = async (projectId) => {
    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        method: 'GET',
        headers: getHeaders()
    })

    const backendResponse = await response.json()
    return backendResponse
}

const updateProjectHandle = async (formData, id) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE_URL}/projects/${id}`,{
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })

    const backendResponse = await response.json()
    return backendResponse
}

const getProjecsForFrontEnd = async () => {
    const response = await fetch(`${API_BASE_URL}/projects/frontend`,{
        method: 'GET'
    })

    const responseJson = response.json()
    return responseJson;
}

const deleteImageProjectByProjectId = async (projectId) => {
    const backendResponse = await fetch(`${API_BASE_URL}/projects/image/${projectId}`, {
        method: 'DELETE',
        headers: getHeaders()
    })

    const statusResponse = await backendResponse.status
    return statusResponse
}

export { 
    verificationTokenHandler,
    loginHandlerApiConnection, 
    getProjectsHandlerApiConnection, 
    createProjectHandlerApiConnection,
    deleteProjectHandlerApiConnection,
    getProjectHandlerApiConnection,
    updateProjectHandle,
    getProjecsForFrontEnd,
    deleteImageProjectByProjectId
}