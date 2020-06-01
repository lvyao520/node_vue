import axios from 'axios'
const instance = axios.create({
        baseUrl: 'http://localhost:3000/admin/api'
    }

)
export default instance