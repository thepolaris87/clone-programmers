import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { ReactComponent as Email } from '@assets/images/signin/email.svg';
import { ReactComponent as Smile } from '@assets/images/signin/smile.svg';
import SocialLogin from './components/SocialLogin';
import InputPw from './components/InputPw';
import { useLocation, useNavigate } from 'react-router-dom';
import title from '@assets/images/signin/title.png';
import main from '@assets/images/signin/main.png';
import { useMutation } from 'react-query';
import { postSignIn, postSignUp } from '@apis/api';
import { useSetAtom } from 'jotai';
import { accessTokenAtom, emailAtom, nameAtom } from '@/atoms/user';
import Check from './components/Check';
import { ReactComponent as Caution } from '@assets/images/signin/caution.svg';

export default function SignIn() {
    const [signIn, setSignIn] = useState<boolean>(true);

    //약관
    const [allCheck, setAllCheck] = useState<boolean>(false);
    const [useCheck, setUseCheck] = useState<boolean>(false);
    const [personalCheck, setPersonalCheck] = useState<boolean>(false);
    const [ageCheck, setAgeCheck] = useState<boolean>(false);
    const [marketingCheck, setMarketingCheck] = useState<boolean>(false);
    const [mustCheck, setMustCheck] = useState<boolean>(false);
    const [checkName, setCheckName] = useState<string>('hidden');
    const [checkPw, setCheckPw] = useState<string>('hidden');
    const [checkEmail, setCheckEmail] = useState<string>('hidden');
    const [checkPw2, setCheckPw2] = useState<string>('hidden');
    const [checkEmail2, setCheckEmail2] = useState<string>('hidden');
    const [checkEmail3, setCheckEmail3] = useState<string>('hidden');
    const [checkPw3, setCheckPw3] = useState<string>('hidden');
    const [checkPw4, setCheckPw4] = useState<string>('hidden');
    const [text, setText] = useState<string>('');
    const [signUpBtn, setSignUpBtn] = useState<string>('bg-[#C8C8C8]');
    const [SuccessSignUp, setSuccessSignUp] = useState<boolean>(false);
    const [initText, setInitText] = useState<string>('');

    // const [e_mail, setE_mail] = useState<email>({ email: 'hidden', email2: 'hidden', email3: 'hidden' });
    // const [password, setPassword] = useState<password>({ pw: 'hidden', pw2: 'hidden', pw3: 'hidden', pw4: 'hidden' });

    const navigate = useNavigate();
    const setName = useSetAtom(nameAtom);
    const setEmail = useSetAtom(emailAtom);
    const setToken = useSetAtom(accessTokenAtom);
    const { state } = useLocation();

    useEffect(() => {
        state === 'sign-up' && setSignIn(false);
    }, []);

    const signInMutation = useMutation(['sign-in'], postSignIn, {
        onSuccess: (data) => {
            navigate('/learn/challenges');
            setName(data.name);
            window.localStorage.setItem('name', data.name);
            setToken(data.accessToken);
        },
        onError: () => {
            setCheckPw('');
            setText('이메일 또는 비밀번호를 다시 확인하세요.');
        }
    });

    const signUpMutation = useMutation(['sign-up'], postSignUp, {
        onSuccess: () => {
            navigate('/sign-in');
            setSuccessSignUp(true);
        },
        onError: () => {
            setCheckEmail3('');
        }
    });

    //로그인
    const onSignInClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const email = (event.target as HTMLFormElement).email.value;
        const password = (event.target as HTMLFormElement).password.value;
        !email ? setCheckEmail('') : setCheckEmail('hidden');
        if (!password) {
            setCheckPw('');
            setText('비밀번호를 입력해주세요.');
        } else {
            setCheckPw('hidden');
        }
        if (!email || !password) return;
        // signInMutation.mutate({ email: email, password: password });
        await signInMutation.mutateAsync({ email: email, password: password });
        setEmail(email);
        window.localStorage.setItem('email', email);
    };

    //회원가입
    const onSignUpClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        if (!mustCheck) return;
        const name = ((event.target as HTMLFormElement).name as any).value;
        const email = (event.target as HTMLFormElement).email.value;
        const password1 = (event.target as HTMLFormElement).pw1.value;
        const password2 = (event.target as HTMLFormElement).pw2.value;
        if (!name) {
            setCheckName('');
        } else {
            setCheckName('hidden');
        }
        if (!email) {
            setCheckEmail3('hidden');
            setCheckEmail2('');
        } else {
            setCheckEmail2('hidden');
        }
        if (!password1) {
            setCheckPw2('');
        } else {
            setCheckPw2('hidden');
        }
        if (!password2) {
            setCheckPw3('');
        } else {
            setCheckPw3('hidden');
        }
        if (password1 && password2 && password1 !== password2) {
            setCheckPw4('');
        } else {
            setCheckPw4('hidden');
        }

        if (!name || !email || !password1 || !password2) return;
        if (password1 !== password2) return;
        signUpMutation.mutate({ name: name, email: email, password: password1 });
    };

    const goToMain = () => {
        navigate('');
    };

    //약관동의
    const allBtnEvent = () => {
        setAllCheck(!allCheck);
        if (allCheck) {
            setUseCheck(false);
            setPersonalCheck(false);
            setAgeCheck(false);
            setMarketingCheck(false);
        } else {
            setUseCheck(true);
            setPersonalCheck(true);
            setAgeCheck(true);
            setMarketingCheck(true);
        }
    };
    const useBtnEvent = () => {
        setUseCheck(!useCheck);
    };
    const personalBtnEvent = () => {
        setPersonalCheck(!personalCheck);
    };
    const ageBtnEvent = () => {
        setAgeCheck(!ageCheck);
    };
    const marketingBtnEvent = () => {
        setMarketingCheck(!marketingCheck);
    };

    useEffect(() => {
        //약관 전체 동의
        if (!useCheck || !personalCheck || !ageCheck || !marketingCheck) {
            setAllCheck(false);
        } else if (useCheck && personalCheck && ageCheck && marketingCheck) {
            setAllCheck(true);
        }

        //필수 약관 동의
        if (useCheck && personalCheck) {
            setMustCheck(true);
            setSignUpBtn('bg-signin_btn cursor-pointer');
        } else {
            setMustCheck(false);
            setSignUpBtn('bg-[#C8C8C8]');
        }
    }, [useCheck, personalCheck, ageCheck, marketingCheck]);

    const initSignInPage = () => {
        setCheckEmail('hidden');
        setCheckPw('hidden');
    };

    const initSignUpPage = () => {
        // setE_mail({ email: 'hidden', email2: 'hidden', email3: 'hidden' });
        // setPassword({ pw: 'hidden', pw2: 'hidden', pw3: 'hidden', pw4: 'hidden' });
        setCheckName('hidden');
        setCheckEmail2('hidden');
        setCheckEmail3('hidden');
        setCheckPw2('hidden');
        setCheckPw3('hidden');
        setCheckPw4('hidden');
        setUseCheck(false);
        setPersonalCheck(false);
        setMarketingCheck(false);
        setAgeCheck(false);
    };

    return (
        <div className={`bg-signin_bg min-h-screen`}>
            <div className="flex h-16 w-full bg-signin_bg fixed top-0 left-0 z-50 justify-center">
                <div className="w-[1200px] flex justify-between">
                    <div className="px-5 w-30">
                        <img className="w-44 h-full object-contain cursor-pointer" src={title} onClick={goToMain}></img>
                    </div>
                </div>
            </div>
            <div className="w-full h-full px-5 flex justify-center">
                <div className="w-[1200px]">
                    <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center" style={{ alignSelf: 'flex-start' }}>
                        <div className="w-full sm:w-[468px] md:w-[378px]">
                            <div className="sm:text-slate-300 text-[1.5rem] text-white font-extrabold sm:text-[16px] sm:font-normal pt-5 mt-[148px] w-max min-w-[232px]">
                                개발자 전용
                            </div>
                            <div className="text-white text-[20px] lg:text-[25px] font-bold pt-5 leading-tight w-max hidden sm:block">
                                반가워요, 개발자의 성장을 돕는 <br /> 프로그래머스입니다.
                            </div>
                            <img className="max-w-lg w-[100%] md:block hidden" src={main}></img>
                        </div>
                        <div className="justify-center w-full sm:w-auto ">
                            <div className="">
                                {SuccessSignUp ? (
                                    <div className="bg-white w-full sm:w-[468px] md:w-[378px] items-center lg:w-[468px] min-w-[232px] rounded-2xl mt-10 md:mt-40 h-[30rem] flex justify-center">
                                        <div>
                                            <div className="w-[20rem] text-center text-2xl font-bold my-10">회원가입이 완료되었습니다!</div>
                                            <button
                                                className=" bg-signin_btn text-center w-full py-2 text-white my-[2.75rem] h-[2.75rem] text-[20px] font-bold rounded-md cursor-pointer"
                                                type="submit"
                                                onClick={() => {
                                                    setSuccessSignUp(false);
                                                    setSignIn(true);
                                                }}
                                            >
                                                로그인
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="bg-white w-full sm:w-[468px] md:w-[378px] lg:w-[468px] min-w-[232px] rounded-2xl mt-10 md:mt-40">
                                            <div className="flex bg-signin_gray rounded-t-2xl">
                                                <div
                                                    className={'w-[50%] text-center h-[48px] rounded-t-2xl cursor-pointer' + (signIn ? ' bg-white ' : ' ')}
                                                    onClick={() => {
                                                        setSignIn(true);
                                                        initSignInPage();
                                                    }}
                                                >
                                                    <div className={'h-full pt-3 text-[16px] ' + (signIn ? ' text-signin_font font-bold' : ' text-black')}>
                                                        로그인
                                                    </div>
                                                </div>
                                                <div
                                                    className={'w-[50%] text-center h-[48px] rounded-t-2xl cursor-pointer' + (signIn ? '' : ' bg-white ')}
                                                    onClick={() => {
                                                        setSignIn(false);
                                                        setInitText('');
                                                        initSignUpPage();
                                                    }}
                                                >
                                                    <div className={'h-full pt-3 text-[16px]' + (signIn ? ' text-black' : ' text-signin_font font-bold')}>
                                                        회원가입
                                                    </div>
                                                </div>
                                            </div>
                                            {signIn ? (
                                                <div className="px-[2.5rem] py-[1.75rem] text-[0.8125rem]">
                                                    <form
                                                        onSubmit={(event) => {
                                                            onSignInClick(event);
                                                        }}
                                                    >
                                                        <div className="font-bold mb-[0.5rem]">이메일</div>
                                                        <div className="relative flex w-full border border-signin_border h-[2.875rem] rounded-sm items-center">
                                                            <div className="absolute top-[0.9rem] left-3">{<Email />}</div>
                                                            <input
                                                                type={'text'}
                                                                className={'w-full h-full px-[2.5rem] text-[0.9rem]'}
                                                                name={'email'}
                                                                placeholder={'이메일을 입력해주세요'}
                                                                value={initText}
                                                                onChange={(e) => setInitText(e.target.value)}
                                                            ></input>
                                                        </div>
                                                        <Check text={'이메일을 입력해주세요.'} hidden={checkEmail} />
                                                        <div className="flex justify-between mt-[2.25rem] mb-[0.5rem]">
                                                            <div className="font-bold">비밀번호</div>
                                                        </div>
                                                        <InputPw placeholder={'비밀번호를 입력해주세요'} name={'password'} />
                                                        <div className={`flex gap-2 items-center mt-0 ${checkPw} text-[#f90]`}>
                                                            <div className="pt-4">
                                                                <Caution />
                                                            </div>
                                                            <div>{text}</div>
                                                        </div>
                                                        <button
                                                            className="bg-signin_btn text-center w-full py-2 text-white my-[2.75rem] h-[2.75rem] text-[20px] font-bold rounded-md cursor-pointer"
                                                            type="submit"
                                                        >
                                                            로그인
                                                        </button>
                                                    </form>

                                                    <SocialLogin />
                                                </div>
                                            ) : (
                                                <div className="px-[2.5rem] py-[1.75rem] text-[0.8125rem]">
                                                    <form
                                                        onSubmit={(event) => {
                                                            onSignUpClick(event);
                                                        }}
                                                    >
                                                        <div className="mb-[0.625rem] font-bold">이름</div>
                                                        <Input svg={<Smile />} type={'text'} name={'name'} placeholder={'이름을 입력해 주세요'} />
                                                        <div className={`flex gap-1 mt-2 text-[#f90] ${checkName}`}>
                                                            <Caution />
                                                            이름을 입력해주세요.
                                                        </div>
                                                        <div className="mt-[2.25rem] mb-[0.625rem] font-bold">이메일</div>
                                                        <Input svg={<Email />} type={'text'} name={'email'} placeholder={'이메일을 입력해 주세요'} />
                                                        <div className={`flex gap-1 mt-2 text-[#f90] ${checkEmail3}`}>
                                                            <Caution />
                                                            이미 사용중이거나 올바르지 않은 이메일입니다. <br /> 다른 이메일을 입력해주세요.
                                                        </div>
                                                        <Check text={'이메일을 입력해주세요.'} hidden={checkEmail2} />
                                                        <div className="mt-[2.25rem] mb-[0.625rem] font-bold">비밀번호</div>
                                                        <InputPw placeholder={'영문자, 숫자, 특수문자 포함 최소 8~20자'} name={'pw1'} />
                                                        <Check text={'비밀번호를 입력해주세요.'} hidden={checkPw2} />
                                                        <div className="mb-[0.625rem]"></div>
                                                        <InputPw placeholder={'비밀번호를 확인해 주세요'} name={'pw2'} />
                                                        <Check text={'비밀번호 확인을 입력해주세요.'} hidden={checkPw3} />
                                                        <Check text={'입력하신 비밀번호와 다릅니다.'} hidden={checkPw4} />
                                                        <div className="mt-[2.625rem] flex flex-col">
                                                            <span className="">
                                                                <input type="checkbox" className="mr-2" checked={allCheck} onChange={allBtnEvent} />
                                                                <span>전체동의</span>
                                                            </span>
                                                            <span className="w-full border h-0 my-3"></span>
                                                            <span className="mb-2">
                                                                <input type="checkbox" className="mr-2" checked={useCheck} onChange={useBtnEvent} />
                                                                <span>이용약관 동의</span>
                                                            </span>
                                                            <span className="mb-2">
                                                                <input type="checkbox" className="mr-2" checked={personalCheck} onChange={personalBtnEvent} />
                                                                <span>프로그래머스 개인정보 수집 및 이용동의</span>
                                                            </span>
                                                            <span className="mb-2">
                                                                <input type="checkbox" className="mr-2" checked={ageCheck} onChange={ageBtnEvent} />
                                                                <span>[선택] 만 14세 이상입니다.</span>
                                                            </span>
                                                            <span className="mb-2">
                                                                <input type="checkbox" className="mr-2" checked={marketingCheck} onChange={marketingBtnEvent} />
                                                                <span>[선택] 마케팅 활용 동의 및 광고 수신 동의</span>
                                                            </span>
                                                        </div>
                                                        <button
                                                            className={`${signUpBtn} w-full text-center py-2 text-white my-[2.75rem] h-[2.75rem] text-[20px] font-bold rounded-md`}
                                                        >
                                                            회원가입
                                                        </button>
                                                        <SocialLogin />
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
