import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { Leaf, Package, Recycle, Percent, Trash2, Globe, Trees, HardHat, Factory, Sprout, TestTube2, Grape, Heart, Cpu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfographicCard = ({ title, icon, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.5 }}
    className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}
  >
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-600 space-y-2">
      {children}
    </div>
  </motion.div>
);

const MateriaisSustentaveisPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: '100%', label: 'De TPE (elastômero termoplástico) reciclado em novos produtos da Apple', source: 'Apple', icon: Recycle, url: 'https://www.apple.com/br/environment/pdf/Apple_Environmental_Progress_Report_2023.pdf' },
    { value: '98%', label: 'Redução do impacto climático usando alumínio reciclado', source: 'Intl. Aluminium Institute', icon: Percent, url: 'https://international-aluminium.org/aluminium-industry-reports-decline-in-greenhouse-gas-emissions/' },
    { value: '30%', label: 'De plástico reciclado usado em novos consoles PlayStation 5', source: 'Sony', icon: Leaf, url: 'https://www.sony.com.br/electronics/plastico-reciclado-sorplas' },
  ];

  const infographicExamples = [
    { icon: <Trees className="w-8 h-8 text-green-600" />, title: 'Bambu', text: 'Crescimento extremamente rápido (mais de 90 cm em 24h).' },
    { icon: <Factory className="w-8 h-8 text-gray-600" />, title: 'Aço Reciclado', text: 'Economiza até 75% de energia em relação ao aço virgem.' },
    { icon: <TestTube2 className="w-8 h-8 text-blue-600" />, title: 'Bioplásticos', text: 'Reduzem a pegada de carbono em 30% a 70%.' },
    { icon: <Grape className="w-8 h-8 text-purple-600" />, title: 'Cortiça', text: '100% natural, reciclável e reutilizável.' },
  ];

  return (
    <>
      <Helmet>
        <title>Materiais Sustentáveis - Semente Digital</title>
        <meta name="description" content="Conheça materiais ecológicos e práticas sustentáveis na fabricação de equipamentos tecnológicos." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                  <Package className="w-16 h-16 text-green-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Materiais Sustentáveis
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A escolha de materiais ecológicos é fundamental para reduzir o impacto ambiental da tecnologia
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                      <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">
                        Fonte: <a href={stat.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-green-700 transition-colors">{stat.source}</a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-800 text-center mb-8">
                Materiais Sustentáveis na Engenharia
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Ver Infográfico Completo
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <InfographicCard title="O que são Materiais Sustentáveis?" icon={<Sprout className="w-8 h-8 text-green-600" />}>
                  <div className="flex items-center gap-4">
                    <Recycle className="w-6 h-6 text-green-500" />
                    <p><strong>Definição:</strong> Materiais com baixo impacto ambiental e social em todo seu ciclo de vida.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <p><strong>Foco:</strong> Fontes renováveis, eficiência energética na produção e design para o fim de vida.</p>
                  </div>
                </InfographicCard>

                <InfographicCard title="O Problema Atual na Engenharia" icon={<HardHat className="w-8 h-8 text-yellow-600" />}>
                  <div className="flex items-center gap-4">
                    <Factory className="w-6 h-6 text-gray-500" />
                    <p><strong>Indústria da Construção:</strong> Responsável por cerca de 39% das emissões globais de CO₂.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Trash2 className="w-6 h-6 text-red-500" />
                    <p><strong>Geração de Lixo:</strong> O mundo gera mais de 2 bilhões de toneladas de lixo por ano.</p>
                  </div>
                </InfographicCard>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {infographicExamples.map((item, index) => (
                   <InfographicCard key={index} title={item.title} icon={item.icon} className="text-center">
                     <p className="text-sm">{item.text}</p>
                   </InfographicCard>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <InfographicCard title="Por que Mudar?" icon={<Heart className="w-8 h-8 text-red-500" />}>
                  <p><strong>Ambiental:</strong> Menos CO₂, menos lixo, menos poluição.</p>
                  <p><strong>Econômico:</strong> Reduz custos de energia e matéria-prima.</p>
                  <p><strong>Social:</strong> Ambientes mais saudáveis e economia circular.</p>
                </InfographicCard>

                <InfographicCard title="O Ciclo de Vida Sustentável" icon={<Recycle className="w-8 h-8 text-green-600" />}>
                  <p>1. Extração (Renovável)</p>
                  <p>2. Manufatura (Baixa Energia)</p>
                  <p>3. Uso (Durável e Saudável)</p>
                  <p>4. Fim de Vida (Reutilizar, Reciclar ou Biodegradar)</p>
                </InfographicCard>
                
                <InfographicCard title="Software e IA Otimizando" icon={<Cpu className="w-8 h-8 text-blue-600" />}>
                  <p><strong>Simulação e Gêmeos Digitais:</strong> Testam materiais virtualmente, evitando desperdício.</p>
                  <p><strong>Otimização da Cadeia de Suprimentos:</strong> Softwares rastreiam a origem sustentável dos materiais.</p>
                  <p><strong>BIM (Building Information Modeling):</strong> Calculam o impacto ambiental de escolhas de materiais.</p>
                </InfographicCard>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img class="w-full rounded-md" alt="Infográfico sobre Materiais Sustentáveis na Engenharia" src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/d2e3781fd68a6ee88e8b5bb4d87c142c.jpg" />
      </Modal>
    </>
  );
};

export default MateriaisSustentaveisPage;