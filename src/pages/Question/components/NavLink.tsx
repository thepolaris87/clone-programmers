import { useNavigate } from 'react-router-dom';
import { List } from '../css/NavLink.styles';

export const NavLink = ({ question }: { question: questionProps }) => {
    const navigate = useNavigate();
    return (
        <div className="max-w-[1200px] flex justify-start m-[0_auto_0_auto] px-[16px]">
            <ol className="hidden py-[6px] sm:block">
                <List onClick={() => navigate('/learn/challenges')}>
                    <div className="tag">코딩테스트 연습</div>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List>
                    <span>{question.questionCategory}</span>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List onClick={() => navigate(`/learn/courses/${question.id}`)}>
                    <div className="tag">{question.questionTitle}</div>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List onClick={() => navigate(`/learn/courses/${question.id}/questions`)}>
                    <div className="tag">질문목록</div>
                </List>
                <List>
                    <div>&#62;</div>
                </List>
                <List>
                    <p>{question.title}</p>
                </List>
            </ol>
        </div>
    );
};
