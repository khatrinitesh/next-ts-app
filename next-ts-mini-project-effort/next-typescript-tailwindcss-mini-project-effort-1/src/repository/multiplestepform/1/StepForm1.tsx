import React from 'react'

interface Props {
    values: { firstName: string; lastName: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    nextStep: () => void;
  }

const StepForm1:React.FC<Props> = ({values,handleChange,nextStep}) => {
  return (
    <>
    <div className="p-4">
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="border rounded px-2 py-1 mb-2"
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="border rounded px-2 py-1 mb-2"
      />
      <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Next
      </button>
    </div>
    </>
  )
}

export default StepForm1