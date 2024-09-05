import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const RaceRulesRegulation: ComponentType = dynamic(() => import('./RaceRulesRegulation').then(mod => mod.default), {
  ssr: false,
});

export default RaceRulesRegulation;
