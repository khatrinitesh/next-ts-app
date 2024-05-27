
"use client"
import React,{useState} from "react";
import { CheckoutFormValues } from "./types";

const initialValues:CheckoutFormValues = {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
}

const Example: React.FC<> = ({  }) => {
   
    const [formValues,setFormValues] = useState<CheckoutFormValues>(initialValues);
    const [errors, setErrors] = useState<Partial<CheckoutFormValues>>({});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setFormValues({
            ...formValues,
            [name]:value
        });
    };

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(formValues);
    }

  return (
    <>
       <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleChange}
          placeholder="Address"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="city"
          value={formValues.city}
          onChange={handleChange}
          placeholder="City"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="state"
          value={formValues.state}
          onChange={handleChange}
          placeholder="State"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="zip"
          value={formValues.zip}
          onChange={handleChange}
          placeholder="Zip"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="cardNumber"
          value={formValues.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="expirationDate"
          value={formValues.expirationDate}
          onChange={handleChange}
          placeholder="Expiration Date"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="cvv"
          value={formValues.cvv}
          onChange={handleChange}
          placeholder="CVV"
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
    </>
  );
};

export default Example;
