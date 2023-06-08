import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ForgetPassword = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const token = generateRandomToken();

    const userEmail = form.current.user_email.value;

    const emailLink = `http://localhost:8082/user?token=${token}`;

    form.current.message.value = emailLink;

    emailjs.sendForm('service_zgcb8cy', 'template_dx8gftp', form.current, '04RwhtqN7IMklYKNm')
      .then((result) => {
        console.log('Reset link is successfully sent to the user!');
        console.log('Email Link:', emailLink);
      })
      .catch((error) => {
        console.log('An error occurred while sending the email:', error);
      });
  };

  const generateRandomToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 8; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="hidden" name="message"/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ForgetPassword