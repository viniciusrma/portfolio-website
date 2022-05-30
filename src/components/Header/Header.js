import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import Logo from '../../../public/images/logo.svg'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link className="anchor" href="/">
        <NavLink>
          <img src={'/images/logo.svg'} width="180" className="logo" />
        </NavLink>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/viniciusrma" target='_blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/viniciusrma/" target='_blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
