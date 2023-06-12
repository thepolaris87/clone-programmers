import React from "react";
import { Navbar } from "../../components/Navbar";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Dropdown from "./components/Dropdown";

export default function CodingList() {
  const level = ["Lv. 0", "Lv. 1", "Lv. 2", "Lv. 3", "Lv. 4", "Lv. 5"]
  const lang = ["C", "C++", "C#", "Go", "Java", "JavaScript", "Kotlin", "Python2", "Phthon3", "Ruby", "Scala", "Swift", "MySQL", "Oracle"]
  const test = ["2023 KAKAO BLIND RECRUITMENT", "2022 KAKAO TECH INTERNSHIP", "2022 KAKAO BLIND RECRUITMENT", "2021 Dev-Matching: 웹 백엔드 개발자(상반기)", "2021 KAKAO BLIND RECRUITMENT", "2020 KAKAO BLIND RECRUITMENT" ]
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <BottomNavBar />
      <div className="h-[17.25rem] border border-red-400">carousel</div>
      <div className="flex gap-[2rem] pt-[3rem] max-w-[75rem] p-[1rem]">
        <div className="border border-green-300">
          <div className="">
            <Dropdown>
              <ul>
                {level.map((el, i)=> {
                return <li key={i}>
                  <input type="checkbox" />
                    <span>{el}</span>
                </li>
                })}
              </ul>
            </Dropdown>
            <Dropdown>
              <ul>
                <li></li>
              </ul>
            </Dropdown>
            <Dropdown>
              <ul>
                <li></li>
              </ul>
            </Dropdown>
            </div>
          <div className="">문제 수 및 정렬</div>
          <div className="">리스트</div>
          <div className="">페이징</div>
        </div>
        <aside className="border border-blue-300">
            <div className="">로그인</div>
            <div className="">내 실력 향상을 위한 추천 코스</div>
            <div className="">추천 포지션</div>
        </aside>
      </div>
    </div>
  );
}
