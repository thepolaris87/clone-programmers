type AnswerModalContentProps = { onClick: (value: boolean) => void; answer: boolean; questionId: string };

type BottomNavbarProps = { functions: ((value?: boolean) => void)[]; questionId: string };

type HiddenResultProps = { data: ResultProps[]; answers: { [key: number]: number | string | null | string[] }; totalNum: string };

type NavbarProps = { setModal?: (modal: boolean) => void; title: string; category: string; id?: string; children?: string };

type TestResultProps = { data: ResultProps[]; results: { [key: number]: number | string | null | string[] }; answerNum: number; error: string };

type ResultProps = { input: string[] | number[]; output: number | string | string[] | number[] };
