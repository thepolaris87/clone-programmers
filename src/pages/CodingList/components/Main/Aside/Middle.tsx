import { toastAtom } from '@/atoms/toast';
import Course from './Course';
import course1 from '@assets/images/codingList/img1.png';
import course2 from '@assets/images/codingList/img2.png';
import course3 from '@assets/images/codingList/img3.png';
import { useSetAtom } from 'jotai';
import { ReactComponent as BannerBtn } from '@assets/images/codingList/bannerBtn.svg';

export default function Middle() {
    const setMessage = useSetAtom(toastAtom);
    const onBannerClick = () => {
        setMessage({ message: '준비 중입니다.' });
    };
    return (
        <div>
            <div className="flex items-center p-[1.5rem]">
                <div className="font-[NotoSansKRBold] text-[1rem]">내 실력 향상을 위한 추천 코스</div>
                <div>
                    <BannerBtn />
                </div>
            </div>
            <div onClick={onBannerClick}>
                <Course src={course1} title="[내일배움코스] 프로그래머스와 함께 새로운 분야의 시작을 위한 파이썬 입문" level="입문" lang="Python3" />
            </div>
            <div onClick={onBannerClick}>
                <Course src={course2} title="코딩테스트 연습 힌트 모음집" />
            </div>
            <div onClick={onBannerClick}>
                <Course src={course3} title="[도서실습] 내일은 코딩테스트 with 파이썬(자료구조와 알고리즘의 기초부터 실전까지)" />
            </div>
        </div>
    );
}
