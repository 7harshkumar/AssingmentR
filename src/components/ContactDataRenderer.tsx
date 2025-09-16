import React, {useState, useMemo} from "react";
import type { IContact } from '../types/contact.ts';
import styles from './ContactDataRenderer.module.css';

const contacts: IContact[] = [
    {
        id: 1, name: 'Rohan', email: 'wxapmlw@gmail.com', phoneNumber: '123453352342353' 
    },
     {
        id: 2, name: 'Mohan', email: 'mohan@gmail.com', phoneNumber: '37866873527786532' 
    },
     {
        id: 3, name: 'Ayush', email: 'ayush@gmail.com', phoneNumber: '7858765267825' 
    },
     {
        id: 4, name: 'Priyanshu', email: 'priyanshu@gmail.com', phoneNumber: '37867863324' 
    },
];


const ContactDataRenderer: React.FC = () => {
    const [filterQuery, setFilterQuery] = useState('');

    const filteredContacts = useMemo(() => {
        if(!filterQuery){
            return contacts;
        }
        return contacts.filter((contact) => {
            const queryLower = filterQuery.toLowerCase();
            const nameMatch = contact.name.toLowerCase().includes(queryLower);
            const emailMatch = contact.email.toLowerCase().includes(queryLower);
            return nameMatch || emailMatch;
        });
    }, [filterQuery]);
    return (
        <div className = {styles.container}>
        <h1 className = {styles.header}>
            Contact List
        </h1>
        <input type = "text" 
        placeholder = "Filter by name or email....."
        className = {styles.filterInput}
        value = {filterQuery}
        onChange = {(e) => setFilterQuery(e.target.value)}/>
        <div className = {styles.contactList}>
            {
                filteredContacts.map((contact) => (
                    <div key = {contact.id} className = {styles.contactItem}>
                        <h3 className = {styles.contactName}>{contact.name}</h3>
                        <p className = {styles.contactDetail}>{contact.email}</p>
                        <p className = {styles.contactDetail}>{contact.phoneNumber}</p>
                    </div>
                ))
            }
        </div>
        </div>
    )
};

export default ContactDataRenderer;
