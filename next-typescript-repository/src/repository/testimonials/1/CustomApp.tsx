import React from 'react';
import Example from './Example';
import { Testimonial } from './interface';

const testimonials: Testimonial[] = [
    {
        id: 1,
        author: 'John Doe',
        content: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 2,
        author: 'Jane Smith',
        content: 'Consectetur adipiscing elit.'
    },
    // Add more testimonials as needed
];

const CustomApp = () => {
  return (
    <div className='container mx-auto'>
        <h1 className="text-3xl font-bold text-center mb-8">Testimonials</h1>
        <Example  testimonials={testimonials}/>
    </div>
  )
}

export default CustomApp