import { Component, ReactNode } from 'react';
import Error from './Error';

interface Props {
    children?: ReactNode;
}
interface State {
    hasError: boolean;
    error?: unknown;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: unknown, errorInfo: unknown) {
        console.log(error);
        console.log(errorInfo);
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <Error />;
        }

        return this.props.children;
    }
}
