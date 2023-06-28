type TListData = {
    questions: {
        localeCompare: any;
        category: string;
        correct_rate: number;
        difficulty: string;
        finished_count: number;
        isComplete: boolean;
        question_id: string;
        title: string;
    }[];
};

type questions = {
          localeCompare: any;
          category: string;
          correct_rate: number;
          difficulty: string;
          finished_count: number;
          isComplete: boolean;
          question_id: string;
          title: string;
      }[]
    | undefined;

type position = {
    logo: string;
    title: string;
    company: string;
    response: string;
    career: string;
    region: string;
};
