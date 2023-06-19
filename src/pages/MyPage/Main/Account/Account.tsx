import { ContentTitle } from '../../MyPage.styles';
import AlertEmail from './AlertEmail';
import BasicInfo from './BasicInfo';
import Delete from './Delete';
import Link from './Link';
import Password from './Password';
import StackNJob from './StackNJob';

export default function Account() {
    return (
        <>
            <ContentTitle>계정 관리</ContentTitle>
            <BasicInfo />
            <Password />
            <StackNJob />
            <AlertEmail />
            <Link />
            <Delete />
        </>
    );
}
