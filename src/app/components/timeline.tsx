import { ReactNode } from 'react';

export default function Timeline({ children }: { children: ReactNode }) {
    return (
        <ul className="before:block before:top-0 before:bottom-0 before:left-0 before:absolute relative before:bg-green-50 dark:before:bg-green-900 pl-6 before:rounded-full before:w-1 before:content-['']">
            {children}
        </ul>
    );
}