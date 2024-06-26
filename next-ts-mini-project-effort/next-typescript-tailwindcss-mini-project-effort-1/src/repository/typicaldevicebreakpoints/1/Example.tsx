"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
import "./style.css";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
// INTERFACE

// CONSTANTS

const Container = styled.div`
  padding: 20px;
  background-color: lightblue;

  @media only screen and (max-width: 600px) {
    background-color: lightcoral;
  }

  @media only screen and (min-width: 600px) {
    background-color: lightskyblue;
  }

  @media only screen and (min-width: 768px) {
    background-color: lightgreen;
  }

  @media only screen and (min-width: 992px) {
    background-color: lightpink;
  }

  @media only screen and (min-width: 1200px) {
    background-color: lightyellow;
  }
`;

const Example = () => {

    

  return (
    <>
     <Container>
      <h1>Responsive Design Example</h1>
      <p>Adjusts background color based on screen size.</p>
    </Container>
    </>
  );
};

export default Example;

