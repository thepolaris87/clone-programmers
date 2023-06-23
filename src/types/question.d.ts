type CommentsProps = { comments: CommentProps[]; email: string; delCommentMutate: (value: number) => void };

type DetailProps = { date: string; description: string; showUserCode: string; title: string; userCode: string; userEmail: string };

type HeaderProps = { email: string; userEmail: string; delQuestionMutate: (value: string) => void; questionId: string; id: string };

type InputProps = { onClick: () => void; value: string; setValue: (value: string) => void };

type questionProps = { id: string; title: string; questionCategory: string; questionTitle: string };

type CommentProps = { date: string; description: string; idx: number; userEmail: string; userName: string };
