import { ReactNode } from 'react';

interface HeadlineProps {
    children: ReactNode;
}

export default function Headline({ children }: HeadlineProps) {
    return (
        <div className="mb-4 py-2.5 border-gray-100 dark:border-gray-900 border-b-4">
            <h1 className="font-medium text-xl">
                {children}
            </h1>
        </div>
    );
}