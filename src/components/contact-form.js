import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../styles/contact-form.css';


const ContactForm = () => {
    const [state, handleSubmit] = useForm('mjvjyadj');
    console.log('   :::STATE:::   ', state.errors);

    if (state.succeeded) {
        return <p>Thanks for contacting me! You'll hear back from me soon.</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='contact-form'
        >
            <div>
                <label htmlFor='email'>
                    Email Address
                </label>
                <input
                    id='email'
                    type='email'
                    name='email'
                />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
            </div>
            <div>
                <label htmlFor='message'>
                    Message
                </label>
                <textarea
                    id='message'
                    name='message'
                />
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
            </div>
            {state.errors.length !== 0 && (
                <div className='val-errors'>
                    {state.errors.map((error, index) => (
                        <p key={index}>
                            {error.message}
                        </p>
                    ))}
                </div>
            )}
            <div>
                <button type='submit' disabled={state.submitting}>
                    Send
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
