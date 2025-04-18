export default function Footer() {
  return (
    <footer className="space-y-2 mt-20 print:mt-0 py-8 print:py-0 text-gray-600 dark:text-gray-400">
      <p className="font-semibold text-sm">
        &copy; Marcel Breuer {new Date().getFullYear()}
      </p>
    </footer>
  )
}
