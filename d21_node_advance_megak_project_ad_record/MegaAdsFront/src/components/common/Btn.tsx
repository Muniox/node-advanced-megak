import React from 'react';
import './Btn.pcss';


interface Props {
    text: string;
}

export const Btn = (props: Props) => (
    <button>{props.text}</button>
);