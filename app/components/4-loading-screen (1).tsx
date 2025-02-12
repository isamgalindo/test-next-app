import React from 'react';
import { Loader } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        {/* Loading State */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center 
                         justify-center bg-gray-100">
              <Loader className="w-8 h-8 text-gray-900 animate-spin" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Verificando...
            </h2>
            <p className="text-gray-600">
              Esto tomará solo un momento
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;