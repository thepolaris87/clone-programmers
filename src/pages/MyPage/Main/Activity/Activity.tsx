import { ContentContainer, ContentTitle } from '../../MyPage.styles';
import BasicInfo from './BasicInfo';

export default function Activity() {
    return (
        <>
            <ContentTitle>나의 활동</ContentTitle>
            <ContentContainer>
                <BasicInfo />
                <hr className="my-4 -mx-6" />
            </ContentContainer>
        </>
    );
}
