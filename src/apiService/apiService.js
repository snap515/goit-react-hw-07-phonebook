import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://65ba8e4db4d53c06655330cb.mockapi.io/api/v1',
});
// const BASE_URL = 'https://65ba8e4db4d53c06655330cb.mockapi.io/api/v1/contacts';

export function fetchContacts() {
  const data = contactsApi.get('/contacts').then(resp => {
    return resp.data;
  });
  return data;
}

export function addContact(contact) {
  const { data } = contactsApi.post('/contacts', contact);
  return data;
}

export function deleteContact(id) {
  const { data } = contactsApi.delete(`/contacts/${id}`);
  return data;
}
