import React, { useState } from "react";
import Password from "../../assets/svg/Password";
import Hide from "../../assets/svg/Hide";
import Seek from "../../assets/svg/Seek";

interface MyProps {
  placeholder: string | undefined
}
export default function InputPw(props : MyProps) {
  const [hidePw, setHidePw] = useState<Boolean>(true)
  return (
    <div className="relative flex w-full border border-signin_border h-[2.875rem] rounded-sm">
      <div className="absolute top-3 left-3 w-fit ">
        <Password />
      </div>
      <input
        type={hidePw ? "password" : "text"}
        className="w-full px-[2.5rem] text-[0.9rem]"
        placeholder={props.placeholder}
      ></input>
      <div className="absolute top-3 left-[21.75rem] w-6 cursor-pointer" onClick={() => setHidePw(!hidePw)}>
        {(hidePw ? 
        <Hide/>
        :
        <Seek />
        )}
      </div>
    </div>
  );
}
