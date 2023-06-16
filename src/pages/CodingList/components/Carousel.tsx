import React, { useEffect, useState } from "react";
import banner1 from "@assets/images/codingList/banner1.png";
import banner2 from "@assets/images/codingList/banner2.png";
import banner3 from "@assets/images/codingList/banner3.png";
import banner4 from "@assets/images/codingList/banner4.png";
import banner5 from "@assets/images/codingList/banner5.png";
import banner6 from "@assets/images/codingList/banner6.png";

export default function Carousel(props) {
  const [margin, setMargin] = useState(0);
  const [style, setStyle] = useState("");
  const [isSlide, setIsSlide] = useState(false);
  const [x, setX] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);

  const slideItems = [
    {
      img: banner6,
      bg: "bg-banner6",
      class: "기획전",
      title: (
        <div>
          프로그래머스 <br />
          인기 강의 TOP13
        </div>
      ),
      description: <div>선배 개발자의 노하우를 내 것으로 만들어요!</div>,
    },
    {
      img: banner2,
      bg: "bg-banner2",
      class: "현대모비스",
      title: (
        <div>
          23년 현대 모비스 <br />
          알고리즘 경진대회
        </div>
      ),
      description: (
        <div>
          총 상금 1억6천만원 <br />
          참가 접수: 5.26(금)~6.23(금)
        </div>
      ),
    },
    {
      img: banner3,
      bg: "bg-banner3",
      class: "데브매칭",
      title: (
        <div>
          Dev-Matching <br />웹 프론트엔드 개발자
        </div>
      ),
      description: (
        <div>
          접수 마감: 6.15(목) <br />
          테스트: 6.17(토)
        </div>
      ),
    },
    {
      img: banner4,
      bg: "bg-banner4",
      class: "내일배움코스",
      title: (
        <div>
          수강 완료하면 무료인 <br />
          국비지원 강의 모음
        </div>
      ),
      description: "100% 온라인 교욱을 원하는 난이도로 공부해요!",
    },
    {
      img: banner5,
      bg: "bg-banner5",
      class: "무료 특강",
      title: (
        <div>
          온라인 라이브로 듣는 <br />
          최신 기술 트렌드
        </div>
      ),
      description: (
        <div>
          인공지능, 자율주행, 데이터 엔지니어링, 시스템 소프트웨어 <br />
          분야의 실무자를 직접 만날 수 있어요!
        </div>
      ),
    },
    {
      img: banner6,
      bg: "bg-banner6",
      class: "기획전",
      title: (
        <div>
          프로그래머스 <br />
          인기 강의 TOP13
        </div>
      ),
      description: <div>선배 개발자의 노하우를 내 것으로 만들어요!</div>,
    },
  ];

  const startSlide = slideItems[0];
  const endSlide = slideItems[slideItems.length - 1];
  const [forward, setForward ] = useState(true);

  const onNextClick = () => {
    setForward(true);
      setMargin((prev) => prev + 100);
      setStyle(
        `transition duration-300 ease-in-out transform translate-x-[${
          "-" + margin.toString() + "%"
        }]`
      );
  };

  const onPrevClick = () => {
    setForward(false)
    console.log(currIndex);
  
    if(margin === 0){
      setMargin(600)
    }
      setMargin((prev) => prev - 100);
      setStyle(
        `transition duration-300 ease-in-out transform translate-x-[${
          "-" + Math.abs(margin).toString() + "%"
        }]`
      );
    console.log(margin);
  };

  useEffect(() => {
    if (currIndex === slideItems.length - 1 && forward) {
      setTimeout(() => {
        setStyle(`translate-x-[0%}]`);
        setCurrIndex(1)
        setMargin(0);
      }, 300);
    }
    // if(currIndex === 1 && !forward){
    //   setTimeout(() => {
    //     setStyle(`translate-x-[-500%}]`);
    //     setMargin(500);
    //   }, 500);
    // }
  }, [currIndex]);

  // setInterval(()=> {
  //   setMargin((prev) => prev + 100);
  //     setStyle(
  //       `transition duration-300 ease-in-out transform translate-x-[${
  //         "-" + margin.toString() + "%"
  //       }]`)
  // }, 1000)

  console.log(currIndex, margin);


  ///////////////////

  // const slider = document.querySelector('.slider')
  // const slides = document.querySelectorAll('.slideCard');
  // const [index, setIndex] = useState(1);
  // const [currSlide, setCurrSlide] = useState()
  // const [translate, setTranslate] = useState()

  // console.log(slides)

  // const firstClone = slides[0].cloneNode(true);
  // const lastClone = slides[slides.length - 1].cloneNode(true);

  // console.log('first', firstClone);
  // console.log('last', lastClone);

  // slider.insertBefore(lastClone, slides[0])
  // slider.appendChild(firstClone)

  // const sliderCloneLis = slider.querySelectorAll('div');
  // const liWidth = slides[0].clientWidth;
  // const sliderWidth = liWidth * sliderCloneLis.length;
  


  return (
    <div className={`slider flex w-full h-[17.25rem] overflow-hidden relative `}>
      {slideItems.map((el, i) => {
        return (
          <div
            key={i}
            className={`slideCard flex-none w-full justify-center flex ${el.bg} ${style}`}
          >
            <div className="flex flex-wrap max-w-[75rem] relative">
              <div className="w-2/5 pt-[2.375rem]">
                <div className="text-white font-bold bg-banner_classification text-[0.75rem] p-[0.4rem] rounded w-fit items-center">
                  {el.class}
                </div>
                <div className="text-white text-[1.75rem] font-extrabold">
                  {el.title}
                </div>
                <div className="text-white text-[1rem]">{el.description}</div>
              </div>
              <div className="flex md:justify-center w-3/5 ">
                <img
                  className="md:object-cover object-scale-down"
                  src={el.img}
                />
              </div>
            </div>
            <div className="h-[0.75rem] pl-[2.375rem] flex gap-2 absolute bottom-7">
              <button
                onClick={() => {
                  onPrevClick();
                  setCurrIndex(slideItems.indexOf(el)+1);
                }}
              >
                <svg
                  viewBox="0 0 8 13"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.75rem"
                  height="0.75rem"
                >
                  <path
                    opacity="1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.24575 6.15321L7.35274 11.6458L6.64705 12.3543L0.859131 6.12938L6.85747 0.106934L7.5384 0.839281L2.24575 6.15321Z"
                  ></path>
                </svg>
              </button>
              <span className="text-white font-extrabold">0{i}</span>
              <span className="border w-0 border-white"></span>
              <span className="text-white">05</span>
              <button
                onClick={() => {
                  onNextClick();
                  setCurrIndex(slideItems.indexOf(el)+1);
                }}
              >
                <svg
                  viewBox="0 0 8 13"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.75rem"
                  height="0.75rem"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.75408 6.15321L0.647092 11.6458L1.35278 12.3543L7.1407 6.12938L1.14236 0.106934L0.461426 0.839281L5.75408 6.15321Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}