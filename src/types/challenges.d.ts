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

type email = {
    email: string;
    email2: string;
    email3: string;
};

type password = {
    pw: string;
    pw2: string;
    pw3: string;
    pw4: string;
};

type position = {
    logo: string;
    title: string;
    company: string;
    response: string;
    career: string;
    region: string;
};
