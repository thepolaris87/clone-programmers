import DropDown from './DropDownMenu';
import Table from './Table';
export default function List() {
    return (
        <>
            <DropDown />
            <div className="flex justify-between pt-[1.5rem]">
            </div>
            <div>
                <Table />
            </div>
        </>
    );
}
