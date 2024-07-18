"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const goBack = () => {
        window.history.back();
    };

  return (
    <>
      <button onClick={goBack}>
            Go Back
        </button>
    </>
  )
}

export default Example