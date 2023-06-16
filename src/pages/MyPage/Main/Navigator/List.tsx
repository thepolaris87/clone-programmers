import classNames from 'classnames';

export default function List({ children }: { children: React.ReactNode }) {
    return <div className="border rounded-md p-4 w-64 bg-white">{children}</div>;
}

List.Title = ({ children }: { children: React.ReactNode }) => {
    return <h6 className="py-2 text-[#9b9b9b] font-bold">{children}</h6>;
};

List.Item = ({ children, onClick, focus }: { children: React.ReactNode; onClick?: () => void; focus?: boolean }) => {
    return (
        <li
            className={classNames(
                'list-none px-4 pt-3 pb-2 cursor-pointer rounded-md my-1',
                focus ? 'font-bold text-[#0078ff] bg-[#e6f2ff] hover:bg-[#e6f2ff]' : 'hover:bg-[#f8fafc]'
            )}
            onClick={onClick}
        >
            {children}
        </li>
    );
};

List.Gap = () => {
    return <div className="h-4"></div>;
};
