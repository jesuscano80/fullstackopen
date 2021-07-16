import axios from "axios";
const url="http://localhost:3001/persons"

const getAll = ()=>{
    return axios.get(url)
    
}
const postOne= (person)=>{
    return axios.post(`${url}`, person)
}

const getOne = (person)=>{
    return axios.get(`${url}/${person}`)
}

const update = (person)=>{
    return axios.put(`${url}/${person}`)
}

const deleteOne = (person)=>{
    return axios.delete(`${url}/${person}`)
}

const exported={getAll, getOne, update, deleteOne, postOne}

export default exported;