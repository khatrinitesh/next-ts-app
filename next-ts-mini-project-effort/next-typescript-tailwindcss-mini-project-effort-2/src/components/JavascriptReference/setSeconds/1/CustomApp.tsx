"use client"
import React, { useState } from 'react'

const CustomApp:React.FC = () => {
    const [month,setMonth] = useState<number>(0)

    const handleMonthChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const newMonth = parseInt(event.target.value)
        setMonth(newMonth)
    }
  return (
    <>
    <select value={month} onChange={handleMonthChange}>
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
        <option value={9}>Septmeber</option>
        <option value={10}>October</option>
        <option value={11}>November</option>
        <option value={12}>December</option>
    </select>
    </>
  )
}

export default CustomApp