import Link from 'next/link';
import React from 'react'

const Example = () => {
  return (
    <>
        <Pagination/>
    </>
  )
}

export default Example

interface PaginationProps{
    currentPage:number;
    totalPage:number;
}

const Pagination:React.FC<PaginationProps> = ({currentPage,totalPage}) => {

    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPage;
    const prevPage = `/page/${currentPage - 1}`;
    const nextPage = `/page/${currentPage + 1}`;
  
    if (totalPage === 1) return null;

    return(
        <>
      <div className="flex justify-center my-8">
      <ul className="flex list-none rounded-md border border-gray-300">
        {!isFirst && (
          <li className="py-2 px-4 text-blue-500 cursor-pointer">
            <Link href={prevPage}>
              Previous
            </Link>
          </li>
        )}
        {Array.from({ length: totalPage }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
            className={`py-2 px-4 cursor-pointer ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'text-blue-500'
            }`}
          >
            <Link href={`/page/${i + 1}`}>
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <li className="py-2 px-4 text-blue-500 cursor-pointer">
            <Link href={nextPage}>
              Next
            </Link>
          </li>
        )}
      </ul>
    </div>
        </>
    )
}