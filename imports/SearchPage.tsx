import { googleSearchImage } from "../placeholders";

export default function SearchPage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
      <div className="w-full h-full relative">
        {/* Google Search Image */}
        <img 
          src={googleSearchImage} 
          alt="Google Search for linkmylogistics.com"
          className="w-full h-full object-contain bg-gray-100"
        />
        
        {/* Step indicator overlay */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          Step 1
        </div>
        
        {/* Instruction overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg">
          <p className="text-sm font-medium">
            🔍 Search for "linkmylogistics.com" on Google to find our platform
          </p>
        </div>
      </div>
    </div>
  );
}
