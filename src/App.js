import {ThemeProvider} from 'styled-components'
import Header from './components/Header'
import {Container} from './components/styles/container.styled'
import GlobalStyles from './components/styles/Global'
import Content from './Content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px', 
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
          <GlobalStyles />
          <Header />
          <Container>
            {Content.map((item, index) => (
              <p>{item.title}</p>
            ))}
          </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
