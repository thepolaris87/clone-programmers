import facebook from '@assets/images/codingList/facebook.svg'
import youtube from '@assets/images/codingList/youtube.svg'
import blog from '@assets/images/codingList/blog.svg'

export default function Footer() {
    return (
        <div>
            <div className="flex py-[3.125rem] justify-center px-[1rem]">
                <div className="w-full max-w-[75rem] mt-[2.625rem] mb-[4rem] px-[1.25rem]">
                    <div className="lg:flex">
                        <div className="mr-[2.5rem] mb-[2rem]">
                            <div className="mb-[1rem] text-[14px] text-[#44576C] font-bold">서비스</div>
                            <div className="text-[#98a8b9] mb-[0.25rem] text-[14px]">개발자용 프로그래머스</div>
                            <div className="text-[#98a8b9] mb-[0.25rem] text-[14px]">기업용 프로그래머스</div>
                        </div>
                        <div className="mr-[2.5rem] mb-[2rem]">
                            <div className="mb-[1rem] text-[14px] text-[#44576C] font-bold">문의</div>
                            <div className="text-[#98a8b9] mb-[0.25rem] text-[14px]">FAQ/문의</div>
                            <div className="text-[#98a8b9] mb-[0.25rem] text-[14px]">교육 결제, 환불 관련 문의</div>
                        </div>
                        <div className="mr-[2.5rem] mb-[2rem]">
                            <div className="mb-[1rem] text-[14px] text-[#44576C] font-bold">고객센터</div>
                            <div className="text-[#98a8b9] mb-[0.25rem] text-[14px]">대표번호: 1533-1886</div>
                            <div className="text-[#98a8b9] mb-[0.25rem] text-[0.75rem]">
                                운영시간: 오전 0시 ~ 오후 6시(주말 및 공휴일 휴무) <br />
                                점심시간: 오후 12시 ~ 오후 1시
                            </div>
                        </div>
                    </div>
                    <div className="mt-[2rem] text-[0.75rem] text-[#98a8b9]">
                        <div className="mb-[0.5rem] font-semibold">2023 프로그래머스</div>
                        <div className="max-w-[56.25rem]">
                            (주)그렙 / 대표 임성수 / 서울특별시 서초구 강남대로 327, 2층 프로그래머스(서초동, 대륭서초타워) / 사업자등록번호 220-88-75699 /
                            통신판매업신고 제 2014-서울강남-03241호 / 직업정보제공사업 신고번호 J1200020180027 / (주)그렙은 통신판매중개자로서, 통신판매의
                            당사자가 아니며 중개하는 콘텐츠 및 거래에 대한 책임을 부담하지 않습니다. 단, (주)그렙이 직접 제공하는 콘텐츠에 대해서는 책임을
                            부담합니다. 프로그래머스 사이트의 모든 콘텐츠, 정보, UI, HTML 소스 등에 대한 무단 복제, 전송, 배포, 크롤링, 스크래핑 등의 행위를
                            거부하며, 이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="flex mt-[1.5rem]">
                            <div className='text-[#44576c] font-semibold text-[0.75rem] mr-[1rem]'>개인정보 처리방침</div>
                            <div className='text-[#98a8b9] text-[0.75rem] mr-[1rem]'>이용약관</div>
                            <div className='text-[#98a8b9] text-[0.75rem] mr-[1rem]'>프로그래머스 인재 채용</div>
                        </div>
                        <div className="flex items-center">
                            <img className='object-contain pt-5' src={facebook} />
                            <img className='object-contain ml-[0.5rem] pt-5' src={youtube} />
                            <img className='object-contain ml-[0.5rem] pt-5' src={blog} />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
