import './Hero.css'

import heroBackgroundImage from '../../assets/teatro.jpg'

export const Hero = () => {
    return (
        <section className="hero-container" style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
            <div className="hero-content">
                <h1>MUSEU DE MANAUS</h1>
                <button className="hero-btn">
                    INGRESSOS
                </button>
            </div>

        </section>
    )
}