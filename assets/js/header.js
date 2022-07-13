class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="header-top">
            <nav class="navbar-expand-lg">
                <div class="navbar container" style=" min-height:70px;">
                    <a href="index.html">
                        <img class="brand d-none d-md-block" src="./assets/img/logo-dark.png" alt="" height="70px">
                    </a>
                    <form class="d-flex" style="width: 50%;">
                        <input class="form-control" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search"style="background-color: rgba(1, 154, 189, 0.1) !important;">
                        <button class="btn" type="submit"><i class="fa-solid fa-magnifying-glass "></i></button>
                    </form>
                    <div>
                        <a href="giohang.html">
                        <button type="button" class="btn btn-light btn-outline-df" onclick="donhang()">
                            <i class="fa-solid fa-basket-shopping"></i>
                            Giỏ Hàng
                        </button>
                        </a>
                    </div>
                    <button class="navbar-toggler btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <i class="fa-solid fa-bars" style="color: #019ABD !important;"></i>
                </button>
                </div>
            </nav>
        </div>
        <div class="header-bottom">
            <nav class="navbar-light navbar-expand-lg mt-3 bg-df">
                <div class="container">
                    <div class="offcanvas offcanvas-end off mx-auto" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width: 100%; ">
                        <div class="offcanvas-header">
                            <img src="./assets/img/logo-dark.png" alt="" height="70px">
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class=" offcanvas-body bg-df" >
                            <ul class="d-flex align-items-center align-items-center justify-content-end navbar-nav flex-grow-1 text-center ">
                                <li class="nav-item ps-3 ">
                                    <a class="nav-link active flex-grow-1 text-white" href="index.html">Trang Chủ</a>
                                </li>
                                <li class="nav-item ps-3 ">
                                    <a class="nav-link active flex-grow-1 text-white" href="sanpham.html">Sản Phẩm</a>
                                </li>
                                <li class="nav-item ps-3">
                                    <a class="nav-link active flex-grow-1 text-white" href="lienhe.html">Liên Hệ</a>
                                </li>
                                <li class="nav-item ps-3">
                                    <i class="fa-solid fa-user fs-5 text-white"></i>
                                    <a class="text-dark text-decoration-none text-white" href="dangky.html">Đăng ký / Đăng nhập</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
      `;
    }
  }
 
  customElements.define('header-component', Header);