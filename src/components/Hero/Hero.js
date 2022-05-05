import React from 'react'

import { Section, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <Button onClick={props.handleClick}>Get in contact</Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
