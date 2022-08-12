import { useState } from 'react';
import emailJs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ContactHeader, InputComponent } from '@next-template-nx/ui';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface ContactProps {}

export type ContactFormValues = {
  username: string;
  email: string;
  message: string;
  subject: string;
};

export function Contact(props: ContactProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();
  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setLoading(true);
    const values = {
      from_subject: data.subject,
      from_name: data.username,
      message: data.message,
      from_mail: data.email,
      reply_to: data.email,
    };

    const mailResponse = await emailJs.send(
      'gmail',
      'template_g1kxcms',
      values,
      process.env.publicEmailJsKey
    );

    if (mailResponse.status === 200 && mailResponse.text === 'OK') {
      reset({ email: '', message: '', subject: '', username: '' });
      toast.success(
        'Thanks so much for reaching me, i will answer as soon as i can'
      );
    } else {
      toast.error(
        'There was an error while sending the email please try again'
      );
    }
    setLoading(false);
  };

  return (
    <div className={'app__footer w-full flex-col py-2 md:py-0 '}>
      <Head>
        <title>Axel Mwenze | Contact Me</title>
        <meta name="description" content="Here you can contact me " />
      </Head>
      <ContactHeader />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="app__footer-form app__flex"
      >
        <InputComponent
          register={register('username', { required: true })}
          errorField={errors.username}
          inputType={'text'}
          errorMsg={'the username is required'}
          placeHolder={'username'}
        />
        <InputComponent
          register={register('subject', { required: true })}
          errorField={errors.subject}
          inputType={'text'}
          errorMsg={'the subject  is required'}
          placeHolder={'subject'}
        />
        <InputComponent
          register={register('email', { required: true })}
          errorField={errors.email}
          inputType={'email'}
          errorMsg={'the email address is required'}
          placeHolder={'Email address'}
        />
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className={'text-red-500 text-sm p-4 mb-4'}>
              The Message is required
            </span>
          )}
        </div>
        <button type="submit" className="p-text">
          {!loading ? 'Send me a mail' : 'Sending...'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
