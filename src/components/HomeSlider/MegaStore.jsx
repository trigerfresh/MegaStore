import React from 'react'
// import MegaProduct from './MegaStoreProducts/MegaProduct'

const MegaStore = () => {
  return (
    <>
      <section className="megastore-slide collection-banner section-py-space b-g-white ms-3">
        <div className="container-fluid">
          <div className="row mega-slide-block">
            <div className="col-xl-9 col-lg-12">
              <div className="row">
                <div className="col-12">
                  <div className="slide-1 no-arrow slick-initialized slick-slider">
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
                          opacity: '1',
                          width: '4634px',
                          transform: 'translate3d(-662px, 0px, 0px)',
                        }}
                      >
                        {/* Slide 1 - Cloned */}
                        <div
                          className="slick-slide slick-cloned"
                          data-slick-index="-1"
                          aria-hidden="true"
                          tabIndex="-1"
                          style={{ width: '662px' }}
                        >
                          <div>
                            <div
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="slide-main bg-size"
                                style={{
                                  backgroundImage:
                                    'url("../assets/images/mega-store/slider/3.jpg")',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center center',
                                  display: 'block',
                                }}
                              >
                                <img
                                  src="../assets/images/mega-store/slider/3.jpg"
                                  className="img-fluid bg-img"
                                  alt="mega-store"
                                  style={{ display: 'none' }}
                                />
                                <div className="slide-contain">
                                  <div>
                                    <h4>all product</h4>
                                    <h2>megastore</h2>
                                    <h3>save up to 20% off</h3>
                                    <a
                                      href="product-page(left-sidebar).html"
                                      className="btn btn-rounded btn-md"
                                      tabIndex="-1"
                                    >
                                      Shop Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Slide 2 - Main */}
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{ width: '662px' }}
                        >
                          <div>
                            <div
                              style={{ width: '100%', display: 'inline-block' }}
                            >
                              <div
                                className="slide-main bg-size"
                                style={{
                                  backgroundImage:
                                    'url("../assets/images/mega-store/slider/1.jpg")',
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center center',
                                  display: 'block',
                                }}
                              >
                                <img
                                  src="../assets/images/mega-store/slider/1.jpg"
                                  className="img-fluid bg-img"
                                  alt="mega-store"
                                  style={{ display: 'none' }}
                                />
                                <div className="slide-contain">
                                  <div>
                                    <h4>all product</h4>
                                    <h2>megastore</h2>
                                    <h3>save up to 20% off</h3>
                                    <a
                                      href="product-page(left-sidebar).html"
                                      className="btn btn-rounded btn-md"
                                      tabIndex="0"
                                    >
                                      Shop Now
                                    </a>
                                  </div>
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

                {/* Left Banner 1 */}
                <div className="col-md-6">
                  <div className="collection-banner-main banner-18 banner-style7 collection-color13 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage:
                          'url("../assets/images/mega-store/slider/banner/1.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src="../assets/images/mega-store/slider/banner/1.jpg"
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>smart watch</h3>
                        <h4>special offer</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Banner 2 */}
                <div className="col-md-6">
                  <div className="collection-banner-main banner-18 banner-style7 collection-color9 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage:
                          'url("../assets/images/mega-store/slider/banner/2.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src="../assets/images/mega-store/slider/banner/2.jpg"
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>stylish chair</h3>
                        <h4>weekend sale</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Banners */}
            <div className="col-xl-3 col-lg-12">
              <div className="row collection-p6">
                <div className="col-xl-12 col-lg-4 col-md-6">
                  <div className="collection-banner-main banner-17 banner-style7 collection-color14 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage:
                          'url("../assets/images/mega-store/slider/banner/3.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src="../assets/images/mega-store/slider/banner/3.jpg"
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>smart glasses</h3>
                        <h4>best choice</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-4 col-md-6">
                  <div className="collection-banner-main banner-17 banner-style7 collection-color15 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage:
                          'url("../assets/images/mega-store/slider/banner/4.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src="../assets/images/mega-store/slider/banner/4.jpg"
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>smart led tv</h3>
                        <h4>now 70% off</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-12 col-lg-4 col-md-12">
                  <div className="collection-banner-main banner-18 banner-style7 p-left text-center">
                    <div
                      className="collection-img bg-size"
                      style={{
                        backgroundImage:
                          'url("../assets/images/mega-store/slider/banner/5.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        display: 'block',
                      }}
                    >
                      <img
                        src="../assets/images/mega-store/slider/banner/5.jpg"
                        className="img-fluid bg-img"
                        alt="banner"
                        style={{ display: 'none' }}
                      />
                    </div>
                    <div className="collection-banner-contain">
                      <div>
                        <h3>smart phone</h3>
                        <h4>special offer</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MegaStore
