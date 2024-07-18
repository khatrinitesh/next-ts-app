"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const availHeight = window.screen.availHeight;
  return (
    <>
       {availHeight}
    </>
  )
}

export default Example