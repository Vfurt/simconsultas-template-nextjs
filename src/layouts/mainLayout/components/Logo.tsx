import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'

const Logo = styled.img`
  display: inline-block;
  height: 46px;
  vertical-align: middle;
  margin-left: 10px;
  margin-top: 6px;
`

const Title = styled.div`
  display: inline-block;
  color: white;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Arial';
  vertical-align: middle;
`

const TitleWrapper = styled.div`
  position: relative;
  height: 64px;
  padding-left: 20px;
  overflow: hidden;
  line-height: 64px;
  transition: all 0.3s;
  background: #001529;
`

type Props = {
  collapsed: boolean
  title?: string
  image?: string
}

const LogoTitle: React.FC<Props> = ({ collapsed, title, image }) => (
  <TitleWrapper>
    <Link href="/">
      <a style={{ display: 'inline-block' }}>
        {!collapsed || window.innerWidth <= 576 ? <Title>{title}</Title> : null}
        {image && <Logo src={image} alt="logo" />}
      </a>
    </Link>
  </TitleWrapper>
)

export { LogoTitle, Logo }
