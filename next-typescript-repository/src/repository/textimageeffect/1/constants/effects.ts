import { ImageEffect, TextEffect } from "../interface/Effects";

export const TEXT_EFFECTS: TextEffect[] = [
    { id: 1, name: 'Underline', cssClass: 'underline' },
    { id: 2, name: 'Italic', cssClass: 'italic' },
    { id: 3, name: 'Bold', cssClass: 'font-bold' },
    // Add more text effects as needed
];

export const IMAGE_EFFECTS: ImageEffect[] = [
    { id: 1, name: 'Rounded', cssClass: 'rounded-lg' },
    { id: 2, name: 'Shadow', cssClass: 'shadow-lg' },
    // Add more image effects as needed
];
