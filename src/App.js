import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { dark, light } from './theme/themes';
import GlobalStyles from './theme/GlobalStyle';

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
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Helmet>
        <title>Nigel Huang's Website</title>
      </Helmet>
      <header>
        <SplashHeader>
          <H1>Hey there!</H1>
          <H2>I'm <b>Nigel Huang</b>, a Software Engineer based in Santa Clara.</H2>
        </SplashHeader>
        <SplashContent>
          <a href="mailto:nigel.huang@torontomu­.ca"><p>Email Contact: nigel.huang@torontomu­.ca</p></a>
          <a href="https://github.com/nigel5" target="_blank" rel="noopener noreferrer"><p>GitHub</p></a>
          <a href="http://linkedin.com/in/nigel-huang/" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
          <ToggleDarkMode tabIndex={0} aria-pressed={darkMode} aria-label="Toggle" aria-describedby="Toggle dark theme" onClick={() => setDarkMode(!darkMode)}><p>| Toggle Dark mode</p></ToggleDarkMode>
        </SplashContent>
      </header>

      <Section>
        <SectionTitle>
          <p>About me</p>
        </SectionTitle>
        <SectionContent>
          <p>
            I am currently a Software Engineer at <b>Tenstorrent</b> working on GPU kernel programming software. I graduated from Ryerson University <b>Computer Engineering, with a focus in Software Engineering</b> in 2023.
          </p>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>
          <p>Jupyter Notebooks || Projects</p>
        </SectionTitle>
        <SectionContent>
          <p><a href="/neural_network_from_scratch.html">Implementation and Evaluation of a Neural Network from Scratch</a></p>
          <p><a href="https://thequotesapp.com/">The Quotes App - Daily quotes for 25 categories (iOS App)</a></p>
          <p><a href="/analysis.html">Analysis of Top 1000 Submissions in r/Toronto</a></p>
          <p><a href="/train.html">Training a sentiment classifier using a Naive Bayes model</a></p>
          <p><a href="/weather.html">Time Series Analysis and Forecasting of Atlanta Weather</a></p>
          <p><a href="https://ocurl.io">URL Shortener API, Discord Bot, Chrome Extension</a></p>
          <p><a href="https://collabboard.ca">Online collaborative whiteboard</a></p>
          <p><a href="https://www.youtube.com/watch?v=sma9TtPxqwk">Pong game on Xilinx Spartan 3E FPGA</a></p>
          <p><a href="https://github.com/nigel5/Cooking-Recipe-Suggestion-Web-App">Cooking recipe suggestions app</a></p>
          <p>View more projects on the <a href="https://github.com/nigel5">GitHub</a> page</p>
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle>
          <p>Technical Skills</p>
        </SectionTitle>
        <SectionContent>
          <p><b>Subjects:</b> Low level software development, GPU diagnostics, virtual memory and caches, kernel dispatch</p>
          <p><b>Languages:</b> C++, C, JavaScript, Java, Python, SQL</p>
          <p><b>Frameworks:</b> React</p>
          <p><b>Databases / Stores:</b> Postgres, Apache Cassandra, FireBase, Redis</p>
          <p><b>Platforms:</b> Node.js, Google Cloud Platform, DigitalOcean</p>
          <p><b>Tools:</b> Git, Docker, Linux</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          Work Experience
        </SectionTitle>
        <SectionContent>
          <p><b>Tenstorrent</b> - Software Engineer (November 2024 - Present)</p>
          <p><b>AMD</b> - Software Development Engineer 2 (June 2023 - November 2024)</p>
          <p><b>Amazon</b> - Software Development Engineer Intern (Summer 2022)</p>
          <p><b>AMD</b> - Memory Hardware Diagnostics Design Intern (PEY 2021 - 2022)</p>
          <p><b>Royal Bank of Canada (RBC)</b> - Quality Engineer Intern (Summer 2020)</p>
          <p><b>Loadlink Technologies</b> - Software Developer Intern (Summer 2019)</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>
          Personal Works
        </SectionTitle>
        <SectionContent>
          <p><b><a href="https://www.engineeredpathways.com/">Engineered Pathways</a></b></p>
          <p>At Engineered Pathways, I provide career mentorship, resume building, and interview prep for students whether they are looking for an internship, full time, or already have a job.</p>
          <br></br>

          <p><b>Academic Tutor</b></p>
          <p>I tutor electric circuits, software systems, digital logic, and calculus. <b>All my students (50+) have seen at least a letter grade improvement in their grades</b>.</p>
          <br></br>

          <p><b>Ryerson Artificial Intelligence</b></p>
          <p>We have run <b>workshops attended by over 250+ students</b> in the Ryerson community. I developed the team's website, and also aid in workshop material preparation.</p>
          <br></br> 
          <p><b>Wordpress Consulting and Development</b></p>
          <p>Wordpress consulting and plugin development in PHP.</p>
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
