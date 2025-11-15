'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(part => part);

  const formatBreadcrumbName = (part) => {
    return part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <nav className="flex items-center w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-6 shadow-lg">
      <div className="flex items-center space-x-2">
        <Link 
          href="/dashboard" 
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 transition-all duration-200 border border-blue-500/30"
        >
          <Home size={16} />
          <span className="font-medium">Dashboard</span>
        </Link>
        
        {pathParts.length > 1 && pathParts.slice(1).map((part, index) => {
          const href = `/${pathParts.slice(0, index + 2).join('/')}`;
          const isLast = index === pathParts.length - 2;
          
          return (
            <div key={index} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-2" />
              {isLast ? (
                <span className="px-3 py-2 rounded-lg bg-purple-600/20 text-purple-300 font-medium border border-purple-500/30">
                  {formatBreadcrumbName(part)}
                </span>
              ) : (
                <Link 
                  href={href} 
                  className="px-3 py-2 rounded-lg hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-200 font-medium"
                >
                  {formatBreadcrumbName(part)}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;