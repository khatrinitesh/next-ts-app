"use client"
import React, { useState ,useEffect } from "react";
import Image from "next/image";
// interface
import { ProfileCardProps as ProfileCardValue } from "./interface";
// constants
import { profilecard } from "./constants";

const Example = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profilecard.map((profile) => (
          <ProfileCardComp key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  )
};

export default Example;


const ProfileCardComp: React.FC<ProfileCardProps> = ({ profile }) => {

    const [avatarUrl, setAvatarUrl] = useState<string>('');

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const response = await fetch(`https://api.dicebear.com/9.x/pixel-art/svg?seed=${profile.id}`)
                console.log(response);
                
                if(response.ok){
                    const url = response.url;
                    setAvatarUrl(url);
                }
                else{
                    throw new Error('Failed to fetch avatar');
                }
            } catch (error) {
                console.error('Error fetching avatar:', error); 
            }
        }

        fetchAvatar();
    },[])
  return (
    <>
     <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt={profile.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          )}
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600">@{profile.username}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">{profile.email}</p>
          <p className="text-gray-700">{profile.phone}</p>
          <p className="text-gray-700">{profile.website}</p>
        </div>
      </div>
    </>
  );
};
