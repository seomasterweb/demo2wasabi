import React from 'react';
import { Zap, Phone, Mail, MapPin, Shield, Award, Users, Star, TrendingUp, Clock, Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black">Wasabi Trader</h3>
                <p className="text-blue-400 font-bold text-sm">Comparador Inteligente</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              <span className="text-blue-400 font-black">+12 años ayudando</span> a familias y empresas. 
              <span className="text-blue-400 font-black"> +100 expertos</span> con IA.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="font-black text-base">900 123 456</span>
                <span className="text-blue-300 font-semibold text-sm">Gratuita</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-sm">info@wasabitrader.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-sm">Madrid, España</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-4 text-blue-400">Servicios</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold flex items-center"><Brain className="w-4 h-4 mr-2" />Comparar Luz</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold flex items-center"><Brain className="w-4 h-4 mr-2" />Comparar Gas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold flex items-center"><Users className="w-4 h-4 mr-2" />Empresas</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold flex items-center"><Award className="w-4 h-4 mr-2" />Asesoramiento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-black mb-4 text-blue-400">Empresa</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold">Nuestro Equipo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-bold">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-400 mb-2 md:mb-0 text-sm">
              &copy; 2025 Wasabi Trader. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Términos</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-black text-sm">
              <Shield className="w-4 h-4 mr-2" />
              AHORRO GARANTIZADO
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}