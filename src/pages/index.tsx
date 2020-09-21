import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

export const HomePage  = () => {
    return(
        <section id="sa_container">
          <Header />
          <div className="container">
            <div className="row sa-wrapper-container">
            </div>
          </div>
          <Footer />
          <audio id="player" controls className="audioAkwaba" autoPlay>
                    <source src="assets/media/akwaba.mp3" type="audio/mp3" />
                    <source src="/path/to/audio.ogg" type="audio/ogg" />
                    </audio>
        </section>
    )
}

