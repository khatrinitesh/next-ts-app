'use client'
import React,{useState} from 'react'
import Example from './Example'
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';

const CustomApp = () => {

    const menuItems = [
        { label: 'Home', icon: <FaHome />, onClick: () => alert('Home Clicked') },
        { label: 'Profile', icon: <FaUser />, onClick: () => alert('Profile Clicked') },
        { label: 'Settings', icon: <FaCog />, onClick: () => alert('Settings Clicked') },
        { label: 'Notifications', icon: <FaBell />, onClick: () => alert('Notifications Clicked') },
        { label: 'Messages', icon: <FaEnvelope />, onClick: () => alert('Messages Clicked') },
      ];
    

  return (
    <>
     
     <Example menuItems={menuItems} /> 
    </>
  )
}

export default CustomApp

