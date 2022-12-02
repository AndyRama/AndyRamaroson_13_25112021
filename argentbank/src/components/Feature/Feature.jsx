import PropTypes from 'prop-types'
import './Feature.scss'

/**
 * Render the Feature component

 * @param     {object}        props
 * @param     {string}        props.src               [picture path source]
 * @param     {string}        props.alt               [picture description]
 * @param     {string}        props.title             [teaser text]
 * @param     {string}        props.paragraph         [punch line]
 * @returns   {Reactnode}     jsx injected in DOM
 */

function Feature({ src, alt, text, title }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={src} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{text}</p>
      </div>
    </section>
  )
}

/**
 * Feature PROPTYPES
 */
Feature.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}

export default Feature
