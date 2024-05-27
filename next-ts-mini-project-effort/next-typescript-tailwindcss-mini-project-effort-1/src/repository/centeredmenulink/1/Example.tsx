import React from 'react'

interface CenteredMenuLinkProps {
    label:string;
    href:string;
}

const Example:React.FC = () => {
  return (
    <>
     <CenteredMenuLink label="home" href="/"/>
    </>
  )
}

export default Example

const CenteredMenuLink: React.FC<CenteredMenuLinkProps> = ({ label, href }) => {
    return (
      <div className="flex justify-center items-center h-screen">
        <a href={href} className="text-blue-500 hover:text-blue-700 text-lg font-semibold">
          {label}
        </a>
      </div>
    );
  }