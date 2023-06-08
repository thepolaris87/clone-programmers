import React from "react";

export default function SocialLogin() {
  return (
    <>
      <div className="text-center mb-[1.5rem]"> 다른 계정으로 로그인 하기</div>
      <div className="flex justify-evenly text-center text-[0.75rem]">
        <div>
          <img
            src="../src/assets/signin/google.png"
            className="w-[2.875rem]"
          ></img>
          <div>Google</div>
        </div>
        <div>
          <img
            src="../src/assets/signin/kakao.png"
            className="w-[2.875rem]"
          ></img>
          <div>Kakao</div>
        </div>
        <div>
          <img
            src="../src/assets/signin/github.png"
            className="w-[2.875rem]"
          ></img>
          <div>Github</div>
        </div>
        <div>
          <img
            src="../src/assets/signin/facebook.png"
            className="w-[2.875rem]"
          ></img>
          <div>Facebook</div>
        </div>
      </div>
    </>
  );
}
