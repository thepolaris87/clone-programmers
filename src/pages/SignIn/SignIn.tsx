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
    const [checkName, setCheckName] = useState<string>('hidden');
    const [text, setText] = useState<string>('');
    const [signUpBtn, setSignUpBtn] = useState<string>('bg-[#C8C8C8]');
    const [SuccessSignUp, setSuccessSignUp] = useState<boolean>(false);
    const [initText, setInitText] = useState<string>('');
    const [e_mail, setE_mail] = useState<email>({ email: 'hidden', email2: 'hidden', email3: 'hidden' });
    const [password, setPassword] = useState<password>({ pw: 'hidden', pw2: 'hidden', pw3: 'hidden', pw4: 'hidden' });
    const [check, setCheck] = useState<check>({
        allCheck: false,
        useCheck: false,
        personalCheck: false,
        ageCheck: false,
        marketingCheck: false,
        mustCheck: false
    });

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
            setPassword({ ...password, pw: '' });
            setText('이메일 또는 비밀번호를 다시 확인하세요.');
        }
    });

    const signUpMutation = useMutation(['sign-up'], postSignUp, {
        onSuccess: () => {
            navigate('/sign-in');
            setSuccessSignUp(true);
        },
        onError: () => {
            setE_mail({ ...e_mail, email3: '' });
        }
    });

    //로그인
    const onSignInClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const email = (event.target as HTMLFormElement).email.value;
        const password = (event.target as HTMLFormElement).password.value;
        !email ? setE_mail({ ...e_mail, email: '' }) : setE_mail({ ...e_mail, email: 'hidden' });
        if (!password) {
            setPassword({ ...password, pw: '' });
            setText('비밀번호를 입력해주세요.');
        } else {
            setPassword({ ...password, pw: 'hidden' });
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
        if (!check.mustCheck) return;
        const name = (event.target as HTMLFormElement)._name.value;
        const email = (event.target as HTMLFormElement).email.value;
        const password1 = (event.target as HTMLFormElement).pw1.value;
        const password2 = (event.target as HTMLFormElement).pw2.value;
        console.log(name);
        if (!name) {
            setCheckName('');
        } else {
            setCheckName('hidden');
        }
        if (!email) {
            setE_mail({ ...e_mail, email3: 'hidden' });
            setE_mail({ ...e_mail, email2: '' });
        } else {
            setE_mail({ ...e_mail, email2: '' });
        }
        if (!password1) {
            setPassword({ ...password, pw2: '' });
        } else {
            setPassword({ ...password, pw2: 'hidden' });
        }
        if (!password2) {
            setPassword({ ...password, pw3: '' });
        } else {
            setPassword({ ...password, pw3: 'hidden' });
        }
        if (password1 && password2 && password1 !== password2) {
            setPassword({ ...password, pw4: '' });
        } else {
            setPassword({ ...password, pw4: 'hidden' });
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
        setCheck({ ...check, allCheck: !check.allCheck });
        if (check.allCheck) {
            setCheck({ ...check, useCheck: false, personalCheck: false, ageCheck: false, marketingCheck: false });
        } else {
            setCheck({ ...check, useCheck: true, personalCheck: true, ageCheck: true, marketingCheck: true });
        }
    };
    const useBtnEvent = () => {
        setCheck({ ...check, useCheck: !check.useCheck });
    };
    const personalBtnEvent = () => {
        setCheck({ ...check, personalCheck: !check.personalCheck });
    };
    const ageBtnEvent = () => {
        setCheck({ ...check, ageCheck: !check.ageCheck });
    };
    const marketingBtnEvent = () => {
        setCheck({ ...check, marketingCheck: !check.marketingCheck });
    };

    useEffect(() => {
        //약관 전체 동의
        if (!check.useCheck || !check.personalCheck || !check.ageCheck || !check.marketingCheck) {
            setCheck({ ...check, allCheck: false });
        } else if (check.useCheck && check.personalCheck && check.ageCheck && check.marketingCheck) {
            setCheck({ ...check, allCheck: true });
        }

        //필수 약관 동의
        if (check.useCheck && check.personalCheck) {
            setCheck({ ...check, mustCheck: true });
            setSignUpBtn('bg-signin_btn cursor-pointer');
        } else {
            setCheck({ ...check, mustCheck: false });
            setSignUpBtn('bg-[#C8C8C8]');
        }
    }, [check.useCheck, check.personalCheck, check.ageCheck, check.marketingCheck]);

    const initSignInPage = () => {
        setE_mail({ ...e_mail, email: 'hidden' });
        setPassword({ ...password, pw: 'hidden' });
    };

    const initSignUpPage = () => {
        setE_mail({ ...e_mail, email2: 'hidden', email3: 'hidden' });
        setPassword({ ...password, pw2: 'hidden', pw3: 'hidden', pw4: 'hidden' });
        setCheckName('hidden');
        setCheck({ ...check, useCheck: false, personalCheck: false, ageCheck: false, marketingCheck: false });
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
                                                        <Check text={'이메일을 입력해주세요.'} hidden={e_mail.email} />
                                                        <div className="flex justify-between mt-[2.25rem] mb-[0.5rem]">
                                                            <div className="font-bold">비밀번호</div>
                                                        </div>
                                                        <InputPw placeholder={'비밀번호를 입력해주세요'} name={'password'} />
                                                        <div className={`flex gap-2 items-center pt-2 ${password.pw} text-[#f90]`}>
                                                            <div className="pt-[0.1rem]">
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
                                                        <Input svg={<Smile />} type={'text'} name={'_name'} placeholder={'이름을 입력해 주세요'} />
                                                        <div className={`flex gap-1 mt-2 text-[#f90] ${checkName}`}>
                                                            <Caution />
                                                            이름을 입력해주세요.
                                                        </div>
                                                        <div className="mt-[2.25rem] mb-[0.625rem] font-bold">이메일</div>
                                                        <Input svg={<Email />} type={'text'} name={'email'} placeholder={'이메일을 입력해 주세요'} />
                                                        <div className={`flex gap-1 mt-2 text-[#f90] ${e_mail.email3}`}>
                                                            <Caution />
                                                            이미 사용중이거나 올바르지 않은 이메일입니다. <br /> 다른 이메일을 입력해주세요.
                                                        </div>
                                                        <Check text={'이메일을 입력해주세요.'} hidden={e_mail.email2} />
                                                        <div className="mt-[2.25rem] mb-[0.625rem] font-bold">비밀번호</div>
                                                        <InputPw placeholder={'영문자, 숫자, 특수문자 포함 최소 8~20자'} name={'pw1'} />
                                                        <Check text={'비밀번호를 입력해주세요.'} hidden={password.pw2} />
                                                        <div className="mb-[0.625rem]"></div>
                                                        <InputPw placeholder={'비밀번호를 확인해 주세요'} name={'pw2'} />
                                                        <Check text={'비밀번호 확인을 입력해주세요.'} hidden={password.pw3} />
                                                        <Check text={'입력하신 비밀번호와 다릅니다.'} hidden={password.pw4} />
                                                        <div className="mt-[2.625rem] flex flex-col">
                                                            <span className="">
                                                                <input type="checkbox" className="mr-2" checked={check.allCheck} onChange={allBtnEvent} />
                                                                <span>전체동의</span>
                                                            </span>
                                                            <span className="w-full border h-0 my-3"></span>
                                                            <span className="mb-2">
                                                                <input type="checkbox" className="mr-2" checked={check.useCheck} onChange={useBtnEvent} />
                                                                <span>이용약관 동의</span>
                                                            </span>
                                                            <span className="mb-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="mr-2"
                                                                    checked={check.personalCheck}
                                                                    onChange={personalBtnEvent}
                                                                />
                                                                <span>프로그래머스 개인정보 수집 및 이용동의</span>
                                                            </span>
                                                            <span className="mb-2">
                                                                <input type="checkbox" className="mr-2" checked={check.ageCheck} onChange={ageBtnEvent} />
                                                                <span>[선택] 만 14세 이상입니다.</span>
                                                            </span>
                                                            <span className="mb-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="mr-2"
                                                                    checked={check.marketingCheck}
                                                                    onChange={marketingBtnEvent}
                                                                />
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
