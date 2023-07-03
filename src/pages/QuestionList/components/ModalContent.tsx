import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postQuestion } from '@/apis/api';
import classNames from 'classnames';
import { Code } from '../../../components/Code';
// test
export const ModalContent = ({ onClick, content, questionId, status }: ModalContentProps) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: '', description: '' });
    const [preview, setPreview] = useState(false);
    const [option, setOption] = useState({ email: false, code: false });
    const { mutate } = useMutation(postQuestion, {
        onSuccess: (data) => {
            navigate(`/questions/${data.questions.idx}`);
        }
    });
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOption((prev) => {
            return { ...prev, [e.target.name]: e.target.checked };
        });
    };
    const onSubmit = () => {
        mutate({ questionId: questionId, title: form.title, description: form.description, showUserCode: String(option.code) });
    };

    return (
        <React.Fragment>
            {preview ? (
                <React.Fragment>
                    <h5 className="text-[#263747] text-[26px] leading-[1.4]">{form.title}</h5>
                    <hr className="border-[#d7e2eb] m-[16px_0px_16px_0px]" />
                    <h5 className="text-[#263747] text-[16px]">{form.description}</h5>
                    {option.code && (
                        <div className="w-[379px] lg:w-[912px] md:w-[800px] sm:w-[600px] ">
                            <h5 className="text-[14px] text-[#263747] leading-[1.5]">작성중인 코드―solution.js</h5>
                            <div className="h-[400px] p-[20px_24px] bg-[#e9ecf3] rounded-[4px]">
                                <Code content={content} color="#e9ecf3" />
                            </div>
                        </div>
                    )}
                    <hr className="border-[#d7e2eb] mt-[16px] mb-[16px]" />
                    <h5 className="text-[14px] text-[#263747] leading-[1.5] mt-[4px]">이메일 알림 : {option.email ? '받음' : '받지 않음'}</h5>
                    {status && <h5 className="text-[14px] text-[#263747] leading-[1.5] mt-[4px]">코드 첨부 여부 : {option.code ? '첨부' : '첨부하지 않음'}</h5>}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className="mb-[16px]">
                        <label className="inline-block text-[14px] leading-[24px] mb-[2px]">
                            <h5 className="inline-block align-top text-[#f44336] font-[NotoSansKRBold] text-[20px] mr-[2px]">* </h5>제목
                        </label>
                        <input
                            name="title"
                            value={form.title}
                            onChange={(e) => onChange(e)}
                            placeholder="입력하세요."
                            required={true}
                            className="w-[100%] p-[8px_12px] bg-[#fbfbfd] text-[13px] md:text-[16px] leading-[24px] border-[1.5px] border-[#d7e2eb] rounded-[4px] placeholder:text-[rgba(50,50,80,0.24)] hover:border-[#0078FF]"
                        ></input>
                    </div>
                    <div className="mt-[16px]">
                        <label className="inline-block text-[14px] leading-[24px] mb-[2px]">
                            <h5 className="inline-block align-top text-[#f44336] font-[NotoSansKRBold] text-[20px] mr-[2px]">* </h5>내용
                        </label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={(e) => onChange(e)}
                            rows={10}
                            required={true}
                            placeholder={`문제와 관련된 질문을 구체적으로 작성해주세요.\n타인에 대한 비방이나 욕설, 광고, 정답 공개 등 게시판의 목적과 관련 없는 내용은 삭제될 수 있습니다.`}
                            className="block w-[100%] h-auto p-[8px_12px] bg-[#fbfbfd] text-[13px] md:text-[16px] leading-[24px] border-[1.5px] border-[#d7e2eb] rounded-[4px_4px_0_0] placeholder:text-[rgba(50,50,80,0.24)] hover:border-[#0078FF]"
                        ></textarea>
                    </div>
                    <h5 className="p-[8px_12px] mt-0 mb-[16px] border-[1px] border-t-0 border-[#d7e2eb] text-[#b2c0cc] text-[12px] leading-[18px] rounded-[0_0_3px_3px] font-[NotoSansKRRegular]">
                        이 입력폼은 마크다운 문법을 지원합니다.
                        <span className="text-[#0078ff] font-[NotoSansKRBold]">&nbsp;마크다운 가이드</span>를 참고하세요.
                    </h5>
                    <div className="mt-[16px]">
                        <input
                            type="checkbox"
                            name="email"
                            checked={option.email}
                            onChange={(e) => onCheck(e)}
                            className="accent-[#263747] w-[16px] h-[16px] mr-[6px] mb-0.5 rounded-[4px] align-middle cursor-pointer"
                        />
                        <label className="text-[14px] leading-[1.5]">내 질문에 답변이 올라오면 이메일로 알림을 받습니다.</label>
                    </div>
                    {status && (
                        <div className="mt-[16px]">
                            <input
                                type="checkbox"
                                name="code"
                                checked={option.code}
                                onChange={(e) => onCheck(e)}
                                className="accent-[#263747] w-[16px] h-[16px] mr-[6px] mb-0.5 rounded-[4px] align-middle cursor-pointer"
                            />
                            <label className="text-[14px] leading-[1.5]">내 코드를 첨부합니다.</label>
                        </div>
                    )}
                </React.Fragment>
            )}
            <div className="pt-[40px] flex flex-wrap justify-end">
                <button
                    className="bg-[#E9ECF3] text-[#263747] text-[14px] sm:text-[16px] font-[NotoSansKRMedium] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px] hover:bg-[#D7E2EB]"
                    onClick={() => setPreview(!preview)}
                >
                    <h5 className="mb-0.5">{preview ? '편집하기' : '미리 보기'}</h5>
                </button>
                <button
                    className="bg-[#E9ECF3] text-[#263747] text-[14px] sm:text-[16px] font-[NotoSansKRMedium] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px] hover:bg-[#D7E2EB]"
                    onClick={() => onClick(false)}
                >
                    <h5 className="mb-0.5">취소</h5>
                </button>
                <button
                    className={classNames(
                        'bg-[#0078ff] text-[white] text-[14px] sm:text-[16px] font-[NotoSansKRMedium] leading-[24px] p-[7px_13px] mx-[4px] rounded-[4px]',
                        form.title === '' || form.description === '' ? 'bg-opacity-40 cursor-not-allowed' : 'cursor-pointer'
                    )}
                    onClick={onSubmit}
                    disabled={form.title === '' || form.description === '' ? true : false}
                >
                    <h5 className="mb-0.5">등록</h5>
                </button>
            </div>
        </React.Fragment>
    );
};
