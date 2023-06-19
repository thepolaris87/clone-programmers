import { useSetAtom } from 'jotai';
import { ContentButtonV1, StackNJobWrapper } from '../../MyPage.styles';
import { ReactComponent as ModifyIcon } from '@assets/images/myPgae/modify.svg';
import { userNavi } from '../../atoms';

export default function BasicInfo() {
    const setUserNavi = useSetAtom(userNavi);
    const onModifyClick = () => setUserNavi('account');
    return (
        <div className="flex items-center">
            <div className="flex-1">
                <div className="font-bold text-2xl mb-2">김진범</div>
                <div className="flex gap-x-2">
                    <div>
                        <h5 className="text-[#424242] font-medium text-sm pb-1">주요 기술</h5>
                        <div className="flex">
                            <StackNJobWrapper>ReactJS</StackNJobWrapper>
                            <StackNJobWrapper>Tailwind CSS</StackNJobWrapper>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-[#424242] font-medium text-sm pb-1">관심 분야</h5>
                        <StackNJobWrapper>프론트 엔드</StackNJobWrapper>
                    </div>
                </div>
            </div>

            <ContentButtonV1 className="flex items-center" onClick={onModifyClick}>
                <ModifyIcon className="mr-2 mb-0.5" />
                수정하기
            </ContentButtonV1>
        </div>
    );
}
