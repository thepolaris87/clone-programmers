import { Link } from 'react-router-dom';
import profile from '@/assets/images/default_profile_img.jpeg';
import { UserProfile, Date, Comment } from '@/assets/images/codingTest';

export const List = ({ question }: ListProps) => {
    return (
        <div key={question.idx} className="flex py-[10px]">
            <img className="inline-block w-[44px] h-[44px] rounded-[4px] align-top" src={profile} />
            <div className="w-[calc(100%-44px)] pl-[16px] text-[16px] align-top">
                <Link className="block text-[rgb(38, 55, 71)] hover:text-[#0078ff] hover:underline" to={`/questions/${question.idx}`}>
                    {question.title}
                </Link>
                <div className="text-[#98a8b9] text-[14px]">
                    <div className="inline-flex mr-[16px] items-center">
                        <UserProfile />
                        <h5 className="ml-[4px] leading-[1.5]">{question.userName}</h5>
                    </div>
                    <div className="inline-flex mr-[16px] items-center">
                        <Date />
                        <h5 className="ml-[4px] leading-[1.5]">{question.date}</h5>
                    </div>
                    <div className="inline-flex mr-[16px] items-center">
                        <Comment />
                        <h5 className="ml-[4px] leading-[1.5]">{question.commentCount}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
