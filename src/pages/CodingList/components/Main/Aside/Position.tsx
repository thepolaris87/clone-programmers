import { position } from "@/pages/CodingList/data";
import career from "@assets/images/codingList/career.svg"
import region from "@assets/images/codingList/region.svg"

export default function Position() {

  return (
    <>
    {position.map((el, i) => {
      return(
    <div key={i} className="flex mt-[1.5rem] gap-[1rem]">
      <div className="w-[3.75rem] h-[3.75rem]">
        <img className="object-contain" src={el.logo}></img>
      </div>
      <div>
        <div className="text-[0.875rem] font-bold">{el.title}</div>
        <div className="flex text-[0.75rem] gap-3 mt-[0.3125rem]">
          <div className="text-[#7890A0]">{el.company}</div>
          { el.response &&
            <div className="bg-[#F0F5FA] text-[0.625rem] pt-0.5 text-[#0078FF] font-bold px-2 rounded">{el.response}</div>
          }
        </div>
        <div className="flex items-center text-[0.75rem] text-[#98A8B9] gap-[0.375rem] mt-[0.375rem]">
          <img className="w-[1.25rem] h-[1.25rem]" src={career} />
          <div className="pt-1">{el.career}</div>
          </div>
        <div className="flex text-[0.75rem] text-[#98A8B9] gap-[0.375rem] mt-[0.375rem]">
          <img className="w-[1.25rem] h-[1.25rem]" src={region} />
          <div className="pt-0.5">{el.region}</div>
          </div>
      </div>
    </div>
  )})}
  </>
  );
}
