'use client'
import {useState,useEffect} from 'react';
import { SearchProps } from './interface';

const Example:React.FC = () => {
    const profiles = [
        {
          id: 1,
          name: 'John Doe',
          username: 'johndoe',
          email: 'john.doe@example.com',
          address: {
            street: '123 Street',
            city: 'Cityville',
            zipcode: '12345',
          },
        },
        // Add more profiles as needed
      ];

  return (
    <>
        <SearchProfile profiles={profiles} />
    </>
  )
}

export default Example

const SearchProfile:React.FC<SearchProps> = ({profiles}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange =  (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
      );


    return(
        <>
        <input value={searchTerm} placeholder="Search by name" onChange={handleChange} className="border border-gray-300 p-2 rounded-md focus:outline-none mb-4"/>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProfiles.map(profile => (
          <div key={profile.id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold">{profile.name}</h2>
            <p className="text-gray-600">{profile.username}</p>
            <p className="text-gray-600">{profile.email}</p>
            <p className="text-gray-600">{`${profile.address.street}, ${profile.address.city}, ${profile.address.zipcode}`}</p>
          </div>
        ))}
      </div>
        </>
    )
}