import React from 'react';
import { Shield, Clock, Users, Brain, Award, HeadphonesIcon, Zap, Target, CheckCircle, Sparkles, TrendingUp, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "AHORRO GARANTIZADO",
    description: "Te garantizamos que encontrarás una tarifa mejor que la actual o te devolvemos el tiempo invertido. Compromiso total con tu ahorro.",
    color: "lime",
    highlight: true,
    stats: "100% Garantía"
  },
  {
    icon: Brain,
    title: "COMPARATIVAS CON IA",
    description: "Nuestro sistema de inteligencia artificial analiza miles de tarifas en tiempo real para encontrar la mejor opción personalizada para ti.",
    color: "green",
    stats: "IA Avanzada"
  },
  {
    icon: Clock,
    title: "EN MENOS DE 5 MINUTOS",
    description: "SIN LARGAS LLAMADAS ni procesos complicados. Obtienes tu comparativa personalizada al instante con nuestra tecnología.",
    color: "lime",
    stats: "Ultra Rápido"
  },
  {
    icon: Users,
    title: "EQUIPO DE +100 ASESORES",
    description: "EXPERTOS EN EL SECTOR CON AÑOS DE EXPERIENCIA te acompañan en todo el proceso de cambio y optimización energética.",
    color: "green",
    stats: "+100 Expertos"
  },
  {
    icon: Award,
    title: "12+ AÑOS DE EXPERIENCIA",
    description: "Líderes en el sector energético con más de una década ayudando a familias y empresas a optimizar sus costes energéticos.",
    color: "lime",
    stats: "Líderes Sector"
  },
  {
    icon: HeadphonesIcon,
    title: "ATENCIÓN PERSONALIZADA",
    description: "Soporte gratuito premium antes, durante y después de cambiar tu tarifa energética. Seguimiento completo de tu ahorro.",
    color: "green",
    stats: "Soporte 24/7"
  }
];

const stats = [
  { number: "12+", label: "Años de Experiencia", icon: Award, color: "lime" },
  { number: "100+", label: "Asesores Expertos", icon: Users, color: "green" },
  { number: "5", label: "Minutos Proceso", icon: Clock, color: "lime" },
  { number: "200€", label: "Ahorro Medio/Año", icon: Target, color: "green" }
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-black mb-6">
            <Zap className="w-4 h-4 mr-2" />
            LÍDERES DEL SECTOR
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-black text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-700 font-bold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            ¿Por qué elegir
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Wasabi Trader?
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="text-blue-600 font-black">EXPERTOS CON AÑOS DE EXPERIENCIA</span> utilizando IA avanzada
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-black text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{feature.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="font-bold text-xs">Incluido</span>
                </div>
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-black">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-black text-base shadow-lg">
            <Shield className="w-5 h-5 mr-2" />
            AHORRO GARANTIZADO
          </div>
        </div>
      </div>
    </section>
  );
}