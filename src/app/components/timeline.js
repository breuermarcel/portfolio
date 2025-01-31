export default function Timeline({ children }) {
    return (
        <ul className="relative space-y-6 pl-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-1 before:rounded-full before:bg-green-50 before:content-[''] dark:before:bg-purple-950">
            {children}
        </ul>
    );
}