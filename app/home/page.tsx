export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">홈</h1>

            <div className="space-y-4">
                <p className="text-gray-700">
                    백오피스 관리 시스템에 오신 것을 환영합니다.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-blue-900 font-medium">
                        💡 사이드바 메뉴를 통해 다양한 기능을 이용할 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            빠른 시작
                        </h3>
                        <p className="text-gray-600">
                            시스템의 주요 기능들을 빠르게 시작해보세요.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            도움말
                        </h3>
                        <p className="text-gray-600">
                            시스템 사용에 대한 자세한 가이드를 확인하세요.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}