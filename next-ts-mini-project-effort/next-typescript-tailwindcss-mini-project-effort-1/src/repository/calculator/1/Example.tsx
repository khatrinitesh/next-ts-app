"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";

interface CalculatorProps {
  initialDisplay: string;
}

interface CalculatorState {
  display: string;
}

const Example: React.FC<CalculatorProps> = ({initialDisplay }) => {
    const [display, setDisplay] = useState<string>(initialDisplay);

    const handleClick = (value: string) => {
        if (value === '=') {
          try {
            setDisplay(eval(display).toString());
          } catch (error) {
            setDisplay('Error');
          }
        } else if (value === 'C') {
          setDisplay('');
        } else {
          setDisplay(display + value);
        }
      };
  return (
    <>
      <div className={styles.calculator}>
        <input type="text" className={styles.display} value={display} readOnly />
      <div className={styles.buttons}>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
    <div className="font-bold text-[#ff5588]">
    {display}
    </div>
    </>
  );
};

export default Example;
