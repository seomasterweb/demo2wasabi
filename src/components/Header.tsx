import React, { useState, useEffect } from 'react';
import { Menu, Phone, Zap, X, Shield, Star, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900">
                  Wasabi Trader
                </h1>
                <div className="flex items-center space-x-2">
                  <p className="text-xs font-bold text-blue-600">
                    Comparador Inteligente
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-blue-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="#comparador" className="font-bold text-sm text-gray-700 hover:text-blue-600 transition-colors">
                Comparador IA
              </a>
              <a href="#testimonios" className="font-bold text-sm text-gray-700 hover:text-blue-600 transition-colors">
                Testimonios
              </a>
              <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-2 rounded-lg">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="font-black text-sm text-gray-900">900 123 456</span>
              </div>
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-black text-sm hover:from-blue-400 hover:to-blue-500 transition-colors">
                CONSULTA GRATUITA
              </a>
            </nav>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-blue-200 bg-white hover:bg-blue-50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-blue-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <a href="#comparador" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-bold text-base hover:text-blue-600 transition-colors py-2">Comparador IA</a>
            <a href="#testimonios" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-700 font-bold text-base hover:text-blue-600 transition-colors py-2">Testimonios</a>
            <div className="pt-4 border-t border-blue-200">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4 bg-blue-50 rounded-lg py-3">
                <Phone className="w-4 h-4" />
                <span className="font-black text-base">900 123 456</span>
              </div>
              <a href="#formulario" className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-black text-base text-center">
                CONSULTA GRATUITA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}