// Form.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Form.module.css';

const FormPage = () => {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [status, setStatus] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    const fetchContacts = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/contacts/fetchAll');
            setContacts(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('/contacts/addContact', formData);
            setStatus('success');
            setFormData({ name: '', phone: '' });
            fetchContacts();
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await axios.delete(`/contacts/${id}`);
            setContacts((prev) => prev.filter((c) => c._id !== id));
        } catch (error) {
            console.error(error);
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h2 className={styles.title}>Add Contact</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className={styles.input}
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <button
                        className={`${styles.button} ${status === 'loading' ? styles.buttonLoading : ''}`}
                        type="submit"
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Sending...' : 'Submit'}
                    </button>

                    {status === 'success' && <p className={styles.success}>✅ Contact added successfully!</p>}
                    {status === 'error' && <p className={styles.error}>❌ Something went wrong. Try again.</p>}
                </form>
            </div>

            <div className={styles.card}>
                <h2 className={styles.title}>Contacts</h2>
                {loading ? (
                    <p className={styles.loadingText}>Loading...</p>
                ) : contacts.length === 0 ? (
                    <p className={styles.emptyText}>No contacts yet</p>
                ) : (
                    <ul className={styles.list}>
                        {contacts.map((contact) => (
                            <li key={contact._id} className={styles.item}>
                                <div className={styles.avatar}>
                                    {contact.name.charAt(0).toUpperCase()}
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{contact.name}</span>
                                    <span className={styles.phone}>{contact.phone}</span>
                                </div>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => handleDelete(contact._id)}
                                    disabled={deletingId === contact._id}
                                >
                                    {deletingId === contact._id ? 'Deleting...' : 'Delete'}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FormPage;
