// import { users } from '../../services/data'
import './Header.scss'

/**
 *
 * @returns Render Header component
 * @param     {object}        props
 * @param     {string}        props.fullName          [complete user name]
 * @returns   {Reactnode}     jsx injected in DOM
 * @params
 */

function Header({firstName}) {

  return (
    <header className="header">
      <h1>
        Welcome back
       
        <br />
        {firstName} !
      </h1>
    </header>
  )
}

export default Header
