import './Header.scss'
import PropTypes from 'prop-types'

/**
 * Render the Welcome component
 *
 * @param     {object}        props
 * @param     {string}        props.fullName          [complete user name]
 * @returns   {Reactnode}     jsx injected in DOM
 */
export default function Header({ fullName }) {
  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {fullName} !
      </h1>
    </header>
  )
}

/**
 * Welcome PROPTYPES
 */
Header.propTypes = {
  fullName: PropTypes.string.isRequired,
}
