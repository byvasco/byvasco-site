import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Home = () => (
  <Layout pageName="home">
    <section className="intro">
      <div className="container">
        <div className="intro-content">      
        <h1 className="title title-3">I build things for the internet, with the help of design and code.</h1>
        </div>
      </div>
    </section>

    <section className="social">
      <div className="container">
        <h4 className="section-title body-bold">Let’s get connected!</h4>

        <ul className="links">
          <li><Link to="https://twitter.com/_byvasco"></Link>Twitter</li>
          <li><Link to="https://github.com/byvasco"></Link>GitHub</li>
          <li><Link to="https://www.instagram.com/byvasco"></Link>Instagram</li>
          <li><Link to="https://www.dribbble.com/byvasco"></Link>Dribbble</li>
        </ul>
      </div>
    </section>
  </Layout>
)

export default Home