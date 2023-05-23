import '../App.css'

const NavbarComponent = ({ users }) => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <div className="nav-title">
            Let's Grow More
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
        <button>Get User</button>
        </div>
    </div>
  )
}

export default NavbarComponent
