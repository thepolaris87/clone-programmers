import { ReactComponent as ProgrammersIcon } from '@assets/images/myPgae/programmers.svg';
import { HeaderContainer } from '../MyPage.styles';

export default function Header() {
    return (
        <HeaderContainer className="flex h-16">
            <ProgrammersIcon className="flex-1" />
            <button className="btn1 flex-1">스쿨</button>
            <button className="btn1 flex-1">커리어</button>
            <button className="btn1 flex-1">커뮤니티</button>
            <button className="btn2 flex-1">스킬체크</button>
            <button className="btn2 felx-1">코딩테스트 연습</button>
            <button
                className="btn2 flex-1"
                onClick={() => {
                    // b({ test1: 10 });
                }}
            >
                코딩역량인증시험
            </button>
            <button>XXXX님</button>
        </HeaderContainer>
    );
}
