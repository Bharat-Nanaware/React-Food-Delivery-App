import React from 'react'
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';
import Admin from './admin';

export default function Section3() {
  return (
    <div>
      <Header/>
      <section className="hero_section">
<Admin></Admin>
      </section>
     
      <Footer />
    </div>
  )
}
