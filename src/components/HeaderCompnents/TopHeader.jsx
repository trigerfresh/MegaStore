import React from 'react'

const TopHeader = () => {
  return (
    <>
      <div className="mobile-fix-option"></div>
      <div class="top-header2">
        <div class="custom-container">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <div class="top-header-left">
                <ul>
                  <li>
                    {' '}
                    <a href="javascript:void(0)">
                      bigdeal ecommerce always free delevery
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a href="javascript:void(0)">
                      <i class="fa fa-phone"></i>Call Us: 123 - 456 - 7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="top-header-right">
                <ul>
                  <li onclick="openWishlist()">
                    <a href="javascript:void(0)">
                      <i class="fa fa-heart"></i> wishlist
                    </a>
                  </li>
                  <li onclick="openAccount()">
                    {' '}
                    <a href="javascript:void(0)">
                      <i class="fa fa-user"></i> my profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
