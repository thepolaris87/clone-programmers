import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function CodingList() {
    return (
        <>
            <div className="hidden sm:block">
                <Header />
                <Main />
            </div>
        </>
    );
}
