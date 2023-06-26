import DropDownMenu from './DropDownMenu';
import Table from './Table';
export default function List() {
    return (
        <>
            <DropDownMenu />
            <div className="flex justify-between pt-[1.5rem]">
            </div>
            <div>
                <Table />
            </div>
        </>
    );
}
