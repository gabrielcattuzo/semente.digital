import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { Cloud, Server, Zap, Globe, HardDrive, Wrench, Package, Building, Users, RefreshCw, Lightbulb as Bolt, BrainCircuit, BarChart, HardDrive as HardDrives, Wifi, Cpu, Laptop, Download } from 'lucide-react';
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

const ComputacaoNuvemPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Computação em Nuvem - Semente Digital</title>
        <meta name="description" content="Descubra como a computação em nuvem contribui para práticas sustentáveis e eficiência energética." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <Cloud className="w-16 h-16 text-blue-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">Computação em Nuvem</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Infraestrutura compartilhada para maior eficiência e menor impacto ambiental.</p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">Até 93% mais Eficiente</h3>
                      <p className="text-gray-700 leading-relaxed">Infraestruturas de nuvem podem ser até 93% mais eficientes em termos energéticos do que data centers empresariais tradicionais.
                        <br />
                        <span className="text-xs text-gray-500">
                          Fonte: <a href="https://sustainability.aboutamazon.com/environment/the-cloud" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700 transition-colors">AWS</a>
                        </span>
                      </p>
                    </div>
                     <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">Menor Pegada de Carbono</h3>
                      <p className="text-gray-700 leading-relaxed">A migração para a nuvem pode reduzir a pegada de carbono em até 98% para PMEs, graças à otimização de recursos.
                        <br />
                        <span className="text-xs text-gray-500">
                          Fonte: <a href="https://cloud.google.com/sustainability" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700 transition-colors">Google Cloud</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50">
                      <div className="p-3 bg-blue-100 rounded-lg"><Server className="w-8 h-8 text-blue-600" /></div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Otimização de Recursos</h3>
                        <p className="text-gray-600">Compartilhamento eficiente de servidores e armazenamento reduz o desperdício.</p>
                      </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50">
                      <div className="p-3 bg-indigo-100 rounded-lg"><Zap className="w-8 h-8 text-indigo-600" /></div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">Eficiência Energética</h3>
                        <p className="text-gray-600">Grandes data centers usam resfriamento avançado e hardware otimizado.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Desvendando a Nuvem: Flexibilidade, Inovação e Sustentabilidade
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Ver Infográfico Completo
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 gap-8 mb-8">
                 <InfographicCard title="O que é Computação em Nuvem?" icon={<Globe className="w-8 h-8 text-blue-600" />}>
                  <p><strong>Definição:</strong> Entrega de recursos de computação sob demanda (servidores, armazenamento, bancos de dados, redes, software, análise) pela internet, com pagamento pelo uso.</p>
                  <p><strong>Analogia:</strong> Em vez de ter sua própria usina de energia (data center), você "conecta na tomada" de uma provedora de energia (serviço de nuvem) e paga pelo que usa.</p>
                </InfographicCard>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <InfographicCard title="IAAS" icon={<HardDrive className="w-8 h-8 text-green-600" />}>
                  <p>Aluga infraestrutura (servidores virtuais, armazenamento, redes). Ex: Amazon EC2</p>
                </InfographicCard>
                 <InfographicCard title="PAAS" icon={<Wrench className="w-8 h-8 text-orange-600" />}>
                  <p>Aluga uma plataforma para desenvolver e rodar aplicações. Ex: Google App Engine</p>
                </InfographicCard>
                 <InfographicCard title="SAAS" icon={<Package className="w-8 h-8 text-purple-600" />}>
                  <p>Usa um software pronto que roda na nuvem. Ex: Gmail, Salesforce, Microsoft 365</p>
                </InfographicCard>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <InfographicCard title="Nuvem Pública" icon={<Users className="w-8 h-8 text-sky-600" />}>
                  <p>Serviços oferecidos por provedores terceirizados (AWS, Azure, Google Cloud) pela internet pública.</p>
                </InfographicCard>
                <InfographicCard title="Nuvem Privada" icon={<Building className="w-8 h-8 text-gray-600" />}>
                  <p>Infraestrutura de nuvem dedicada a uma única organização.</p>
                </InfographicCard>
                <InfographicCard title="Nuvem Híbrida" icon={<RefreshCw className="w-8 h-8 text-teal-600" />}>
                  <p>Combina nuvens públicas e privadas, permitindo que dados e aplicações sejam compartilhados entre elas.</p>
                </InfographicCard>
              </div>

               <InfographicCard title="Principais Benefícios" icon={<Bolt className="w-8 h-8 text-yellow-500" />} className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                    <p>Flexibilidade e Escalabilidade</p>
                    <p>Redução de Custos</p>
                    <p>Foco no Negócio Principal</p>
                    <p>Confiabilidade e Segurança</p>
                    <p>Sustentabilidade</p>
                </div>
              </InfographicCard>
              
               <InfographicCard title="Aplicações Comuns" icon={<Cpu className="w-8 h-8 text-indigo-600" />}>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2"><HardDrives /> Armazenamento e Backup</div>
                    <div className="flex items-center gap-2"><Laptop /> Hospedagem de Sites</div>
                    <div className="flex items-center gap-2"><BarChart /> Big Data e Análise</div>
                    <div className="flex items-center gap-2"><Wifi /> Internet das Coisas (IoT)</div>
                    <div className="flex items-center gap-2"><BrainCircuit /> Machine Learning e IA</div>
                 </div>
              </InfographicCard>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img class="w-full rounded-md" alt="Infográfico sobre Desvendando a Nuvem: Flexibilidade, Inovação e Sustentabilidade" src="https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/7a1ce98f9eb398a7a797e57e37c51a61.jpg" />
      </Modal>
    </>
  );
};

export default ComputacaoNuvemPage;