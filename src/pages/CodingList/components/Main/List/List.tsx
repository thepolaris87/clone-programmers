import DropDown from './DropDown';
import Table from './Table';

export default function List() {

    return (
        <>
            <DropDown />
            <div className="flex justify-between">
                <div>n문제</div>
                <div>
                    <button>최신순</button>
                    <ul></ul>
                </div>
            </div>
            <div className="border border-list_border rounded-md">
                <Table />
            </div>
        </>
    );
}
