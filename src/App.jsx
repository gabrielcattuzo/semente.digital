import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import BackToTopButton from '@/components/BackToTopButton';
import HomePage from '@/pages/HomePage';
import LixoEletronicoPage from '@/pages/LixoEletronicoPage';
import GestaoEnergiaPage from '@/pages/GestaoEnergiaPage';
import SustentabilidadePage from '@/pages/SustentabilidadePage';
import GreenITEmpresasPage from '@/pages/GreenITEmpresasPage';
import MateriaisSustentaveisPage from '@/pages/MateriaisSustentaveisPage';
import VidaUtilPage from '@/pages/VidaUtilPage';
import ComputacaoNuvemPage from '@/pages/ComputacaoNuvemPage';
import ReducaoCarbonoPage from '@/pages/ReducaoCarbonoPage';
import SobrePage from '@/pages/SobrePage';
import ReducaoAguaPage from '@/pages/ReducaoAguaPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lixo-eletronico" element={<LixoEletronicoPage />} />
        {/* Rota antiga foi removida do footer, mas vou manter o redirecionamento caso exista em algum link antigo */}
        <Route path="/economia-energia" element={<GestaoEnergiaPage />} />
        <Route path="/sustentabilidade" element={<SustentabilidadePage />} />
        <Route path="/gestao-energia" element={<GestaoEnergiaPage />} />
        <Route path="/green-it-empresas" element={<GreenITEmpresasPage />} />
        <Route path="/materiais-sustentaveis" element={<MateriaisSustentaveisPage />} />
        <Route path="/vida-util" element={<VidaUtilPage />} />
        <Route path="/computacao-nuvem" element={<ComputacaoNuvemPage />} />
        <Route path="/reducao-carbono" element={<ReducaoCarbonoPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/reducao-agua" element={<ReducaoAguaPage />} />
      </Routes>
    </Router>
  );
}

export default App;