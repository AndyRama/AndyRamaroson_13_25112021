import PropTypes from 'prop-types'
import './Hero.scss'

/**
 * Render the Hero component
 * @returns {Reactnode} jsx injected in DOM
 */

function Hero() {
  const subtitles = ['No fees.', 'No minimum deposit.', 'High interest rates.']

  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitle, index) => (
          <p key={index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}

/**
 * Hero PROPTYPES
 */
Hero.propTypes = {
  index: PropTypes.number,
  subtitle: PropTypes.string,
}

export default Hero
