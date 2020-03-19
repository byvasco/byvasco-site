import React from 'react'
import Header from './header'
import '../styles/main.scss'

const Layout = props => {
  return (
    <main className={props.pageName ? `page-${props.pageName}` : ''}>
      <Header />
      
      {props.children}
    </main>
  )
}

export default Layout