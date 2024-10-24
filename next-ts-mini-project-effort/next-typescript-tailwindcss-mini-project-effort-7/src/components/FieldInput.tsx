import React from 'react';
import { FieldInputProps } from '@/interface';

const FieldInput:React.FC<FieldInputProps> = (
    {
        id,
        name,
        value,
        onChange,
        error,
        placeholder,
        maxLength,
        spellCheck = false,
        autoComplete,
        className = '',
    }
) => {
  return (
    <>
       <input
                id={id}
                name={name}
                type="text" // Fixed to type "text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                spellCheck={spellCheck}
                autoComplete={autoComplete}
                className={`${className} border-white transition-all duration-200 delay-200 border-1 placeholder:text-[#abadaf] leading-[50px] block w-full h-[50px] text-fs16vh px-5 font-avenir tracking-ls2 text-white relative z-[1] outline-none rounded-[30px]`}
            />
            {error && <div className="text-red-600 text-fs12vh text-sm font-avenir">{error}</div>}
    </>
  );
}

export default FieldInput;
