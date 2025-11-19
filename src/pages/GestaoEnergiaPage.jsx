import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, TrendingDown, Lightbulb, BarChart3, Settings, Target, Server, Wind, Cpu } from 'lucide-react';

const GestaoEnergiaPage = () => {
  const stats = [
    { value: '1-2%', label: 'Consumo global de eletricidade por data centers', source: 'IEA', icon: Zap, url: 'https://www.iea.org/commentaries/what-the-data-centre-and-ai-boom-could-mean-for-the-energy-sector' },
    { value: '40%', label: 'Redução de custos com eficiência energética', source: 'Equatorial', icon: TrendingDown, url: 'https://echoenergia.com.br/blog/energia-eletrica-pode-representar-ate-40-dos-custos-de-producao-de-uma-empresa-confira-dicas-para-economizar/' },
    { value: '30%', label: 'Economia com equipamentos Energy Star', source: 'Energy Star', icon: Lightbulb, url: 'https://www.energystar.gov/products/computers' },
    { value: '80%', label: 'Redução de energia com virtualização', source: 'VMware', icon: Server, url: 'https://www.insight.com/content/dam/insight/en_US/pdfs/vmware/VMware-green-it-overview.pdf' },
  ];

  const strategies = [
    { icon: BarChart3, title: 'Monitoramento', desc: 'Acompanhe consumo em tempo real', color: 'yellow' },
    { icon: Settings, title: 'Automação', desc: 'Políticas inteligentes de economia', color: 'orange' },
    { icon: Target, title: 'Metas', desc: 'Objetivos e relatórios detalhados', color: 'amber' },
    { icon: Wind, title: 'Refrigeração', desc: 'Sistemas de cooling otimizados', color: 'cyan' },
    { icon: Cpu, title: 'Virtualização', desc: 'Consolidação de servidores', color: 'blue' },
    { icon: Lightbulb, title: 'LED', desc: 'Iluminação eficiente', color: 'lime' },
  ];

  return (
    <>
      <Helmet>
        <title>Gestão de Energia - Semente Digital</title>
        <meta name="description" content="Estratégias avançadas de gestão energética para otimizar consumo e reduzir custos em TI." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                  <Zap className="w-16 h-16 text-yellow-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-3">Gestão de Energia</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Otimize consumo e reduza custos com estratégias inteligentes</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-yellow-600 mb-1">{stat.value}</div>
                      <div className="text-gray-700 font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">
                        Fonte: <a href={stat.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-700 transition-colors">{stat.source}</a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-10"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">O que é Gestão Energética?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                    <img class="w-full h-48 object-cover rounded-lg mb-4 shadow-md" alt="Painel de controle de consumo de energia" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Controle de Consumo</h3>
                    <p className="text-gray-600 text-sm">Monitorar e gerenciar o uso de energia em tempo real para identificar desperdícios e otimizar a alocação de recursos, utilizando sensores e software inteligente.</p>
                  </motion.div>
                   <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                    <img class="w-full h-48 object-cover rounded-lg mb-4 shadow-md" alt="Equipamento de TI com selo de eficiência energética" src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Eficiência Energética</h3>
                    <p className="text-gray-600 text-sm">Adotar tecnologias e práticas que reduzem a quantidade de energia necessária para realizar as mesmas tarefas, como usar hardware de baixo consumo e otimizar sistemas.</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                    <img class="w-full h-48 object-cover rounded-lg mb-4 shadow-md" alt="Painéis solares e turbinas eólicas em uma paisagem" src="https://images.unsplash.com/photo-1697869162556-ab57db502c09" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Fontes Renováveis</h3>
                    <p className="text-gray-600 text-sm">Fazer a transição para fontes de energia limpa, como solar e eólica, para alimentar as operações de TI, reduzindo a pegada de carbono e a dependência de combustíveis fósseis.</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-12"
              >
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    O que é Gestão Energética?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    É um processo essencial que envolve o controle e a otimização do uso de recursos energéticos,
                    visando não apenas a economia, mas também a sustentabilidade ambiental. Ao implementar práticas
                    de gestão eficazes, empresas e residências podem reduzir significativamente os custos de energia
                    e minimizar o impacto no meio ambiente. Isso pode incluir a análise de dados de faturamento e o
                    uso de tecnologia para medir o consumo em tempo real. Alguns aspectos importantes:
                  </p>
                </div>

                <div className="space-y-12 text-gray-700 text-lg max-w-5xl mx-auto">
                  {/* Controle de Consumo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="font-semibold text-gray-800 text-2xl mb-3">Controle de Consumo</h3>
                      <p>
                        É fundamental monitorar continuamente o consumo energético, identificando padrões e áreas
                        onde é possível economizar. Isso pode incluir a análise de dados de faturamento e o uso de
                        tecnologia para medir o consumo em tempo real.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src="https://setfrio.com.br/wp-content/uploads/2019/12/electrical-appliance172.jpg"
                        alt="Gráfico de monitoramento de consumo energético"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Eficiência Energética */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img
                        src="https://img.freepik.com/vetores-premium/icone-de-controle-de-consumo-de-energia_946691-2049.jpg"
                        alt="Lâmpadas LED representando eficiência energética"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-2xl mb-3">Eficiência Energética</h3>
                      <p>
                        A eficiência energética se traduz na utilização de tecnologias e práticas que demandam menos
                        energia para a realização das mesmas tarefas. Exemplos incluem a troca de lâmpadas incandescentes
                        por LEDs e a instalação de equipamentos com maior eficiência energética.
                      </p>
                    </div>
                  </div>

                  {/* Fontes Renováveis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="font-semibold text-gray-800 text-2xl mb-3">Fontes Renováveis</h3>
                      <p>
                        Incorporar fontes de energia renováveis, como solar ou eólica, é uma estratégia eficaz na gestão
                        de energia. Isso não só contribui para a sustentabilidade, mas também pode resultar em economia
                        com a conta de luz.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src="https://tse3.mm.bing.net/th/id/OIP.uTgwN3qNPSQExOKftdVu1wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
                        alt="Painéis solares representando energia renovável"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Estratégias de Eficiência</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strategies.map((strategy, index) => {
                    const Icon = strategy.icon;
                    return (
                      <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + index * 0.1 }} className={`flex items-start gap-4 p-5 rounded-xl bg-${strategy.color}-50 hover:shadow-md transition-shadow`}>
                        <div className={`p-3 bg-${strategy.color}-100 rounded-lg flex-shrink-0`}>
                          <Icon className={`w-7 h-7 text-${strategy.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">{strategy.title}</h3>
                          <p className="text-gray-600 text-sm">{strategy.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-10 flex flex-col items-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Galeria: Matriz Elétrica Brasileira (Janeiro, 2024)</h2>
                <img
                  src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/5d2a3ccb6be4a8d5181b4f760e4fc17a.jpg"
                  alt="Infográfico da Matriz Elétrica Brasileira em Janeiro de 2024, mostrando a distribuição de fontes de energia como hidrelétricas, solar fotovoltaica, eólica, gás natural, biomassa e biogás, importação, petróleo e outros, carvão mineral e nuclear."
                  className="w-full md:max-w-xl lg:max-w-3xl rounded-lg shadow-md"
                />
                 <span className="text-xs text-gray-500 mt-4">
                  Fonte: Operador Nacional do Sistema Elétrico (ONS)
                </span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">💡 Dica Rápida</h3>
                <p className="text-lg">Desligar monitores e computadores fora do horário de trabalho pode gerar economia de até 25% no consumo energético!</p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GestaoEnergiaPage;