import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const addToServer = newPerson => {  // takes in a new person object
    let request = axios.post(baseUrl, newPerson);
    return request
    .then(response => response.data)
    .catch(err => alert(`${err.message}`));
}

const deletePerson = id => {  // takes in the id of the person obj to delete
    let request = axios.delete(`${baseUrl}/${id}`);
    return request
    .then(response => {
        return response.status;
    })
    .catch(error => alert(`${error.message}`));

}

const update = (id, newPerson) => {  // takes in the id of object to replace and the new person
    let request = axios.put(`${baseUrl}/${id}`, newPerson);
    return request
    .then(response => response.data)
    
}
export default {addToServer, deletePerson, update}