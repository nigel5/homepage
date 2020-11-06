import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { dark, light } from './theme/themes';
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

const SplashHeader = styled.div`
  padding: 0px 100px;
  border: 3px;
  box-sizing: border-box;

  @media (max-width:480px) {
    padding: 0px 2em;
    box-sizing: border-box;
  }
`;

const SplashContent = styled.div`
  padding: 0px 100px;

  @media (max-width:480px) {
    padding: 0px 2em;
  }
  
  @media (min-width:480px) {
    display: inline-flex;
    justify-content: flex-start;

    a {
      margin-right: 1em;
    }
  }
`;

const H1 = styled.h1`
  font-weight: 400;
  @media (min-width:480px) {
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  @media (min-width:480px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  padding: 1em 2em;
  @media (min-width:480px) {
    display: flex;
    padding: 3em 10em;
  }
`;

const SectionTitle = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.sectionTitle.color};

  @media (min-width:480px) {
    margin-right: 10em;
    min-width: 15em;
  }
`;

const SectionContent = styled.div`
`;

const ToggleDarkMode = styled.button`
  border: none;
  background: inherit;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  
  React.useEffect(() => {
      ReactGA.initialize("UA-148475828-2");
      ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Helmet>
        <title>Nigel Huang's Website</title>
      </Helmet>
      <header>
        <SplashHeader>
          <H1>Hey there!</H1>
          <H2>I'm <b>Nigel Huang</b>, a 3rd year Computer Engineering student.</H2>
        </SplashHeader>
        <SplashContent>
          <a href="mailto:nigelhuang2000@gmail.com"><p>Email Contact: nigel.huang@ryerson.ca</p></a>
          <a href="/Nigel_Huang_Resume.pdf"><p>Resume</p></a>
          <a href="https://github.com/nigel5" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
          <a href="http://linkedin.com/in/nigel-huang/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
          <ToggleDarkMode tabIndex={0} aria-pressed={darkMode} aria-label="Toggle" aria-describedby="Toggle dark theme" onClick={() => setDarkMode(!darkMode)}><p>| Toggle Dark mode</p></ToggleDarkMode>
        </SplashContent>
      </header>

      <Section>
        <SectionTitle>
          <p>Jupyter Notebooks</p>
        </SectionTitle>
        <SectionContent>
          <p><a href="/analysis.html">Analysis of Top 1000 Submissions in r/Toronto</a></p>
          <p><a href="/train.html">Training a sentiment classifier using a Naive Bayes model</a></p>
          <p><a href="/weather.html">Time Series Analysis and Forecasting of Atlanta Weather</a></p>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>
          <p>About me</p>
        </SectionTitle>
        <SectionContent>
          <p>
            I am currently a 3rd year undergrad student at <b>Ryerson University</b> working towards my degree in <b>Computer Engineering, with a focus in Software Engineering</b>.
          </p>
          <p>
            I recently completed an amazing summer internship at the <b>Royal Bank of Canada (RBC)</b> as a <b>Quality Engineer</b>. Previously, I interned as a <b>Software Developer</b> at <b>Loadlink Technologies</b>. Awesome stuff.
          </p>
          <p>
            As a rising Software Engineer, I enjoy working with others, learning, spreading knowledge, and building systems which enhances our lives, connect us, and provide a good experience for both the end user and developers.
          </p>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          <p>Technical Skills</p>
        </SectionTitle>
        <SectionContent>
          <p><b>Languages:</b>JavaScript, Java, Python, C, SQL, HTML, CSS</p>
          <p><b>Frameworks:</b> React, Gatsby</p>
          <p><b>Databases / Stores:</b> Apache Cassandra, MS SQL, FireBase, Redis</p>
          <p><b>Platforms:</b> Node.js, Google Cloud Platform, DigitalOcean</p>
          <p><b>Tools:</b> Git, Docker, Debuggers</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          Work Experience
        </SectionTitle>
        <SectionContent>
          <p><b>Royal Bank of Canada (RBC)</b> - Quality Engineer Intern (Summer 2020)</p>
          <p><b>Loadlink Technologies</b> - Software Developer Intern (Summer 2019)</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          Outside of school (extracurriculars!)
        </SectionTitle>
        <SectionContent>
          <p><b>Academic Tutor</b></p>
          <p>I tutor electric circuits, software systems, digital logic, and calculus. <b>All my students (10+) have seen at least a letter grade improvement in their grades</b>.</p>
          <br></br>

          <p><b>Ryerson Artificial Intelligence</b></p>
          <p>We have run <b>workshops attended by over 250+ students</b> in the Ryerson community. I developed the team's website, and also aid in workshop material preparation.</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          End. Thanks for visiting. <Blinking><b>_</b></Blinking>
        </SectionTitle>
      </Section>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
