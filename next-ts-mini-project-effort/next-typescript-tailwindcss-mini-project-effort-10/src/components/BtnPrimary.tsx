import React from 'react';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({btnSyle,onClick,children}) => {
  return (
    <>
     <button onClick={onClick} className={`${btnSyle} outline-none cursor-pointer rounded-[5px] btnPrimaryStyle bg-green-400 px-[20px] py-[5px]`}>{children}</button> 
    </>
  );
}

export default BtnPrimary;
