import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MessageCircle, Search, ArrowUpDown, Home } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import TrendingProducts from '@/components/TrendingProducts';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = ['Tênis', 'Chinelos', 'Meias', 'Acessórios'];
  const genders = ['Todos', 'Masculino', 'Feminino', 'Unisex'];
  const newLogoUrl = "https://horizons-cdn.hostinger.com/911e8a4d-848b-403d-ae08-291a200b0004/01ec6e7a6a6e050cfe22e1993750ae74.png";
  
  const todosOsProdutos = [
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
    { id: 1, name: 'New Balance 9060', category: 'Tênis', oldPrice: 'R$ 369,90 ', price: 'R$ 340,00', priceValue: 340.00, gender: 'Feminino', colors: {
        '#e64d92ff': { name: 'Rosa', images: [
            "https://i.ibb.co/ycPVK6bc/IMG-20251006-WA0126.jpg",
            "https://i.ibb.co/mrMDS9cP/IMG-20251006-WA0138.jpg",
            "https://i.ibb.co/FLn99t3H/IMG-20251006-WA0132.jpg",
            "https://i.ibb.co/NnTrPhZG/IMG-20251006-WA0128.jpg",
            "https://i.ibb.co/WWF1zw4j/Imagem-do-Whats-App-de-2025-10-10-s-14-15-49-9d4e79c9.jpg"
        ]},
        '#FFFFFF': { name: 'Branco', images: [
            "https://i.ibb.co/V04fSdBR/IMG-20251006-WA0163.jpg",
            "https://i.ibb.co/ZRn1x1Pp/IMG-20251006-WA0155.jpg",
            "https://i.ibb.co/qYXhhKW6/IMG-20251006-WA0167.jpg",
            "https://i.ibb.co/5W0ShYdY/IMG-20251006-WA0181.jpg",
            "https://i.ibb.co/W4MYhCnF/IMG-20251006-WA0165.jpg",
            "https://i.ibb.co/B5LK9GZ3/IMG-20251006-WA0183.jpg",
            "https://i.ibb.co/yFbJf4D5/Imagem-do-Whats-App-de-2025-10-06-s-18-51-58-be77ac57.jpg",
            "https://i.ibb.co/yc7LfKL2/Imagem-do-Whats-App-de-2025-10-06-s-18-51-57-1fd4c05c.jpg",
            "https://i.ibb.co/YvrHSTJ/Imagem-do-Whats-App-de-2025-10-10-s-14-16-18-4993f4cc.jpg",
            "https://i.ibb.co/m5Gc2jKH/Imagem-do-Whats-App-de-2025-10-10-s-14-16-19-206e9963.jpg",
        ]},
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/7DwT2Pt/IMG-20251006-WA0146.jpg",
            "https://i.ibb.co/8LxCMJhz/IMG-20251006-WA0159.jpg",
            "https://i.ibb.co/d0Ltk3tB/IMG-20251006-WA0156.jpg",
            "https://i.ibb.co/dwkL944G/IMG-20251006-WA0148.jpg",
            "https://i.ibb.co/chG84cjQ/IMG-20251010-WA0800.jpg",
            "https://i.ibb.co/Cs91f2Mx/Imagem-do-Whats-App-de-2025-10-10-s-14-16-01-1973f923.jpg",
            "https://i.ibb.co/DfMktcjb/IMG-20251010-WA0799.jpg"    
        ]},
        '#b50404ff': { name: 'Vermelho', images: [
            "https://i.ibb.co/7dJZr4MC/Imagem-do-Whats-App-de-2025-10-06-s-18-52-06-0e5d326e.jpg",
            "https://i.ibb.co/S77wRxFG/IMG-20251006-WA0176.jpg",
            "https://i.ibb.co/4ZKwKXCG/Imagem-do-Whats-App-de-2025-10-06-s-18-52-05-34156455.jpg",
            "https://i.ibb.co/qYwqy8ww/Imagem-do-Whats-App-de-2025-10-06-s-18-52-08-357f61a7.jpg",
        ]},
        '#12d522ff': { name: 'Outras Cores', images: [
            "https://i.ibb.co/Jjm4pHmG/IMG-20251006-WA0177.jpg",
            "https://i.ibb.co/0y2QHxvD/IMG-20251006-WA0189.jpg",
            "https://i.ibb.co/Df6PHDWy/IMG-20251006-WA0166.jpg",
            "https://i.ibb.co/YTKsZRLq/IMG-20251006-WA0173.jpg",
            "https://i.ibb.co/HpGQbh9L/Imagem-do-Whats-App-de-2025-10-10-s-14-16-23-748045f9.jpg",
            "https://i.ibb.co/YMnDfdK/Imagem-do-Whats-App-de-2025-10-10-s-14-16-23-2bbed17e.jpg",
            "https://i.ibb.co/KpXbsZ01/Imagem-do-Whats-App-de-2025-10-10-s-14-16-20-83ef0ca6.jpg",
            "https://i.ibb.co/M5Vdqyqd/Imagem-do-Whats-App-de-2025-10-10-s-14-16-19-d0e95227.jpg",
            "https://i.ibb.co/5XhZNcKJ/Imagem-do-Whats-App-de-2025-10-10-s-14-16-13-9f332b99.jpg",
            "https://i.ibb.co/vCjm52hs/Imagem-do-Whats-App-de-2025-10-10-s-14-15-50-b71aacb7.jpg",
            "https://i.ibb.co/4ZpdrT6p/Imagem-do-Whats-App-de-2025-10-10-s-14-15-51-a9a3b05f.jpg",
            "https://i.ibb.co/d4WKGhbP/Imagem-do-Whats-App-de-2025-10-10-s-14-15-50-a1dc0955.jpg",
            "https://i.ibb.co/bgqtJ6Ls/Imagem-do-Whats-App-de-2025-10-10-s-14-15-48-2ef0b7ac.jpg",
        ]},

    }},
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 2, name: 'Nike SB Dunk', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Masculino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/vC4sYF2f/IMG-20251006-WA0169.jpg",
            "https://i.ibb.co/W4bV91Gk/IMG-20251006-WA0151.jpg",
            "https://i.ibb.co/xSgZVwsT/IMG-20251006-WA0150.jpg",
        ]},
        'hsla(0, 35%, 20%, 1.00)': { name: 'Marrom', images: [
          "https://i.ibb.co/gZCFj6W9/Imagem-do-Whats-App-de-2025-10-10-s-14-07-11-dfd6bdb0.jpg",
            "https://i.ibb.co/hFQSPZXg/IMG-20251006-WA0187.jpg",
            "https://i.ibb.co/WNhrcBHN/IMG-20251006-WA0170.jpg",
            "https://i.ibb.co/Q34Sc7pB/IMG-20251006-WA0162.jpg",
        ]},
        'hsla(0, 0%, 40%, 1.00)': { name: 'Cinza', images: [
            "https://i.ibb.co/rGC72YYT/IMG-20251006-WA0164.jpg",
            "https://i.ibb.co/N2J87ktK/IMG-20251006-WA0161.jpg",
            "https://i.ibb.co/kVHGSLCh/IMG-20251006-WA0154.jpg",
        ]},
        '#141b7e': { name: 'Azul', images: [
            "https://i.ibb.co/KzzZZ4yY/IMG-20251013-WA0123.jpg",
            "https://i.ibb.co/whjGjBjw/Imagem-do-Whats-App-de-2025-10-10-s-17-03-20-58efffc5.jpg",
            "https://i.ibb.co/Nn7bpdG7/IMG-20251013-WA0121.jpg",
        ]},
        '#bd17b4': { name: 'Rosa', images: [
            "https://i.ibb.co/G33xkBwk/IMG-20251013-WA0145.jpg",
            "https://i.ibb.co/9mBMhs3w/IMG-20251013-WA0146.jpg",
            "https://i.ibb.co/Xcg3DpD/IMG-20251013-WA0144.jpg",
            "https://i.ibb.co/sMwBPmh/IMG-20251013-WA0143.jpg"
        ]},
        '#31e404': { name: 'Outras Cores', images: [
            "https://i.ibb.co/qHqhpKZ/IMG-20251013-WA0220.jpg",
            "https://i.ibb.co/tpmqsZ08/IMG-20251013-WA0210.jpg",
            "https://i.ibb.co/7t03vXgw/IMG-20251013-WA0135.jpg",
            "https://i.ibb.co/GQqKj9qX/IMG-20251013-WA0102.jpg",
            "https://i.ibb.co/zWVN9qT5/Imagem-do-Whats-App-de-2025-10-10-s-17-03-20-66aa2e66.jpg",
            "https://i.ibb.co/GvZpzvsb/Imagem-do-Whats-App-de-2025-10-10-s-17-03-18-a39b97ca.jpg",
            
        ]},
    }},
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
    { id: 3, name: 'New Balance Fuelcell Rebel', category: 'Tênis', oldPrice: 'R$ 369,90', price: 'R$ 340,00', priceValue: 340.00, gender: 'Unisex', colors: {
      '#ffffff': { name: 'Branco', images: [
            "https://i.ibb.co/My5jYM1c/IMG-20251013-WA0055.jpg",
            "https://i.ibb.co/d0CkSkNy/IMG-20251013-WA0054.jpg",
            "https://i.ibb.co/x8MBNmfY/IMG-20251013-WA0056.jpg",
            "https://i.ibb.co/h1rmcTby/IMG-20251013-WA0052.jpg",
            "https://i.ibb.co/KxBJq3Sx/IMG-20251014-WA0060.jpg",
            "https://i.ibb.co/1Fj0Scy/IMG-20251014-WA0063.jpg",
            "https://i.ibb.co/CKnVch6x/IMG-20251014-WA0061.jpg"
            ]},
        '#6c11d4ff': { name: 'Roxo', images: [
            "https://i.ibb.co/cSJBbcy7/IMG-20251006-WA0214.jpg",
            "https://i.ibb.co/3ycxKP4x/IMG-20251006-WA0213.jpg",
            "https://i.ibb.co/B2nNnfDQ/IMG-20251006-WA0212.jpg",
        ]},
        '#d30ca1ff': { name: 'Rosa', images: [
            "https://i.ibb.co/B5Nxwz78/IMG-20251006-WA0223.jpg",
            "https://i.ibb.co/DfjLqsRK/IMG-20251006-WA0222.jpg",
            "https://i.ibb.co/pj5bMvmz/IMG-20251006-WA0221.jpg",
        ]},
        '#23dab2ff': { name: 'Ciano', images: [
            "https://i.ibb.co/gbXhzY7t/IMG-20251006-WA0209.jpg",
            "https://i.ibb.co/4wLZ8BbJ/IMG-20251006-WA0207.jpg",
            "https://i.ibb.co/jsyphN4/IMG-20251006-WA0208.jpg",
        ]},
        '#0c71cfff': { name: 'Azul', images: [
            "https://i.ibb.co/twmfknNR/IMG-20251006-WA0220.jpg",
            "https://i.ibb.co/1fkvB09B/IMG-20251006-WA0219.jpg",
            "https://i.ibb.co/Qv9xnZmf/IMG-20251006-WA0217.jpg",
        ]},
        '#d2f50cff': { name: 'Amarelo', images: [
            "https://i.ibb.co/mCsFDh24/IMG-20251006-WA0206.jpg",
            "https://i.ibb.co/Fkf50zmh/IMG-20251006-WA0204.jpg",
            "https://i.ibb.co/S4mKV1M5/IMG-20251006-WA0205.jpg",
        ]},
        
    }},
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 4, name: 'On Cloud', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Unisex', colors: {
        '#FFFFFF': { name: 'Branco', images: [
            "https://i.ibb.co/39Vzm20J/IMG-20251006-WA0147.jpg",
            "https://i.ibb.co/PRZs5Mb/IMG-20251006-WA0142.jpg",
            "https://i.ibb.co/QjCd97mn/IMG-20251006-WA0139.jpg",
            "https://i.ibb.co/T5PPV5X/IMG-20251006-WA0135.jpg",
        ]},
        '#000000': { name: 'Preto', images: [
            "https://i.ibb.co/svkGD7wD/IMG-20251006-WA0143.jpg",
            "https://i.ibb.co/Z1p595hB/IMG-20251006-WA0152.jpg",
            "https://i.ibb.co/604N8XjH/IMG-20251006-WA0140.jpg",
            "https://i.ibb.co/s9n9gcZQ/IMG-20251010-WA0673.jpg",
            "https://i.ibb.co/ksFkb1CR/IMG-20251010-WA0672.jpg",
            "https://i.ibb.co/Nd4r87Qp/IMG-20251010-WA0671.jpg"
        ]},
        '#ca0234ff': { name: 'Vinho', images: [
            "https://i.ibb.co/YTfSp05y/IMG-20251010-WA0702.jpg",
            "https://i.ibb.co/FLz1sZkL/IMG-20251010-WA0704.jpg",
            "https://i.ibb.co/bg4q18RT/IMG-20251010-WA0701.jpg",
        ]},
        '#d87dc4ff': { name: 'Rosa', images: [
            "https://i.ibb.co/nqKr0x4m/IMG-20251006-WA0136.jpg",
            "https://i.ibb.co/DfgwT2vf/IMG-20251006-WA0134.jpg",
            "https://i.ibb.co/0jnLQkHQ/IMG-20251006-WA0137.jpg",
        ]},
        '#7c5757ff': { name: 'Bege', images: [
            "https://i.ibb.co/YFqWpn5y/IMG-20251006-WA0124.jpg",
            "https://i.ibb.co/LXmvM4Kj/IMG-20251006-WA0115.jpg",
            "https://i.ibb.co/n88SCjw3/IMG-20251006-WA0117.jpg",
        ]},
    }},
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 5, name: 'On Cloud', category: 'Tênis', oldPrice: 'R$ 369,90', price: 'R$ 330,00', priceValue: 330.00, gender: 'Masculino', colors: {
        '#000000': { name: 'Preto', images: [
            "https://i.ibb.co/mF8KGkpt/IMG-20251006-WA0129.jpg",
            "https://i.ibb.co/84Nrn3c6/IMG-20251006-WA0123.jpg",
            "https://i.ibb.co/gMTm7LGr/IMG-20251006-WA0112.jpg",
            "https://i.ibb.co/WpNfMTRG/IMG-20251006-WA0121.jpg",
        ]},
        '#230cf7ff': { name: 'Azul', images: [
             "https://i.ibb.co/mF8KGkpt/IMG-20251006-WA0129.jpg",
            "https://i.ibb.co/84Nrn3c6/IMG-20251006-WA0123.jpg",
            "https://i.ibb.co/gMTm7LGr/IMG-20251006-WA0112.jpg",
            "https://i.ibb.co/WpNfMTRG/IMG-20251006-WA0121.jpg",
        ]},
        '#7d7d80ff': { name: 'Cinza', images: [
             "https://i.ibb.co/mF8KGkpt/IMG-20251006-WA0129.jpg",
            "https://i.ibb.co/84Nrn3c6/IMG-20251006-WA0123.jpg",
            "https://i.ibb.co/gMTm7LGr/IMG-20251006-WA0112.jpg",
            "https://i.ibb.co/WpNfMTRG/IMG-20251006-WA0121.jpg",
        ]},
    }},
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 6, name: 'Meia Alo', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
        '#000000': { name: 'Preto', images: [
            "https://i.ibb.co/HTMfsgDf/IMG-20251006-WA0253.jpgjpg",
            "https://i.ibb.co/8LrFXt6K/IMG-20251006-WA0237.jpg",
            "https://i.ibb.co/Vc7YkP36/IMG-20251006-WA0264.jpg",
        ]},
        '#FFFFFF': { name: 'Branco', images: [
            "https://i.ibb.co/bjSgTHTn/IMG-20251006-WA0251.jpg",
            "https://i.ibb.co/h69By4x/IMG-20251006-WA0266.jpg",
            "https://i.ibb.co/Q3PTJcn2/IMG-20251006-WA0265.jpg",
            "https://i.ibb.co/BVbFvyK8/Imagem-do-Whats-App-de-2025-10-16-s-13-48-38-76afbff0.jpg",
            "https://i.ibb.co/skkWcTv/Imagem-do-Whats-App-de-2025-10-16-s-13-48-37-bdf3cb2b.jpg"
        ]},
        '#97502fff': { name: 'Marrom', images: [
          "https://i.ibb.co/JWnwgkfx/IMG-20251010-WA0706.jpg",
            "https://i.ibb.co/YTfBYCRm/IMG-20251006-WA0263.jpg",
            "https://i.ibb.co/Vc7YkP36/IMG-20251006-WA0264.jpg",
        ]},
        '#bd6aa1ff': { name: 'Lilás', images: [
          "https://i.ibb.co/JFkTJTJ1/IMG-20251010-WA0707.jpg",
            "https://i.ibb.co/GvPPZxzf/IMG-20251006-WA0261.jpg",
            "https://i.ibb.co/Q3PTJcn2/IMG-20251006-WA0265.jpg",
            "https://i.ibb.co/fdmD6tKD/IMG-20251006-WA0262.jpg",
        ]},
        '#9d001dff': { name: 'Vermelho', images: [
          "https://i.ibb.co/mVgg40pH/Imagem-do-Whats-App-de-2025-10-16-s-13-48-36-a80e797d.jpg",
        ]},
    }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    

  { id: 7, name: 'Meia Puma', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#FFFFFF': { name: 'Branco', images: [
              "https://i.ibb.co/b52J8c8W/IMG-20251006-WA0242.jpg",
              "https://i.ibb.co/PsgJqzZt/IMG-20251006-WA0260.jpg",
              "https://i.ibb.co/wF6v2Myk/IMG-20251006-WA0258.jpg",
          ]},
      }},

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 8, name: 'Meia Adidas', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/tpgV4jpH/IMG-20251006-WA0252.jpg",
              "https://i.ibb.co/0jGsNMPX/IMG-20251006-WA0224.jpg",
          ]},
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/qLz6jzNQ/IMG-20251006-WA0250.jpg",
              "https://i.ibb.co/kgTDJrnw/IMG-20251006-WA0243.jpg",
          ]},
          '#e29cb9ff': { name: 'Rosa', images: [
            "https://i.ibb.co/4RyzN4jq/IMG-20251006-WA0247.jpg",
              "https://i.ibb.co/7BwppQ9/IMG-20251006-WA0249.jpg",
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 9, name: 'Meia Nike', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/XxsjFsMB/IMG-20251006-WA0225.jpg",
              "https://i.ibb.co/VpPmNQpH/IMG-20251006-WA0230.jpg",
              "https://i.ibb.co/bjDc7S0V/IMG-20251006-WA0229.jpg"
          ]},
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/VFWLKfj/IMG-20251006-WA0235.jpg",
              "https://i.ibb.co/VF1rSYH/IMG-20251006-WA0246.jpg",
              "https://i.ibb.co/S463v8JM/IMG-20251006-WA0244.jpg",
              "https://i.ibb.co/Z67TjP8Z/IMG-20251006-WA0248.jpg",
              "https://i.ibb.co/9kFDNJjy/IMG-20251006-WA0236.jpg",
              "https://i.ibb.co/wrNPxNhz/Imagem-do-Whats-App-de-2025-10-16-s-13-48-36-f9cae77f.jpg",
              "https://i.ibb.co/9kj0pN44/Imagem-do-Whats-App-de-2025-10-16-s-13-48-36-990ed16b.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 10, name: 'Meia Mizuno', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/WvVgn3HM/IMG-20251006-WA0245.jpg",
              "https://i.ibb.co/Dq5H6w5/IMG-20251006-WA0257.jpg"
          ]},
      }},

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 11, name: 'Meia Vans', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/nNgrXnJf/IMG-20251006-WA0241.jpg",
              "https://i.ibb.co/Dq5H6w5/IMG-20251006-WA0257.jpg"
          ]},
      }},

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 11, name: 'Meia New Balance', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/Z1VBf97T/IMG-20251006-WA0238.jpg",
              "https://i.ibb.co/8Dzt0DKS/IMG-20251006-WA0255.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 12, name: 'Meia Jordan', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/0RVf54Wr/IMG-20251006-WA0231.jpg",
              "https://i.ibb.co/fzmvNdzv/IMG-20251006-WA0233.jpg",
              "https://i.ibb.co/fwQ21xG/IMG-20251006-WA0234.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 13, name: 'Meia On Running', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/ymjhb4Js/IMG-20251006-WA0240.jpg",
              "https://i.ibb.co/8Dzt0DKS/IMG-20251006-WA0255.jpg",
          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/Dqd2qPs/IMG-20251006-WA0228.jpg",
              "https://i.ibb.co/BHrLXQZt/IMG-20251006-WA0226.jpg",
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 14, name: 'Adidas Campus', category: 'Tênis', oldPrice: 'R$ 350,00', price: 'R$ 320,00', priceValue: 320.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/4nH312RK/IMG-20251010-WA0277.jpg",
              "https://i.ibb.co/7twc9rcN/IMG-20251010-WA0276.jpg",
              "https://i.ibb.co/b5mRxKHW/IMG-20251010-WA0275.jpg",
              "https://i.ibb.co/rfzhwqKv/IMG-20251010-WA0274.jpg"
          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/tMqFzDmK/IMG-20251013-WA0378.jpg",
              "https://i.ibb.co/rKJWvPXV/IMG-20251013-WA0377.jpg",
              "https://i.ibb.co/S4qJFcmb/IMG-20251013-WA0380.jpg",
              "https://i.ibb.co/m5P9qzYk/IMG-20251013-WA0384.jpg",
              "https://i.ibb.co/TD7143VB/IMG-20251013-WA0375.jpg",
              "https://i.ibb.co/Nf0Rn2m/IMG-20251013-WA0372.jpg",
              "https://i.ibb.co/7NzBF3xS/IMG-20251013-WA0374.jpg"
          ]},
          '#54280dff': { name: 'Marrom', images: [
              "https://i.ibb.co/qY4BYpdm/IMG-20251013-WA0365.jpg",
              "https://i.ibb.co/Rp2265DB/IMG-20251013-WA0363.jpg",
              "https://i.ibb.co/YB7vpL08/IMG-20251013-WA0364.jpg",
              "https://i.ibb.co/vCWd0ZBz/IMG-20251013-WA0361.jpg"
          ]},
          '#645d5dff': { name: 'Cinza', images: [
              "https://i.ibb.co/Mv1jcyy/IMG-20251013-WA0370.jpg",
              "https://i.ibb.co/0p8Nx0vB/IMG-20251013-WA0367.jpg",
              "https://i.ibb.co/q3TK0Y9Z/IMG-20251013-WA0368.jpg",
              "https://i.ibb.co/Ldy4mVdm/IMG-20251013-WA0371.jpg"
          ]},
          '#fc1313ff': { name: 'Vermelho', images: [
              "https://i.ibb.co/HLGR2v74/IMG-20251013-WA0116.jpg",
              "https://i.ibb.co/3mWz9ffH/IMG-20251013-WA0123.jpg",
              "https://i.ibb.co/jZfWZHgd/IMG-20251013-WA0121.jpg",
              "https://i.ibb.co/RTZFmQCf/IMG-20251013-WA0118.jpg",
          ]},
          '#dd4ae2ff': { name: 'Rosa', images: [
              "https://i.ibb.co/1gKtkt5/IMG-20251010-WA0282.jpg",
              "https://i.ibb.co/XrVSWkx3/IMG-20251010-WA0281.jpg",
              "https://i.ibb.co/8DwGqKmm/IMG-20251010-WA0279.jpg",
              "https://i.ibb.co/60QSDLMn/IMG-20251010-WA0286.jpg",
              "https://i.ibb.co/7JVb1QpX/IMG-20251010-WA0283.jpg",
              "https://i.ibb.co/C5s6DzYg/IMG-20251010-WA0285.jpg",
              "https://i.ibb.co/bj6w73ck/IMG-20251010-WA0284.jpg",

          ]},
          '#0aaa12ff': { name: 'Verde', images: [
              "https://i.ibb.co/DDFp1nwY/45979296-dc44-4731-be38-b6ecbd95a26f-7fbff2bec8f2be8b0917058624768606-480-0.jpg",
              "https://i.ibb.co/GQpg1ZdL/tenis-adidas-campus-682203-595x.jpg",
              "https://i.ibb.co/GQfQP4mC/IMG-20251010-WA0280.jpg",

          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 15, name: 'Adidas Samba', category: 'Tênis', oldPrice: 'R$ 260,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/67VVZ1Lm/IMG-20251013-WA0234.jpg",
              "https://i.ibb.co/HfGcSwLT/IMG-20251013-WA0233.jpg",
              "https://i.ibb.co/CKjnGBvh/IMG-20251013-WA0228.jpg",
              "https://i.ibb.co/HTCwpNzV/IMG-20251013-WA0229.jpg",
              "https://i.ibb.co/4ZZN1JrF/IMG-20251013-WA0236.jpg"


          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 16, name: 'Adidas Samba de Couro', category: 'Tênis', oldPrice: 'R$ 360,00', price: 'R$ 330,00', priceValue: 330.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/JR0w80tb/imagem-2025-10-13-105434589.png",
              "https://i.ibb.co/xthpK7Fy/Captura-de-tela-2025-10-13-105505.png",
              "https://i.ibb.co/ksQVG0PB/Captura-de-tela-2025-10-13-105459.png",
              "https://i.ibb.co/YTVK6WBK/IMG-20251015-WA0081.jpg",
              "https://i.ibb.co/93HYtY5f/IMG-20251015-WA0083.jpg",
              "https://i.ibb.co/9HXDVZ2k/IMG-20251015-WA0085.jpg",
              "https://i.ibb.co/TqRqKKZg/IMG-20251015-WA0087.jpg",
              "https://i.ibb.co/GvsKyQDp/IMG-20251015-WA0090.jpg",
              "https://i.ibb.co/Q7Bw9gHs/IMG-20251015-WA0091.jpg"
          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/Sw2DH7Hq/IMG-20251015-WA0094.jpg",
              "https://i.ibb.co/ymdty83X/IMG-20251015-WA0095.jpg",
              "https://i.ibb.co/fV1YwNS1/IMG-20251015-WA0093.jpg",
              "https://i.ibb.co/F4ZhvzjH/IMG-20251015-WA0096.jpg"
          ]},
          '#38d211ff': { name: 'Cores Variadas', images: [
              "https://i.ibb.co/rGVHH6hp/IMG-20251015-WA0077.jpg",
              "https://i.ibb.co/tTtgGpp4/IMG-20251015-WA0078.jpg",
              "https://i.ibb.co/Fqy079LY/IMG-20251015-WA0079.jpg",
              "https://i.ibb.co/CsYn3hCf/IMG-20251015-WA0080.jpg",
              "https://i.ibb.co/nsnNJQ6s/IMG-20251015-WA0082.jpg",
              "https://i.ibb.co/FqXJg3G9/IMG-20251015-WA0084.jpg",
              "https://i.ibb.co/BHMrhC3V/IMG-20251015-WA0086.jpg",
              "https://i.ibb.co/p62f1yMr/IMG-20251015-WA0089.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 17, name: 'Adidas NMD', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/Gfy0Pkfh/IMG-20251013-WA0182.jpg",
              "https://i.ibb.co/mCtpm9Lw/IMG-20251013-WA0177.jpg",
              "https://i.ibb.co/0VypBRbb/IMG-20251013-WA0183.jpg",
          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/Wp7VhR8r/IMG-20251013-WA0181.jpg",
              "https://i.ibb.co/hRxthCMm/IMG-20251013-WA0174.jpg",
          ]},
          '#a1a1a1ff': { name: 'Cinza', images: [
              "https://i.ibb.co/MDrm4Vx7/IMG-20251013-WA0171.jpg",
              "https://i.ibb.co/LX4nK0hG/IMG-20251013-WA0170.jpg",
              "https://i.ibb.co/zhqmp9mm/IMG-20251013-WA0169.jpg"
          ]},
          '#8c34b4ff': { name: 'Roxo', images: [
              "https://i.ibb.co/NQJ6tHk/IMG-20251013-WA0156.jpg",
              "https://i.ibb.co/dwNcwdHQ/IMG-20251013-WA0155.jpg",
              "https://i.ibb.co/N648ZRMf/IMG-20251013-WA0154.jpg",
              "https://i.ibb.co/rKHpBj5f/IMG-20251013-WA0153.jpg"
          ]},
          '#21961dff': { name: 'Mais Cores', images: [
              "https://i.ibb.co/6cZV3Pdv/IMG-20251013-WA0150.jpg",
              "https://i.ibb.co/Xf45npfg/IMG-20251013-WA0149.jpg",
              "https://i.ibb.co/jkBQdnp9/IMG-20251013-WA0148.jpg",
              "https://i.ibb.co/zVstj1Jr/IMG-20251013-WA0147.jpg",
              "https://i.ibb.co/bM1j0N4q/IMG-20251013-WA0176.jpg",
              "https://i.ibb.co/1tHD2Pp6/IMG-20251013-WA0175.jpg",
              "https://i.ibb.co/4ZwFGF0X/IMG-20251013-WA0173.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 18, name: 'Adidas', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Unisex', colors: {
          '#f3abc7ff': { name: 'Rosa', images: [
              "https://i.ibb.co/nMjXYC94/IMG-20251013-WA0090.jpg",
              "https://i.ibb.co/zhvS93YF/IMG-20251013-WA0088.jpg",
              "https://i.ibb.co/nSTMBGc/IMG-20251013-WA0091.jpg",
              "https://i.ibb.co/n8gHQ2ng/IMG-20251013-WA0092.jpg"
          ]},
          '#536bf3ff': { name: 'Azul', images: [
              "https://i.ibb.co/pBZkbfCk/IMG-20251013-WA0089.jpg",
              "https://i.ibb.co/wvn8VJD/IMG-20251013-WA0087.jpg",
              "https://i.ibb.co/qMP62MDV/IMG-20251013-WA0086.jpg",
              "https://i.ibb.co/chVg29Z9/IMG-20251013-WA0084.jpg",
              "https://i.ibb.co/svP9zY2n/IMG-20251013-WA0083.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 19, name: 'Adidas Adizero', category: 'Tênis', oldPrice: 'R$ 369,90', price: 'R$ 330,00', priceValue: 330.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/dJssrWCz/IMG-20251010-WA0947.jpg",
              "https://i.ibb.co/0pNN7KN5/IMG-20251010-WA0953.jpg",
              "https://i.ibb.co/HDpV03CS/IMG-20251010-WA0951.jpg",
              "https://i.ibb.co/zhyCxzjw/IMG-20251010-WA0954.jpg",
          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/mrvfnHcX/IMG-20251010-WA0945.jpg",
              "https://i.ibb.co/YBM7XYkM/IMG-20251010-WA0946.jpg",
              "https://i.ibb.co/XkC2qjbH/IMG-20251010-WA0943.jpg",
              "https://i.ibb.co/XrmzfB2v/IMG-20251010-WA0944.jpg",
              "https://i.ibb.co/gZf9WYmf/Imagem-do-Whats-App-de-2025-10-17-s-10-27-17-7bf77b54.jpg",
              "https://i.ibb.co/fdYn80s4/Imagem-do-Whats-App-de-2025-10-17-s-10-27-16-c58e28b8.jpg",
              "https://i.ibb.co/SXHTFXKN/Imagem-do-Whats-App-de-2025-10-17-s-10-27-18-4d438ff5.jpg",
              "https://i.ibb.co/9312TWGz/Imagem-do-Whats-App-de-2025-10-17-s-10-27-43-497b3c96.jpg",
              "https://i.ibb.co/8Rr09v1/Imagem-do-Whats-App-de-2025-10-17-s-10-27-47-520af20a.jpg",
              "https://i.ibb.co/w361cV4/Imagem-do-Whats-App-de-2025-10-17-s-10-27-46-a0a749ea.jpg"
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 20, name: 'Nike Jordan Low', category: 'Tênis', oldPrice: 'R$ 260,90', price: 'R$ 230,00', priceValue: 230.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/6RCc4wpp/Imagem-do-Whats-App-de-2025-10-10-s-14-07-29-11c86658.jpg",
              "https://i.ibb.co/MkYXPDyT/Imagem-do-Whats-App-de-2025-10-10-s-14-07-29-587b2802.jpg",
              "https://i.ibb.co/4RrpHS5P/Imagem-do-Whats-App-de-2025-10-10-s-14-07-27-c6f8b08f.jpg",
              "https://i.ibb.co/PZswd4QT/Imagem-do-Whats-App-de-2025-10-10-s-14-07-31-1eae4147.jpg",
              "https://i.ibb.co/d42Lxx97/Imagem-do-Whats-App-de-2025-10-10-s-14-07-29-ae9e3257.jpg",
              "https://i.ibb.co/pjvL3qGG/Imagem-do-Whats-App-de-2025-10-10-s-14-07-30-995dfd34.jpg",
              "https://i.ibb.co/5DrHSsz/Imagem-do-Whats-App-de-2025-10-10-s-14-07-28-ebe251e6.jpg"

          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/LdgTQy6v/Imagem-do-Whats-App-de-2025-10-10-s-14-07-16-19efa02a.jpg",
              "https://i.ibb.co/TxC9ZqGV/Imagem-do-Whats-App-de-2025-10-10-s-14-07-19-98826fd8.jpg",
              "https://i.ibb.co/HD93m9H7/Imagem-do-Whats-App-de-2025-10-10-s-14-07-21-a376cf4e.jpg",
              
          ]},
      }},
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 21, name: 'Nike Jordan Luxo', category: 'Tênis', oldPrice: 'R$ 299,90', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', colors: {
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/qLPCLvYs/IMG-20251013-WA0078.jpg",
              "https://i.ibb.co/JR2h6r2W/IMG-20251013-WA0081.jpg",
              "https://i.ibb.co/rftFz4dk/IMG-20251013-WA0079.jpg",
              "https://i.ibb.co/N2BdYx7j/IMG-20251013-WA0085.jpg"
              
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 22, name: 'Nike Jordan Higth', category: 'Tênis', oldPrice: 'R$ 299,90', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', colors: {
          '#ffffff': { name: 'Branco', images: [
              "https://i.ibb.co/HTfQh4j5/Imagem-do-Whats-App-de-2025-10-10-s-14-07-24-886a44fc.jpg",
              "https://i.ibb.co/GrFkfCR/Imagem-do-Whats-App-de-2025-10-10-s-14-07-24-cf9900af.jpg",
              "https://i.ibb.co/nMxNxT7C/Imagem-do-Whats-App-de-2025-10-10-s-14-07-23-079e8869.jpg",
          ]},
          '#000000': { name: 'Preto', images: [
              "https://i.ibb.co/27v4CPQf/Imagem-do-Whats-App-de-2025-10-10-s-14-07-27-c6b7805a.jpg",
          ]},
          '#c268ba': { name: 'Rosa', images: [
              "https://i.ibb.co/F4RDffpt/Imagem-do-Whats-App-de-2025-10-10-s-14-07-24-23102534.jpg",
              "https://i.ibb.co/7NjsWXX6/Imagem-do-Whats-App-de-2025-10-10-s-14-07-26-268a09ba.jpg",
          ]},
          '#3c5cc2': { name: 'Azul', images: [
              "https://i.ibb.co/qLtsKR5W/Imagem-do-Whats-App-de-2025-10-10-s-14-07-27-6a08a739.jpg",

          ]},
      }},
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 23, name: 'Nike Run Invisible 3', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Feminino', colors: {
          '#ffffff': { name: 'Branco', images: [
              "https://i.ibb.co/LDmb5m3V/Imagem-do-Whats-App-de-2025-10-10-s-14-09-48-777461d4.jpg",
              "https://i.ibb.co/zhhj5mWp/Imagem-do-Whats-App-de-2025-10-10-s-14-09-52-e6d51d8f.jpg",
              "https://i.ibb.co/hRV7TBQJ/Imagem-do-Whats-App-de-2025-10-10-s-14-09-46-974f5184.jpg",
              "https://i.ibb.co/PZbRTNLw/Imagem-do-Whats-App-de-2025-10-10-s-14-10-10-2a0df1f9.jpg",
              "https://i.ibb.co/qFNZThJg/Imagem-do-Whats-App-de-2025-10-10-s-14-10-16-b4f1de50.jpg",
              "https://i.ibb.co/ychtvqR1/Imagem-do-Whats-App-de-2025-10-10-s-14-10-15-141af983.jpg",
              "https://i.ibb.co/5XBF5qGS/Imagem-do-Whats-App-de-2025-10-10-s-14-10-30-f47f725d.jpg",
              "https://i.ibb.co/35f03thR/Imagem-do-Whats-App-de-2025-10-10-s-14-10-25-5f636dc0.jpg",
              "https://i.ibb.co/SwN6rxbQ/Imagem-do-Whats-App-de-2025-10-10-s-14-10-26-81d8a466.jpg"
          ]},
          '#000000': { name: 'Preto', images: [
              "https://i.ibb.co/pjzW4Wjm/Imagem-do-Whats-App-de-2025-10-10-s-14-10-03-8ce7b206.jpg",
              "https://i.ibb.co/tMgfm0X9/Imagem-do-Whats-App-de-2025-10-10-s-14-10-07-c9e26ffb.jpg",
              "https://i.ibb.co/9kvcyzwb/Imagem-do-Whats-App-de-2025-10-10-s-14-09-54-f99703f7.jpg",
              "https://i.ibb.co/xtNp7hyH/Imagem-do-Whats-App-de-2025-10-10-s-14-10-08-e5c1705b.jpg"
          ]},
          '#696969': { name: 'Cinza', images: [
              "https://i.ibb.co/j9p5517g/Imagem-do-Whats-App-de-2025-10-10-s-14-10-40-77c35e2d.jpg",
              "https://i.ibb.co/fYdLZTBF/Imagem-do-Whats-App-de-2025-10-10-s-14-10-39-56fd7689.jpg",
              "https://i.ibb.co/KcqJv4Xk/Imagem-do-Whats-App-de-2025-10-10-s-14-10-37-9ae3a477.jpg",
              "https://i.ibb.co/6RLkGrTd/Imagem-do-Whats-App-de-2025-10-10-s-14-10-35-571f100f.jpg",
              "https://i.ibb.co/F44JtxHh/Imagem-do-Whats-App-de-2025-10-10-s-14-10-34-13e83c5e.jpg",
              "https://i.ibb.co/TMxTmsfz/Imagem-do-Whats-App-de-2025-10-10-s-14-10-31-a1a63fff.jpg",
              "https://i.ibb.co/zTqzFxph/Imagem-do-Whats-App-de-2025-10-10-s-14-10-22-05a65a44.jpg",
              "https://i.ibb.co/b5Q1ddhq/Imagem-do-Whats-App-de-2025-10-10-s-14-10-21-991e672f.jpg",
              "https://i.ibb.co/8LrYgfhp/Imagem-do-Whats-App-de-2025-10-10-s-14-10-24-dfe5639c.jpg"
          ]},
          '#4510d6': { name: 'Azul', images: [
              "https://i.ibb.co/wZGRzBfj/Imagem-do-Whats-App-de-2025-10-10-s-14-09-39-b19efb96.jpg",
              "https://i.ibb.co/VWND4YnB/Imagem-do-Whats-App-de-2025-10-10-s-14-09-40-9010a815.jpg",
              "https://i.ibb.co/kgMJ8P8G/Imagem-do-Whats-App-de-2025-10-10-s-14-09-41-1cdabcd7.jpg"

          ]},
      }},
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 24, name: 'Nike Air Force', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Unisex', colors: {
          '#ffffff': { name: 'Branco', images: [
              "https://i.ibb.co/Sh6X6nd/IMG-20251010-WA0829.jpg",
              "https://i.ibb.co/kV4NfM8z/IMG-20251010-WA0834.jpg",
              "https://i.ibb.co/3Y40y0B2/IMG-20251010-WA0831.jpg",
              "https://i.ibb.co/35GQS7HR/IMG-20251010-WA0837.jpg",
              "https://i.ibb.co/SSyq76K/IMG-20251013-WA0115.jpg",
              "https://i.ibb.co/7JFyqGRg/IMG-20251013-WA0114.jpg",
              "https://i.ibb.co/1JKcpDnF/IMG-20251013-WA0099.jpg",
              "https://i.ibb.co/KxTf0WnM/IMG-20251013-WA0094.jpg"
          ]},
          '#000000': { name: 'Preto', images: [
              "https://i.ibb.co/mC9DBr8f/Imagem-do-Whats-App-de-2025-10-10-s-14-40-27-4ee1851d.jpg",
              "https://i.ibb.co/bgXjCbNR/Imagem-do-Whats-App-de-2025-10-10-s-14-40-27-122e2511.jpg",
              "https://i.ibb.co/ZRSSf6cZ/Imagem-do-Whats-App-de-2025-10-10-s-14-40-27-a8a97025.jpg",
              "https://i.ibb.co/yFDy4x4C/IMG-20251013-WA0096.jpg",
              "https://i.ibb.co/GfGFfWxz/IMG-20251013-WA0097.jpg",
              
          ]},
      }},

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 25, name: 'Nike Bailleli', category: 'Tênis', oldPrice: 'R$ 369,90', price: 'R$ 340,00', priceValue: 340.00, gender: 'Feminino', colors: {
          '#ffffff': { name: 'Branco', images: [
              "https://i.ibb.co/1GW6M3Ck/IMG-20251013-WA0067.jpg",
              "https://i.ibb.co/M5jmjD8F/IMG-20251013-WA0065.jpg",
              "https://i.ibb.co/yn6D7jCJ/IMG-20251013-WA0063.jpg",
              "https://i.ibb.co/fz44CPMh/IMG-20251013-WA0066.jpg"
          ]},
          '#bb2bbb': { name: 'Rosa', images: [
              "https://i.ibb.co/jPRyZJJ9/IMG-20251013-WA0076.jpg",
              "https://i.ibb.co/cK3k7bBM/IMG-20251013-WA0075.jpg",
              "https://i.ibb.co/ksS9qVMp/IMG-20251013-WA0074.jpg",
              "https://i.ibb.co/5gmmYhVN/IMG-20251013-WA0073.jpg",
              "https://i.ibb.co/jP0fsbk9/IMG-20251013-WA0062.jpg",
              "https://i.ibb.co/PGm315Yy/IMG-20251013-WA0059.jpg",
              "https://i.ibb.co/FkrvSgjt/IMG-20251013-WA0057.jpg",
              "https://i.ibb.co/tNbpQDX/IMG-20251013-WA0060.jpg"

              
          ]},
            '#0f8a9b': { name: 'Azul', images: [
              "https://i.ibb.co/5pMm7dQ/IMG-20251013-WA0069.jpg",
              "https://i.ibb.co/wr4bfwZm/IMG-20251013-WA0068.jpg",
              "https://i.ibb.co/vCvpvVKB/IMG-20251013-WA0072.jpg",
              
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 26, name: 'Tênis Puma', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/jvGybDf6/IMG-20251013-WA0163.jpg",
              "https://i.ibb.co/nMswVfrQ/IMG-20251013-WA0168.jpg",
              "https://i.ibb.co/FLqhVjSL/IMG-20251013-WA0167.jpg",
              "https://i.ibb.co/rG34XCsj/IMG-20251013-WA0165.jpg"
              
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 27, name: 'Tênis Schutz', category: 'Tênis', oldPrice: 'R$ 290,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/MxFkdj26/IMG-20251013-WA0204.jpg",
              "https://i.ibb.co/Df4wtPtt/IMG-20251013-WA0206.jpg",
              "https://i.ibb.co/bjz8j139/IMG-20251013-WA0203.jpg",
              "https://i.ibb.co/PsnkBdrW/IMG-20251013-WA0202.jpg"
              
          ]},
      }},
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
  { id: 28, name: 'Tênis Gucci', category: 'Tênis', oldPrice: 'R$ 360,00', price: 'R$ 320,00', priceValue: 320.00, gender: 'Unisex', colors: {
          '#fff1f1ff': { name: 'Branco Feminino', images: [
              "https://i.ibb.co/FkxctwPm/IMG-20251013-WA0166.jpg",
              "https://i.ibb.co/N6LxSt6M/IMG-20251013-WA0157.jpg",
              "https://i.ibb.co/h12ghr92/IMG-20251013-WA0160.jpg",
              "https://i.ibb.co/zWy484j3/IMG-20251013-WA0158.jpg"
              
          ]},
          '#ffffffff': { name: 'Branco Masculino', images: [
              "https://i.ibb.co/93G8kWvP/Imagem-do-Whats-App-de-2025-10-10-s-17-02-56-fe415220.jpg",
              "https://i.ibb.co/qLXKkfTS/IMG-20251010-WA0937.jpg",
              "https://i.ibb.co/G33ftD7p/IMG-20251010-WA0936.jpg",
              "https://i.ibb.co/pjQJp7Hj/IMG-20251010-WA0939.jpg"
              
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 29, name: 'Tênis Gucci X Adidas', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 210,00', priceValue: 210.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
              "https://i.ibb.co/DffvYGw5/IMG-20251014-WA0086.jpg",
              "https://i.ibb.co/G3fkSL6q/IMG-20251014-WA0089.jpg",
              "https://i.ibb.co/xt6Thj0G/Imagem-do-Whats-App-de-2025-10-14-s-17-05-09-36bd13f2.jpg",
              
          ]},
          '#000000ff': { name: 'Preto', images: [
              "https://i.ibb.co/DfSbbV0c/IMG-20251014-WA0087.jpg",
              "https://i.ibb.co/xt6Thj0G/Imagem-do-Whats-App-de-2025-10-14-s-17-05-09-36bd13f2.jpg",
              
          ]},
          '#bfa469ff': { name: 'Bege', images: [
              "https://i.ibb.co/Kj8zhL6s/IMG-20251014-WA0088.jpg",
              "https://i.ibb.co/xt6Thj0G/Imagem-do-Whats-App-de-2025-10-14-s-17-05-09-36bd13f2.jpg",
              
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 30, name: 'On Cloud', category: 'Tênis', oldPrice: 'R$ 260,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/Ldcr041P/IMG-20251010-WA0674.jpg",
            "https://i.ibb.co/jP7WZmx3/IMG-20251010-WA0676.jpg",
            "https://i.ibb.co/p6pSJqmN/IMG-20251010-WA0677.jpg"
              
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 31, name: 'On Cloud', category: 'Tênis', oldPrice: 'R$ 260,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/9Hsp9Ftq/IMG-20251010-WA0854.jpg",
            "https://i.ibb.co/LDvZDhVm/IMG-20251010-WA0848.jpg",
            "https://i.ibb.co/390BTG4F/IMG-20251010-WA0850.jpg"
              
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 32, name: 'On Cloud Meia', category: 'Tênis', oldPrice: 'R$ 290,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/bjxWmc1Y/IMG-20251013-WA0259.jpg",
            "https://i.ibb.co/VWGthxV7/IMG-20251013-WA0260.jpg",
            "https://i.ibb.co/Mk48Hh76/IMG-20251013-WA0256.jpg"
              
          ]},
          '#dd2c9fff': { name: 'Rosa', images: [
            "https://i.ibb.co/4w792r7S/IMG-20251013-WA0266.jpg",
            "https://i.ibb.co/7tQgjL35/IMG-20251013-WA0262.jpg",
            "https://i.ibb.co/KcCcmsSN/IMG-20251013-WA0265.jpg",
            "https://i.ibb.co/4nB3vzsJ/IMG-20251013-WA0268.jpg"
              
          ]},
      }},
       //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 33, name: 'On Cloud', category: 'Tênis', oldPrice: 'R$ 260,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/zhTnTyxL/IMG-20251013-WA0219.jpg",
            "https://i.ibb.co/V0SWJ9Vs/IMG-20251013-WA0217.jpg",
            "https://i.ibb.co/0yZsKcW6/IMG-20251013-WA0216.jpg",
            "https://i.ibb.co/HfJGTM5P/IMG-20251013-WA0213.jpg"
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/VcnyRRgf/IMG-20251013-WA0214.jpg"
          ]},
      }},
        //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 34, name: 'Chinela Nike', category: 'Chinelos', oldPrice: 'R$ 115,00', price: 'R$ 70,00', priceValue: 70.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/YFdKnxdd/IMG-20251010-WA0894.jpg",
            "https://i.ibb.co/7xfS21jk/IMG-20251010-WA0882.jpg",
            "https://i.ibb.co/BpcHB0m/IMG-20251010-WA0880.jpg",
            "https://i.ibb.co/HfcVM2Hx/IMG-20251017-WA0141.jpg",
            "https://i.ibb.co/6R2sD5DY/IMG-20251017-WA0144.jpg",
            "https://i.ibb.co/S4K8QKKp/IMG-20251017-WA0149.jpg"
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/XxDXrZZd/IMG-20251010-WA0893.jpg",
            "https://i.ibb.co/b58s1YB1/IMG-20251010-WA0892.jpg",
            "https://i.ibb.co/YFJr9ZG3/IMG-20251010-WA0889.jpg",
            "https://i.ibb.co/Kd76Qcm/IMG-20251010-WA0888.jpg",
            "https://i.ibb.co/pvQz079c/IMG-20251010-WA0881.jpg",
            "https://i.ibb.co/kbztst4/IMG-20251010-WA0878.jpg",
            "https://i.ibb.co/pv2Snm5N/IMG-20251017-WA0140.jpg",
            "https://i.ibb.co/C5rvjFkH/IMG-20251017-WA0163.jpg",
            "https://i.ibb.co/PsxDZzBq/IMG-20251017-WA0142.jpg",
            "https://i.ibb.co/6JnCGkk9/IMG-20251017-WA0143.jpg",
            "https://i.ibb.co/Rk0S57yn/IMG-20251017-WA0148.jpg"

          ]},
      }},
         //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 35, name: 'Chinela Adidas', category: 'Chinelos', oldPrice: 'R$ 115,00', price: 'R$ 70,00', priceValue: 70.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/fdGy4Vzj/IMG-20251010-WA0891.jpg",
            "https://i.ibb.co/FbqRBxw6/IMG-20251010-WA0884.jpg",
            "https://i.ibb.co/60xZKWsR/IMG-20251010-WA0883.jpg",
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/NgqZJBr0/IMG-20251010-WA0890.jpg",
            "https://i.ibb.co/PyhXR0q/IMG-20251010-WA0886.jpg",
            "https://i.ibb.co/svK4GCtn/IMG-20251010-WA0885.jpg",
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 36, name: 'Chinela Puma', category: 'Chinelos', oldPrice: 'R$ 115,00', price: 'R$ 70,00', priceValue: 70.00, gender: 'Unisex', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/cSMXPRBK/IMG-20251010-WA0879.jpg",
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/prXNXZrV/IMG-20251017-WA0145.jpg",
              
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 37, name: 'Sandália Miu Miu', category: 'Chinelos', oldPrice: 'R$ 195,00', price: 'R$ 160,00', priceValue: 160.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/4ZmQv8gR/IMG-20251013-WA0250.jpg",
            "https://i.ibb.co/bM9F1Kkk/IMG-20251013-WA0249.jpg"
              
          ]},
          '#613916ff': { name: 'Marrom', images: [
            "https://i.ibb.co/rf6TrHWP/IMG-20251013-WA0242.jpg",
            "https://i.ibb.co/bM9F1Kkk/IMG-20251013-WA0249.jpg"
              
          ]},
          '#d89b5eff': { name: 'Bege', images: [
            "https://i.ibb.co/0j9GJ2Xp/IMG-20251013-WA0248.jpg",
            "https://i.ibb.co/bM9F1Kkk/IMG-20251013-WA0249.jpg"
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 38, name: 'Sandália Louis Vuitton', category: 'Chinelos', oldPrice: 'R$ 230,00', price: 'R$ 180,00', priceValue: 180.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/Vc6J5Fk8/IMG-20251010-WA0715.jpg",
            "https://i.ibb.co/CpKKbs43/IMG-20251010-WA0716.jpg",
            "https://i.ibb.co/Fqj8v6Z5/IMG-20251010-WA0714.jpg"
              
          ]},
          '#613916ff': { name: 'Marrom', images: [
            "https://i.ibb.co/Fqj8v6Z5/IMG-20251010-WA0714.jpg",
            "https://i.ibb.co/CpKKbs43/IMG-20251010-WA0716.jpg"
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/4nXF7kC6/IMG-20251010-WA0717.jpg",
            "https://i.ibb.co/VY6hzd0R/Imagem-do-Whats-App-de-2025-10-10-s-14-06-10-0f4471de.jpg"
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 39, name: 'Chinelo Gucci / Louis Vuitton', category: 'Chinelos', oldPrice: 'R$ 115,00', price: 'R$ 70,00', priceValue: 70.00, gender: 'Unisex', colors: {
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/QjbPGvH6/IMG-20251010-WA0875.jpg",
            "https://i.ibb.co/yBkcRfRw/IMG-20251010-WA0887.jpg",
            "https://i.ibb.co/3mypK7td/IMG-20251010-WA0876.jpg",
          ]},
          '#ffffffff': { name: 'Branco', images: [
           "https://i.ibb.co/zWHMwt13/IMG-20251017-WA0155.jpg"
          ]},
      }},
       //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 40, name: 'Sandália Louis Vuitton', category: 'Chinelos', oldPrice: 'R$ 230,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/B2XbkSz8/IMG-20251010-WA0665.jpg",
            "https://i.ibb.co/zhcw06qw/IMG-20251010-WA0663.jpg",
              
          ]},
          '#576dcfff': { name: 'Azul', images: [
            "https://i.ibb.co/QFZXKw4D/IMG-20251010-WA0664.jpg",
            "https://i.ibb.co/PG5cHXXt/IMG-20251010-WA0667.jpg"
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/8hWqTZB/IMG-20251010-WA0666.jpg",
            "https://i.ibb.co/PG5cHXXt/IMG-20251010-WA0667.jpg"
          ]},
      }},
      //----------------------------------------------------------------------------------------------------------------------------------------------------------------
      { id: 41, name: 'Sandália Gucci', category: 'Chinelos', oldPrice: 'R$ 170,00', price: 'R$ 130,00', priceValue: 130.00, gender: 'Feminino', colors: {
          '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/zV1Gn3YG/IMG-20251010-WA0710.jpg",
            "https://i.ibb.co/60g8rfHq/Imagem-do-Whats-App-de-2025-10-10-s-14-05-39-6676ab40.jpg",
              
          ]},
          '#754a2aff': { name: 'Marrom', images: [
            "https://i.ibb.co/hFDHRf0G/IMG-20251010-WA0711.jpg",
            "https://i.ibb.co/60g8rfHq/Imagem-do-Whats-App-de-2025-10-10-s-14-05-39-6676ab40.jpg",
              
          ]},
          '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/qMMvGyBS/IMG-20251010-WA0713.jpg",
          "https://i.ibb.co/60g8rfHq/Imagem-do-Whats-App-de-2025-10-10-s-14-05-39-6676ab40.jpg",
          ]},
      }},
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 42, name: 'Meia', category: 'Meias', oldPrice: 'R$ 59,90', price: 'R$ 40,00', priceValue: 40.00, gender: 'Unisex', colors: {
        '#FFFFFF': { name: 'Branco', images: [
            "https://i.ibb.co/jvDkrKZr/IMG-20251006-WA0239.jpg",
        ]},
    }},
       //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 43, name: 'Nike SB', category: 'Tênis', oldPrice: 'R$ 280,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'Unisex', colors: {
        '#387b48ff': { name: 'Verde', images: [
            "https://i.ibb.co/S4v7mLyq/IMG-20251015-WA0120.jpg",
            "https://i.ibb.co/5W0z4cGk/IMG-20251015-WA0115.jpg",
            "https://i.ibb.co/KzSqCCjs/IMG-20251015-WA0117.jpg"
        ]},
        '#d11e57ff': { name: 'Rosa', images: [
            "https://i.ibb.co/WvhBKNqB/IMG-20251016-WA0011.jpg",
            "https://i.ibb.co/pvkknXgz/IMG-20251016-WA0009.jpg",
            "https://i.ibb.co/XxZ0fXJ6/IMG-20251016-WA0010.jpg"
        ]},
        '#06279eff': { name: 'Azul', images: [
            "https://i.ibb.co/KpGtDhY5/IMG-20251015-WA0123.jpg",
            "https://i.ibb.co/DP8XzWVh/IMG-20251015-WA0124.jpg",
            "https://i.ibb.co/FLtFbmjZ/IMG-20251015-WA0125.jpg"
        ]},
    }},
       //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 44, name: 'Nike Dunk Low Labubu', category: 'Tênis', oldPrice: 'R$ 250,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'Unisex', colors: {
        '#000000ff': { name: 'Perto', images: [
            "https://i.ibb.co/7dgFV04T/IMG-20251016-WA0018.jpg",
        ]},
        '#d11e57ff': { name: 'Rosa', images: [
            "https://i.ibb.co/FqdvmH0C/IMG-20251016-WA0016.jpg",
        ]},
        '#06279eff': { name: 'Azul', images: [
            "https://i.ibb.co/vCGhvpxD/IMG-20251016-WA0015.jpg",
        ]},
         '#854a0bff': { name: 'Marrom', images: [
            "https://i.ibb.co/v7VhZKX/IMG-20251016-WA0017.jpg"
        ]},
    }},
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 45, name: 'Nike Cortez Retro', category: 'Tênis', oldPrice: 'R$ 200,00', price: 'R$ 160,00', priceValue: 160.00, gender: 'Feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/hJSjRYc4/IMG-20251016-WA0019.jpg",
            "https://i.ibb.co/F4MZK5Ry/IMG-20251016-WA0022.jpg",
            "https://i.ibb.co/39kXmg87/IMG-20251016-WA0020.jpg",
            "https://i.ibb.co/JWFvr8RS/IMG-20251016-WA0021.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 46, name: 'Slide Gucci', category: 'Chinelos', oldPrice: 'R$ 120,00', price: 'R$ 80,00', priceValue: 80.00, gender: 'Feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/5h8tr0PT/Imagem-do-Whats-App-de-2025-10-15-s-19-30-30-38ce8352.jpg",
        ]},
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/n9xWNpx/Imagem-do-Whats-App-de-2025-10-15-s-19-30-31-799647eb.jpg",
        ]},
        '#724f14ff': { name: 'Marrom', images: [
            "https://i.ibb.co/YTLFPD9L/Imagem-do-Whats-App-de-2025-10-15-s-19-30-30-88877e6a.jpg",
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 47, name: 'All Star Low', category: 'Tênis', oldPrice: 'R$ 199,90', price: 'R$ 170,00', priceValue: 170.00, gender: 'Feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/pvNX5Zjc/IMG-20251016-WA0129.jpg",
          "https://i.ibb.co/5h1nc3Nr/IMG-20251016-WA0128.jpg",
          "https://i.ibb.co/Y4HVSwSP/IMG-20251016-WA0131.jpg",
          "https://i.ibb.co/Gfd2TZnq/IMG-20251016-WA0126.jpg",
        ]},
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/ycyY3Zbz/IMG-20251016-WA0099.jpg",
            "https://i.ibb.co/VWkqF2Xj/IMG-20251016-WA0100.jpg",
            "https://i.ibb.co/JW7fnXgr/IMG-20251016-WA0098.jpg",
            "https://i.ibb.co/7x0K5VSG/IMG-20251016-WA0102.jpg"
        ]},
        '#721414ff': { name: 'Vermelho', images: [
            "https://i.ibb.co/qL1bwwXP/IMG-20251016-WA0092.jpg",
            "https://i.ibb.co/BVsM9Ljz/IMG-20251016-WA0093.jpg",
            "https://i.ibb.co/HLLdxx3B/IMG-20251016-WA0096.jpg",
            "https://i.ibb.co/VrSvXfy/IMG-20251016-WA0095.jpg"

        ]},
        '#cd4990ff': { name: 'Rosa', images: [
            "https://i.ibb.co/DHgZGsrY/IMG-20251016-WA0084.jpg",
            "https://i.ibb.co/3mfjz51F/IMG-20251016-WA0082.jpg",
            "https://i.ibb.co/LdjBZKkx/IMG-20251016-WA0085.jpg",
            "https://i.ibb.co/6cZ14K3H/IMG-20251016-WA0087.jpg"
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 48, name: 'All Star Botinha', category: 'Tênis', oldPrice: 'R$ 249,90', price: 'R$ 200,00', priceValue: 200.00, gender: 'Feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/BHxnFxMX/IMG-20251016-WA0106.jpg",
          "https://i.ibb.co/4R6B4kQ2/IMG-20251016-WA0107.jpg",
          "https://i.ibb.co/9HBz5YYM/IMG-20251016-WA0104.jpg",
          "https://i.ibb.co/S43Wzn6b/IMG-20251016-WA0105.jpg",
        ]},
        '#721414ff': { name: 'Vermelho', images: [
            "https://i.ibb.co/HDBchtFC/IMG-20251016-WA0112.jpg",
            "https://i.ibb.co/DgtdXZ96/IMG-20251016-WA0113.jpg",
            "https://i.ibb.co/J1Y0Rvd/IMG-20251016-WA0108.jpg",
            "https://i.ibb.co/4RgYdKpM/IMG-20251016-WA0114.jpg"

        ]},
        '#cd4990ff': { name: 'Rosa', images: [
            "https://i.ibb.co/TqphsPLW/IMG-20251016-WA0118.jpg",
            "https://i.ibb.co/TD9kTcBY/IMG-20251016-WA0122.jpg",
            "https://i.ibb.co/ycRQDjYy/IMG-20251016-WA0125.jpg",
            "https://i.ibb.co/G33cH2hV/IMG-20251016-WA0120.jpg"
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 49, name: 'New Balance 530', category: 'Tênis', oldPrice: 'R$ 350,00', price: 'R$ 310,00', priceValue: 310.00, gender: 'Feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/TxxbZtfj/Imagem-do-Whats-App-de-2025-10-16-s-14-28-13-9830adb0.jpg",
          "https://i.ibb.co/FqJcQ7tf/Imagem-do-Whats-App-de-2025-10-16-s-14-28-13-756dae8d.jpg",
          "https://i.ibb.co/LhHG22d5/Imagem-do-Whats-App-de-2025-10-16-s-14-28-12-8b09b62d.jpg",
          "https://i.ibb.co/pjy1hVMx/Imagem-do-Whats-App-de-2025-10-16-s-14-28-13-583e5f8b.jpg",
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 50, name: 'Bolsa Diesel', category: 'Acessórios', oldPrice: 'R$ 290,00', price: 'R$ 250,00', priceValue: 250.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/dJ5TJV3G/Imagem-do-Whats-App-de-2025-10-16-s-14-52-22-c65bfc12.jpg",
        ]},
        '#050505ff': { name: 'Preto', images: [
            "https://i.ibb.co/yFjqMgvB/Imagem-do-Whats-App-de-2025-10-16-s-14-52-23-3634f981.jpg",
        ]},
        '#971677ff': { name: 'Rosa', images: [
            "https://i.ibb.co/v6PF24wf/Imagem-do-Whats-App-de-2025-10-16-s-14-52-23-2eb703d5.jpg",
        ]},
        '#a5dd0aff': { name: 'Amarelo', images: [
            "https://i.ibb.co/23y0rNYg/Imagem-do-Whats-App-de-2025-10-16-s-14-52-23-d764fcbe.jpg",
        ]},
    }},
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 51, name: 'Bolsa Gucci', category: 'Acessórios', oldPrice: 'R$ 270,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/V7smYMb/Imagem-do-Whats-App-de-2025-10-16-s-14-52-25-0e2909aa.jpg",
        ]},
        '#050505ff': { name: 'Preto', images: [
            "https://i.ibb.co/bRFk6fsT/Imagem-do-Whats-App-de-2025-10-16-s-14-52-26-7986d80c.jpg",
        ]},
        '#573912ff': { name: 'Marrom', images: [
            "https://i.ibb.co/27ZWGKwh/Imagem-do-Whats-App-de-2025-10-16-s-14-52-25-c7398dd3.jpg",
        ]},
        '#daa05fff': { name: 'Bege', images: [
            "https://i.ibb.co/wZPwVWP2/Imagem-do-Whats-App-de-2025-10-16-s-14-52-25-b76fd58b.jpg",
        ]},
        '#c01515ff': { name: 'Vermelho', images: [
            "https://i.ibb.co/nsdbx3rW/Imagem-do-Whats-App-de-2025-10-16-s-14-52-24-fa103faf.jpg",
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 52, name: 'Bolsa Gucci', category: 'Acessórios', oldPrice: 'R$ 220,00', price: 'R$ 180,00', priceValue: 180.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/99gXVm2f/Imagem-do-Whats-App-de-2025-10-16-s-14-52-40-0f79d191.jpg",
            "https://i.ibb.co/LDHWBs4p/Imagem-do-Whats-App-de-2025-10-16-s-14-52-40-bbc21dca.jpg",
            "https://i.ibb.co/5W8yjjYZ/Imagem-do-Whats-App-de-2025-10-16-s-14-52-39-b3947bb5.jpg",
            "https://i.ibb.co/qYhb1Vtt/Imagem-do-Whats-App-de-2025-10-16-s-14-52-40-dcd51e0f.jpg"
        ]},
        '#797979ff': { name: 'Cinza', images: [
            "https://i.ibb.co/4wPHJf71/Imagem-do-Whats-App-de-2025-10-16-s-14-52-39-a785ab03.jpg",
            "https://i.ibb.co/9mrzytHZ/Imagem-do-Whats-App-de-2025-10-16-s-14-52-38-8c763e42.jpg",
            "https://i.ibb.co/N6jtMGDK/Imagem-do-Whats-App-de-2025-10-16-s-14-52-39-b15ab136.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 53, name: 'Bolsa Gucci', category: 'Acessórios', oldPrice: 'R$ 280,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/ZzzqNrfq/IMG-20251016-WA0171.jpg",
            "https://i.ibb.co/Ngw3smLp/IMG-20251016-WA0172.jpg",
            "https://i.ibb.co/yBntnL46/IMG-20251016-WA0173.jpg",
        ]},
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/dwL8XR38/IMG-20251016-WA0161.jpg",
            "https://i.ibb.co/3mrcjgkW/IMG-20251016-WA0163.jpg",
            "https://i.ibb.co/rBgW13V/IMG-20251016-WA0162.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 54, name: 'Bolsa Guess', category: 'Acessórios', oldPrice: 'R$ 310,00', price: 'R$ 260,00', priceValue: 260.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/jnM9rr8/Imagem-do-Whats-App-de-2025-10-16-s-15-12-20-cb25beb9.jpg",
        ]},
        '#cc0f8dff': { name: 'Rosa', images: [
            "https://i.ibb.co/7tzjkZHX/Imagem-do-Whats-App-de-2025-10-16-s-15-12-21-b9da33b9.jpg",
        ]},
        '#ce60a9ff': { name: 'Rosa Claro', images: [
            "https://i.ibb.co/LDBqRRnj/Imagem-do-Whats-App-de-2025-10-16-s-15-12-20-52a3277f.jpg",
        ]},
        '#644522ff': { name: ' Marrom', images: [
            "https://i.ibb.co/h1nfFTjK/Imagem-do-Whats-App-de-2025-10-16-s-15-12-21-40f431cd.jpg",
        ]},
        '#bdbdbdff': { name: ' Prata', images: [
            "https://i.ibb.co/pB3ZSXc2/Imagem-do-Whats-App-de-2025-10-16-s-15-12-21-4b810f55.jpg",
        ]},
        '#a09002ff': { name: ' Dourado', images: [
            "https://i.ibb.co/Kp9bfBt1/Imagem-do-Whats-App-de-2025-10-16-s-15-12-20-f7e2f70b.jpg",
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 55, name: 'Bolsa Louis Vuitton', category: 'Acessórios', oldPrice: 'R$ 220,00', price: 'R$ 190,00', priceValue: 190.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/KSGhqz0/Imagem-do-Whats-App-de-2025-10-16-s-15-12-14-2af04162.jpg",
            "https://i.ibb.co/xKzRqNB1/Imagem-do-Whats-App-de-2025-10-16-s-15-12-13-5e10c8b8.jpg"
        ]},
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/0pZNkFWx/Imagem-do-Whats-App-de-2025-10-16-s-15-12-13-a6f0832d.jpg",
            "https://i.ibb.co/hFt71szX/Imagem-do-Whats-App-de-2025-10-16-s-15-12-13-dfe46849.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 56, name: 'Bolsa Louis Vuitton', category: 'Acessórios', oldPrice: 'R$ 220,00', price: 'R$ 190,00', priceValue: 190.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/nM520Vpf/Imagem-do-Whats-App-de-2025-10-16-s-15-12-04-ee37bc13.jpg",
            "https://i.ibb.co/bDnDZ2C/Imagem-do-Whats-App-de-2025-10-16-s-15-12-04-2d3e23f2.jpg",
            "https://i.ibb.co/zWrpyqZW/Imagem-do-Whats-App-de-2025-10-16-s-15-12-03-f0cecd12.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 57, name: 'Bolsa Louis Vuitton', category: 'Acessórios', oldPrice: 'R$ 220,00', price: 'R$ 180,00', priceValue: 180.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/gbWQwZmS/Imagem-do-Whats-App-de-2025-10-16-s-14-52-07-e488f190.jpg",
            "https://i.ibb.co/DDZcvyF3/Imagem-do-Whats-App-de-2025-10-16-s-14-52-06-d2f1fe42.jpg",
            "https://i.ibb.co/qw4QScc/Imagem-do-Whats-App-de-2025-10-16-s-14-52-06-5eb3ab1e.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 58, name: 'Bolsa de mão Louis Vuitton', category: 'Acessórios', oldPrice: 'R$ 110,00', price: 'R$ 95,00', priceValue: 95.00, gender: 'feminino', colors: {
        '#55370bff': { name: 'Marrom', images: [
            "https://i.ibb.co/YYGmY4W/Imagem-do-Whats-App-de-2025-10-16-s-15-12-15-1caffae2.jpg",
            "https://i.ibb.co/b5HHtjnC/Imagem-do-Whats-App-de-2025-10-16-s-15-12-15-44b419c2.jpg",
            "https://i.ibb.co/9kFG9b7b/Imagem-do-Whats-App-de-2025-10-16-s-15-12-15-e7c18cb3.jpg"
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 59, name: 'Bolsa Miu Miu', category: 'Acessórios', oldPrice: 'R$ 270,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'feminino', colors: {
        '#1963c4ff': { name: 'Azul', images: [
            "https://i.ibb.co/Y4Kb8zmW/Imagem-do-Whats-App-de-2025-10-16-s-14-54-52-269eec24.jpg",
            "https://i.ibb.co/sdfPhZQ0/Imagem-do-Whats-App-de-2025-10-16-s-14-54-51-8008b11e.jpg",
            "https://i.ibb.co/3Z8y4kR/Imagem-do-Whats-App-de-2025-10-16-s-14-54-52-991edcf9.jpg"
        ]},
        '#81663eff': { name: 'Bege', images: [
            "https://i.ibb.co/CsK18yzx/Imagem-do-Whats-App-de-2025-10-16-s-14-52-41-9dccaca5.jpg",
            "https://i.ibb.co/KjwVRZqN/Imagem-do-Whats-App-de-2025-10-16-s-14-52-41-a0f005f9.jpg",
            "https://i.ibb.co/nsR61XtW/Imagem-do-Whats-App-de-2025-10-16-s-14-52-41-f9e6510e.jpg"
        ]},
        '#ffffffff': { name: 'Branca', images: [
            "https://i.ibb.co/hRdZb0jS/Imagem-do-Whats-App-de-2025-10-16-s-14-52-04-46b4bced.jpg",
            "https://i.ibb.co/WCy8TYZ/Imagem-do-Whats-App-de-2025-10-16-s-14-52-03-912c8451.jpg",
            "https://i.ibb.co/1GKjpVnV/Imagem-do-Whats-App-de-2025-10-16-s-14-52-04-799a736f.jpg"
        ]},
        '#af1414ff': { name: 'Vermelho', images: [
            "https://i.ibb.co/fVM1HJGp/Imagem-do-Whats-App-de-2025-10-16-s-14-52-21-088f9e8c.jpg",
            "https://i.ibb.co/n8tSwcVD/Imagem-do-Whats-App-de-2025-10-16-s-14-52-20-4d326e76.jpg",
            "https://i.ibb.co/DgwV7gQt/Imagem-do-Whats-App-de-2025-10-16-s-14-52-20-494be3cc.jpg"
        ]},
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/fh289Mn/Imagem-do-Whats-App-de-2025-10-16-s-14-51-48-c094ffaa.jpg",
            "https://i.ibb.co/p6j4WR7j/Imagem-do-Whats-App-de-2025-10-16-s-14-51-48-4b42bdb6.jpg",
            "https://i.ibb.co/QvZpFMQX/Imagem-do-Whats-App-de-2025-10-16-s-14-51-49-4bd34b7f.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 60, name: 'Bolsa MK', category: 'Acessórios', oldPrice: 'R$ 250,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/93sPJMdj/Imagem-do-Whats-App-de-2025-10-16-s-14-55-03-9220a953.jpg",
            "https://i.ibb.co/V1kpQvr/Imagem-do-Whats-App-de-2025-10-16-s-14-55-02-1d4c0301.jpg",
            "https://i.ibb.co/JjBMf2Q2/Imagem-do-Whats-App-de-2025-10-16-s-14-55-03-ea20eb89.jpg"
        ]},
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/NnKwcNww/Imagem-do-Whats-App-de-2025-10-16-s-14-55-11-3b856c5e.jpg",
            "https://i.ibb.co/v4zBKc8m/Imagem-do-Whats-App-de-2025-10-16-s-14-55-10-1a1db47b.jpg",
            "https://i.ibb.co/gZk6DMMw/Imagem-do-Whats-App-de-2025-10-16-s-14-55-10-2ace5219.jpg"
        ]},
    }},
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 61, name: 'Bolsa Prada', category: 'Acessórios', oldPrice: 'R$ 280,00', price: 'R$ 230,00', priceValue: 230.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/0yh8Tmr6/Imagem-do-Whats-App-de-2025-10-16-s-15-12-19-15216938.jpg",
        ]},
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/7JCGrBQF/Imagem-do-Whats-App-de-2025-10-16-s-15-12-19-6ac464dc.jpg",
        ]},
        '#6d6d6dff': { name: 'Prata', images: [
            "https://i.ibb.co/tTCDLk5j/Imagem-do-Whats-App-de-2025-10-16-s-15-12-20-2b8bc59e.jpg",
        ]},
        '#737441ff': { name: 'Dourada', images: [
            "https://i.ibb.co/DDqtj2sj/Imagem-do-Whats-App-de-2025-10-16-s-15-12-20-a6ed4da3.jpg",
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 62, name: 'Bolsa Prada', category: 'Acessórios', oldPrice: 'R$ 190,00', price: 'R$ 170,00', priceValue: 170.00, gender: 'feminino', colors: {
        '#ffffffff': { name: 'Branca', images: [
            "https://i.ibb.co/xyQNm35/Imagem-do-Whats-App-de-2025-10-16-s-14-52-47-03eb2c39.jpg",
            "https://i.ibb.co/gMXZ1TmG/Imagem-do-Whats-App-de-2025-10-16-s-14-52-46-ef6faf24.jpg",

        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 63, name: 'Bolsa Prada', category: 'Acessórios', oldPrice: 'R$ 280,00', price: 'R$ 240,00', priceValue: 240.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/0j5W2L4F/Imagem-do-Whats-App-de-2025-10-16-s-14-52-26-e7ae133e.jpg",
            "https://i.ibb.co/v4drJvzx/Imagem-do-Whats-App-de-2025-10-16-s-14-52-26-2b70adee.jpg"
        ]},
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/C3H6vmxy/Imagem-do-Whats-App-de-2025-10-16-s-14-52-21-7eb4bc9f.jpg",
            "https://i.ibb.co/fd8VBshf/Imagem-do-Whats-App-de-2025-10-16-s-14-52-22-17488e83.jpg"
        ]},
        '#6b481bff': { name: 'Marrom', images: [
            "https://i.ibb.co/qYZj0ffb/Imagem-do-Whats-App-de-2025-10-16-s-14-52-24-9c54dc8e.jpg",
            "https://i.ibb.co/Kcsv6ZTt/Imagem-do-Whats-App-de-2025-10-16-s-14-52-24-1c044d9a.jpg"
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 64, name: 'Bolsa Prada', category: 'Acessórios', oldPrice: 'R$ 270,00', price: 'R$ 220,00', priceValue: 220.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/WNcFnpKy/Imagem-do-Whats-App-de-2025-10-16-s-14-52-37-25ac4dca.jpg",
            "https://i.ibb.co/nqF1Cv85/Imagem-do-Whats-App-de-2025-10-16-s-14-52-36-1e6f27ce.jpg",
            "https://i.ibb.co/7x7QQ4Tw/Imagem-do-Whats-App-de-2025-10-16-s-14-52-36-0e67796f.jpg"
        ]},
    }},
     //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 65, name: 'Bolsa Valentino Garavani', category: 'Acessórios', oldPrice: 'R$ 250,00', price: 'R$ 220,00', priceValue: 220.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/XdD3MCr/Imagem-do-Whats-App-de-2025-10-16-s-14-48-50-2bf3dcc9.jpg",
            "https://i.ibb.co/nqZJfBm6/Imagem-do-Whats-App-de-2025-10-16-s-14-48-51-2363d277.jpg"
        ]},
        '#ffffffff': { name: 'Branco', images: [
            "https://i.ibb.co/zHHxLGb8/Imagem-do-Whats-App-de-2025-10-16-s-14-48-54-94de7c90.jpg",
            "https://i.ibb.co/bM0fhpML/Imagem-do-Whats-App-de-2025-10-16-s-14-48-54-fcce0e52.jpg"
        ]},
      }},  
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 66, name: 'Bolsa Alo', category: 'Acessórios', oldPrice: 'R$ 250,00', price: 'R$ 200,00', priceValue: 200.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
            "https://i.ibb.co/qFcQ93Sq/IMG-20251017-WA0096.jpg",
            "https://i.ibb.co/b59fzM7R/IMG-20251017-WA0094.jpg"
        ]},
        '#ce509eff': { name: 'Rosa', images: [
            "https://i.ibb.co/FbZks1BG/IMG-20251017-WA0090.jpg",
            "https://i.ibb.co/84skZK8C/IMG-20251017-WA0095.jpg",
            "https://i.ibb.co/N6RcgQXw/IMG-20251017-WA0091.jpg",
            "https://i.ibb.co/Kx9Vtn5t/IMG-20251017-WA0099.jpg"
        ]},
        '#1e29c5ff': { name: 'Azul', images: [
            "https://i.ibb.co/FbRDHSr6/IMG-20251017-WA0097.jpg",
            "https://i.ibb.co/1fS65bBs/IMG-20251017-WA0092.jpg"
        ]},
        '#26962cff': { name: 'Verde', images: [
            "https://i.ibb.co/xqNBD0hx/IMG-20251017-WA0093.jpg",
        ]},
        '#ac1010ff': { name: 'Vermelho', images: [
            "https://i.ibb.co/MD0cxC6f/IMG-20251017-WA0098.jpg",
            
        ]},
      }},  
       //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 67, name: 'Chinelos Boss / Armaf', category: 'Chinelos', oldPrice: 'R$ 115,00', price: 'R$ 70,00', priceValue: 70.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
           "https://i.ibb.co/VWDX0STF/IMG-20251017-WA0161.jpg",
           "https://i.ibb.co/vx3DBxqt/IMG-20251017-WA0160.jpg",
           "https://i.ibb.co/qYstKg1n/IMG-20251017-WA0159.jpg",
           "https://i.ibb.co/pjVfSQrv/IMG-20251017-WA0158.jpg",
           "https://i.ibb.co/nN91BHC4/IMG-20251017-WA0152.jpg",
           "https://i.ibb.co/7tkjNt98/IMG-20251017-WA0150.jpg"
        ]},
        '#ffffffff': { name: 'Branco', images: [
           "https://i.ibb.co/ksHG8c2P/IMG-20251017-WA0162.jpg",
           "https://i.ibb.co/spRBdwG3/IMG-20251017-WA0157.jpg",
           "https://i.ibb.co/vCyXyVgM/IMG-20251017-WA0156.jpg",
           "https://i.ibb.co/DfBkxhst/IMG-20251017-WA0153.jpg",
           "https://i.ibb.co/gMhN7YBK/IMG-20251017-WA0151.jpg"

            
        ]},
      }},  
          //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    { id: 68, name: 'Chinelos Burberry ', category: 'Chinelos', oldPrice: 'R$ 115,00', price: 'R$ 70,00', priceValue: 70.00, gender: 'feminino', colors: {
        '#000000ff': { name: 'Preto', images: [
          "https://i.ibb.co/gZ93pyKS/IMG-20251017-WA0146.jpg"
        ]},
        '#ffffffff': { name: 'Branco', images: [
        "https://i.ibb.co/ZRZyHbSY/IMG-20251017-WA0147.jpg"
            
        ]},
      }},  
    
    
 

  ];
  //aqui voce coloca os indices dos produtos que vao para o em alta
  const idsDosProdutosEmAlta = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,42];
  const produtosEmAlta = todosOsProdutos.filter(p => idsDosProdutosEmAlta.includes(p.id));

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    let categoryProducts = todosOsProdutos.filter(p => p.category === selectedCategory);

    if (selectedGender !== 'Todos') {
      categoryProducts = categoryProducts.filter(p => p.gender === selectedGender);
    }

    if (searchTerm) {
      categoryProducts = categoryProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (sortOrder === 'price-asc') {
      categoryProducts.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortOrder === 'price-desc') {
      categoryProducts.sort((a, b) => b.priceValue - a.priceValue);
    }

    return categoryProducts;
  }, [selectedCategory, selectedGender, searchTerm, sortOrder, todosOsProdutos]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setMenuOpen(false);
    setSearchTerm('');
    setSelectedGender('Todos');
    setSortOrder('default');
  };
  
  const handleLogoClick = () => {
    setSelectedCategory(null);
    setMenuOpen(false);
  }

  const toggleSortOrder = () => {
    if (sortOrder === 'default' || sortOrder === 'price-desc') {
      setSortOrder('price-asc');
    } else {
      setSortOrder('price-desc');
    }
  };

  const handleContactClick = () => {
    const phoneNumber = '5564981384609';
    const message = `Olá! Tenho uma dúvida sobre os produtos da WR Importados.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>t
        <title>WR Importados - Qualidade e Estilo</title>
        <meta name="description" content="Encontre tênis, chinelos, meias e acessórios exclusivos. A melhor qualidade e estilo para você." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <header className="sticky top-0 z-50">
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="bg-black/90 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between h-16 px-4">
              <div className="w-10">
                 <motion.button
                  whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 8px #B8860B)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogoClick}
                  className="p-2 rounded-full text-white hover:bg-white/10 transition-all"
                >
                  <Home className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="flex-1 flex justify-center">
                <button onClick={handleLogoClick} className="focus:outline-none">
                  <img src={newLogoUrl} alt="WR Importados Logo" className="h-12" />
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 8px #B8860B)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-full text-white hover:bg-white/10 transition-all z-50"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </motion.nav>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black p-6 shadow-2xl flex flex-col justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mt-20 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all hover:filter hover:brightness-125 ${
                        selectedCategory === category
                          ? 'bg-[#B8860B] text-black'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="p-4 bg-gray-900 rounded-lg text-center mt-8">
                  <p className="text-white text-sm mb-3">Alguma dúvida? Entre em contato com nosso time.</p>
                  <motion.button
                    whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 8px #B8860B)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}
                    className="w-full bg-[#B8860B] text-black py-2 rounded-md font-bold text-sm transition-all"
                  >
                    Fale Conosco
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <AnimatePresence mode="wait">
            {selectedCategory ? (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-7xl mx-auto px-4 py-8"
              >
                <div className="mb-8">
                  <h1 className="text-3xl font-extrabold text-black tracking-tight">
                    {selectedCategory}
                  </h1>
                </div>

                <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="relative md:col-span-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Pesquisar por nome..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide md:col-span-2 justify-start md:justify-end">
                    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                      {genders.map(gender => (
                        <button
                          key={gender}
                          onClick={() => setSelectedGender(gender)}
                          className={`px-3 py-1 text-sm font-semibold rounded-md transition-all hover:filter hover:brightness-125 ${
                            selectedGender === gender ? 'bg-black text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={toggleSortOrder}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all text-sm font-semibold hover:filter hover:brightness-125"
                    >
                      <ArrowUpDown size={16} />
                      <span>
                        {sortOrder === 'price-asc' ? 'Menor Preço' : sortOrder === 'price-desc' ? 'Maior Preço' : 'Ordenar'}
                      </span>
                    </button>
                  </div>
                </div>

                <p className="text-gray-500 mb-8">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative bg-white text-center py-20 px-4 overflow-hidden">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#B8860B] title-font"
                    >
                        Estilo, Conforto e qualidade para os seus pés
                    </motion.h1>
                </div>
                <TrendingProducts products={produtosEmAlta} />
                <div className="px-4 my-12">
                   <div className="aspect-[21/9] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
                      <img className="w-full h-full object-cover" alt="Male athlete tying his running shoes on a track" src="https://i.ibb.co/VYK51Rjf/Design-sem-nome.png" />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <a 
          href="https://wa.me/5564981384609" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>

        <footer className="bg-black text-white px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <button onClick={handleLogoClick} className="focus:outline-none mb-4">
                  <img src={newLogoUrl} alt="WR Importados Logo" className="h-16" />
                </button>
                <p className="text-gray-400 max-w-sm">
                  Sua loja especializada em calçados premium. Transformamos seu estilo com produtos de luxo e qualidade incomparável.
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="font-bold text-lg mb-2 text-white">Fale Conosco</p>
                <p className="text-gray-400 mb-4">watthimem123@gmail.com</p>
                <div className="flex gap-4 md:justify-end">
                  <a href="https://www.instagram.com/ranneywrimportados" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B8860B] transition-colors p-2 bg-white/10 rounded-full hover:filter hover:brightness-125">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/5564981384609" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#B8860B] transition-colors p-2 bg-white/10 rounded-full hover:filter hover:brightness-125">
                     <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6">
              <p className="text-center text-sm text-gray-500">
                © 2025 WR Importados. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;