import React from 'react'

interface SidebarItem {
    id: number;
    title: string;
    route: string;
  }  

  const sidebarItems: SidebarItem[] = [
    { id: 1, title: 'Dashboard', route: '/dashboard' },
    { id: 2, title: 'Customer', route: '/dashboard/customer' },
    { id: 3, title: 'Invoices', route: '/dashboard/invoices' },
  ];

const LeftSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {sidebarItems.map(item => (
          <li key={item.id}>
            <a href={item.route}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftSidebar