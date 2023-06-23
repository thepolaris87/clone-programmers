import React from 'react';
import profile from '@/assets/images/default_profile_img.jpeg';

export const Comments = ({ comments, email, delCommentMutate }: CommentsProps) => {
    return (
        <React.Fragment>
            <div className="m-[40px_0_8px_0] flex justify-between items-center">
                <h5 className="text-[16px] leading-[1.6] font-[700]">{comments.length}개의 답변</h5>
            </div>
            {comments &&
                comments.map((comment: CommentProps, idx: number) => {
                    return (
                        <React.Fragment key={idx}>
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <img className="w-[44px] h-[44px] rounded-[4px]" src={profile}></img>
                                    <div className="ml-[10px]">
                                        <h5 className="text-[16px] font-[700]">{comment.userEmail}</h5>
                                        <h5 className="text-[14px] text-[#B2C0CC]">{comment.date}</h5>
                                    </div>
                                </div>
                                {email === comment.userEmail && (
                                    <button
                                        className="bg-[#0078ff] text-[white] text-[14px] md:text-[16px] font-[500] p-[5px_13px] md:p-[7px_13px] rounded-[4px] hover:bg-[#0053f4]"
                                        onClick={() => delCommentMutate(comment.idx)}
                                    >
                                        <h5 className="mt-0.5">삭제</h5>
                                    </button>
                                )}
                            </div>
                            <div className="m-[16px_0_40px_0] text-[16px] break-words break-normal">{comment.description}</div>
                        </React.Fragment>
                    );
                })}
        </React.Fragment>
    );
};
