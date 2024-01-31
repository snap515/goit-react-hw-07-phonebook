import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  //имя слайса
  name: 'contacts',
  //начальное состояние редьюсера слайса
  initialState,
  //объект редьюсеров
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

//генератор екшенов
export const { addContact, removeContact, filterContacts } =
  contactsSlice.actions;
// редьюсер слайса
export const contactsReducer = contactsSlice.reducer;
