interface TimelineItemProps {
    heading?: string;
    subheading?: string;
    children?: React.ReactNode;
}

export default function TimelineItem({ heading, subheading, children }: TimelineItemProps) {
    if (!heading && !subheading && !children) {
        return null;
    }

    return (
        <li className="before:block before:top-6 before:-left-[1.875rem] before:absolute relative before:bg-white dark:before:bg-gray-950 pt-[1.35rem] before:border-1 before:border-2 before:border-green-200/75 dark:before:border-green-800/75 before:rounded-full before:size-4 before:content-['']">
            {heading && (
                <h3 className="font-semibold text-green-600 dark:text-green-500 text-sm">
                    {heading}
                </h3>
            )}

            {subheading && (
                <h4 className="font-bold">
                    {subheading}
                </h4>
            )}

            {children && (
                <div className="text-gray-700 dark:text-gray-300 text-sm/relaxed">
                    {children}
                </div>
            )}
        </li>
    );
}