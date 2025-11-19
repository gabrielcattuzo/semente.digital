import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, TrendingDown, Target, Sun, Code, Leaf } from 'lucide-react';

const ReducaoCarbonoPage = () => {
  const stats = [
    { value: '3.7%', label: 'Emissões globais da indústria de TI', source: 'The Shift Project', icon: Cloud, url: 'https://theshiftproject.org/app/uploads/2025/04/Lean-ICT-Report_The-Shift-Project_2019.pdf' },
    { value: '50%', label: 'Redução ao migrar para nuvem', source: 'Accenture', icon: TrendingDown, url: 'https://www.accenture.com/content/dam/accenture/final/a-com-migration/r3-3/pdf/pdf-179/accenture-improve-hybrid-multicloud-enterprise-video-transcript.pdf' },
    { value: '2050', label: 'Meta de neutralidade de carbono', source: 'ONU - "Race to Zero"', icon: Target, url: 'https://wwflac.awsassets.panda.org/downloads/cdp_netzerodojeitocerto_br_rev2.pdf' },
  ];

  const solutions = [
    { icon: Sun, title: 'Energias Renováveis', desc: 'Solar, eólica e outras fontes limpas', color: 'emerald' },
    { icon: Code, title: 'Código Eficiente', desc: 'Software otimizado consome menos energia', color: 'cyan' },
    { icon: Cloud, title: 'Cloud Computing', desc: 'Infraestrutura compartilhada reduz emissões', color: 'blue' },
    { icon: Leaf, title: 'Compensação', desc: 'Créditos de carbono e reflorestamento', color: 'green' },
  ];

  return (
    <>
      <Helmet>
        <title>Redução de Emissão de Carbono - Semente Digital</title>
        <meta name="description" content="Estratégias para reduzir a pegada de carbono em operações de TI." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                  <Cloud className="w-16 h-16 text-teal-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-3">Redução de Emissão de Carbono</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Minimize a pegada de carbono das operações tecnológicas</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-teal-600 mb-1">{stat.value}</div>
                      <div className="text-gray-700 font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">
                        Fonte: <a href={stat.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-700 transition-colors">{stat.source}</a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Como Reduzir a Pegada de Carbono?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solutions.map((solution, index) => {
                    const Icon = solution.icon;
                    const colorClass = `bg-${solution.color}-50`;
                    const iconBgClass = `bg-${solution.color}-100`;
                    const iconTextClass = `text-${solution.color}-600`;
                    return (
                      <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + index * 0.1 }} className={`flex items-start gap-4 p-5 rounded-xl ${colorClass} hover:shadow-md transition-shadow`}>
                         <div className={`p-3 ${iconBgClass} rounded-lg flex-shrink-0`}>
                          <Icon className={`w-7 h-7 ${iconTextClass}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">{solution.title}</h3>
                          <p className="text-gray-600 text-sm">{solution.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Conselhos para Reduzir sua Pegada de Carbono</h2>
                 <p className="text-gray-600 max-w-3xl mx-auto mb-6">A pegada de carbono é a quantidade total de gases de efeito estufa emitidos direta ou indiretamente por uma pessoa, organização ou produto. Reduzi-la é fundamental para mitigar as mudanças climáticas.</p>
                 <img
                  src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/992c1b8e73d9f29a3d01cd029d09a2e1.jpg"
                  alt="Infográfico com conselhos para reduzir a pegada de carbono, como consumo responsável, eficiência energética, e uso de energias renováveis."
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Mercado de Carbono e Créditos</h2>
                 <p className="text-gray-600 max-w-3xl mx-auto mb-6">O mercado de carbono é um sistema que permite a empresas e países compensar suas emissões investindo em projetos de redução de carbono, como reflorestamento e energias renováveis.</p>
                 <img
                  src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/6736df0e333249eda9e62b69b0b5daf6.jpg"
                  alt="Fluxograma explicando o funcionamento do mercado de carbono, desde a necessidade de atender a um limite de emissões até a obtenção de créditos de carbono."
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center">
                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Tecnologia na Redução de Carbono</h2>
                 <p className="text-gray-600 max-w-3xl mx-auto mb-6">A indústria de TI tem um papel crucial na descarbonização, adotando data centers eficientes, migrando para energias renováveis e promovendo a economia circular para minimizar o desperdício.</p>
                 <img
                  src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/89c4b7f64ab074604a8a1230b721e16e.jpg"
                  alt="Ícones representando data centers eficientes, energia renovável, e economia circular como pilares da tecnologia na redução de carbono."
                  className="w-full max-w-2xl mx-auto"
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">🌍 Impacto Global</h3>
                <p className="text-lg">A descarbonização da TI é essencial para combater as mudanças climáticas e construir um futuro sustentável.</p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ReducaoCarbonoPage;