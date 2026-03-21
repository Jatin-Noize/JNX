"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data.slice(0, 8))) // only featured
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/50 via-pink-950/50 to-orange-950/50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:54px_54px]"></div>
        
        <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
              <span className="relative text-7xl md:text-8xl inline-block animate-bounce">
                
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Welcome to
              </span>
              <br />
              <span className="text-7xl md:text-8xl lg:text-8xl font-bold bg-gradient-to-r from-purple-500  via-pink-500 to-orange-500 bg-clip-text text-transparent">
               J N X
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Discover the best products at unbeatable prices with exclusive deals and premium quality
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/products"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Shop Now</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-gray-700 rounded-full hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Explore Collections
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Gradient wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="url(#gradient-wave)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <defs>
              <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b0764" />
                <stop offset="50%" stopColor="#831843" />
                <stop offset="100%" stopColor="#7c2d12" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="py-24 px-4 relative">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 text-sm font-semibold text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                Featured Collection
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Products
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Hand-picked selections just for you. Quality products at the best prices with exclusive discounts.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[500px]">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-500 text-xs font-bold tracking-wider animate-pulse">LOADING</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="transform transition-all duration-500 hover:-translate-y-2 opacity-0"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                    }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {/* View All Products Button */}
              <div className="text-center mt-12">
                <a
                  href="/products"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full hover:border-purple-500/60 transition-all duration-300"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors font-semibold">
                    View All Products
                  </span>
                  <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-gray-400">Experience the best shopping experience with our premium services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                description: "On orders over $50 with fast delivery worldwide",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: "🔄",
                title: "30-Day Returns",
                description: "Hassle-free returns with money-back guarantee",
                gradient: "from-pink-500/20 to-orange-500/20"
              },
              {
                icon: "🔒",
                title: "Secure Payment",
                description: "100% secure transactions with encryption",
                gradient: "from-orange-500/20 to-purple-500/20"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-pink-950 to-orange-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-4xl animate-pulse">📧</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Subscribe to our newsletter for exclusive offers, early access, and new arrivals
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-300 text-sm mt-6">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}