import React from 'react';

export default function Check(props) {
    return (
        <div className={`flex gap-1 mt-2 text-[#f90] ${props.hidden}`}>
            <svg viewBox="0 0 12 12" fill="none" className="w-3 mb-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12A6 6 0 116 0a6 6 0 010 12zm-.6-9.6v4.8h1.2V2.4H5.4zm0 6v1.2h1.2V8.4H5.4z" fill="#f90"></path>
            </svg>
            {props.text}
        </div>
    );
}
