
  export default function Loader() {
    return (
      <div className="flex items-center justify-center h-screen bg-black backdrop-blur-md">
        <div className="relative flex justify-center gap-6 items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
          {/* Square Loader with animated borders */}
          {/* <div className="w-24 h-24 border-4 border-gray-700 relative animate-spin rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
            
              <div className="w-16 h-16 border-t-4 border-b-4 border-l-4 border-r-4 border-green-500 animate-spin"></div>
            </div>
          </div> */}
  
          {/* Text under loader */}
          <p className="text-white text-xl font-semibold animate-pulse">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }
  