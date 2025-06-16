import React from 'react';

const Products = () => {

    const currencyData = [
        {
          id: 1,
          primaryCurrency: 'GBP',
          secondaryCurrency: 'USD',
          pair: 'GBPUSD',
          rate: '$1.35704',
          change: '+6.62%',
          isPositive: true,
          bgColor: 'bg-gradient-to-br from-green-600 to-green-700'
        },
        {
          id: 2,
          primaryCurrency: 'USD',
          secondaryCurrency: 'CAD',
          pair: 'USDCAD',
          rate: '$1.3587',
          change: '+1.14%',
          isPositive: true,
          bgColor: 'bg-gradient-to-br from-amber-600 to-amber-700'
        },
        {
          id: 3,
          primaryCurrency: 'AUD',
          secondaryCurrency: 'USD',
          pair: 'AUDUSD',
          rate: '$0.64886',
          change: '-1.68%',
          isPositive: false,
          bgColor: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
        },
        {
          id: 4,
          primaryCurrency: 'USD',
          secondaryCurrency: 'CHF',
          pair: 'USDCHF',
          rate: '$0.81164',
          change: '-5.19%',
          isPositive: false,
          bgColor: 'bg-gradient-to-br from-red-600 to-red-700'
        },
        {
          id: 5,
          primaryCurrency: 'EUR',
          secondaryCurrency: 'USD',
          pair: 'EURUSD',
          rate: '$1.15479',
          change: '+5.44%',
          isPositive: true,
          bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
        },
        {
          id: 6,
          primaryCurrency: 'NZD',
          secondaryCurrency: 'USD',
          pair: 'NZDUSD',
          rate: '$0.60183',
          change: '-2.84%',
          isPositive: false,
          bgColor: 'bg-gradient-to-br from-teal-600 to-teal-700'
        }
      ];

    const duplicatedData = [...currencyData, ...currencyData];

  return (
    <div className="product-bg-colors min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            OUR PRODUCTS
          </p>
          <h1 className="text-3xl md:text-3xl font-bold mb-8 leading-tight">
            Trade our top performing products
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto text-md leading-relaxed">
            Confidently trade with MultiBank Group's cutting-edge trading platforms offering 
            groundbreaking levels of stability and reliability. Subscribe and execute on the tightest pricing 
            and liquidity from top-tier Banks and Prime Brokers.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
            <button className="px-6 py-3 gradient-textcolor rounded-md font-medium transition-all duration-200">
              Forex
            </button>
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-all duration-200">
              Metals
            </button>
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-all duration-200">
              Shares
            </button>
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-all duration-200">
              Indices
            </button>
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-all duration-200">
              Commodities
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Invest in <span className="gradient-textcolor">Forex</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Trade over 55 major, cross, and exotic Forex pairs, and benefit from 
              the tightest spreads in the industry.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="product-card border border-slate-700 rounded-xl p-6 hover:bg-slate-800/60 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  Up to 500:1
                </div>
                <p className="text-gray-400">
                  Highest levels of leverage
                </p>
              </div>
              
              <div className="product-card border border-slate-700 rounded-xl p-6 hover:bg-slate-800/60 transition-all duration-300">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  0.0* Pips
                </div>
                <p className="text-gray-400">
                  Tightest spreads in the industry
                </p>
              </div>
            </div>
          </div>

          
        <div className="relative flex justify-center">
            <img src='https://tradfi.multibankgroup.com/_next/image?url=%2Fproducts%2Fimg-forexHeader.webp&w=1080&q=100' />
        </div>
        </div>

        <div className="w-full overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 ">
                {duplicatedData.map((currency, index) => (
                <div
                    key={`${currency.id}-${index}`}
                    className={`flex-shrink-0 w-[250px] h-[130px] ${currency.bgColor} rounded-2xl p-5 text-white relative overflow-hidden shadow-lg`}
                >
                    {/* Currency Icons */}
                    <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs font-bold">
                        {currency.primaryCurrency}
                        </div>
                        <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xs font-bold">
                        {currency.secondaryCurrency}
                        </div>
                    </div>
                    </div>
                    <div className="mb-1">
                    <h3 className="text-md font-bold text-white">{currency.pair}</h3>
                    <p className="text-sm text-white text-opacity-80 truncate">{currency.title}</p>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center justify-between">
                        <div className="text-md font-bold text-white">
                        {currency.rate}
                        </div>
                        <div className={`text-sm font-semibold ${
                        currency.isPositive ? 'text-green-200' : 'text-red-200'
                        }`}>
                        {currency.change}
                        </div>
                    </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -translate-y-6 translate-x-6"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-5 rounded-full translate-y-6 -translate-x-6"></div>
                </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
                }
                
                .animate-scroll-left {
                animation: scroll-left 20s linear infinite;
                }
            `}</style>
        </div>
      </div>
      

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200 z-50">
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
    </div>
  );
};

export default Products;