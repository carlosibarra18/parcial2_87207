import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/navLogo.png"
export const Cabecera = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="El logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Editoriales
                </NavLink>
              </li>

              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Revistas
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static">
                  <li>
                    <NavLink className="dropdown-item" to="/freecre">
                      Registrar Revistas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/freelis">
                      Listar Revistas
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/freeadm">
                      Administrar Revistas
                    </NavLink>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/acerde">
                  Quienes Somos
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};