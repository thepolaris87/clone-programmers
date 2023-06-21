import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

export default function Aside() {

    return (
        <aside className="border border-list_border rounded-2xl lg:w-[20.875rem] w-full h-fit bg-white mb-[1.5rem]">
            <Top />
            <Middle />
            <Bottom />
        </aside>
    );
}
