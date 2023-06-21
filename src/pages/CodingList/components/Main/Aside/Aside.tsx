import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

export default function Aside() {

    return (
        <aside className="border border-list_border rounded-2xl w-[20.875rem] h-fit bg-white">
            <Top />
            <Middle />
            <Bottom />
        </aside>
    );
}
