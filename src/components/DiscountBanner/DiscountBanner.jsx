import React from 'react'

const DiscountBanner = () => {
  return (
    <>
      <section class="deal-banner ">
        <div class="custom-container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="deal-banner-containe">
                <h2>save up to 30% to 40% off</h2>
                <h1>omg! just look at the great deals!</h1>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 ">
              <div class="deal-banner-containe">
                <div class="deal-btn">
                  <a href="category-page(left-sidebar).html" class="btn-white">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="discount-banner">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="discount-banner-contain">
                <h2>Discount on every single item on our site.</h2>
                <h1>
                  <span>OMG! Just Look at the</span> <span>great Deals!</span>
                </h1>
                <div class="rounded-contain ">
                  <div class="rounded-subcontain">
                    How does it feel, when you see great discount deals for each
                    product?
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

export default DiscountBanner
