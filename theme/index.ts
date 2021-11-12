import { extendTheme } from '@chakra-ui/react';

import { globalStyles as styles } from './styles';

import { InputStyles as Input } from './components/InputStyles';
import { LinkStyles as Link } from './components/LinkStyles';
import { TextareaStyles as Textarea } from './components/TextareaStyles';

export const theme = extendTheme({
  styles,
  colors: {
    primary: '#2A81FB',
    secondary: '#EBF1FA',
    neutral: '#A3B3CA',
    text: '#18283E',
    previewDivider: '#E0E7F1',
    arrowBackground: '#D4E6FE',
    icon: {
      default: '#C7D3D9',
      active: 'white',
    },
    google: {
      title: '#1a0dab',
      link: '#006621',
      description: '#545454',
    },
    facebook: {
      domain: '#606770',
      title: '#1d2129',
      description: '#606770',
      bottomBackground: '#f2f3f5',
      border: '#dadde1',
    },
    twitter: {
      domain: '#8899A6',
      title: '#18283E',
      description: '#18283E',
      mainBackground: '#E1E8ED',
      border: '#E1E8ED',
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  components: {
    Input,
    Link,
    Textarea,
  },
});
