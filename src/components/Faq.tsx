import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const Faq: ComponentType = dynamic(() => import('./Faq').then(mod => mod.default), {
  ssr: false,
});

export default Faq;
