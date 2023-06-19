import { useNavigate } from 'react-router-dom';
import { List } from '../css/NavLink.styles';

type questionProps = {
    id: string;
    questionCategory: string;
    questionTitle: string;
};
export default function NavLink({ question }: { question: questionProps }) {
    const navigate = useNavigate();
    return (
        <div className="max-w-[1200px] flex justify-start m-[0_auto_0_auto]">
            <ol className="py-[6px]">
                <List onClick={() => navigate('/learn/challenges')}>
                    <a>코딩테스트 연습</a>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List>
                    <a>{question.questionCategory}</a>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List onClick={() => navigate('/learn/courses')}>
                    <a>{question.questionTitle}</a>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List onClick={() => navigate(`/learn/courses/${question.id}/questions`)}>
                    <a>질문 목록</a>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List>
                    <p>딕셔너리 출력과 리턴값 질문</p>
                </List>
            </ol>
        </div>
    );
}