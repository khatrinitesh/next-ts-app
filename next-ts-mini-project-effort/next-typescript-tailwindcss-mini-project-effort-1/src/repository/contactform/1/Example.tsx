"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

type Inputs = {
    name: string;
    email: string;
    password: string;
  };

const Example: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
  
      emailjs.send(serviceId, templateId, data, userId)
        .then(() => {
          toast.success('Email sent successfully!');
        })
        .catch(() => {
          toast.error('Error sending email. Please try again later.');
        });
    };
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input id="name" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
          })} />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input id="password" maxLength={6} type="password" {...register('password', { 
            required: 'Password is required', 
            minLength: { value: 6, message: 'Password must be at least 6 characters' } 
          })} />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Example;
