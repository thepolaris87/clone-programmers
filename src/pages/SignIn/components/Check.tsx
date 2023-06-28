import { ReactComponent as Caution } from '@assets/images/signin/caution.svg';
type TCheck = {
    hidden: string;
    text: string;
};

export default function Check(props: TCheck) {
    return (
        <div className={`flex gap-1 mt-2 text-[#f90] ${props.hidden}`}>
            <div className="pt-[0.25rem]">
                <Caution />
            </div>
            {props.text}
        </div>
    );
}
