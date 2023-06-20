interface props {
  src: string,
  title: string,
  level: string,
  lang: string
}
export default function Course(props: props) {
  return (
    <div className="grid grid-cols-5 mb-[1.1875rem]">
      <div className="w-[5.4375rem] col-span-2 justify-self-center">
        <img className="rounded-md" src={props.src}></img>
      </div>
      <div className="col-span-3">
        <div className="font-semibold flex pr-3 text-[0.875rem]">{props.title}</div>
        <div className="flex text-[0.625rem] gap-[0.375rem]">
          <div className="px-[0.5rem] bg-course_box rounded">{props.level}</div>
          <div className="px-[0.5rem] bg-course_box rounded">{props.lang}</div>
        </div>
      </div>
    </div>
  );
}
