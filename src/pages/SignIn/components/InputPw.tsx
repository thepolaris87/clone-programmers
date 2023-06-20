import { useState } from 'react';
import { ReactComponent as Password } from '../../../assets/images/signin/password.svg';
import { ReactComponent as Hide } from '../../../assets/images/signin/hide.svg';
import { ReactComponent as Seek } from '../../../assets/images/signin/seek.svg';

interface MyProps {
    placeholder: string | undefined;
    name: string;
}
export default function InputPw(props: MyProps) {
    const [hidePw, setHidePw] = useState<boolean>(true);
    return (
        <div className="relative flex w-full border border-signin_border h-[2.875rem] rounded-sm">
            <div className="absolute top-3 left-3 w-fit ">
                <Password />
            </div>
            <input type={hidePw ? 'password' : 'text'} className="w-full px-[2.5rem] text-[0.9rem]" name={props.name} placeholder={props.placeholder}></input>
            <div className="absolute top-3 right-3 w-6 cursor-pointer" onClick={() => setHidePw(!hidePw)}>
                {hidePw ? <Hide /> : <Seek />}
            </div>
        </div>
    );
}
