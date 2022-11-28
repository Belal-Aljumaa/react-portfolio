import { useEffect, useState } from 'react';
import './PageContact.scss';
import { database } from '../../data/firebase';
import { ref, push, child, update } from 'firebase/database';
import ContactData from '../../components/ContactData/ContactData';

const PageContact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [form, setForm] = useState({});

	const updateForm = () => {
		setForm({ name: name, email: email, subject: subject, message: message });
	};

	useEffect(() => {
		updateForm();
	}, [name, email, subject, message]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const newPostKey = push(child(ref(database), 'posts')).key;
		const updates: { [index: string]: any } = {};
		updates['/' + newPostKey] = form;
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
		return update(ref(database), updates);
	};

	return (
		<div className="contact">
			<div className="container">
				<div>
					<h3 className="heading">Reach Out Via Socials</h3>
					<ContactData />
				</div>
				<div className="content">
					<h3 className="heading">Or Fill Out This Form</h3>
					<form className="form" onSubmit={handleSubmit}>
						<div className="flex">
							<div>
								<label htmlFor="name">Name</label>
								<input
									type="text"
									name="name"
									id="name"
									value={name}
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<label htmlFor="name">Subject</label>
							<input
								type="text"
								name="subject"
								id="subject"
								value={subject}
								required
								onChange={(e) => setSubject(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								rows={6}
								value={message}
								required
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PageContact;
