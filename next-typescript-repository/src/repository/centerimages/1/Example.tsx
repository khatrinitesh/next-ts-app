"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from './types';

interface ImageListProps {
    images: Image[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ImageWrapper = styled.div`
  margin: 10px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Example:React.FC<ButtonProps> = ({images}) => {
    
  return (
    <>
       <Container>
      {images.map((image) => (
        <ImageWrapper key={image.id}>
          <StyledImage src={image.src} alt={image.alt} />
        </ImageWrapper>
      ))}
    </Container>
    </>
  )
}

export default Example