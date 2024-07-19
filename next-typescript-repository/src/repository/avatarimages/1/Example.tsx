import React from 'react'


interface AvatarProps {
    imageUrl: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
  }



const Example:React.FC<AvatarProps> = ({imageUrl,alt,size}) => {

    let sizeclasses = ""

    switch(size){
        case 'small':
            sizeclasses='w-8 h-8';
            break;
            case 'medium':
                sizeclasses='w-16 h-16';
                break;
                case 'large':
                    sizeclasses='w-24 h-24';
                    break;
                    default:sizeclasses = 'w-16 h-16'
    }
  return (
    <>
        <img src={imageUrl} alt={alt} className={`rounded-full ${sizeclasses}`}/>
    </>
  )
}

export default Example