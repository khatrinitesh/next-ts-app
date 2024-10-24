"use client"
import React, { useState } from 'react';
import FieldInput from './FieldInput';
import BtnPrimary from './BtnPrimary';
import { FormFieldProps } from '@/interface';
import { toast } from 'react-toastify'; // Import toast

const FillForm:React.FC = () => {

    const [fields,setFields] = useState<FormFieldProps>([])
    const [errors,setErrors] = useState<{name?:string,email?:string}>([{name:'',email:''}])

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        // Update the fields state
        const updatedFields = [...fields];
        updatedFields[index][name as keyof FormField] = value;
    
        setFields(updatedFields);
    
        // Clear error messages on input change
        const updatedErrors = [...errors];
        updatedErrors[index] = { ...updatedErrors[index], [name]: '' };
        setErrors(updatedErrors);
      };

      const handleAddField = () => {
        setFields([...fields, { name: '', email: '' }]);
        setErrors([...errors, { name: '', email: '' }]);
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: { name?: string; email?: string }[] = fields.map(() => ({ name: '', email: '' }));
    
        // Validation logic
        fields.forEach((field, index) => {
          if (!field.name) {
            newErrors[index].name = 'Name is required';
          }
          if (!field.email) {
            newErrors[index].email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(field.email)) {
            newErrors[index].email = 'Email address is invalid';
          }
        });
    
        // Check if there are any errors
        if (newErrors.some(error => error.name || error.email)) {
          setErrors(newErrors);
        } else {
          // Handle successful form submission
          toast.success('Form submitted successfully!'); // Show success toast
          console.log('Form submitted successfully:', fields);
          // Reset form or perform any other actions needed
          setFields([{ name: '', email: '' }]);
          setErrors([{ name: '', email: '' }]);
        }
      };
  return (
    <>
       <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="relative formGrp">
            <FieldInput
              type="text"
              className="your-class-name" // Add your desired class here
              onChange={(e) => handleChange(index, e)}
              id={`name-${index}`}
              name="name"
              placeholder="Enter your name"
              maxLength={25}
              value={field.name}
              error={errors[index].name} // Pass error message to FieldInput
            />
            {errors[index].name && <div className="text-red-600">{errors[index].name}</div>} {/* Show name error */}
            
            <FieldInput
              type="email"
              className="your-class-name" // Add your desired class here
              onChange={(e) => handleChange(index, e)}
              id={`email-${index}`}
              name="email"
              placeholder="Enter your email"
              maxLength={50}
              value={field.email}
              error={errors[index].email} // Pass error message to FieldInput
            />
            {errors[index].email && <div className="text-red-600">{errors[index].email}</div>} {/* Show email error */}
          </div>
        ))}
        <div className="btnBlock flex items-center justify-center">
          <BtnPrimary type="button" onClick={handleAddField}>Add Another</BtnPrimary>
          <BtnPrimary type="submit">Submit</BtnPrimary>
        </div>
      </form>
    </>
  );
}

export default FillForm;
