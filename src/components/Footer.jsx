
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (e, to) => {
    // If we are already on the page we are navigating to, scroll to top
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If navigating to a different page, the ScrollToTop component in App.jsx will handle it
  };

  return (
    <footer className="bg-emerald-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-bold">Semente Digital</span>
            </div>
            <p className="text-emerald-100 text-sm">
              Promovendo a conscientização sobre tecnologia sustentável e práticas de Green IT para um futuro mais verde.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Links Rápidos</span>
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className="text-emerald-100 hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/lixo-eletronico" onClick={(e) => handleLinkClick(e, '/lixo-eletronico')} className="text-emerald-100 hover:text-white transition-colors">
                Lixo Eletrônico
              </Link>
              <Link to="/gestao-energia" onClick={(e) => handleLinkClick(e, '/gestao-energia')} className="text-emerald-100 hover:text-white transition-colors">
                Gestão de Energia
              </Link>
              <Link to="/reducao-agua" onClick={(e) => handleLinkClick(e, '/reducao-agua')} className="text-emerald-100 hover:text-white transition-colors">
                Redução de Água
              </Link>
              <Link to="/sobre" onClick={(e) => handleLinkClick(e, '/sobre')} className="text-emerald-100 hover:text-white transition-colors">
                Sobre
              </Link>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contato</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@sementedigital.com" className="flex items-center gap-2 text-emerald-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@sementedigital.com</span>
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-6 text-center">
          <p className="text-emerald-100 text-sm">
            © 2025 Semente Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
