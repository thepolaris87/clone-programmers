import { useState } from 'react';

export const Navbar = () => {
    const [value, setValue] = useState('');
    const navbars = ['강의', '국비지원', '코딩테스트 연습', 'MY 스쿨', '강사되기', '캠퍼스'];

    return (
        <div className='flex justify-center items-center'>
            <div className='flex w-[1200px] h-[4.875rem] justify-center items-center'>
                <div className='flex w-[100%] whitespace-nowrap'>
                    <a className='w-[30%] mr-[5rem] flex items-center' href='#'>
                        <svg viewBox='0 0 851 90' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M103.494 26.148h11.316v5.248h.164c.492-.71 1.121-1.421 1.886-2.132a15.284 15.284 0 012.788-2.05 18.415 18.415 0 013.526-1.476 13.728 13.728 0 014.018-.574c2.952 0 5.631.52 8.036 1.558 2.405.984 4.455 2.405 6.15 4.264 1.749 1.804 3.089 3.963 4.018 6.478.929 2.515 1.394 5.275 1.394 8.282 0 2.788-.437 5.467-1.312 8.036-.82 2.515-2.023 4.756-3.608 6.724a17.66 17.66 0 01-5.658 4.756c-2.241 1.148-4.783 1.722-7.626 1.722-2.569 0-4.975-.383-7.216-1.148-2.187-.82-3.991-2.187-5.412-4.1h-.164v22.96h-12.3V26.148zm11.316 19.926c0 3.007.847 5.44 2.542 7.298 1.749 1.859 4.182 2.788 7.298 2.788 3.116 0 5.521-.93 7.216-2.788 1.749-1.859 2.624-4.291 2.624-7.298 0-3.007-.875-5.44-2.624-7.298-1.695-1.859-4.1-2.788-7.216-2.788-3.116 0-5.549.93-7.298 2.788-1.695 1.859-2.542 4.291-2.542 7.298zM152.194 26.148h12.3v6.396h.164c1.312-2.46 2.87-4.291 4.674-5.494 1.804-1.257 4.073-1.886 6.806-1.886.711 0 1.421.027 2.132.082.711.055 1.367.164 1.968.328v11.234a15.03 15.03 0 00-2.624-.574 13.371 13.371 0 00-2.624-.246c-2.351 0-4.209.328-5.576.984-1.367.656-2.433 1.585-3.198 2.788-.711 1.148-1.175 2.542-1.394 4.182-.219 1.64-.328 3.444-.328 5.412V66h-12.3V26.148zM180.867 46.074c0-3.17.574-6.04 1.722-8.61 1.148-2.57 2.706-4.756 4.674-6.56 2.023-1.859 4.373-3.28 7.052-4.264 2.733-.984 5.631-1.476 8.692-1.476s5.931.492 8.61 1.476c2.733.984 5.084 2.405 7.052 4.264 2.023 1.804 3.608 3.99 4.756 6.56 1.148 2.57 1.722 5.44 1.722 8.61 0 3.17-.574 6.04-1.722 8.61-1.148 2.57-2.733 4.783-4.756 6.642-1.968 1.804-4.319 3.198-7.052 4.182-2.679.984-5.549 1.476-8.61 1.476-3.061 0-5.959-.492-8.692-1.476-2.679-.984-5.029-2.378-7.052-4.182-1.968-1.859-3.526-4.073-4.674-6.642-1.148-2.57-1.722-5.44-1.722-8.61zm12.3 0c0 3.007.847 5.44 2.542 7.298 1.749 1.859 4.182 2.788 7.298 2.788 3.116 0 5.521-.93 7.216-2.788 1.749-1.859 2.624-4.291 2.624-7.298 0-3.007-.875-5.44-2.624-7.298-1.695-1.859-4.1-2.788-7.216-2.788-3.116 0-5.549.93-7.298 2.788-1.695 1.859-2.542 4.291-2.542 7.298zM272.41 62.638c0 7.544-1.914 13.257-5.74 17.138-3.772 3.936-9.54 5.904-17.302 5.904-3.554 0-7.052-.41-10.496-1.23-3.444-.765-6.615-2.296-9.512-4.592l6.806-10.168c1.913 1.585 3.908 2.843 5.986 3.772 2.132.93 4.455 1.394 6.97 1.394 3.772 0 6.532-.93 8.282-2.788 1.804-1.804 2.706-4.127 2.706-6.97v-3.854h-.164c-1.422 1.913-3.198 3.28-5.33 4.1-2.078.765-4.046 1.148-5.904 1.148-2.952 0-5.631-.492-8.036-1.476-2.406-1.039-4.483-2.46-6.232-4.264-1.695-1.859-3.007-4.045-3.936-6.56-.93-2.515-1.394-5.275-1.394-8.282 0-2.624.41-5.193 1.23-7.708.874-2.515 2.077-4.729 3.608-6.642a18.055 18.055 0 015.74-4.592c2.241-1.203 4.783-1.804 7.626-1.804 1.749 0 3.334.191 4.756.574 1.476.383 2.788.875 3.936 1.476 1.148.601 2.132 1.285 2.952 2.05.82.71 1.476 1.421 1.968 2.132h.164v-5.248h11.316v36.49zm-30.996-16.81c0 1.312.246 2.57.738 3.772a10.619 10.619 0 002.05 3.116 12.125 12.125 0 003.116 2.132c1.202.547 2.514.82 3.936.82a9.208 9.208 0 003.854-.82 10.52 10.52 0 003.116-2.132 9.904 9.904 0 002.132-3.116 9.868 9.868 0 00.738-3.772 9.268 9.268 0 00-.738-3.69 8.806 8.806 0 00-2.132-3.116 9.806 9.806 0 00-3.116-2.214 9.207 9.207 0 00-3.854-.82c-1.422 0-2.734.273-3.936.82a11.178 11.178 0 00-3.116 2.214 9.362 9.362 0 00-2.05 3.116 9.268 9.268 0 00-.738 3.69zM280.438 26.148h12.3v6.396h.164c1.312-2.46 2.87-4.291 4.674-5.494 1.804-1.257 4.073-1.886 6.806-1.886.711 0 1.421.027 2.132.082.711.055 1.367.164 1.968.328v11.234a15.03 15.03 0 00-2.624-.574 13.371 13.371 0 00-2.624-.246c-2.351 0-4.209.328-5.576.984-1.367.656-2.433 1.585-3.198 2.788-.711 1.148-1.175 2.542-1.394 4.182-.219 1.64-.328 3.444-.328 5.412V66h-12.3V26.148zM337.038 60.998h-.164c-1.366 2.132-3.198 3.663-5.494 4.592-2.241.93-4.619 1.394-7.134 1.394-1.858 0-3.662-.273-5.412-.82-1.694-.492-3.198-1.257-4.51-2.296a11.294 11.294 0 01-3.116-3.854c-.765-1.53-1.148-3.307-1.148-5.33 0-2.296.41-4.237 1.23-5.822a11.97 11.97 0 013.444-3.936c1.476-1.039 3.144-1.831 5.002-2.378a33.644 33.644 0 015.74-1.312 56.342 56.342 0 015.986-.492c2.023-.055 3.882-.082 5.576-.082 0-2.187-.792-3.909-2.378-5.166-1.53-1.312-3.362-1.968-5.494-1.968-2.022 0-3.881.437-5.576 1.312-1.64.82-3.116 1.968-4.428 3.444l-6.56-6.724c2.296-2.132 4.975-3.717 8.036-4.756a28.073 28.073 0 019.512-1.64c3.608 0 6.56.465 8.856 1.394 2.351.875 4.21 2.187 5.576 3.936 1.422 1.75 2.406 3.909 2.952 6.478.547 2.515.82 5.44.82 8.774V66h-11.316v-5.002zm-3.034-12.464c-.929 0-2.104.055-3.526.164a16.678 16.678 0 00-4.018.656c-1.257.383-2.35.957-3.28 1.722-.874.765-1.312 1.831-1.312 3.198 0 1.476.629 2.57 1.886 3.28 1.258.71 2.57 1.066 3.936 1.066 1.203 0 2.351-.164 3.444-.492 1.148-.328 2.16-.793 3.034-1.394a6.36 6.36 0 002.05-2.296c.547-.93.82-2.023.82-3.28v-2.624h-3.034zM354.269 26.148h11.808v5.412h.164c.383-.765.929-1.53 1.64-2.296a11.933 11.933 0 012.542-2.05c.984-.601 2.105-1.093 3.362-1.476 1.257-.383 2.624-.574 4.1-.574 2.788 0 5.248.574 7.38 1.722 2.187 1.148 3.827 2.952 4.92 5.412 1.421-2.57 3.143-4.4 5.166-5.494 2.023-1.093 4.51-1.64 7.462-1.64 2.679 0 4.92.465 6.724 1.394 1.859.875 3.307 2.105 4.346 3.69 1.093 1.53 1.859 3.362 2.296 5.494.492 2.077.738 4.319.738 6.724V66h-12.3V42.794c0-1.859-.41-3.444-1.23-4.756-.765-1.367-2.159-2.05-4.182-2.05-1.421 0-2.624.246-3.608.738a5.934 5.934 0 00-2.296 1.886c-.547.82-.957 1.777-1.23 2.87a17.505 17.505 0 00-.328 3.444V66h-12.3V44.926c0-.71-.027-1.585-.082-2.624a10.488 10.488 0 00-.574-2.952 5.498 5.498 0 00-1.64-2.378c-.711-.656-1.777-.984-3.198-.984-1.585 0-2.87.3-3.854.902a5.8 5.8 0 00-2.296 2.296c-.492.93-.82 1.995-.984 3.198a27.911 27.911 0 00-.246 3.772V66h-12.3V26.148zM423.816 26.148h11.808v5.412h.164c.383-.765.93-1.53 1.64-2.296a11.933 11.933 0 012.542-2.05c.984-.601 2.105-1.093 3.362-1.476 1.258-.383 2.624-.574 4.1-.574 2.788 0 5.248.574 7.38 1.722 2.187 1.148 3.827 2.952 4.92 5.412 1.422-2.57 3.144-4.4 5.166-5.494 2.023-1.093 4.51-1.64 7.462-1.64 2.679 0 4.92.465 6.724 1.394 1.859.875 3.308 2.105 4.346 3.69 1.094 1.53 1.859 3.362 2.296 5.494.492 2.077.738 4.319.738 6.724V66h-12.3V42.794c0-1.859-.41-3.444-1.23-4.756-.765-1.367-2.159-2.05-4.182-2.05-1.421 0-2.624.246-3.608.738a5.942 5.942 0 00-2.296 1.886c-.546.82-.956 1.777-1.23 2.87a17.581 17.581 0 00-.328 3.444V66h-12.3V44.926c0-.71-.027-1.585-.082-2.624a10.453 10.453 0 00-.574-2.952 5.49 5.49 0 00-1.64-2.378c-.71-.656-1.776-.984-3.198-.984-1.585 0-2.87.3-3.854.902a5.8 5.8 0 00-2.296 2.296c-.492.93-.82 1.995-.984 3.198a27.911 27.911 0 00-.246 3.772V66h-12.3V26.148zM531.084 59.112c-1.968 2.515-4.455 4.455-7.462 5.822-3.007 1.367-6.123 2.05-9.348 2.05-3.061 0-5.959-.492-8.692-1.476-2.679-.984-5.029-2.378-7.052-4.182-1.968-1.859-3.526-4.073-4.674-6.642-1.148-2.57-1.722-5.44-1.722-8.61 0-3.17.574-6.04 1.722-8.61 1.148-2.57 2.706-4.756 4.674-6.56 2.023-1.859 4.373-3.28 7.052-4.264 2.733-.984 5.631-1.476 8.692-1.476 2.843 0 5.412.492 7.708 1.476 2.351.984 4.319 2.405 5.904 4.264 1.64 1.804 2.897 3.99 3.772 6.56.875 2.57 1.312 5.44 1.312 8.61v3.854h-28.536c.492 2.35 1.558 4.237 3.198 5.658 1.64 1.367 3.663 2.05 6.068 2.05 2.023 0 3.717-.437 5.084-1.312a14.13 14.13 0 003.69-3.526l8.61 6.314zM520.67 41.564c.055-2.077-.629-3.854-2.05-5.33-1.421-1.476-3.253-2.214-5.494-2.214-1.367 0-2.569.219-3.608.656a9.145 9.145 0 00-2.706 1.722 7.586 7.586 0 00-1.722 2.378 8.005 8.005 0 00-.656 2.788h16.236zM538.648 26.148h12.3v6.396h.164c1.312-2.46 2.87-4.291 4.674-5.494 1.804-1.257 4.072-1.886 6.806-1.886.71 0 1.421.027 2.132.082.71.055 1.366.164 1.968.328v11.234a15.05 15.05 0 00-2.624-.574 13.371 13.371 0 00-2.624-.246c-2.351 0-4.21.328-5.576.984-1.367.656-2.433 1.585-3.198 2.788-.711 1.148-1.176 2.542-1.394 4.182-.219 1.64-.328 3.444-.328 5.412V66h-12.3V26.148zM592.788 37.874c-1.804-2.241-4.182-3.362-7.134-3.362-1.039 0-2.05.246-3.034.738s-1.476 1.34-1.476 2.542c0 .984.492 1.722 1.476 2.214 1.039.437 2.323.847 3.854 1.23 1.585.328 3.253.71 5.002 1.148a17.21 17.21 0 015.002 1.886 10.609 10.609 0 013.854 3.608c1.039 1.476 1.558 3.471 1.558 5.986 0 2.57-.574 4.701-1.722 6.396-1.093 1.64-2.515 2.98-4.264 4.018-1.749.984-3.717 1.667-5.904 2.05a32.976 32.976 0 01-6.478.656c-2.788 0-5.603-.383-8.446-1.148-2.843-.82-5.248-2.241-7.216-4.264l7.462-8.282c1.148 1.421 2.405 2.515 3.772 3.28 1.421.71 3.061 1.066 4.92 1.066 1.421 0 2.706-.191 3.854-.574 1.148-.437 1.722-1.203 1.722-2.296 0-1.039-.519-1.804-1.558-2.296-.984-.547-2.269-.984-3.854-1.312a143.328 143.328 0 00-5.002-1.148 22.984 22.984 0 01-5.002-1.886c-1.531-.82-2.815-1.968-3.854-3.444-.984-1.53-1.476-3.553-1.476-6.068 0-2.35.465-4.373 1.394-6.068.984-1.695 2.241-3.089 3.772-4.182 1.585-1.093 3.389-1.886 5.412-2.378a23.474 23.474 0 016.15-.82c2.624 0 5.275.383 7.954 1.148 2.679.765 4.947 2.132 6.806 4.1l-7.544 7.462z'
                                fill='#202B3D'
                            ></path>
                            <path
                                d='M646.52 35.298c-.86-1.663-2.007-2.981-3.44-3.956-1.433-.975-3.182-1.462-5.246-1.462-.975 0-1.978.115-3.01.344a8.48 8.48 0 00-2.666 1.118 5.978 5.978 0 00-1.978 1.806c-.459.745-.688 1.663-.688 2.752 0 1.892.659 3.268 1.978 4.128 1.319.86 3.297 1.605 5.934 2.236l5.762 1.376c2.809.63 5.131 1.92 6.966 3.87 1.892 1.892 2.838 4.271 2.838 7.138 0 2.179-.459 4.07-1.376 5.676a11.377 11.377 0 01-3.526 3.87c-1.433.975-3.096 1.691-4.988 2.15a24.37 24.37 0 01-5.762.688c-3.096 0-5.991-.573-8.686-1.72-2.637-1.204-4.902-3.24-6.794-6.106l4.902-3.354c1.147 1.835 2.58 3.297 4.3 4.386 1.777 1.09 3.87 1.634 6.278 1.634 1.147 0 2.293-.115 3.44-.344 1.147-.287 2.15-.688 3.01-1.204.917-.573 1.634-1.29 2.15-2.15.573-.86.86-1.863.86-3.01 0-2.007-.745-3.44-2.236-4.3-1.491-.917-3.297-1.634-5.418-2.15l-5.504-1.29c-.688-.172-1.634-.459-2.838-.86-1.147-.401-2.293-1.003-3.44-1.806-1.089-.803-2.035-1.835-2.838-3.096-.803-1.319-1.204-2.924-1.204-4.816 0-2.064.401-3.87 1.204-5.418.86-1.548 1.978-2.81 3.354-3.784 1.433-.975 3.039-1.691 4.816-2.15a19.639 19.639 0 015.504-.774c2.809 0 5.418.545 7.826 1.634 2.408 1.09 4.271 2.953 5.59 5.59l-5.074 3.354zM689.245 35.212c-.975-1.49-2.351-2.752-4.128-3.784-1.72-1.032-3.698-1.548-5.934-1.548-2.351-.057-4.472.315-6.364 1.118a13.94 13.94 0 00-4.73 3.354c-1.319 1.433-2.322 3.153-3.01 5.16-.688 1.95-1.032 4.07-1.032 6.364 0 2.293.344 4.443 1.032 6.45.688 1.95 1.691 3.64 3.01 5.074a13.94 13.94 0 004.73 3.354c1.892.803 4.013 1.175 6.364 1.118 2.236 0 4.214-.516 5.934-1.548 1.777-1.032 3.153-2.293 4.128-3.784l4.644 3.526c-2.007 2.35-4.271 4.1-6.794 5.246a20.87 20.87 0 01-7.912 1.72c-3.268.057-6.221-.43-8.858-1.462-2.637-1.09-4.902-2.58-6.794-4.472-1.835-1.892-3.239-4.128-4.214-6.708-.975-2.637-1.462-5.475-1.462-8.514 0-3.039.487-5.848 1.462-8.428.975-2.637 2.379-4.902 4.214-6.794 1.892-1.892 4.157-3.354 6.794-4.386 2.637-1.09 5.59-1.605 8.858-1.548 2.752.057 5.389.66 7.912 1.806 2.523 1.09 4.787 2.81 6.794 5.16l-4.644 3.526zM699.517.984h5.676v31.218h.172a13.237 13.237 0 012.408-3.01 14.695 14.695 0 013.268-2.322 15.462 15.462 0 013.784-1.548 14.394 14.394 0 014.042-.602c5.16 0 8.973 1.376 11.438 4.128 2.465 2.695 3.698 6.565 3.698 11.61V66h-5.676V43.726c0-4.472-.774-7.883-2.322-10.234-1.548-2.408-4.415-3.612-8.6-3.612-.287 0-1.089.115-2.408.344-1.319.23-2.723.86-4.214 1.892-1.433 1.032-2.723 2.58-3.87 4.644-1.147 2.064-1.72 4.93-1.72 8.6V66h-5.676V.984zM779.9 45.876c0-2.236-.373-4.329-1.118-6.278-.688-1.95-1.691-3.64-3.01-5.074-1.319-1.433-2.924-2.551-4.816-3.354-1.835-.86-3.927-1.29-6.278-1.29-2.351 0-4.472.43-6.364 1.29a13.94 13.94 0 00-4.73 3.354c-1.261 1.433-2.265 3.125-3.01 5.074-.688 1.95-1.032 4.042-1.032 6.278 0 2.236.344 4.329 1.032 6.278.745 1.95 1.749 3.64 3.01 5.074 1.319 1.433 2.895 2.58 4.73 3.44 1.892.803 4.013 1.204 6.364 1.204s4.443-.401 6.278-1.204c1.892-.86 3.497-2.007 4.816-3.44 1.319-1.433 2.322-3.125 3.01-5.074.745-1.95 1.118-4.042 1.118-6.278zm6.192 0c0 3.039-.545 5.848-1.634 8.428-1.032 2.58-2.494 4.816-4.386 6.708-1.892 1.892-4.157 3.383-6.794 4.472-2.58 1.032-5.447 1.548-8.6 1.548-3.096 0-5.963-.516-8.6-1.548-2.58-1.09-4.816-2.58-6.708-4.472-1.892-1.892-3.383-4.128-4.472-6.708-1.032-2.58-1.548-5.39-1.548-8.428 0-3.039.516-5.848 1.548-8.428 1.089-2.58 2.58-4.816 4.472-6.708 1.892-1.892 4.128-3.354 6.708-4.386 2.637-1.09 5.504-1.634 8.6-1.634 3.153 0 6.02.545 8.6 1.634 2.637 1.032 4.902 2.494 6.794 4.386 1.892 1.892 3.354 4.128 4.386 6.708 1.089 2.58 1.634 5.39 1.634 8.428zM828.989 45.876c0-2.236-.373-4.329-1.118-6.278-.688-1.95-1.692-3.64-3.01-5.074-1.319-1.433-2.924-2.551-4.816-3.354-1.835-.86-3.928-1.29-6.278-1.29-2.351 0-4.472.43-6.364 1.29a13.93 13.93 0 00-4.73 3.354c-1.262 1.433-2.265 3.125-3.01 5.074-.688 1.95-1.032 4.042-1.032 6.278 0 2.236.344 4.329 1.032 6.278.745 1.95 1.748 3.64 3.01 5.074 1.318 1.433 2.895 2.58 4.73 3.44 1.892.803 4.013 1.204 6.364 1.204 2.35 0 4.443-.401 6.278-1.204 1.892-.86 3.497-2.007 4.816-3.44 1.318-1.433 2.322-3.125 3.01-5.074.745-1.95 1.118-4.042 1.118-6.278zm6.192 0c0 3.039-.545 5.848-1.634 8.428-1.032 2.58-2.494 4.816-4.386 6.708-1.892 1.892-4.157 3.383-6.794 4.472-2.58 1.032-5.447 1.548-8.6 1.548-3.096 0-5.963-.516-8.6-1.548-2.58-1.09-4.816-2.58-6.708-4.472-1.892-1.892-3.383-4.128-4.472-6.708-1.032-2.58-1.548-5.39-1.548-8.428 0-3.039.516-5.848 1.548-8.428 1.089-2.58 2.58-4.816 4.472-6.708 1.892-1.892 4.128-3.354 6.708-4.386 2.637-1.09 5.504-1.634 8.6-1.634 3.153 0 6.02.545 8.6 1.634 2.637 1.032 4.902 2.494 6.794 4.386 1.892 1.892 3.354 4.128 4.386 6.708 1.089 2.58 1.634 5.39 1.634 8.428zM850.557 66h-5.676V.984h5.676V66z'
                                fill='#009688'
                            ></path>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M10 10h60c5.523 0 10 4.477 10 10v60c0 5.523-4.477 10-10 10H10C4.477 90 0 85.523 0 80V20c0-5.523 4.477-10 10-10z'
                                fill='#202B3D'
                            ></path>
                            <mask id='a' className='mask-type:alpha;' maskUnits='userSpaceOnUse' x='0' y='10' width='80' height='80'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M10 10h60c5.523 0 10 4.477 10 10v60c0 5.523-4.477 10-10 10H10C4.477 90 0 85.523 0 80V20c0-5.523 4.477-10 10-10z'
                                    fill='#fff'
                                ></path>
                            </mask>
                            <g mask='url(#a)' fillRule='evenodd' clipRule='evenodd' fill='#fff'>
                                <path
                                    opacity='.56'
                                    d='M49.387 38.66c-1.706.222-8.368-3.924-21.13-10.778-11.132-5.977-8.1 2.514-7.116 4.838.138.326.169.686.082 1.03-.42 1.667-.676 7.95 12.29 21.763.517.551.734 1.105.328 1.742l-.142.23c-1.776 2.847 16.995-19.876 15.688-18.824z'
                                ></path>
                                <path
                                    opacity='.32'
                                    d='M49.387 38.66c-1.639-.353-2.13-.725-7.889-14.032-4.309-9.956-8.464-.52-8.366 2.005.014.354-.083.703-.285.993-.982 1.406-6.083 9.221 1.165 26.739.289.698.237 2.185-.172 2.89l-.141.23c-1.776 2.848 16.994-19.875 15.688-18.824z'
                                ></path>
                                <path d='M64 36.667c-1.833-.17-3.288-3.225-6.458-3.225-3.32 0-6.849 4.168-8.155 5.219-1.888 1.18-11.998 1.268-26.948 2.314-13.228.926-8.293 4.48-6.771 5.396.213.128.32.316.292.54-.131 1.082 1.622 5.879 17.179 9.05 1.458.298.56 1.524.56 1.524-1.776 2.848-7.688 12.812-9.578 21.614-.384 1.787 1.37-2.642 8.626-8.806 7.255-6.164 14.516-5.08 20.992-13.512 6.477-8.432 3.287-14.3 10.261-16.114l16-4s-15.828.016-16 0z'></path>
                            </g>
                            <path
                                d='M103.494 26.148h11.316v5.248h.164c.492-.71 1.121-1.421 1.886-2.132a15.284 15.284 0 012.788-2.05 18.415 18.415 0 013.526-1.476 13.728 13.728 0 014.018-.574c2.952 0 5.631.52 8.036 1.558 2.405.984 4.455 2.405 6.15 4.264 1.749 1.804 3.089 3.963 4.018 6.478.929 2.515 1.394 5.275 1.394 8.282 0 2.788-.437 5.467-1.312 8.036-.82 2.515-2.023 4.756-3.608 6.724a17.66 17.66 0 01-5.658 4.756c-2.241 1.148-4.783 1.722-7.626 1.722-2.569 0-4.975-.383-7.216-1.148-2.187-.82-3.991-2.187-5.412-4.1h-.164v22.96h-12.3V26.148zm11.316 19.926c0 3.007.847 5.44 2.542 7.298 1.749 1.859 4.182 2.788 7.298 2.788 3.116 0 5.521-.93 7.216-2.788 1.749-1.859 2.624-4.291 2.624-7.298 0-3.007-.875-5.44-2.624-7.298-1.695-1.859-4.1-2.788-7.216-2.788-3.116 0-5.549.93-7.298 2.788-1.695 1.859-2.542 4.291-2.542 7.298zM152.194 26.148h12.3v6.396h.164c1.312-2.46 2.87-4.291 4.674-5.494 1.804-1.257 4.073-1.886 6.806-1.886.711 0 1.421.027 2.132.082.711.055 1.367.164 1.968.328v11.234a15.03 15.03 0 00-2.624-.574 13.371 13.371 0 00-2.624-.246c-2.351 0-4.209.328-5.576.984-1.367.656-2.433 1.585-3.198 2.788-.711 1.148-1.175 2.542-1.394 4.182-.219 1.64-.328 3.444-.328 5.412V66h-12.3V26.148zM180.867 46.074c0-3.17.574-6.04 1.722-8.61 1.148-2.57 2.706-4.756 4.674-6.56 2.023-1.859 4.373-3.28 7.052-4.264 2.733-.984 5.631-1.476 8.692-1.476s5.931.492 8.61 1.476c2.733.984 5.084 2.405 7.052 4.264 2.023 1.804 3.608 3.99 4.756 6.56 1.148 2.57 1.722 5.44 1.722 8.61 0 3.17-.574 6.04-1.722 8.61-1.148 2.57-2.733 4.783-4.756 6.642-1.968 1.804-4.319 3.198-7.052 4.182-2.679.984-5.549 1.476-8.61 1.476-3.061 0-5.959-.492-8.692-1.476-2.679-.984-5.029-2.378-7.052-4.182-1.968-1.859-3.526-4.073-4.674-6.642-1.148-2.57-1.722-5.44-1.722-8.61zm12.3 0c0 3.007.847 5.44 2.542 7.298 1.749 1.859 4.182 2.788 7.298 2.788 3.116 0 5.521-.93 7.216-2.788 1.749-1.859 2.624-4.291 2.624-7.298 0-3.007-.875-5.44-2.624-7.298-1.695-1.859-4.1-2.788-7.216-2.788-3.116 0-5.549.93-7.298 2.788-1.695 1.859-2.542 4.291-2.542 7.298zM272.41 62.638c0 7.544-1.914 13.257-5.74 17.138-3.772 3.936-9.54 5.904-17.302 5.904-3.554 0-7.052-.41-10.496-1.23-3.444-.765-6.615-2.296-9.512-4.592l6.806-10.168c1.913 1.585 3.908 2.843 5.986 3.772 2.132.93 4.455 1.394 6.97 1.394 3.772 0 6.532-.93 8.282-2.788 1.804-1.804 2.706-4.127 2.706-6.97v-3.854h-.164c-1.422 1.913-3.198 3.28-5.33 4.1-2.078.765-4.046 1.148-5.904 1.148-2.952 0-5.631-.492-8.036-1.476-2.406-1.039-4.483-2.46-6.232-4.264-1.695-1.859-3.007-4.045-3.936-6.56-.93-2.515-1.394-5.275-1.394-8.282 0-2.624.41-5.193 1.23-7.708.874-2.515 2.077-4.729 3.608-6.642a18.055 18.055 0 015.74-4.592c2.241-1.203 4.783-1.804 7.626-1.804 1.749 0 3.334.191 4.756.574 1.476.383 2.788.875 3.936 1.476 1.148.601 2.132 1.285 2.952 2.05.82.71 1.476 1.421 1.968 2.132h.164v-5.248h11.316v36.49zm-30.996-16.81c0 1.312.246 2.57.738 3.772a10.619 10.619 0 002.05 3.116 12.125 12.125 0 003.116 2.132c1.202.547 2.514.82 3.936.82a9.208 9.208 0 003.854-.82 10.52 10.52 0 003.116-2.132 9.904 9.904 0 002.132-3.116 9.868 9.868 0 00.738-3.772 9.268 9.268 0 00-.738-3.69 8.806 8.806 0 00-2.132-3.116 9.806 9.806 0 00-3.116-2.214 9.207 9.207 0 00-3.854-.82c-1.422 0-2.734.273-3.936.82a11.178 11.178 0 00-3.116 2.214 9.362 9.362 0 00-2.05 3.116 9.268 9.268 0 00-.738 3.69zM280.438 26.148h12.3v6.396h.164c1.312-2.46 2.87-4.291 4.674-5.494 1.804-1.257 4.073-1.886 6.806-1.886.711 0 1.421.027 2.132.082.711.055 1.367.164 1.968.328v11.234a15.03 15.03 0 00-2.624-.574 13.371 13.371 0 00-2.624-.246c-2.351 0-4.209.328-5.576.984-1.367.656-2.433 1.585-3.198 2.788-.711 1.148-1.175 2.542-1.394 4.182-.219 1.64-.328 3.444-.328 5.412V66h-12.3V26.148zM337.038 60.998h-.164c-1.366 2.132-3.198 3.663-5.494 4.592-2.241.93-4.619 1.394-7.134 1.394-1.858 0-3.662-.273-5.412-.82-1.694-.492-3.198-1.257-4.51-2.296a11.294 11.294 0 01-3.116-3.854c-.765-1.53-1.148-3.307-1.148-5.33 0-2.296.41-4.237 1.23-5.822a11.97 11.97 0 013.444-3.936c1.476-1.039 3.144-1.831 5.002-2.378a33.644 33.644 0 015.74-1.312 56.342 56.342 0 015.986-.492c2.023-.055 3.882-.082 5.576-.082 0-2.187-.792-3.909-2.378-5.166-1.53-1.312-3.362-1.968-5.494-1.968-2.022 0-3.881.437-5.576 1.312-1.64.82-3.116 1.968-4.428 3.444l-6.56-6.724c2.296-2.132 4.975-3.717 8.036-4.756a28.073 28.073 0 019.512-1.64c3.608 0 6.56.465 8.856 1.394 2.351.875 4.21 2.187 5.576 3.936 1.422 1.75 2.406 3.909 2.952 6.478.547 2.515.82 5.44.82 8.774V66h-11.316v-5.002zm-3.034-12.464c-.929 0-2.104.055-3.526.164a16.678 16.678 0 00-4.018.656c-1.257.383-2.35.957-3.28 1.722-.874.765-1.312 1.831-1.312 3.198 0 1.476.629 2.57 1.886 3.28 1.258.71 2.57 1.066 3.936 1.066 1.203 0 2.351-.164 3.444-.492 1.148-.328 2.16-.793 3.034-1.394a6.36 6.36 0 002.05-2.296c.547-.93.82-2.023.82-3.28v-2.624h-3.034zM354.269 26.148h11.808v5.412h.164c.383-.765.929-1.53 1.64-2.296a11.933 11.933 0 012.542-2.05c.984-.601 2.105-1.093 3.362-1.476 1.257-.383 2.624-.574 4.1-.574 2.788 0 5.248.574 7.38 1.722 2.187 1.148 3.827 2.952 4.92 5.412 1.421-2.57 3.143-4.4 5.166-5.494 2.023-1.093 4.51-1.64 7.462-1.64 2.679 0 4.92.465 6.724 1.394 1.859.875 3.307 2.105 4.346 3.69 1.093 1.53 1.859 3.362 2.296 5.494.492 2.077.738 4.319.738 6.724V66h-12.3V42.794c0-1.859-.41-3.444-1.23-4.756-.765-1.367-2.159-2.05-4.182-2.05-1.421 0-2.624.246-3.608.738a5.934 5.934 0 00-2.296 1.886c-.547.82-.957 1.777-1.23 2.87a17.505 17.505 0 00-.328 3.444V66h-12.3V44.926c0-.71-.027-1.585-.082-2.624a10.488 10.488 0 00-.574-2.952 5.498 5.498 0 00-1.64-2.378c-.711-.656-1.777-.984-3.198-.984-1.585 0-2.87.3-3.854.902a5.8 5.8 0 00-2.296 2.296c-.492.93-.82 1.995-.984 3.198a27.911 27.911 0 00-.246 3.772V66h-12.3V26.148zM423.816 26.148h11.808v5.412h.164c.383-.765.93-1.53 1.64-2.296a11.933 11.933 0 012.542-2.05c.984-.601 2.105-1.093 3.362-1.476 1.258-.383 2.624-.574 4.1-.574 2.788 0 5.248.574 7.38 1.722 2.187 1.148 3.827 2.952 4.92 5.412 1.422-2.57 3.144-4.4 5.166-5.494 2.023-1.093 4.51-1.64 7.462-1.64 2.679 0 4.92.465 6.724 1.394 1.859.875 3.308 2.105 4.346 3.69 1.094 1.53 1.859 3.362 2.296 5.494.492 2.077.738 4.319.738 6.724V66h-12.3V42.794c0-1.859-.41-3.444-1.23-4.756-.765-1.367-2.159-2.05-4.182-2.05-1.421 0-2.624.246-3.608.738a5.942 5.942 0 00-2.296 1.886c-.546.82-.956 1.777-1.23 2.87a17.581 17.581 0 00-.328 3.444V66h-12.3V44.926c0-.71-.027-1.585-.082-2.624a10.453 10.453 0 00-.574-2.952 5.49 5.49 0 00-1.64-2.378c-.71-.656-1.776-.984-3.198-.984-1.585 0-2.87.3-3.854.902a5.8 5.8 0 00-2.296 2.296c-.492.93-.82 1.995-.984 3.198a27.911 27.911 0 00-.246 3.772V66h-12.3V26.148zM531.084 59.112c-1.968 2.515-4.455 4.455-7.462 5.822-3.007 1.367-6.123 2.05-9.348 2.05-3.061 0-5.959-.492-8.692-1.476-2.679-.984-5.029-2.378-7.052-4.182-1.968-1.859-3.526-4.073-4.674-6.642-1.148-2.57-1.722-5.44-1.722-8.61 0-3.17.574-6.04 1.722-8.61 1.148-2.57 2.706-4.756 4.674-6.56 2.023-1.859 4.373-3.28 7.052-4.264 2.733-.984 5.631-1.476 8.692-1.476 2.843 0 5.412.492 7.708 1.476 2.351.984 4.319 2.405 5.904 4.264 1.64 1.804 2.897 3.99 3.772 6.56.875 2.57 1.312 5.44 1.312 8.61v3.854h-28.536c.492 2.35 1.558 4.237 3.198 5.658 1.64 1.367 3.663 2.05 6.068 2.05 2.023 0 3.717-.437 5.084-1.312a14.13 14.13 0 003.69-3.526l8.61 6.314zM520.67 41.564c.055-2.077-.629-3.854-2.05-5.33-1.421-1.476-3.253-2.214-5.494-2.214-1.367 0-2.569.219-3.608.656a9.145 9.145 0 00-2.706 1.722 7.586 7.586 0 00-1.722 2.378 8.005 8.005 0 00-.656 2.788h16.236zM538.648 26.148h12.3v6.396h.164c1.312-2.46 2.87-4.291 4.674-5.494 1.804-1.257 4.072-1.886 6.806-1.886.71 0 1.421.027 2.132.082.71.055 1.366.164 1.968.328v11.234a15.05 15.05 0 00-2.624-.574 13.371 13.371 0 00-2.624-.246c-2.351 0-4.21.328-5.576.984-1.367.656-2.433 1.585-3.198 2.788-.711 1.148-1.176 2.542-1.394 4.182-.219 1.64-.328 3.444-.328 5.412V66h-12.3V26.148zM592.788 37.874c-1.804-2.241-4.182-3.362-7.134-3.362-1.039 0-2.05.246-3.034.738s-1.476 1.34-1.476 2.542c0 .984.492 1.722 1.476 2.214 1.039.437 2.323.847 3.854 1.23 1.585.328 3.253.71 5.002 1.148a17.21 17.21 0 015.002 1.886 10.609 10.609 0 013.854 3.608c1.039 1.476 1.558 3.471 1.558 5.986 0 2.57-.574 4.701-1.722 6.396-1.093 1.64-2.515 2.98-4.264 4.018-1.749.984-3.717 1.667-5.904 2.05a32.976 32.976 0 01-6.478.656c-2.788 0-5.603-.383-8.446-1.148-2.843-.82-5.248-2.241-7.216-4.264l7.462-8.282c1.148 1.421 2.405 2.515 3.772 3.28 1.421.71 3.061 1.066 4.92 1.066 1.421 0 2.706-.191 3.854-.574 1.148-.437 1.722-1.203 1.722-2.296 0-1.039-.519-1.804-1.558-2.296-.984-.547-2.269-.984-3.854-1.312a143.328 143.328 0 00-5.002-1.148 22.984 22.984 0 01-5.002-1.886c-1.531-.82-2.815-1.968-3.854-3.444-.984-1.53-1.476-3.553-1.476-6.068 0-2.35.465-4.373 1.394-6.068.984-1.695 2.241-3.089 3.772-4.182 1.585-1.093 3.389-1.886 5.412-2.378a23.474 23.474 0 016.15-.82c2.624 0 5.275.383 7.954 1.148 2.679.765 4.947 2.132 6.806 4.1l-7.544 7.462z'
                                fill='#202B3D'
                            ></path>
                            <path
                                d='M646.52 35.298c-.86-1.663-2.007-2.981-3.44-3.956-1.433-.975-3.182-1.462-5.246-1.462-.975 0-1.978.115-3.01.344a8.48 8.48 0 00-2.666 1.118 5.978 5.978 0 00-1.978 1.806c-.459.745-.688 1.663-.688 2.752 0 1.892.659 3.268 1.978 4.128 1.319.86 3.297 1.605 5.934 2.236l5.762 1.376c2.809.63 5.131 1.92 6.966 3.87 1.892 1.892 2.838 4.271 2.838 7.138 0 2.179-.459 4.07-1.376 5.676a11.377 11.377 0 01-3.526 3.87c-1.433.975-3.096 1.691-4.988 2.15a24.37 24.37 0 01-5.762.688c-3.096 0-5.991-.573-8.686-1.72-2.637-1.204-4.902-3.24-6.794-6.106l4.902-3.354c1.147 1.835 2.58 3.297 4.3 4.386 1.777 1.09 3.87 1.634 6.278 1.634 1.147 0 2.293-.115 3.44-.344 1.147-.287 2.15-.688 3.01-1.204.917-.573 1.634-1.29 2.15-2.15.573-.86.86-1.863.86-3.01 0-2.007-.745-3.44-2.236-4.3-1.491-.917-3.297-1.634-5.418-2.15l-5.504-1.29c-.688-.172-1.634-.459-2.838-.86-1.147-.401-2.293-1.003-3.44-1.806-1.089-.803-2.035-1.835-2.838-3.096-.803-1.319-1.204-2.924-1.204-4.816 0-2.064.401-3.87 1.204-5.418.86-1.548 1.978-2.81 3.354-3.784 1.433-.975 3.039-1.691 4.816-2.15a19.639 19.639 0 015.504-.774c2.809 0 5.418.545 7.826 1.634 2.408 1.09 4.271 2.953 5.59 5.59l-5.074 3.354zM689.245 35.212c-.975-1.49-2.351-2.752-4.128-3.784-1.72-1.032-3.698-1.548-5.934-1.548-2.351-.057-4.472.315-6.364 1.118a13.94 13.94 0 00-4.73 3.354c-1.319 1.433-2.322 3.153-3.01 5.16-.688 1.95-1.032 4.07-1.032 6.364 0 2.293.344 4.443 1.032 6.45.688 1.95 1.691 3.64 3.01 5.074a13.94 13.94 0 004.73 3.354c1.892.803 4.013 1.175 6.364 1.118 2.236 0 4.214-.516 5.934-1.548 1.777-1.032 3.153-2.293 4.128-3.784l4.644 3.526c-2.007 2.35-4.271 4.1-6.794 5.246a20.87 20.87 0 01-7.912 1.72c-3.268.057-6.221-.43-8.858-1.462-2.637-1.09-4.902-2.58-6.794-4.472-1.835-1.892-3.239-4.128-4.214-6.708-.975-2.637-1.462-5.475-1.462-8.514 0-3.039.487-5.848 1.462-8.428.975-2.637 2.379-4.902 4.214-6.794 1.892-1.892 4.157-3.354 6.794-4.386 2.637-1.09 5.59-1.605 8.858-1.548 2.752.057 5.389.66 7.912 1.806 2.523 1.09 4.787 2.81 6.794 5.16l-4.644 3.526zM699.517.984h5.676v31.218h.172a13.237 13.237 0 012.408-3.01 14.695 14.695 0 013.268-2.322 15.462 15.462 0 013.784-1.548 14.394 14.394 0 014.042-.602c5.16 0 8.973 1.376 11.438 4.128 2.465 2.695 3.698 6.565 3.698 11.61V66h-5.676V43.726c0-4.472-.774-7.883-2.322-10.234-1.548-2.408-4.415-3.612-8.6-3.612-.287 0-1.089.115-2.408.344-1.319.23-2.723.86-4.214 1.892-1.433 1.032-2.723 2.58-3.87 4.644-1.147 2.064-1.72 4.93-1.72 8.6V66h-5.676V.984zM779.9 45.876c0-2.236-.373-4.329-1.118-6.278-.688-1.95-1.691-3.64-3.01-5.074-1.319-1.433-2.924-2.551-4.816-3.354-1.835-.86-3.927-1.29-6.278-1.29-2.351 0-4.472.43-6.364 1.29a13.94 13.94 0 00-4.73 3.354c-1.261 1.433-2.265 3.125-3.01 5.074-.688 1.95-1.032 4.042-1.032 6.278 0 2.236.344 4.329 1.032 6.278.745 1.95 1.749 3.64 3.01 5.074 1.319 1.433 2.895 2.58 4.73 3.44 1.892.803 4.013 1.204 6.364 1.204s4.443-.401 6.278-1.204c1.892-.86 3.497-2.007 4.816-3.44 1.319-1.433 2.322-3.125 3.01-5.074.745-1.95 1.118-4.042 1.118-6.278zm6.192 0c0 3.039-.545 5.848-1.634 8.428-1.032 2.58-2.494 4.816-4.386 6.708-1.892 1.892-4.157 3.383-6.794 4.472-2.58 1.032-5.447 1.548-8.6 1.548-3.096 0-5.963-.516-8.6-1.548-2.58-1.09-4.816-2.58-6.708-4.472-1.892-1.892-3.383-4.128-4.472-6.708-1.032-2.58-1.548-5.39-1.548-8.428 0-3.039.516-5.848 1.548-8.428 1.089-2.58 2.58-4.816 4.472-6.708 1.892-1.892 4.128-3.354 6.708-4.386 2.637-1.09 5.504-1.634 8.6-1.634 3.153 0 6.02.545 8.6 1.634 2.637 1.032 4.902 2.494 6.794 4.386 1.892 1.892 3.354 4.128 4.386 6.708 1.089 2.58 1.634 5.39 1.634 8.428zM828.989 45.876c0-2.236-.373-4.329-1.118-6.278-.688-1.95-1.692-3.64-3.01-5.074-1.319-1.433-2.924-2.551-4.816-3.354-1.835-.86-3.928-1.29-6.278-1.29-2.351 0-4.472.43-6.364 1.29a13.93 13.93 0 00-4.73 3.354c-1.262 1.433-2.265 3.125-3.01 5.074-.688 1.95-1.032 4.042-1.032 6.278 0 2.236.344 4.329 1.032 6.278.745 1.95 1.748 3.64 3.01 5.074 1.318 1.433 2.895 2.58 4.73 3.44 1.892.803 4.013 1.204 6.364 1.204 2.35 0 4.443-.401 6.278-1.204 1.892-.86 3.497-2.007 4.816-3.44 1.318-1.433 2.322-3.125 3.01-5.074.745-1.95 1.118-4.042 1.118-6.278zm6.192 0c0 3.039-.545 5.848-1.634 8.428-1.032 2.58-2.494 4.816-4.386 6.708-1.892 1.892-4.157 3.383-6.794 4.472-2.58 1.032-5.447 1.548-8.6 1.548-3.096 0-5.963-.516-8.6-1.548-2.58-1.09-4.816-2.58-6.708-4.472-1.892-1.892-3.383-4.128-4.472-6.708-1.032-2.58-1.548-5.39-1.548-8.428 0-3.039.516-5.848 1.548-8.428 1.089-2.58 2.58-4.816 4.472-6.708 1.892-1.892 4.128-3.354 6.708-4.386 2.637-1.09 5.504-1.634 8.6-1.634 3.153 0 6.02.545 8.6 1.634 2.637 1.032 4.902 2.494 6.794 4.386 1.892 1.892 3.354 4.128 4.386 6.708 1.089 2.58 1.634 5.39 1.634 8.428zM850.557 66h-5.676V.984h5.676V66z'
                                fill='#009688'
                            ></path>
                        </svg>
                    </a>
                    <div className='w-[100%] flex items-center whitespace-nowrap'>
                        {navbars.map((navbar, index) => {
                            return (
                                <a
                                    key={index}
                                    className={`text-[18px] font-medium mr-[3rem] ${value === navbar ? 'text-[#429488]' : 'text-[black]'}`}
                                    href='#'
                                    onClick={() => setValue(navbar)}
                                >
                                    {navbar}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
