export interface BtnProps{
    onClick:() => void;
    children:React.ReactNode;
    className:string;
}

export interface FieldInputProps{
    id: string;                             // Unique identifier for the input field
    name: string;                           // Name attribute for the input field
    type: string;                           // Type of the input (e.g., 'text', 'password', etc.)
    value: string;                          // Current value of the input field
    onChange: React.ChangeEventHandler<HTMLInputElement>; // Change event handler
    error?: string;                         // Optional error message to display
    placeholder?: string;                   // Optional placeholder text
    maxLength?: number;                     // Optional maximum length of the input
    spellCheck?: boolean;                   // Optional spell check setting
    autoComplete?: string;                  // Optional autocomplete setting
    variants?: 'primary' | 'secondary';    // Optional variant for styling (adjust based on your design)
    className?: string;                     // Optional additional CSS classes
}

export interface BannerProps{
    children:React.ReactNode;
}


export interface FormFieldProps{
    name:string;
    email:string;
}
