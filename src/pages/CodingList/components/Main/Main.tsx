import Carousel from './Carousel';
import Aside from './Aside/Aside';
import List from './List/List';

export default function Main() {
    return (
        <>
            <Carousel />
            <div className="bg-[#F7F8FA] px-[1rem]">
                <div className="flex gap-[2rem] pt-[3rem] w-full justify-center box-border ">
                    <div className="block lg:flex max-w-[75rem] w-full gap-[2rem]">
                        <div className="lg:hidden block">
                            <Aside />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <List />
                        </div>
                        <div className="lg:block hidden">
                            <Aside />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
