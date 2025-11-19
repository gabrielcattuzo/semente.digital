import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Zap, Recycle, Cloud, Battery, TreePine, Droplets } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const pillarsRow1 = [
    { id: 1, title: 'Gestão de Energia', icon: Zap, path: '/gestao-energia', color: 'from-yellow-400 to-orange-500' },
    { id: 2, title: 'Lixo Eletrônico', icon: Recycle, path: '/lixo-eletronico', color: 'from-blue-400 to-cyan-600' },
    { id: 3, title: 'Redução de Carbono', icon: Cloud, path: '/reducao-carbono', color: 'from-teal-400 to-cyan-600' },
    { id: 8, title: 'Gasto de Água', icon: Droplets, path: '/reducao-agua', color: 'from-sky-400 to-blue-500' }
  ];

  const pillarsRow2 = [
    { id: 4, title: 'Green IT Empresas', icon: TreePine, path: '/green-it-empresas', color: 'from-green-400 to-emerald-600' },
    { id: 5, title: 'Materiais Sustentáveis', icon: Leaf, path: '/materiais-sustentaveis', color: 'from-fuchsia-500 to-purple-700' },
    { id: 6, title: 'Vida Útil', icon: Battery, path: '/vida-util', color: 'from-purple-400 to-pink-600' },
    { id: 7, title: 'Computação em Nuvem', icon: Cloud, path: '/computacao-nuvem', color: 'from-indigo-400 to-blue-600' }
  ];

  const allPillars = [...pillarsRow1, ...pillarsRow2];

  return (
    <>
      <Helmet>
        <title>Semente Digital - Green IT e Tecnologia Sustentável</title>
        <meta name="description" content="Descubra práticas de Green IT e tecnologia sustentável. Aprenda sobre lixo eletrônico, economia de energia e sustentabilidade em TI." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-16 overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10">
                <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4">
                  Bem-vindo à <span className="text-emerald-600">Semente Digital</span>
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore os pilares do Green IT e descubra como a tecnologia pode ser sustentável
                </p>
              </motion.div>

              {/* Desktop Layout - Horizontal */}
              <div className="hidden md:block">
                <div className="max-w-6xl mx-auto">
                  {/* Título e Folha Girando */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-emerald-800 mb-6">Os Pilares do Green IT</h2>
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                      className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-xl mb-8"
                    >
                      <Leaf className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>

                  {/* Primeira Linha - 4 Temas */}
                  <div className="grid grid-cols-4 gap-6 mb-6">
                    {pillarsRow1.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <motion.button
                          key={pillar.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(pillar.path)}
                          className="group"
                        >
                          <div className={`relative bg-gradient-to-br ${pillar.color} rounded-2xl shadow-lg p-6 h-40 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-2xl`}>
                            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Icon className="w-12 h-12 text-white relative z-10" />
                            <span className="text-white font-semibold text-center text-sm relative z-10 leading-tight">{pillar.title}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Segunda Linha - 4 Temas */}
                  <div className="grid grid-cols-4 gap-6">
                    {pillarsRow2.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <motion.button
                          key={pillar.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate(pillar.path)}
                          className="group"
                        >
                          <div className={`relative bg-gradient-to-br ${pillar.color} rounded-2xl shadow-lg p-6 h-40 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-2xl`}>
                            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Icon className="w-12 h-12 text-white relative z-10" />
                            <span className="text-white font-semibold text-center text-sm relative z-10 leading-tight">{pillar.title}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Layout - Vertical (2 colunas) */}
              <div className="md:hidden mt-8">
                <div className="relative text-center mb-8">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-2">Os Pilares do Green IT</h2>
                  <p className="text-gray-700">Clique em cada pilar para explorar</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {allPillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.button 
                        key={pillar.id} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: index * 0.1 }} 
                        onClick={() => navigate(pillar.path)} 
                        className="w-full"
                      >
                        <div className={`bg-gradient-to-br ${pillar.color} rounded-2xl shadow-lg p-4 h-32 flex flex-col items-center justify-center gap-2`}>
                          <Icon className="w-8 h-8 text-white" />
                          <span className="text-white font-semibold text-center text-sm">{pillar.title}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-12">
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">O que é Green IT?</h3>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Green IT refere-se à prática de projetar, fabricar, usar e descartar tecnologia de forma eficiente e ecologicamente responsável, minimizando o impacto ambiental.
                </p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;