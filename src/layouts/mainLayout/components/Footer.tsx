import React from 'react'

type Props = {
  title: string
}

const Footer: React.FC<Props> = ({ title }) => {
  return <div style={{ textAlign: 'center' }}>{title}</div>
}

export { Footer }
