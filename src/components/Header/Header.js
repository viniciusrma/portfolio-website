import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

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
        <a>
          <DiCssdeck size="3rem" /> <span>Viniciusrma</span>
        </a>
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
      <SocialIcons href="https://github.com/viniciusrma">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/viniciusrma/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
