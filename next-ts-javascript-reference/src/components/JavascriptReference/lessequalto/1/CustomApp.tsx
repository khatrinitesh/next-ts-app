import React from 'react'

const CustomApp = () => {
    const n111:number =500;
    const n222:number =200;
    let textMessage:string = ''
    if(n111 <= n222){
        textMessage = 'yes it is greater equalto'
        
    }
    else{
        textMessage = 'no it is not greater equalto'
    }
  return (
    <>
    {textMessage}
    </>
  )
}

export default CustomApp