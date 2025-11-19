import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Recycle, AlertTriangle, TrendingUp, DollarSign, Trash2 } from 'lucide-react';

const LixoEletronicoPage = () => {
  const stats = [
    { value: '53.6M', label: 'Toneladas de e-lixo em 2019', source: 'Global E-waste Monitor', icon: TrendingUp, url: 'https://ewastemonitor.info/gem-2020/' },
    { value: '17.4%', label: 'Taxa de reciclagem global', source: 'Global E-waste Monitor', icon: Recycle, url: 'https://ewastemonitor.info/gem-2020/' },
    { value: '$57B', label: 'Valor de matérias-primas no e-lixo', source: 'Global E-Waste Monitor', icon: DollarSign, url: 'https://inforchannel.com.br/2021/11/17/lixo-eletronico-fonte-de-riqueza-sustentabilidade-e-equidade-social-para-o-brasil-em-2022/' },
    { value: '2kg', label: 'E-lixo gerado por pessoa/ano', source: 'ONU', icon: Trash2, url: 'https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling' },
  ];

  const tips = [
    { icon: '🎁', text: 'Doe equipamentos funcionais' },
    { icon: '📍', text: 'Use pontos de coleta certificados' },
    { icon: '🔒', text: 'Apague dados pessoais' },
    { icon: '🔧', text: 'Prefira conserto à substituição' },
    { icon: '♻️', text: 'Compre de fabricantes com logística reversa' },
    { icon: '🌱', text: 'Recicle baterias separadamente' },
  ];

  return (
    <>
      <Helmet>
        <title>Lixo Eletrônico - Semente Digital</title>
        <meta name="description" content="Entenda o impacto do lixo eletrônico e aprenda práticas corretas de descarte e reciclagem." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Recycle className="w-16 h-16 text-blue-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-3">Lixo Eletrônico</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Descarte inadequado: um dos maiores desafios ambientais da era digital</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-gray-700 font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">
                        Fonte: <a href={stat.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700 transition-colors">{stat.source}</a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-800">O Problema do E-Lixo</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">☠️</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Materiais Tóxicos</h3>
                      <p className="text-gray-600 text-sm">Chumbo, mercúrio e cádmio contaminam solo e água, representando um grave risco à saúde humana e ao meio ambiente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Desperdício de Recursos Valiosos</h3>
                      <p className="text-gray-600 text-sm">Ouro, prata, cobre e outros metais preciosos são descartados, quando poderiam ser recuperados e reutilizados, reduzindo a necessidade de mineração.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Etapas do Processo de Reciclagem</h2>
                 <img
                  src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/0f09776472c76fc4d0ff8627b335f7bb.png"
                  alt="Infográfico mostrando as etapas do processo de reciclagem de resíduos eletrônicos: uso, descarte, coleta, triagem, análise, processamento, destinação final e fabricação."
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Boas Práticas de Descarte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tips.map((tip, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }} className="flex items-center gap-3 bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <span className="text-2xl">{tip.icon}</span>
                      <span className="text-sm font-medium">{tip.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mt-10 text-center">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Maiores Geradores de Lixo Eletrônico</h2>
                 <img
                  src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/bf4611a506c06ecfe85707ef7f45f00f.png"
                  alt="Gráfico de barras mostrando os maiores geradores de lixo eletrônico do mundo em toneladas: China, EUA, Índia, Japão e Brasil."
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                />
                 <p className="text-xs text-gray-500 mt-4">Fonte: The Global E-waste Monitor 2024</p>
              </motion.div>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LixoEletronicoPage;