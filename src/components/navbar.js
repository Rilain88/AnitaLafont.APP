import './Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (
   <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
              <a class="navbar-brand" href="#">
                  Anita Lafont
              </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Promociones</a>
          </li>

          <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Nosotros
               </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                 <a class="dropdown-item" href="">Quien Soy</a>
                 <div class="dropdown-divider"></div>
                 <a class="dropdown-item" href="">Contacto</a>
              </div>
           </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  </nav>

  );
}

export default Navbar;