import Course from '../../Course';
import course1 from '@assets/images/codingList/img1.png';
import course2 from '@assets/images/codingList/img2.png';
import course3 from '@assets/images/codingList/img3.png';

export default function Middle() {
    return (
        <div className="border-b border-list_border">
            <div className="flex items-center p-[1.5rem]">
                <div className="font-extrabold text-[1rem]">내 실력 향상을 위한 추천 코스</div>
                <div>
                    <svg width="1.875rem" className="w-[1.25rem] mb-1" height="1.875rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 5L13 10.5L7 16" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                </div>
            </div>
            <Course src={course1} title="[내일배움코스] 프로그래머스와 함께 새로운 분야의 시작을 위한 파이썬 입문" level="입문" lang="Python3" />
            <Course src={course2} title="코딩테스트 연습 힌트 모음집" level="" lang=""/>
            <Course src={course3} title="[도서실습] 내일은 코딩테스트 with 파이썬(자료구조와 알고리즘의 기초부터 실전까지)" level="" lang="" />
        </div>
    );
}
