"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const historyLength = window.history.length

  return (
    <>
        <p>Number of entries in history stack: {historyLength}</p>
    </>
  )
}

export default Example