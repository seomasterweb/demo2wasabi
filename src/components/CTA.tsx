import React from 'react';
import { Phone, MessageSquare, ArrowRight, Sparkles, Clock, Shield, Award, Target, Brain, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-black mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AHORRO GARANTIZADO
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            ¿Listo para empezar
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              a ahorrar?
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Únete a miles de clientes que ya disfrutan de tarifas más económicas. 
            <span className="text-blue-600 font-black"> Proceso 100% online</span> sin complicaciones.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Comparación Online
              </h3>
              <p className="text-gray-700 mb-6 text-sm">
                Comparativa personalizada en <span className="text-blue-600 font-black">5 minutos</span>
              </p>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-center text-blue-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-bold">Ultra-rápido</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="font-bold">100% gratuito</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Brain className="w-4 h-4 mr-2" />
                  <span className="font-bold">Con IA</span>
                </div>
              </div>
              
              <a href="https://form.typeform.com/to/zP12qzQH" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-black text-base hover:from-blue-400 hover:to-blue-500 transition-colors flex items-center justify-center space-x-2 shadow-lg">
                <span>EMPEZAR AHORA</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Habla con un Experto
              </h3>
              <p className="text-gray-700 mb-6 text-sm">
                <span className="text-blue-600 font-black">+100 asesores expertos</span> disponibles
              </p>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-center text-blue-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="font-bold">12+ años experiencia</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-bold">Atención personalizada</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Target className="w-4 h-4 mr-2" />
                  <span className="font-bold">Expertos sector</span>
                </div>
              </div>
              
              <a href="https://form.typeform.com/to/zP12qzQH" target="_blank" rel="noopener noreferrer" className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-xl font-black text-base hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>CONTACTAR EXPERTO</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-black text-base shadow-lg">
          <Shield className="w-5 h-5 mr-2" />
          AHORRO GARANTIZADO
        </div>
      </div>
    </section>
  );
}