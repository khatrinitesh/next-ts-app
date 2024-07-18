"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const goFwd = () => {
        window.history.forward("/about");
    };

  return (
    <>
      <button onClick={goFwd}>
            Go Forward
        </button>
    </>
  )
}

export default Example