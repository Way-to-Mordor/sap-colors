import React from 'react';
import { context } from '@reatom/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typograpy from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import 'fontsource-roboto';

import ExampleTable from './components/ExampleTable';
import theme from '../theme';
import { store } from '../store';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import BaseColors from '../components/BaseColors';
import Colors from '../components/Colors';
import CurrentColor from '../components/CurrentColor';

const IndexPage = () => (
  <context.Provider value={store}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="SAP ALV COLORS" />
        <Typograpy variant="h3" component="h3">
          Shades
        </Typograpy>
        <BaseColors />
        <Typograpy variant="h3" component="h3">
          Colors
        </Typograpy>
        <Colors />
        <CurrentColor />
        <ExampleTable />
      </Layout>
    </ThemeProvider>
  </context.Provider>
);

export default IndexPage;
