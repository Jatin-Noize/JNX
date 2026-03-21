"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState("."); 
  const [wishlistCount, setWishlistCount] = useState("."); 

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-950/95 via-purple-950/95 to-gray-950/95 backdrop-blur-lg border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="group relative">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
             J N X
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              Products
            </Link>
            
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative group">
              <div className="p-2 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center px-1 animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Wishlist Icon with Badge */}
            <Link href="/wishlist" className="relative group">
              <div className="p-2 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center px-1">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20 animate-slideDown">
            <div className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-purple-400 transition-colors py-2 px-4 hover:bg-purple-500/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-300 hover:text-purple-400 transition-colors py-2 px-4 hover:bg-purple-500/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/cart" 
                className="flex items-center justify-between text-gray-300 hover:text-purple-400 transition-colors py-2 px-4 hover:bg-purple-500/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link 
                href="/wishlist" 
                className="flex items-center justify-between text-gray-300 hover:text-purple-400 transition-colors py-2 px-4 hover:bg-purple-500/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}