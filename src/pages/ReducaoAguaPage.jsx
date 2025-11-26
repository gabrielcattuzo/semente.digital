
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import { Droplets, Server, Wind, GalleryHorizontal } from 'lucide-react';

const ReducaoAguaPage = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const stats = [
    { value: '1.8L', label: 'Água por kWh em data centers', source: 'U.S. Dept. of Energy', icon: Droplets, url: 'https://www.datacenterdynamics.com/en/opinions/an-industry-in-transition-1-data-center-water-use/' },
    { value: '95%', label: 'Redução com resfriamento líquido', source: 'Microsoft', icon: Wind, url: 'https://tecnoblog.net/noticias/microsoft-reducao-consumo-agua-resfriamento-datacenters/' },
    { value: '20%', label: 'Data centers em áreas de estresse hídrico até 2025', source: 'Uptime Institute', icon: Server, url: 'https://pt.uptimeinstitute.com/about-ui/press-releases/2022-global-data-center-survey-reveals-strong-industry-growth' },
  ];

  const solutions = [
    { icon: '💧', title: 'Resfriamento Líquido', desc: 'Sistemas diretos economizam água' },
    { icon: '🌡️', title: 'Free Cooling', desc: 'Uso de ar externo quando possível' },
    { icon: '♻️', title: 'Reuso de Água', desc: 'Circuitos fechados de refrigeração' },
    { icon: '🌍', title: 'Localização', desc: 'Data centers em regiões com água abundante' },
  ];

  const galleryImages = [
    {
      src: "https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/5bf59962b23b20651c597540d37c18f7.jpg",
      alt: "Infográfico sobre água potável e saneamento no mundo e no Brasil",
      caption: "Infográfico: Água Potável e Saneamento",
      link: "https://prismaengenhariajr.com.br/membranas-filtrantes-para-tratamento-de-agua-e-efluentes/"
    },
    {
      src: "https://horizons-cdn.hostinger.com/c749d44c-18a1-4a1c-ab10-89cb7bbafa25/feeded71206e21455d1c366821736370.jpg",
      alt: "Infográfico sobre o uso da água no Brasil por setor",
      caption: "Infográfico: Uso da Água no Brasil",
      link: "https://www.ecodebate.com.br/2023/06/05/vantagens-e-potencial-da-energia-solar-fotovoltaica-no-brasil/"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Redução de Gasto de Água - Semente Digital</title>
        <meta name="description" content="Como a indústria de TI está reduzindo o consumo de água em data centers." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
            <div className="container mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <div className="inline-block p-4 bg-sky-100 rounded-full mb-4">
                  <Droplets className="w-16 h-16 text-sky-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-3">Redução do Gasto de Água</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">A pegada hídrica da tecnologia: um desafio invisível</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-10 h-10 text-sky-600 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-sky-600 mb-1">{stat.value}</div>
                      <div className="text-gray-700 font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">
                        Fonte: <a href={stat.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-700 transition-colors">{stat.source}</a>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">O que é a Redução do Gasto de Água?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                    <img class="w-full h-48 object-cover rounded-lg mb-4 shadow-md" alt="Interior de um data center com fileiras de servidores" src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Uso de Água em Data Centers</h3>
                    <p className="text-gray-600 text-sm">Grandes volumes de água são usados para resfriar servidores, um processo crucial para evitar o superaquecimento e garantir a operação contínua.</p>
                  </motion.div>
                   <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                    <img class="w-full h-48 object-cover rounded-lg mb-4 shadow-md" alt="Sistema de resfriamento líquido em um servidor de computador" src="https://images.unsplash.com/photo-1591705866798-e0c24e482a91" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tecnologias de Resfriamento Eficientes</h3>
                    <p className="text-gray-600 text-sm">Inovações como o resfriamento líquido direto e o "free cooling" (uso de ar externo) reduzem drasticamente a dependência de água para a refrigeração.</p>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
                    <img class="w-full h-48 object-cover rounded-lg mb-4 shadow-md" alt="Símbolo de reciclagem de água com gotas e setas" src="https://images.unsplash.com/photo-1580163661435-b2184a20cb24" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Sustentabilidade e Reaproveitamento</h3>
                    <p className="text-gray-600 text-sm">Implementação de sistemas de circuito fechado que tratam e reutilizam a água, além da captação de água da chuva para minimizar o consumo de fontes potáveis.</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Soluções Inovadoras</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solutions.map((solution, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + index * 0.1 }} className="flex items-start gap-4 p-5 rounded-xl bg-sky-50 hover:shadow-md transition-shadow">
                      <div className="text-3xl">{solution.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{solution.title}</h3>
                        <p className="text-gray-600 text-sm">{solution.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeria: A Realidade da Água no Brasil</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Explore os infográficos para entender melhor o cenário do consumo de água e saneamento no país.</p>
                <Button onClick={() => setIsGalleryOpen(true)} size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                  <GalleryHorizontal className="mr-2 h-5 w-5" />
                  Abrir Galeria
                </Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">💧 Por Que Isso Importa?</h3>
                <p className="text-lg">Em um mundo com escassez de água crescente, a indústria tech tem a responsabilidade de inovar e operar de forma sustentável.</p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <Modal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)}>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Galeria: A Realidade da Água</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full max-w-md rounded-lg shadow-lg mb-3"
                />
                <span className="text-sm text-gray-600 font-medium">
                  {image.caption} <br />
                  Fonte: <a href={image.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-700 transition-colors">Ver Mais</a>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReducaoAguaPage;
