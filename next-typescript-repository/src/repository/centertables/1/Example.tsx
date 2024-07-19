"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { Student } from './type';

interface StudentProps{
    students:Student[]
}

const Table = styled.table`
  width: 50%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #0070f3;
  color: white;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Example:React.FC<StudentProps> = ({students}) => {
    
  return (
    <>
      <Table>
        <thead>
            <tr>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Grade</Th>
            </tr>
        </thead>
        <tbody>
            {students.map((val) => (
                <tr key={val.id}>
                    <Td>{val.name}</Td>
                    <Td>{val.age}</Td>
                    <Td>{val.grade}</Td>
                </tr>
            ))}
        </tbody>
      </Table>
    </>
  )
}

export default Example