type ListProps = { question: { idx: number; title: string; userName: string; date: string; commentCount: number } };

type ModalContentProps = { onClick: (value: boolean) => void; content?: string; questionId: string; status: string | undefined };

type questionListProps = { date: string; description: string; idx: number; title: string; userEmail: string; userName: string; commentCount: number };
