export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        대시보드에 오신 것을 환영합니다
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            총 사용자
          </h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            활성 세션
          </h3>
          <p className="text-3xl font-bold text-green-600">89</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">
            오늘의 방문자
          </h3>
          <p className="text-3xl font-bold text-purple-600">456</p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          최근 활동
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            새로운 사용자가 등록했습니다
          </li>
          <li className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            시스템 업데이트가 완료되었습니다
          </li>
          <li className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
            백업이 성공적으로 수행되었습니다
            Deploy Now
          </li>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </ul>
      </div>
    </div >
  );
}
