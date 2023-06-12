
interface MyProps {
  svg: any,
  type: string,
  placeholder: string | undefined
  value: string | undefined
  onChange: any
}
export default function Input(props : MyProps) {
  return (
    <div className="relative flex w-full border border-signin_border h-[2.875rem] rounded-sm">
      <div className="absolute top-3 left-3 w-fit ">
        {props.svg}
      </div>
      <input
        type={props.type}
        className="w-full px-[2.5rem] text-[0.9rem]"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
