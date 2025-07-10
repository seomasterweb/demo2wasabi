import React, { useEffect, useState } from 'react';
import { Shield, Clock, Users, Brain, Star, ArrowRight, Sparkles, Zap, Target, Award, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-black shadow-2xl shadow-blue-500/25">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                AHORRO GARANTIZADO
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                <span className="block">Compara y</span>
                <span className="block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Ahorra
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold mt-2">
                  en Luz y Gas
                </span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  <span className="text-blue-600 font-black text-xl sm:text-2xl">+12 años de experiencia</span> y 
                  <span className="text-blue-600 font-black text-xl sm:text-2xl"> +100 asesores expertos</span> con IA avanzada.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm sm:text-base">5 MINUTOS</p>
                    <p className="text-blue-600 font-bold text-xs sm:text-sm">Sin llamadas</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm sm:text-base">CON IA</p>
                    <p className="text-blue-600 font-bold text-xs sm:text-sm">Avanzada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#formulario" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-black text-base hover:from-blue-400 hover:to-blue-500 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                <span>COMPARAR GRATIS</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/34621508300?text=Hola,%20quiero%20comparar%20mi%20factura%20de%20luz%20directamente%20con%20un%20experto" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-500 text-blue-600 px-6 py-4 rounded-xl font-black text-base hover:bg-blue-50 transition-colors">
                HABLAR CON EXPERTO
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-900 font-black">4.9/5</span>
              </div>
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-black">100% Gratuito</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-black mb-4">
                    <Brain className="w-4 h-4 mr-2" />
                    IA AVANZADA
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Descubre tu Ahorro
                    <span className="block text-blue-600">Personalizado</span>
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl">
                        <span className="text-lg">⚡</span>
                        <span className="font-black text-sm">Luz</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl">
                        <span className="text-lg">🔥</span>
                        <span className="font-black text-sm">Gas</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 font-bold text-sm">
                      Comparamos <span className="text-blue-600 font-black">TODAS las tarifas</span>
                    </p>
                  </div>
                  
                  <a
                    href="#formulario"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-black text-base hover:from-blue-400 hover:to-blue-500 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>CALCULAR AHORRO</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Simplified floating elements */}
            <div className="hidden lg:block absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-full text-xs font-black shadow-lg">
              <div className="flex items-center space-x-1">
                <Target className="w-3 h-3" />
                <span>200€/año</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}