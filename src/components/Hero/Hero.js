import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main >
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        FullStack Developer with great passion the modern technologies, I love building amazing website 
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;