import './Header.scss'

/**
 *
 * @returns Render Header component
 * @param     {object}        props
 * @param     {string}        props.fullName          [complete user name]
 * @returns   {Reactnode}     jsx injected in DOM
 * @params
 */

function Header() {
  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        AndyRama !
      </h1>
    </header>
  )
}

export default Header
