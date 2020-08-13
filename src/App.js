import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { light } from './theme/themes';
import GlobalStyles from './theme/GlobalStyle';
import ReactGA from 'react-ga'

const Blinking = styled.span`
  animation: blinker 1.2s step-start infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.background2};
  padding: 1em;
  border-radius: 10px;
`;

// const CardSectionHeader = styled.p`
//   font-weight: bold;
// `;

// const CardSectionContent = styled.p`
// `;

// const CardBadges = styled.p`

// `;


function App() {
  // const [darkMode, setDarkMode] = React.useState(1);
  
  React.useEffect(() => {
      ReactGA.initialize("UA-148475828-2");
      ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <ThemeProvider theme={light}>
      <Helmet>
        <title>Nigel Huang's Website</title>
      </Helmet>
      <GlobalStyles />
      <Container>
        <Row>
          <Col>
            <p className="h5">
              <code>
              (base) nigelhuang@NigelsMBP ~ % cat myProfile.md
              </code>
              <br/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <p className="h1">Nigel Huang</p>
              <p>Software Engineer</p>
              <p>
                Hello, my name is Nigel. I have 1 year experience working at <a href="https://www.rbcroyalbank.com/personal.html" target="_blank" rel="noopener noreferrer">RBC</a> and <a href="https://loadlink.ca" target="_blank" rel="noopener noreferrer">Loadlink Technologies</a> with data intensive systems, automation, and integration. I am currently in my 3rd year of Computer Engineering at Ryerson University.
              </p>
              <p>
                GitHub: <a href="https://github.com/nigel5" target="_blank" rel="noopener noreferrer">https://github.com/nigel5</a>
              </p>
              <p>
                LinkedIn: <a href="http://linkedin.com/in/nigel-huang/" target="_blank" rel="noopener noreferrer">http://linkedin.com/in/nigel-huang/</a>
              </p>
              <p>
                Website: <a href="https://nigel5.com" target="_blank" rel="noopener noreferrer">https://nigel5.com</a> (Is this recursion?)
              </p>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="h5">
              <code>
              (base) nigelhuang@NigelsMBP ~ % <Blinking>_</Blinking>
              </code>
            </p>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
