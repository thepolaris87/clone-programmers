import { Link } from 'react-router-dom';
import profile from '@/assets/images/default_profile_img.jpeg';

export const List = ({ question }: ListProps) => {
    return (
        <div key={question.idx} className="flex py-[10px]">
            <img className="inline-block w-[44px] h-[44px] rounded-[4px] align-top" src={profile} />
            <div className="w-[calc(100%-44px)] pl-[16px] text-[16px] align-top">
                <Link className="block text-[rgb(38, 55, 71)] hover:text-[#0078ff] hover:underline" to={`/questions/${question.idx}`}>
                    {question.title}
                </Link>
                <div className="text-[#98a8b9] text-[14px]">
                    <div className="inline-flex mr-[16px]">
                        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[rgb(178,192,204)]">
                            <path
                                fillRule="evenodd"
                                d="M17 8c0-2.763-2.238-5-5-5S7 5.237 7 8c0 2.762 2.238 5 5 5s5-2.238 5-5ZM4 18.5V21h16v-2.5c0-3.325-4.662-4-8-4s-8 .675-8 4Z"
                            ></path>
                        </svg>
                        <h5 className="ml-[4px] leading-[1.5]">{question.userName}</h5>
                    </div>
                    <div className="inline-flex mr-[16px]">
                        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[rgb(178,192,204)]">
                            <path
                                fillRule="evenodd"
                                d="M7 11v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Zm3-7V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1ZM5 18V9h14v9H5Z"
                            ></path>
                        </svg>
                        <h5 className="ml-[4px] leading-[1.5]">{question.date}</h5>
                    </div>
                    <div className="inline-flex mr-[16px]">
                        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[rgb(178,192,204)]">
                            <path
                                fillRule="evenodd"
                                d="M20.01 3C21.108 3 22 3.897 22 5.006v9.988A2.003 2.003 0 0 1 20.01 17H18l-5 5v-5H3.99C2.892 17 2 16.103 2 14.994V5.006C2 3.898 2.898 3 3.99 3h16.02ZM9 9H7v2h2V9Zm4 0h-2v2h2V9Zm4 0h-2v2h2V9Z"
                            ></path>
                        </svg>
                        <h5 className="ml-[4px] leading-[1.5]">{question.commentCount}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
