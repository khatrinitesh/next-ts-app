import React from 'react'

interface AlertBtnProps{
    type:'success' | 'error' | 'warning';
    message:string;
}


const AlertButton:React.FC<AlertBtnProps> = ({type,message}) => {

    const handleClick = () => {
        alert(message)
    }

    let buttonclass  = "";

    switch(type){
        case 'success':
        buttonclass = 'bg-green-500 hover:bg-green-700 text-white';
        break;
        case 'error':
        buttonclass = 'bg-red-500 hover:bg-red-700 text-white';
        break;
        case 'warning':
        buttonclass = 'bg-yellow-500 hover:bg-yellow-700 text-white';
        break;
        default:
            buttonclass = 'bg-gray-500 hover:bg-gray-700 text-white';
    }
  return (
    <>
    <button className={`px-4 py-2 rounded ${buttonclass}`} onClick={handleClick}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Alert
    </button>
    </>
  )
}

export default AlertButton