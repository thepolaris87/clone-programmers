import { ContentTitle } from '../../MyPage.styles';
import BasicInfo from './BasicInfo';
import Password from './Password';

export default function Account() {
    return (
        <>
            <ContentTitle>계정 관리</ContentTitle>
            <BasicInfo />
            <Password />
            <h5>주요 기술 및 희망 직무</h5>
            <h5>이메일 알림</h5>
            <h5>계정 연동</h5>
            <h5>계정 삭제</h5>
        </>
    );
}
