import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Globe, Users, Heart } from 'lucide-react';

const SustentabilidadePage = () => {
  const principles = [
    {
      title: 'Responsabilidade Ambiental',
      description: 'Minimizar o impacto ecológico em todas as operações de TI',
      icon: Globe,
      color: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Eficiência de Recursos',
      description: 'Otimizar o uso de energia, água e materiais',
      icon: Leaf,
      color: 'from-teal-400 to-cyan-600',
    },
    {
      title: 'Responsabilidade Social',
      description: 'Promover práticas éticas e inclusivas',
      icon: Users,
      color: 'from-blue-400 to-indigo-600',
    },
    {
      title: 'Ciclo de Vida Sustentável',
      description: 'Considerar todo o ciclo de vida dos produtos',
      icon: Heart,
      color: 'from-purple-400 to-pink-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sustentabilidade em TI - Semente Digital</title>
        <meta name="description" content="Explore práticas sustentáveis no desenvolvimento e uso de tecnologia para um futuro mais verde e responsável." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                  <Leaf className="w-16 h-16 text-green-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Sustentabilidade em TI
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Práticas sustentáveis que transformam a tecnologia em aliada do meio ambiente
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">O Conceito de Sustentabilidade</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img alt="Tecnologia sustentável" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1471293486880-9565383f4364" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      A sustentabilidade em TI vai além da simples economia de energia. Trata-se de uma abordagem holística que considera o impacto ambiental, social e econômico de todas as decisões tecnológicas.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Desde a escolha de fornecedores até o descarte final de equipamentos, cada etapa deve ser planejada com consciência ambiental e responsabilidade social.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Empresas que adotam práticas sustentáveis não apenas contribuem para um planeta mais saudável, mas também reduzem custos operacionais e melhoram sua reputação no mercado.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className={`bg-gradient-to-br ${principle.color} rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-all hover:scale-105`}
                    >
                      <Icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                      <p className="text-white/90">{principle.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SustentabilidadePage;