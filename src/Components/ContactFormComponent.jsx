import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_y77t8fp';
const TEMPLATE_ID = 'template_v6d8srb';
const USER_ID = 'VL54vyFgVe82gAIGQ';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data, e) => {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		e.target.reset();
		// console.log(data);
	};

	return (
		<div className='contactFormComponent'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='inputDiv'>
					<label>Email</label>
					<input
						type='email'
						name='user_email'
						placeholder='Email'
						{...register('user_email', {
							required: true,

							maxLength: 80,
							pattern: /^\S+@\S+$/i,
						})}
					/>
					<small>
						{errors.user_email &&
							errors.user_email.type === 'required' &&
							'Email is required'}

						{errors.user_email &&
							errors.user_email.type !== 'required' &&
							'Email is invalid'}
					</small>
				</div>

				<div className='inputDiv'>
					<label>Name</label>
					<input
						type='text'
						name='user_name'
						placeholder='Name'
						{...register('user_name', {
							required: true,
							maxLength: 35,
							minLength: 2,
						})}
					/>
					<small>
						{errors.user_name &&
							errors.user_name.type === 'required' &&
							'Name is required'}

						{errors.user_name &&
							errors.user_name.type !== 'required' &&
							'Name is invalid'}
					</small>
				</div>
				<div className='inputDiv message'>
					<label>Message</label>
					<textarea
						type='text'
						name='user_message'
						placeholder='Message'
						{...register('user_message', { required: true })}
					/>
					<small>
						{errors.user_message &&
							errors.user_message.type === 'required' &&
							'Message is required'}

						{errors.user_message &&
							errors.user_message.type !== 'required' &&
							'Message is invalid'}
					</small>
				</div>

				<button type='submit'>SEND</button>
			</form>
		</div>
	);
}
