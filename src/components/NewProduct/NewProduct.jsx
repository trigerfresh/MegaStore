import React from 'react'

const NewProduct = () => {
  return (
    <>
      <div className="title8 section-big-pt-space">
        <h4>new product</h4>
      </div>

      <section className="section-big-mb-space ratio_square product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pr-0">
              <div className="product-slide-5 product-m no-arrow slick-initialized slick-slider">
                <button
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  type="button"
                  style={{ display: 'inline-block' }}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: '4233px',
                      transform: 'translate3d(-1245px, 0px, 0px)',
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="-5"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/7.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>men analogue watch</h3>
                              </a>
                              <h5>
                                $10
                                <span>$30</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="-4"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/3.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/8.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>wireless headphones</h3>
                              </a>
                              <h5>
                                $34
                                <span>$40</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="-3"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/4.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/9.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>redmi not 9 pro</h3>
                              </a>
                              <h5>
                                $250
                                <span>$390</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="-2"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/5.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/10.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>Red Casual Backpack</h3>
                              </a>
                              <h5>
                                $80
                                <span>$130</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="-1"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/3.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/8.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>wireless headphones</h3>
                              </a>
                              <h5>
                                $42
                                <span>$65</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="0"
                              >
                                <h3>women fashion shoes</h3>
                              </a>
                              <h5>
                                $50
                                <span>$80</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index="1"
                      aria-hidden="false"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="0"
                              >
                                <h3>men analogue watch</h3>
                              </a>
                              <h5>
                                $10
                                <span>$30</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index="2"
                      aria-hidden="false"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="0"
                              >
                                <h3>wireless headphones</h3>
                              </a>
                              <h5>
                                $34
                                <span>$40</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index="3"
                      aria-hidden="false"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="0"
                              >
                                <h3>redmi not 9 pro</h3>
                              </a>
                              <h5>
                                $250
                                <span>$390</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index="4"
                      aria-hidden="false"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="0"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="0"
                              >
                                <h3>Red Casual Backpack</h3>
                              </a>
                              <h5>
                                $80
                                <span>$130</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index="5"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>wireless headphones</h3>
                              </a>
                              <h5>
                                $42
                                <span>$65</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="6"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/6.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>women fashion shoes</h3>
                              </a>
                              <h5>
                                $50
                                <span>$80</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="7"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/2.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/7.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>men analogue watch</h3>
                              </a>
                              <h5>
                                $10
                                <span>$30</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="8"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/3.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/8.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>wireless headphones</h3>
                              </a>
                              <h5>
                                $34
                                <span>$40</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="9"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/4.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/9.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>redmi not 9 pro</h3>
                              </a>
                              <h5>
                                $250
                                <span>$390</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="10"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/5.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/10.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>Red Casual Backpack</h3>
                              </a>
                              <h5>
                                $80
                                <span>$130</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index="11"
                      aria-hidden="true"
                      tabindex="-1"
                      style={{ width: '249px' }}
                    >
                      <div>
                        <div style={{ width: '100%', display: 'inline-block' }}>
                          <div className="product-box product-box2">
                            <div className="product-imgbox">
                              <div className="product-front">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/3.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-back">
                                <a
                                  href="product-page(left-sidebar).html"
                                  tabindex="-1"
                                >
                                  <img
                                    src="../assets/images/mega-store/product/8.jpg"
                                    className="img-fluid  "
                                    alt="product"
                                  />
                                </a>
                              </div>
                              <div className="product-icon icon-inline">
                                <button
                                  className="tooltip-top  add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-shopping-cart"
                                  >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                  </svg>
                                </button>
                                <a
                                  href="javascript:void(0)"
                                  className="add-to-wish tooltip-top"
                                  data-tippy-content="Add to Wishlist"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-heart"
                                  >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                  </svg>
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quick-view"
                                  className="tooltip-top"
                                  data-tippy-content="Quick View"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </a>
                                <a
                                  href="compare.html"
                                  className="tooltip-top"
                                  data-tippy-content="Compare"
                                  tabindex="-1"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-refresh-cw"
                                  >
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="new-label1">
                                <div>new</div>
                              </div>
                              <div className="on-sale1">on sale</div>
                            </div>
                            <div className="product-detail product-detail2 ">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star-o"></i>
                                </li>
                              </ul>
                              <a
                                href="product-page(no-sidebar).html"
                                tabindex="-1"
                              >
                                <h3>wireless headphones</h3>
                              </a>
                              <h5>
                                $42
                                <span>$65</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  type="button"
                  style={{ display: 'inline-block' }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewProduct
