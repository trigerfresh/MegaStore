const ShopByCategory = () => {
  return (
    <>
      <div className="category-right">
        <div className="menu-block">
          <nav id="main-nav">
            <div className="toggle-nav">
              <i className="fa fa-bars sidebar-bar"></i>
            </div>
            <ul id="main-menu" className="sm pixelstrap sm-horizontal">
              <li>
                <div className="mobile-back text-right">
                  Back
                  <i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
                </div>
              </li>
              {/* <!--HOME--> */}
              <li className={open ? 'open' : ''}>
                <a className="dark-menu-item" href="#">
                  Home<span className="sub-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="index.html">mega store 1</a>
                  </li>
                  <li>
                    <a href="layout-2.html">mega store 2</a>
                  </li>
                  <li>
                    <a href="layout-3.html">mega store 3</a>
                  </li>
                  <li>
                    <a href="layout-4.html">mega store 4</a>
                  </li>
                  <li>
                    <a href="megastore.html">mega store 5</a>
                  </li>
                  <li>
                    <a href="layout-5.html">electronics</a>
                  </li>
                  <li>
                    <a href="layout-6.html">vegetable</a>
                  </li>
                  <li>
                    <a href="furniture.html">furniture</a>
                  </li>
                  <li>
                    <a href="cosmetic.html">cosmetic</a>
                  </li>
                  <li>
                    <a href="kids.html">kids</a>
                  </li>
                  <li>
                    <a href="tools.html">tools</a>
                  </li>
                  <li>
                    <a href="grocery.html">grocery</a>
                  </li>
                  <li>
                    <a href="pets.html">pets</a>
                  </li>
                  <li>
                    <a href="farming.html">farming</a>
                  </li>
                  <li>
                    <a href="digital-marketplace.html">digital marketplace</a>
                  </li>
                </ul>
              </li>
              {/* <!--HOME-END-->
                              <!--SHOP--> */}
              <li>
                <a className="dark-menu-item" href="#">
                  shop<span className="sub-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="category-page(left-sidebar).html">left sidebar</a>
                  </li>
                  <li>
                    <a href="category-page(right-sidebar).html">
                      right sidebar
                    </a>
                  </li>
                  <li>
                    <a href="category-page(no-sidebar).html">no sidebar</a>
                  </li>
                  <li>
                    <a href="category-page(sidebar-popup).html">
                      sidebar popup
                    </a>
                  </li>
                  <li>
                    <a href="category-page(metro).html">metro </a>
                  </li>
                  <li>
                    <a href="category-page(full-width).html">full width </a>
                  </li>
                  <li>
                    <a href="category-page(infinite-scroll).html">
                      infinite scroll
                    </a>
                  </li>
                  <li>
                    <a href="category-page(3-grid).html">3 grid</a>
                  </li>
                  <li>
                    <a href="category-page(6-grid).html">6 grid</a>
                  </li>
                  <li>
                    <a href="category-page(list-view).html">list view</a>
                  </li>
                </ul>
              </li>
              {/* <!--SHOP-END-->
                              <!--product-meu start--> */}
              <li className="mega">
                <a className="dark-menu-item" href="#">
                  product<span className="sub-arrow"></span>
                </a>
                <ul className="mega-menu full-mega-menu ">
                  <li>
                    <div className="container">
                      <div className="row">
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>sidebar</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="product-page(left-sidebar).html">
                                    left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(right-sidebar).html">
                                    right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(no-sidebar).html">
                                    non sidebar
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>bonus layout</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="product-page(bundle).html">bundle</a>
                                </li>
                                <li>
                                  <a href="product-page(image-swatch).html">
                                    image swatch
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(vertical-tab).html">
                                    vertical tab
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(video-thumbnail).html">
                                    video thumbnail
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>product layout </h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="product-page(4-image).html">
                                    4 image{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(sticky).html">sticky</a>
                                </li>
                                <li>
                                  <a href="product-page(accordian).html">
                                    accordian
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(360-view).html">
                                    360 view
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>thumbnail image</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="product-page(left-image).html">
                                    left image
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(right-image).html">
                                    right image
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(image-outside).html">
                                    image outside
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>3 column</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="product-page(3-col-left).html">
                                    thumbnail left
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(3-col-right).html">
                                    thumbnail right
                                  </a>
                                </li>
                                <li>
                                  <a href="product-page(3-column).html">
                                    thubnail bottom
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>product element</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="element-productbox.html">
                                    product box
                                  </a>
                                </li>
                                <li>
                                  <a href="element-product-slider.html">
                                    product slider
                                  </a>
                                </li>
                                <li>
                                  <a href="element-no_slider.html">no slider</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row menu-banner">
                        <div className="col-lg-6">
                          <div>
                            <img
                              src="../assets/images/mega-store/menu-banner/1.jpg"
                              alt="menu-banner"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <img
                              src="../assets/images/mega-store/menu-banner/2.jpg"
                              alt="menu-banner"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              {/* <!--product-meu end-->

                              <!--mega-meu start--> */}
              <li className="mega">
                <a className="dark-menu-item" href="#">
                  features<span className="sub-arrow"></span>
                </a>
                <ul className="mega-menu full-mega-menu ratio_landscape">
                  <li>
                    <div className="container">
                      <div className="row">
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>portfolio</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="grid-2-col.html">portfolio grid 2</a>
                                </li>
                                <li>
                                  <a href="grid-3-col.html">portfolio grid 3</a>
                                </li>
                                <li>
                                  <a href="grid-4-col.html">portfolio grid 4</a>
                                </li>
                                <li>
                                  <a href="grid-6-col.html">portfolio grid 6</a>
                                </li>
                                <li>
                                  <a href="masonary-2-grid.html">
                                    mesonary grid 2
                                  </a>
                                </li>
                                <li>
                                  <a href="masonary-3-grid.html">
                                    mesonary grid 3
                                  </a>
                                </li>
                                <li>
                                  <a href="masonary-4-grid.html">
                                    mesonary grid 4
                                  </a>
                                </li>
                                <li>
                                  <a href="masonary-fullwidth.html">
                                    mesonary full width
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>add to cart</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="layout-5.html">cart modal popup</a>
                                </li>
                                <li>
                                  <a href="layout-6.html">qty. counter </a>
                                </li>
                                <li>
                                  <a href="index.html">cart top</a>
                                </li>
                                <li>
                                  <a href="layout-2.html">cart bottom</a>
                                </li>
                                <li>
                                  <a href="layout-3.html">cart left</a>
                                </li>
                                <li>
                                  <a href="layout-4.html">cart right</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>shortcodes</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="element-title.html">title</a>
                                </li>
                                <li>
                                  <a href="element-banner.html">
                                    collection banner
                                  </a>
                                </li>
                                <li>
                                  <a href="element-category.html">category</a>
                                </li>
                                <li>
                                  <a href="element-service.html">service</a>
                                </li>
                                <li>
                                  <a href="element-image-ratio.html">
                                    image size ratio
                                  </a>
                                </li>
                                <li>
                                  <a href="element-tab.html">tab</a>
                                </li>
                                <li>
                                  <a href="element-counter.html">counter</a>
                                </li>
                                <li>
                                  <a href="element-pricingtable.html">
                                    pricing table
                                  </a>
                                </li>
                                <li>
                                  <a href="element-team.html">team</a>
                                </li>
                                <li>
                                  <a href="element-testimonial.html">
                                    testimonial
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col mega-box">
                          <div className="link-section">
                            <div className="menu-title">
                              <h5>email template</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="../email-template/email-order-success.html">
                                    order success
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-template/email-order-success-tow.html">
                                    order success 2
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-template/email-template.html">
                                    email template
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-template/email-template-tow.html">
                                    email template 2
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="menu-title menu-secon-title">
                              <h5>Easy to use</h5>
                            </div>
                            <div className="menu-content">
                              <ul>
                                <li>
                                  <a href="button.html">element button</a>
                                </li>
                                <li>
                                  <a href="instagram.html">element instagram</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col mega-box product ">
                          <div className="mega-img">
                            <img
                              src="../assets/images/mega-store/menu-banner/3.jpg"
                              alt="menu-banner"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dark-menu-item" href="#">
                  pages<span className="sub-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="#">
                      invoice<span className="new-tag">new</span>
                    </a>
                    <ul>
                      <li>
                        <a href="../invoice-template/element-invoice.html">
                          invoice one
                        </a>
                      </li>
                      <li>
                        <a href="../invoice-template/element-invoice2.html">
                          invoice two
                        </a>
                      </li>
                      <li>
                        <a href="../invoice-template/element-invoice3.html">
                          invoice three
                        </a>
                      </li>
                      <li>
                        <a href="../invoice-template/element-invoice4.html">
                          invoice four
                        </a>
                      </li>
                      <li>
                        <a href="../invoice-template/element-invoice5.html">
                          invoice five
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">account</a>
                    <ul>
                      <li>
                        <a href="wishlist.html">wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">cart</a>
                      </li>
                      <li>
                        <a href="dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="login.html">login</a>
                      </li>
                      <li>
                        <a href="register.html">register</a>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                      <li>
                        <a href="forget-pwd.html">forget password</a>
                      </li>
                      <li>
                        <a href="profile.html">profile </a>
                      </li>
                      <li>
                        <a href="#">checkout</a>
                        <ul>
                          <li>
                            <a href="checkout.html">checkout 1</a>
                          </li>
                          <li>
                            <a href="checkout2.html">
                              checkout 2<span className="new-tag">new</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-page.html">about us</a>
                  </li>
                  <li>
                    <a href="search.html">search</a>
                  </li>
                  <li>
                    <a href="typography.html">typography </a>
                  </li>
                  <li>
                    <a href="review.html">review </a>
                  </li>
                  <li>
                    <a href="order-success.html">order success</a>
                  </li>
                  <li>
                    <a href="order-history.html">order history</a>
                  </li>
                  <li>
                    <a href="order-tracking.html">order tracking</a>
                  </li>
                  <li>
                    <a href="#">compare</a>
                    <ul>
                      <li>
                        <a href="compare.html">compare</a>
                      </li>
                      <li>
                        <a href="compare-2.html">compare-2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="collection.html">collection</a>
                  </li>
                  <li>
                    <a href="look-book.html">lookbook</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">coming soon </a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dark-menu-item" href="#">
                  blog<span className="sub-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="blog(left-sidebar).html">left sidebar</a>
                  </li>
                  <li>
                    <a href="blog(right-sidebar).html">right sidebar</a>
                  </li>
                  <li>
                    <a href="blog(no-sidebar).html">no sidebar</a>
                  </li>
                  <li>
                    <a href="blog-details.html">blog details</a>
                  </li>
                  <li>
                    <a href="blog-creative(left-sidebar).html">
                      creative left sidebar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ShopByCategory
