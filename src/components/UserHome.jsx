

const UserHome = () => {
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container">
    <a className="navbar-brand fs-2 fw-bold" href="#">
      Task Manager
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-dark" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <form className="d-flex">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <a href = "/" className="btn btn-dark" type="button">
    Signout
  </a>
</form>

  </div>
</nav>
</div>


  )
}

export default UserHome
