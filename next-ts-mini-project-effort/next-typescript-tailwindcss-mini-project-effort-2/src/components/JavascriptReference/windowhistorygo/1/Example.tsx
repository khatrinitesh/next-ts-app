"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const goFwd = () => {
        history.go(-2);
    };

  return (
    <>
      <button onClick={goFwd}>
            Go History
        </button>
    </>
  )
}

export default Example