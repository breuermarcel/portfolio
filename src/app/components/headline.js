export default function Headline({ children }) {
    return (
        <div className="mb-8 border-b-4 border-gray-100 py-2.5 dark:border-gray-900">
            <h1 className="text-xl font-medium">
                {children}
            </h1>
        </div>
    );
}