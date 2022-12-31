import axios from 'axios'
export const apiGetRequest = async (bodyParam) =>{
    return axios({
        method: 'GET',
        url:"http://localhost:4000/users",
        headers : {
            'content-type': 'application/json',
        },
        params:bodyParam,
    })
}