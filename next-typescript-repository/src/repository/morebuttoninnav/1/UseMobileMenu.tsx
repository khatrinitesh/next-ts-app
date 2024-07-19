import React,{useState} from 'react'

interface MenuItem{
    label:string;
    onClick:() => void;
}

const UseMobileMenu = (menuItems:MenuItem[]) => {
    const [isOpen,setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }
    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }
  return {isOpen,toggleMenu,openMenu,closeMenu,menuItems}
}

export default UseMobileMenu