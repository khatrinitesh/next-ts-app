import React from 'react'


interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
  }

const Example:React.FC<BreadcrumbsProps> = ({breadcrumbs}) => {
    
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            {breadcrumb.href ? (
              <a href={breadcrumb.href} className="text-gray-500 hover:text-gray-700">
                {breadcrumb.label}
              </a>
            ) : (
              <span className="text-gray-500">{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  )
}

export default Example