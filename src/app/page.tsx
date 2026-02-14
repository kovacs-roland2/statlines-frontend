export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="mt-4 text-sm text-gray-500">
          Use the sidebar on the left to navigate. Click Matches to open the
          matches page.
        </p>
      </div>
    </div>
  );
}
