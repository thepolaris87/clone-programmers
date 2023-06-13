import { useAtom } from 'jotai';
import { ContentContainer, ContentSubTitle } from '../../MyPage.styles';
import { userInfo } from '../../atoms';

export default function BasicInfo() {
    const [user] = useAtom(userInfo);

    const onModifyClick = () => {
        console.log('modify');
    };

    return (
        <>
            <ContentSubTitle>기본정보</ContentSubTitle>
            <ContentContainer className='mb-8'>
                <div className="text-center text-[#263747] text-[22px] font-medium">{user?.userName}</div>
                <div className="text-center text-[#44576c] my-3">{user?.userEmail}</div>
                <div className="text-end">
                    <button onClick={onModifyClick} className="bg-[#0078ff] text-white font-bold px-6 pt-2 pb-1 rounded-md hover:bg-[#0053f4]">
                        수정
                    </button>
                </div>
            </ContentContainer>
        </>
    );
}
