import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input";
import { ReactComponent as Email } from "../../assets/images/signin/email.svg";
import { ReactComponent as Smile } from "../../assets/images/signin/smile.svg";
import SocialLogin from "./components/SocialLogin";
import InputPw from "./components/InputPw";
import { useNavigate } from "react-router-dom";
import title from "../../assets/images/signin/title.png";
import main from "../../assets/images/signin/main.png";
import axios from "axios";
import { useIsMutating, useMutation, useQuery } from "react-query";
import { postSignIn, postSignUp } from "../../apis/api";

export default function SignIn() {
  const { mutate, error, mutateAsync } = useMutation(["sign-in"], postSignIn, {
    onSuccess: () => {
      console.log("aasdfsad");
    },
    onError: (e) => {
      console.log("fasfasdfsad", e);
    },
  });
  useIsMutating();

  const [signIn, setSignIn] = useState<boolean>(true);

  //약관
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [useCheck, setUseCheck] = useState<boolean>(false);
  const [personalCheck, setPersonalCheck] = useState<boolean>(false);
  const [ageCheck, setAgeCheck] = useState<boolean>(false);
  const [marketingCheck, setMarketingCheck] = useState<boolean>(false);
  const [mustCheck, setMustCheck] = useState<boolean>(false);

  const navigate = useNavigate();

  //로그인
  const onSignInClick = async (id: string, pw: string) => {
    if (!id || !pw) return;
    const b = await mutateAsync({ email: id, password: pw });
    console.log(b);

    // try {
    //   const aa = await postSignIn({ email: "test@test.com", password: "test1" });
    // } catch (error) {
    //   console.log(error)
    // }
  };

  //회원가입
  const onSignUpClick = (
    name: string,
    id: string,
    pw: string,
    pw2: string,
    check: boolean
  ) => {
    if (!name || !id || !pw || !pw2 || !check) return;
    if (pw !== pw2) return;
    console.log(name, id, pw === pw2, check);

  };

  const goToMain = () => {
    navigate("");
  };

  const goToSIgnIn = () => {
    navigate("/comes/sign-in");
    console.log("afsd");
  };

  const goToSignUp = () => {
    navigate("/comes/sign-up");
    console.log("afsd");
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
    } else {
      setMustCheck(false);
    }
  }, [useCheck, personalCheck, ageCheck, marketingCheck]);

  return (
    <div className="bg-signin_bg min-h-screen">
      <div className="flex h-16 w-full bg-signin_bg fixed top-0 left-0 z-50 justify-center">
        <div className="w-[1200px] flex justify-between">
          <div className="px-5 w-30">
            <img
              className="w-44 h-full object-contain cursor-pointer"
              src={title}
              onClick={goToMain}
            ></img>
          </div>
          <div className="px-10 w-30 h-full text-white mt-5 text-[14px] cursor-pointer">
            기업서비스
          </div>
        </div>
      </div>
      <div className="w-full h-full px-5 flex justify-center">
        <div className=" w-[1200px]">
          <div
            className="grid md:grid-cols-2 grid-cols-1 justify-items-center"
            style={{ alignSelf: "flex-start" }}
          >
            <div className="w-full sm:w-[468px] md:w-[378px]">
              <div className="sm:text-slate-300 text-[1.5rem] text-white font-extrabold sm:text-[16px] sm:font-normal pt-5 mt-[148px] w-max min-w-[232px]">
                개발자 전용
              </div>
              <div className="text-white text-[20px] lg:text-[25px] font-bold pt-5 leading-tight w-max hidden sm:block">
                반가워요, 개발자의 성장을 돕는 <br /> 프로그래머스입니다.
              </div>
              <img
                className="max-w-lg w-[100%] md:block hidden"
                src={main}
              ></img>
            </div>
            <div className="justify-center w-full sm:w-auto ">
              <div className="">
                <div className="bg-white w-full sm:w-[468px] md:w-[378px] lg:w-[468px] min-w-[232px] rounded-2xl mt-10 md:mt-40">
                  <div className="flex bg-signin_gray rounded-t-2xl">
                    <div
                      className={
                        "w-[50%] text-center h-[48px] rounded-t-2xl cursor-pointer" +
                        (signIn ? " bg-white " : " ")
                      }
                      onClick={() => {
                        setSignIn(true);
                        // history.replaceState("", "", "/sign-in");
                      }}
                    >
                      <div
                        className={
                          "h-full pt-3 text-[16px] " +
                          (signIn
                            ? " text-signin_font font-bold"
                            : " text-black")
                        }
                      >
                        로그인
                      </div>
                    </div>
                    <div
                      className={
                        "w-[50%] text-center h-[48px] rounded-t-2xl cursor-pointer" +
                        (signIn ? "" : " bg-white ")
                      }
                      onClick={() => {
                        setSignIn(false);
                        // history.replaceState("", "", "/sign-up");
                      }}
                    >
                      <div
                        className={
                          "h-full pt-3 text-[16px]" +
                          (signIn
                            ? " text-black"
                            : " text-signin_font font-bold")
                        }
                      >
                        회원가입
                      </div>
                    </div>
                  </div>
                  {signIn ? (
                    <div className="px-[2.5rem] py-[1.75rem] text-[0.8125rem]">
                      <form
                        onSubmit={(event) => {
                          console.log((event.target as HTMLInputElement & {email}).email.value);
                        }}
                      >
                        <div className="font-bold mb-[0.5rem]">이메일</div>
                        <Input
                          svg={<Email />}
                          name={"email"}
                          type={"text"}
                          placeholder={"이메일을 입력해주세요"}
                        />
                        <div className="flex justify-between mt-[2.25rem] mb-[0.5rem]">
                          <div className="font-bold">비밀번호</div>
                          <div className="text-signin_font">
                            비밀번호 재설정
                          </div>
                        </div>
                        <InputPw
                          placeholder={"비밀번호를 입력해주세요"}
                          name={"password"}
                        />
                        <button
                          className="bg-signin_btn text-center w-full py-2 text-white my-[2.75rem] h-[2.75rem] text-[20px] font-bold rounded-md cursor-pointer"
                          type="submit"
                          // onClick={() => onSignInClick(email, password)}
                        >
                          로그인
                        </button>
                      </form>

                      <SocialLogin />
                    </div>
                  ) : (
                    <div className="px-[2.5rem] py-[1.75rem] text-[0.8125rem]">
                      <form onSubmit={(event) => console.log(event.target.name.value)}>
                      <div className="mb-[0.625rem] font-bold">이름</div>
                      <Input
                        svg={<Smile />}
                        type={"text"}
                        name={"name"}
                        placeholder={"이름을 입력해 주세요"}
                      />
                      <div className="mt-[2.25rem] mb-[0.625rem] font-bold">
                        이메일
                      </div>
                      <Input
                        svg={<Email />}
                        type={"text"}
                        name={"email"}
                        placeholder={"이메일을 입력해 주세요"}
                      />
                      <div className="mt-[2.25rem] mb-[0.625rem] font-bold">
                        비밀번호
                      </div>
                      <InputPw
                        placeholder={"영문자, 숫자, 특수문자 포함 최소 8~20자"}
                        name={"pw1"}
                      />
                      <div className="mb-[0.625rem]"></div>
                      <InputPw
                        placeholder={"비밀번호를 확인해 주세요"}
                        name={"pw2"}
                      />

                      <div className="mt-[2.625rem] flex-col">
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={allCheck}
                            onChange={allBtnEvent}
                          />
                          <div>전체동의</div>
                        </div>
                        <div className="w-full border h-0 my-3"></div>
                        <div className="flex mb-2">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={useCheck}
                            onChange={useBtnEvent}
                          />
                          <div>이용약관 동의</div>
                        </div>
                        <div className="flex mb-2">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={personalCheck}
                            onChange={personalBtnEvent}
                          />
                          <div>프로그래머스 개인정보 수집 및 이용동의</div>
                        </div>
                        <div className="flex mb-2">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={ageCheck}
                            onChange={ageBtnEvent}
                          />
                          <div>[선택] 만 14세 이상입니다.</div>
                        </div>
                        <div className="flex mb-2">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={marketingCheck}
                            onChange={marketingBtnEvent}
                          />
                          <div>[선택] 마케팅 활용 동의 및 광고 수신 동의</div>
                        </div>
                      </div>
                      <button
                        className="bg-signin_btn w-full text-center py-2 text-white my-[2.75rem] h-[2.75rem] text-[20px] font-bold rounded-md cursor-pointer"
                        // onClick={() =>
                        //   onSignUpClick(
                        //     name,
                        //     email,
                        //     password,
                        //     checkPw,
                        //     mustCheck
                        //   )
                        // }
                      >
                        회원가입
                      </button>
                      <SocialLogin />
                      </form>
                    </div>
                  )}
                </div>
                <div className="flex space-x-5 text-white justify-center mt-[2rem] mb-[3.75rem] items-center">
                  <div>이용약관</div>
                  <div className="border h-3 text-center"></div>
                  <div className="font-bold">개인정보 처리방침</div>
                  <div className="border h-3 text-center"></div>
                  <div>FAQ/문의</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
