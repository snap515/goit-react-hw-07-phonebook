import axios from 'axios';

const BASE_URL = 'https://65ba8e4db4d53c06655330cb.mockapi.io/api/v1/contacts';

export function fetchContacts() {
  const data = axios.get(`${BASE_URL}`).then(resp => {
    return resp.data;
  });
  return data;
}

export function addContact(contact) {
  return axios.post(`${BASE_URL}`, contact);
}

export function deleteContact(id) {
  return axios.delete(`${BASE_URL}/${id}`);
}
