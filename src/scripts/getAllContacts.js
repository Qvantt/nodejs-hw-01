import { readContacts } from '../utils/readContacts.js';

export const getAllContactss = () => readContacts();

console.log(await getAllContactss());
