import Position from "./Position";

export default function Bottom() {
    return (
        <div className="p-[1.5rem]">
        <div className="flex items-center">
            <div className="font-extrabold text-[1rem]">추천 포지션</div>
            <div>
                <svg width="1.25rem" className="mb-1" height="1.875rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5L13 10.5L7 16" stroke="currentColor" strokeWidth="2"></path>
                </svg>
            </div>
            
        </div>
        <Position />
        </div>
    );
}
