import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {Home, Article} from './Pages';
import {Header, Footer} from './Layouts';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



function App() { 
  
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />

        <Switch>
          <Route path="/article/:articleId(.*)" component={Article} />
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
