import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Target, Heart, Users } from 'lucide-react';

const SobrePage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre - Semente Digital</title>
        <meta name="description" content="Conheça o projeto Semente Digital e nossa missão de promover práticas sustentáveis em tecnologia." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-emerald-100 rounded-full mb-6">
                  <Leaf className="w-16 h-16 text-emerald-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Sobre o Semente Digital
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Plantando consciência para colher um futuro tecnológico sustentável
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                  <div>
                    <img alt="Conceito de tecnologia sustentável" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1584795962384-dce385272216" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      O Semente Digital nasceu da necessidade de conscientizar profissionais e empresas sobre a importância da sustentabilidade no setor de tecnologia. Acreditamos que cada pequena ação pode gerar grandes transformações.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Nosso objetivo é fornecer informações claras, práticas e acessíveis sobre Green IT, capacitando pessoas e organizações a tomarem decisões mais conscientes e responsáveis em relação ao uso da tecnologia.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
                      <Target className="w-12 h-12 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Nosso Objetivo</h3>
                    <p className="text-gray-600">
                      Educar e inspirar a adoção de práticas sustentáveis em tecnologia
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                      <Heart className="w-12 h-12 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Nossos Valores</h3>
                    <p className="text-gray-600">
                      Sustentabilidade, responsabilidade e inovação consciente
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                      <Users className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Nossa Comunidade</h3>
                    <p className="text-gray-600">
                      Conectando pessoas comprometidas com um futuro mais verde
                    </p>
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

export default SobrePage;