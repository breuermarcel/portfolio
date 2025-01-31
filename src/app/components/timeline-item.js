export default function TimelineItem({ heading, subheading, children }) {
    if (!heading && !subheading && !children) {
        return null;
    }

    return (
        <li className="before:border-1 relative before:absolute before:-left-[1.875rem] before:top-6 before:block before:size-4 before:rounded-full before:border-2 before:border-green-200/75 before:bg-white before:content-[''] dark:before:border-green-800/75 dark:before:bg-gray-950">
            {heading && (
                <p className="text-sm font-semibold text-green-600 dark:text-green-500">
                    {heading}
                </p>
            )}

            {subheading && (
                <p className="mb-2 font-bold">
                    {subheading}
                </p>
            )}

            {children && (
                <p className="text-sm/relaxed text-gray-700 dark:text-gray-300">
                    {children}
                </p>
            )}
        </li>
    );
}