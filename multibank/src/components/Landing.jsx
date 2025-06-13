import '../styles/global.scss';

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-color">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-contain top-[-90px]"
        autoPlay 
        muted 
        loop
        src="https://tradfi.multibankgroup.com/home/banner/homepage-banner.mp4"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 text-center pt-[50px]">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-2">
           <span className='landing-page-textcolor'>Life is  </span> Better
          </h1>
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            with <span className='landing-page-textcolor'>Money</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl mb-12 max-w-2xl font-bold">
          Trade with the world's largest and most<br />
          regulated FX and CFD Broker
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="button-primary text-white font-semibold px-1 py-1 rounded-lg text-lg duration-300 h-[max-content]">
            Open a Live Account
          </button>
          <button className="button-landing border-2 text-white font-normal px-1 py-1 text-lg transition-colors duration-300 rounded-[4px]">
            Try Risk-Free Demo
          </button>
        </div>
        
        {/* Platform Information */}
        <div className="text-center">
          <p className="text-white text-sm mb-6">
            Multiple Platforms, <span className="text-blue-400">Infinite Possibilities</span>
          </p>
          
          {/* Platform Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* MultiBank-Plus */}
            <div className="flex items-center gap-3">
              <img src="https://tradfi.multibankgroup.com/multibankPlus.svg" className='h-[40px]' />
              <span className="text-white font-semibold text-lg">MultiBank-Plus</span>
            </div>
            
            {/* MetaTrader 4 & 5 */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <img src='https://tradfi.multibankgroup.com/mt5.svg' className='h-[40px]' />
                <img src='https://tradfi.multibankgroup.com/mt5.svg' className='h-[40px]' />
              </div>
              <span className="text-white font-semibold text-lg">MetaTrader 4 & 5</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}