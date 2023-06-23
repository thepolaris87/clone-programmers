type CodeItemProps = { solution: SolutionProps; onLike: (value: string) => void };

type SolutionHeaderProps = { value: boolean; setValue: (value: boolean) => void };

type SolutionProps = { isAlreadyLike: boolean; userEmail: string; userName: string; likeCount: number; userCode: string };
