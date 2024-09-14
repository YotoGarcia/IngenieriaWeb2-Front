import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { DirectorView } from './components/director/DirectorView';
import { GeneroView } from './components/genero/GeneroView';
import { MediaView } from './components/media/MediaView';
import { ProdcutoraView } from './components/productora/ProdcutoraView';
import { TipoView } from './components/tipo/TipoView';
import { Header } from './components/ui/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

