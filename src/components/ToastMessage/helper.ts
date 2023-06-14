const stack = new Set<HTMLDivElement>();

export const createToastElement = (message = '') => {
    const container = document.createElement('div');
    const toastElement = document.createElement('div');

    container.classList.add('fixed', 'transition-all', 'text-center', 'w-full', 'duration-300');
    container.style.top = '-45px';

    toastElement.classList.add('w-fit', 'bg-[#0078ff]', 'm-auto', 'text-white', 'font-bold', 'pt-2', 'pb-1', 'px-4', 'rounded-lg', 'my-2', 'drop-shadow-lg');
    toastElement.innerText = message;

    stack.add(container);

    container.appendChild(toastElement);
    document.body.prepend(container);

    return container;
};

export const removeToastElement = (toastElement: HTMLDivElement) => {
    toastElement.parentNode?.removeChild(toastElement);
    stack.delete(toastElement);
};

export const transitionToast = () => {
    stack.forEach((t) => (t.style.top = `${parseInt(t.style.top) + 45}px`));
};
