import List from './List';
import { useAtom } from 'jotai';
import { userNavi } from '../../atoms';

export default function Navigator() {
    const [navi, setNavi] = useAtom(userNavi);
    const onItemClick = (name: TNavi) => setNavi(name);

    return (
        <aside className="bg-white">
            <List>
                <List.Title>내 정보 관리</List.Title>
                <List.Item focus={navi === 'account'} onClick={() => onItemClick('account')}>
                    계정 관리
                </List.Item>
                <List.Item focus={navi === 'active'} onClick={() => onItemClick('active')}>
                    나의 활동
                </List.Item>
                <List.Gap />
                <List.Title>스쿨 관리</List.Title>
                <List.Item focus={navi === 'school'} onClick={() => onItemClick('school')}>
                    MY 스쿨
                </List.Item>
                <List.Item focus={navi === 'history'} onClick={() => onItemClick('history')}>
                    구매 내역
                </List.Item>
                <List.Gap />
                <List.Title>커리어 관리</List.Title>
                <List.Item focus={navi === 'resume'} onClick={() => onItemClick('resume')}>
                    이력서
                </List.Item>
                <List.Item focus={navi === 'position'} onClick={() => onItemClick('position')}>
                    지원한 포지션
                </List.Item>
                <List.Item focus={navi === 'proposal'} onClick={() => onItemClick('proposal')}>
                    받은 제안
                </List.Item>
                <List.Item focus={navi === 'program'} onClick={() => onItemClick('program')}>
                    접수한 채용 프로그램
                </List.Item>
            </List>
        </aside>
    );
}
