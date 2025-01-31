export default function Footer() {
    return (
        <footer className="mt-20 space-y-2 py-8 text-sm text-gray-600 dark:text-gray-400">
            <p className="font-semibold">
                &copy; Marcel Breuer {new Date().getFullYear()}
            </p>
        </footer>
    );
}