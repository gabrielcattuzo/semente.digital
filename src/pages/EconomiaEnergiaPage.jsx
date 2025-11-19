import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, TrendingDown, Lightbulb, Monitor } from 'lucide-react';

const EconomiaEnergiaPage = () => {
  const stats = [
    { value: '1-2%', label: 'Do consumo global de eletricidade por data centers', source: 'International Energy Agency (IEA)', icon: Zap },
    { value: '40%', label: 'Redução de custos operacionais com eficiência energética', source: 'U.S. Department of Energy', icon: TrendingDown },
    { value: '30%', label: 'Economia de energia com equipamentos certificados (Energy Star)', source: 'Energy Star Program', icon: Lightbulb },
  ];

  return (
    <>
      <Helmet>
        <title>Economia de Energia - Semente Digital</title>
        <meta name="description" content="Descubra estratégias eficazes para reduzir o consumo de energia em ambientes de TI e contribuir para um futuro sustentável." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                <div className="inline-block p-4 bg-yellow-100 rounded-full mb-6">
                  <Zap className="w-16 h-16 text-yellow-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">Economia de Energia</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reduza custos e impacto ambiental através de práticas inteligentes de gestão energética.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                      <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">Fonte: {stat.source}</div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Estratégias para Eficiência</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed">A virtualização de servidores é uma das estratégias mais eficazes. Ao consolidar múltiplos servidores virtuais em uma única máquina física, as empresas podem reduzir o consumo de energia em até 80%, além de economizar espaço e custos de manutenção.</p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">Adotar políticas de gerenciamento de energia, como desligar monitores e computadores fora do horário de trabalho, pode parecer simples, mas gera uma economia significativa em grande escala. O uso de iluminação LED e refrigeração otimizada em data centers também são cruciais.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EconomiaEnergiaPage;