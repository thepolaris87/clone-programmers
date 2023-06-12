import React, { useState } from "react";

export default function BottomNavBar() {
  const [selectMenu, setSelectMenu] = useState<string>("모든 문제")
  const menu = ["모든 문제", "코딩 기초 트레이닝", "코딩테스트 입문", "코딩테스트 고득점 Kit", "SQL 고득점 Kit", "과제테스트 연습", "코딩테스트 질문"];
  return (
    <div className="flex w-[100%] justify-center items-center box-border border-b border-t border-slate-100">
      <div className="flex flex-wrap w-[100%] max-w-[75rem] h-[2.5rem] items-center overflow-x-auto whitespace-nowrap box-border justify-between text-[0.875rem]">
        <div className="flex items-center font-nomal">
          {menu.map((el, i) => {
            return <div key={i} className={`mr-[2rem] ${selectMenu === el ? 'text-black' : 'text-navbar_gray1'}`} onClick={() => setSelectMenu(el)}>{el}</div>
          })}
        </div>
      </div>
    </div>
  );
}
