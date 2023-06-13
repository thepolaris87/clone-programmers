import React from "react";

export default function Course(props) {
  return (
    <div className="grid grid-cols-2 justify-items-center ">
      <div className="w-[5.4375rem] flex justify-center items-center">
        <img src={props.src}></img>
      </div>
      <div className="font-bold flex justify-center items-center">
        {props.title}
      </div>
    </div>
  );
}
