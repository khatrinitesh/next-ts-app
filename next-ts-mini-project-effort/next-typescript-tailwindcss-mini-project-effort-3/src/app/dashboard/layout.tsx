import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode;
};

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="content">
      {children}
    </div>
  )
}

export default Layout