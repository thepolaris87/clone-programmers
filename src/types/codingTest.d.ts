type AnswerModalContentProps = { onClick: (value: boolean) => void; answer: boolean; questionId: string };

type BottomNavbarProps = { functions: ((value?: boolean) => void)[]; questionId: string; mode: boolean };

type HiddenResultProps = { answers: { [key: number]: number | string | null | string[] }; totalNum: string; mode: boolean };

type NavbarProps = { setModal?: (modal: boolean) => void; title: string; category: string; id?: string; children?: string };

type TestResultProps = { data: ResultProps[]; results: { [key: number]: number | string | null | string[] }; answerNum: number; error: string; mode: boolean };

type ResultProps = { input: string[] | number[]; output: number | string | string[] | number[] };

type CodingHeaderProps = { title: string; onSetMode: (value: boolean) => void; mode: boolean };
