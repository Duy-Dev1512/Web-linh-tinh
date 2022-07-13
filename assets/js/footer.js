class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<footer class="text-center text-lg-start text-dark" style="background-color: #F3F4F6">
      <div class="container-fluid">
          <section class="d-flex justify-content-between p-4 text-white ">
              <div class="me-5">
              </div>
          </section>
          <section>
              <div class="container text-md-start">
                  <div class="row mt-1">
                      <div class="col-md-6 col-lg-3 col-sm-6 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
                          <h6 class="text-uppercase fw-bold">THÀNH VIÊN NHÓM</h6>
                          <hr class ="mx-auto" style="width: 60px; background-color: #019ABD; height: 2px"style="width: 60px; background-color: #7c4dff; height: 2px">
                          <p>Trần Trung</p>
                          <p>Trình Thị Ngọc Diệp</p>
                          <p>Phạm Nguyễn Gia Bảo</p>
                          <p>Trần Hữu Thịnh</p>
                          <p>Nguyễn Khắc Duy</p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-sm-6 mx-auto mb-4 text-center">
                          <h6 class="text-uppercase fw-bold">TÀI KHOẢN</h6>
                          <hr class="mx-auto" style="width: 60px; background-color: #019ABD; height: 2px" />
                          <p><a href="dangky.html" class="text-dark text-decoration-none">Đăng nhập</a></p>
                          <p><a href="dangky.html" class="text-dark text-decoration-none">Đăng kí</a></p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-sm-6 mx-auto mb-4 text-center">
                          <h6 class="text-uppercase fw-bold">SẢN PHẨM</h6>
                          <hr class="mx-auto" style="width: 60px; background-color: #019ABD; height: 2px" />
                          <p><a href="sanpham.html" class="text-dark text-decoration-none">Laptop</a></p>
                          <p><a href="sanpham.html" class="text-dark text-decoration-none">Phụ kiện</a></p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-sm-6 mx-auto mb-md-0 mb-4 text-center">
                            <h6 class="text-uppercase fw-bold">LIÊN HỆ</h6>
                            <hr class="mx-auto" style="width: 60px; background-color: #019ABD; height: 2px" />
                            <p><i class="fa-solid fa-location-dot me-3"></i>ĐHCT, Khu II, Đường 3/2, Ninh Kiều, Cần Thơ</p>
                            <a href="https://github.com/HTeamCTU" class="text-dark fs-3 me-3"><i class="fa-brands fa-github"></i></a> 
                            <a href="https://www.facebook.com/narTrung/" class="text-primary fs-3 "><i class="fa-brands fa-facebook"></i></a>  
                      </div>
                  </div>
              </div>
          </section>
      </div>
      <button
        type="button"
        class="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
        >
        <i class="fas fa-arrow-up"></i>
        </button>
    </footer>`;
    }
  }
  
  customElements.define('footer-component', Footer);