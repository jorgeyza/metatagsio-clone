import { extendTheme } from '@chakra-ui/react';
import { InputStyles as Input } from './components/InputStyles';

export const theme = extendTheme({
  colors: {
    primary: '#2A81FB',
    secondary: '#EBF1FA',
    neutral: '#A3B3CA',
    text: '#18283E',
    previewDivider: '#E0E7F1',
    arrowBackground: '#D4E6FE',
    google: {
      title: '#1a0dab',
      link: '#006621',
      description: '#545454',
    },
    facebook: {
      domain: '#3b5998',
      title: '#ffffff',
      description: '#ffffff',
      bottomBackground: '#f2f3f5',
      border: '#dadde1',
    },
    twitter: {
      domain: '#1da1f2',
      title: '#ffffff',
      description: '#ffffff',
      mainBackground: '#E1E8ED',
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  components: {
    Input,
  },
});
