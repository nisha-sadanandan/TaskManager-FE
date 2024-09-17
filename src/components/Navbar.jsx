

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-dark bg-warning">
  <div className="container">
    <a className="navbar-brand fs-2 text-dark fw-bold">Task Manager</a>
    <form className="d-flex gap-3">
    <a type="button" className="btn btn-success" href="/signin">SignIn</a>
    <a type="button" className="btn btn-secondary" href="/signup">SignUp</a>
    </form>
  </div>
</nav>

      
    </div>
  )
}

export default Navbar;
