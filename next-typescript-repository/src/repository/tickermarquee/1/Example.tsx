"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
import "./style.css";
// CONSTANTS
import { TICKER_ITEMS } from "./constants";
// INTERFACE
import { TickerItem } from "./interface.ts";

const Example = () => {
  return (
    <>
        <div className="ticker-container bg-blue-200 py-2">
            <div className="ticker flex space-x-4">
                {TICKER_ITEMS.map((tickerItem: TickerItem) => (
                    <div key={tickerItem.id} className="cursor-pointer px-4 py-2 bg-white rounded-md shadow-md">
                        <span className="ticker-item">{tickerItem.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default Example;
