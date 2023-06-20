import Top from './Top';
import Middle from './middle';
import Bottom from './Bottom';

export default function Aside() {

    return (
        <aside className="border border-list_border rounded-2xl w-[20.875rem]">
            <Top />
            <Middle />
            <Bottom />
        </aside>
    );
}
