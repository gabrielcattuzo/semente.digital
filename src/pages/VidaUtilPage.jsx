import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Battery, Clock, Wrench, RefreshCw, Smartphone, TrendingUp, ShieldCheck, Download, HardDrive } from 'lucide-react';

const VidaUtilPage = () => {
    const stats = [
    { value: '2.8 Anos', label: 'Vida útil média de um smartphone na Europa', source: 'EEB', icon: Smartphone, url: 'https://eeb.org/library/cool-products-policy-briefing/' },
    { value: '80%', label: 'Do impacto ambiental de um smartphone é gerado na fabricação', source: 'EEB', icon: TrendingUp, url: 'https://eeb.org/library/cool-products-policy-briefing/' },
    { value: '30kg', label: 'De matérias-primas economizadas para cada smartphone consertado', source: 'ADEME', icon: Wrench, url: 'https://librairie.ademe.fr/consommer-autrement/5291-evaluation-de-l-impact-environnemental-d-un-systeme-de-reparation-de-produits-electriques-et-electroniques.html' },
  ];

  const infographicCards = [
    { icon: ShieldCheck, title: 'Proteção Física', text: 'Use capas e películas para proteger contra quedas e arranhões. Danos na tela são responsáveis por 45% das substituições prematuras de smartphones. O custo de um reparo de tela pode chegar a 40% do valor de um aparelho novo.' },
    { icon: Download, title: 'Software Otimizado', text: 'Atualizações corrigem falhas que podem degradar a bateria em até 10% ao ano. Manter o SO atualizado também previne a obsolescência de segurança, que torna 20% dos dispositivos vulneráveis após 3 anos de uso.' },
    { icon: HardDrive, title: 'Gestão de Armazenamento', text: 'Mantenha pelo menos 20% de espaço livre. Armazenamento quase cheio pode degradar o desempenho da memória flash em até 50% e aumentar o consumo de energia em 15% devido à sobrecarga do processador.' },
  ];

  return (
    <>
      <Helmet>
        <title>Vida Útil de Equipamentos - Semente Digital</title>
        <meta name="description" content="Aprenda a prolongar a vida útil de equipamentos tecnológicos através de manutenção adequada e uso consciente." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
                  <Battery className="w-16 h-16 text-purple-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Vida Útil de Equipamentos
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Maximize a durabilidade dos seus dispositivos com cuidados adequados
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                      <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">
                        Fonte: <a href={stat.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-700 transition-colors">{stat.source}</a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img alt="Manutenção de equipamentos tecnológicos" class="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1658212662417-a2a76efe25df" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Clock className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Manutenção Preventiva</h3>
                        <p className="text-gray-600">Realize limpezas e verificações regulares para evitar problemas.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-pink-100 rounded-lg">
                        <Wrench className="w-8 h-8 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Reparos ao Invés de Substituição</h3>
                        <p className="text-gray-600">Priorize consertos antes de descartar equipamentos funcionais.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-fuchsia-100 rounded-lg">
                        <RefreshCw className="w-8 h-8 text-fuchsia-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Atualizações de Software</h3>
                        <p className="text-gray-600">Mantenha sistemas atualizados para melhor desempenho e segurança.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cuidados Essenciais com o Dispositivo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1 space-y-8">
                    {infographicCards.map((card, index) => {
                      const Icon = card.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
                            <Icon className="w-8 h-8 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                            <p className="text-gray-600">{card.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="order-1 md:order-2">
                    <img alt="Infográfico sobre cuidados com dispositivos" class="w-full h-auto object-contain rounded-xl" src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
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

export default VidaUtilPage;