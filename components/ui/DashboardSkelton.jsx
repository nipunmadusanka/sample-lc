// components/LoadingSkeleton.tsx
'use client';

export default function DashboardSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90">
      <div className="w-full max-w-4xl p-6">
        {/* Header skeleton */}
        <div className="mb-6 space-y-2">
          <div className="h-8 w-1/3 bg-gray-700 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="flex gap-6">
          {/* Sidebar skeleton */}
          <div className="w-64 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 bg-gray-700 rounded w-full animate-pulse"
              />
            ))}
          </div>

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
