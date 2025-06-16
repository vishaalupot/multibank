import React from 'react';

const Final = () => {

    const features = [
        "Trade seamlessly, anytime, anywhere",
        "Access comprehensive market data and tools",
        "Real-time charting and analysis",
        "Secure and user-friendly mobile trading"
      ];
  return (
    <div>
        <section className="relative overflow-visible h-[250px] bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>      
            <div className="relative overflow-visible">
                <div className="flex direction-col justify-evenly">
                    <div className="">
                        <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                        </div>
                        
                        <h2 className="text-3xl lg:text-3xl font-bold text-white leading-tight py-3">
                            Download the MultiBank Group<br />
                            Brochure
                        </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            <div className="flex flex-col items-start">
                            <span className="text-[10px] text-gray-300">Download</span>
                            <span className="text-[14px] font-semibold">Desktop Version</span>
                            </div>
                        </button>

                        <button className="group bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            <div className="flex flex-col items-start">
                            <span className="text-[10px] text-gray-300">Download</span>
                            <span className="text-[14px] font-semibold">Mobile Version</span>
                            </div>
                        </button>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src="https://tradfi.multibankgroup.com/_next/image?url=%2Fbrochurev2.webp&w=1080&q=100" className='h-[400px] flex top-[-60px] relative z-[100]'/>
                    </div>
                </div>
            </div>
        </section>
        <section className="final-part2 bg-slate-900 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block gradient-textcolor px-4 py-2 text-[18px] font-semibold rounded-full mb-6">
            Platforms
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-4xl font-bold text-white mb-8">
            Explore our Mobile Trading Platforms
          </h1>
          
          {/* Platform Toggle Buttons */}
          <div className="flex justify-center space-x-2 mb-12">
            <button className="px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-sm font-medium transition-colors text-[14px]">
              MultiBank-Plus
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-600 hover:bg-gray-800 text-white rounded-sm font-medium transition-colors text-[14px]">
              MT4 / MT5
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Investing <span className="gradient-textcolor">Redefined</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get a smarter and faster mobile trading experience on the go, designed for you
                as a modern investor.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      
                    </div>
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mobile Mockups */}
          <div className="relative">
            {/* Main Phone */}
            <div className="relative z-20 mx-auto max-w-sm">
                <img src="https://tradfi.multibankgroup.com/_next/image?url=%2Fimg-multiBankTrader45-pt1.webp&w=1080&q=75" />
            </div>


            
            <div className="absolute -top-4 left-8 z-30">
                <img src="https://tradfi.multibankgroup.com/_next/image?url=%2Fimg-multiBankTrader45-pt2.webp&w=1080&q=100" />     
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Final;