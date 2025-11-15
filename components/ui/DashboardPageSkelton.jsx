'use client';

export default function DashboardPageSkelton() {
    return (

        <div className="z-50 flex items-center justify-center bg-gray-900/90">
            <div className="w-full max-w-4xl p-6">

                <div className="flex gap-6">

                    {/* Main area skeleton */}
                    <div className="flex-1 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            {Array.from({ length: 2 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-24 bg-gray-700 rounded animate-pulse"
                                />
                            ))}
                        </div>
                        <div className="space-y-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-16 bg-gray-700 rounded animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}