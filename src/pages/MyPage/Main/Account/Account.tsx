import { ContentTitle } from '../../MyPage.styles';
import BasicInfo from './BasicInfo';
import Password from './Password';
import StackNJob from './StackNJob';

export default function Account() {
    return (
        <>
            <ContentTitle>계정 관리</ContentTitle>
            <BasicInfo />
            <Password />
            <StackNJob />

            <h5>이메일 알림</h5>
            <h5>계정 연동</h5>
            <h5>계정 삭제</h5>
        </>
    );
}
