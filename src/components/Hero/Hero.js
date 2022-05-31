import React from 'react'

import { Section, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const downloadFile = () => {
  window.location.href = './'
}

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>

        <a
          href="/assets/ResumeViniciusMorais.pdf"
          download="Resume Vinícius Morais"
          target="_blank"
        >
          <Button onClick={props.handleClick}> Download resume </Button>
        </a>
      </LeftSection>
    </Section>
  </>
)

export default Hero
