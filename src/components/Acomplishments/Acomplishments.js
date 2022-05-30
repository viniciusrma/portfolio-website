import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 50, text: 'Projects' },
  { number: 25, text: 'Github Followers' },
  { number: 900, text: 'Contributions in the last year' }
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
