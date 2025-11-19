import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Lixo Eletrônico', path: '/lixo-eletronico' },
    { label: 'Gestão de Energia', path: '/gestao-energia' },
    { label: 'Redução de Água', path: '/reducao-agua' },
    { label: 'Sustentabilidade', path: '/sustentabilidade' },
    { label: 'Sobre', path: '/sobre' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Leaf className="w-8 h-8 text-emerald-600" />
          </motion.div>
          <span className="text-2xl font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors">
            Semente Digital
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-emerald-700 hover:text-emerald-600 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;