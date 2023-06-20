import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Dropdown from "./components/Dropdown";
import course1 from "@assets/images/codingList/img1.png";
import course2 from "@assets/images/codingList/img2.png";
import course3 from "@assets/images/codingList/img3.png";
import Course from "./components/Course";
import Carousel from "./components/Carousel";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { nameAtom, tokenAtom } from "@/atoms/toast";

export default function CodingList() {
    const navigate = useNavigate();

    const level = ['Lv. 0', 'Lv. 1', 'Lv. 2', 'Lv. 3', 'Lv. 4', 'Lv. 5'];
    const lang = ['C', 'C++', 'C#', 'Go', 'Java', 'JavaScript', 'Kotlin', 'Python2', 'Phthon3', 'Ruby', 'Scala', 'Swift', 'MySQL', 'Oracle'];
    const test = [
        '2023 KAKAO BLIND RECRUITMENT',
        '2022 KAKAO TECH INTERNSHIP',
        '2022 KAKAO BLIND RECRUITMENT',
        '2021 Dev-Matching: 웹 백엔드 개발자(상반기)',
        '2021 KAKAO BLIND RECRUITMENT',
        '2020 KAKAO BLIND RECRUITMENT',
        '2019 KAKAO BLIND RECRUITMENT',
        '2018 KAKAO BLIND RECRUITMENT',
        '2021 카카오 채용연계형 인턴십',
        '2020 카카오 인턴십',
        '2019 카카오 개발자 겨울 인턴십',
        '2017 카카오코드 예선',
        '2017 카카오코드 본선',
        '월간 코드 챌린지 시즌3',
        '월간 코드 챌린지 시즌2',
        '월간 코드 챌린지 시즌1',
        'Summer/Winter Coding(2019)',
        'Summer/Winter Coding(~2018)',
        '2017 팁스타운',
        '위클리 챌린지',
        '코딩테스트 입문',
        '코딩 기초 트레이닝'
    ];

    const [levelDropdown, setLevelDropdown] = useState<boolean>(false);
    const [langDropdown, setLangDropdown] = useState<boolean>(false);
    const [testDropdown, setTestDropdown] = useState<boolean>(false);

    return (
        <div>
            <TopNavBar />
            <Navbar />
            <BottomNavBar />
            <Carousel />
            <div>
                <div className="flex gap-[2rem] pt-[3rem] w-full justify-center box-border ">
                    <div className="flex max-w-[75rem] w-full gap-[2rem]">
                        <div className="w-2/3">
                            <div className="flex gap-[0.5rem]">
                                <Dropdown
                                    visibility={levelDropdown}
                                    array={level}
                                    onClick={() => setLevelDropdown(!levelDropdown)}
                                    title="난이도"
                                    style="w-[140px]"
                                />
                                <Dropdown
                                    visibility={langDropdown}
                                    array={lang}
                                    onClick={() => setLangDropdown(!langDropdown)}
                                    title="언어"
                                    style="w-[140px]"
                                />
                                <Dropdown
                                    visibility={testDropdown}
                                    array={test}
                                    onClick={() => setTestDropdown(!testDropdown)}
                                    title="기출문제 모음"
                                    style="min-w-[159px] max-w-[249x]"
                                />
                            </div>
                            <div className="flex justify-between">
                                <div>n문제</div>
                                <div>
                                    <button>최신순</button>
                                    <ul></ul>
                                </div>
                            </div>
                            <div className="">
                                <table className="border border-list_border w-full">
                                    <thead className="">
                                        <tr className="text-[0.75rem] text-[#98A8B9] p-[0.5625rem] border-b border-list_border">
                                            <th className="w-[3.75rem] text-center p-[0.5625rem]">상태</th>
                                            <th className="text-center p-[0.5625rem]">제목</th>
                                            <th className="w-[5rem] text-center p-[0.5625rem]">난이도</th>
                                            <th className="w-[6.25rem] text-right p-[0.5625rem]">완료한 사람</th>
                                            <th className="w-[5rem] text-right p-[0.5625rem]">정답률</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="items-center border-b border-list_border p-[0.5625rem]">
                                            <td className="text-center">상태</td>
                                            <td>제목</td>
                                            <td className="text-center text-[#2189FF] font-bold">난이도</td>
                                            <td className="text-right">완료한 사람</td>
                                            <td className="text-right">정답률</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="">페이징</div>
                        </div>
                        <aside className="border border-list_border rounded-2xl w-1/3">
                            <div className="border-b border-list_border text-center items-center py-[2rem]">
                                <div className="font-extrabold text-[1rem]">로그인하고 코딩테스트 연습을 시작하세요!</div>
                                <div className="flex justify-center items-center">
                                    <div
                                        className=" bg-btn_blue w-[6.25rem] h-[2.875rem] text-center text-white font-extrabold rounded-md mt-[1rem] pt-3 cursor-pointer"
                                        onClick={() => navigate('/sign-in')}
                                    >
                                        로그인
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-list_border">
                                <div className="flex items-center p-[1.5rem]">
                                    <div className="font-extrabold text-[1rem]">내 실력 향상을 위한 추천 코스</div>
                                    <div>
                                        <svg width="1.875rem" height="1.875rem" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 5L13 10.5L7 16" stroke="currentColor" strokeWidth="2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <Course
                                    src={course1}
                                    title="[내일배움코스] 프로그래머스와 함께 새로운 분야의 시작을 위한 파이썬 입문"
                                    level="입문"
                                    lang="Python3"
                                />
                                <Course src={course2} title="코딩테스트 연습 힌트 모음집" />
                                <Course src={course3} title="[도서실습] 내일은 코딩테스트 with 파이썬(자료구조와 알고리즘의 기초부터 실전까지)" />
                            </div>
                            <div className="flex items-center p-[1.5rem]">
                                <div className="font-extrabold text-[1rem]">추천 포지션</div>
                                <div>
                                    <svg width="1.875rem" height="1.875rem" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 5L13 10.5L7 16" stroke="currentColor" strokeWidth="2"></path>
                                    </svg>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
