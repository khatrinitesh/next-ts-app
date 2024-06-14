"use client"
import { useState }  from 'react'

const UseMobileMenu = () => {

    const [isOpen,setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }

    const toggleMenu =() => {
        setIsOpen(!isOpen)
    }

  return {isOpen,openMenu,closeMenu,toggleMenu}
}

export default UseMobileMenu