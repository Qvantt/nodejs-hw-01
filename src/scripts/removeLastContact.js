import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  const contact = await readContacts();
  contact.pop();
  await writeContacts(contact);
};

removeLastContact();
