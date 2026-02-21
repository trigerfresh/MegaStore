import React from 'react'
import openAccount from '/assets/js/script.js?url'
import openSetting from '/assets/js/script.js?url'
import openWishlist from '/assets/js/script.js?url'
//Up to line no 236
const MainHeader = () => {
  return (
    <>
      <div className="header7">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              <div className="header-contain">
                <div className="logo-block">
                  <div className="mobilecat-toggle">
                    {' '}
                    <i className="fa fa-bars sidebar-bar"></i>{' '}
                  </div>
                  <div className="brand-logo logo-sm-center">
                    {' '}
                    <a href="index.html">
                      {' '}
                      <img
                        src="../assets/images/mega-store/logo1.png"
                        className="img-fluid  "
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>

                <div className="header-search ajax-search the-basics">
                  <div className="input-group">
                    <div className="input-group-text">
                      <select>
                        <option>all category</option>
                        <option>hand tools</option>
                        <option>kitchen</option>
                        <option>baby products</option>
                        <option>Gardening Tools</option>
                        <option>Fireplace tools</option>
                        <option>Gutter cleaning</option>
                      </select>
                    </div>

                    <span
                      className="twitter-typeahead"
                      style={{ position: 'relative', display: 'inline-block' }}
                    >
                      <input
                        type="search"
                        className="form-control typeahead tt-hint"
                        readOnly
                        autoComplete="off"
                        spellCheck="false"
                        tabIndex={-1}
                        dir="ltr"
                        style={{
                          position: 'absolute',
                          top: '0px',
                          left: '0px',
                          borderColor: 'transparent',
                          boxShadow: 'none',
                          opacity: 1,
                          background:
                            'none 0% 0% / auto repeat scroll padding-box padding-box rgb(255, 255, 255)',
                        }}
                      />
                      <input
                        type="search"
                        className="form-control typeahead tt-input"
                        placeholder="Search a Product"
                        autoComplete="off"
                        spellCheck="false"
                        dir="auto"
                        style={{
                          position: 'relative',
                          verticalAlign: 'top',
                          backgroundColor: 'transparent',
                        }}
                      />
                      <pre
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          visibility: 'hidden',
                          whiteSpace: 'pre',
                          fontFamily: '"PT Sans", sans-serif',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontVariant: 'normal',
                          fontWeight: 400,
                          wordSpacing: '0px',
                          letterSpacing: '0.8px',
                          textIndent: '0px',
                          textRendering: 'auto',
                          textTransform: 'capitalize',
                        }}
                      ></pre>
                      <div
                        className="tt-menu"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '0px',
                          zIndex: 100,
                          display: 'none',
                        }}
                      >
                        <div className="tt-dataset tt-dataset-states"></div>
                      </div>
                    </span>

                    <div className="input-group-text">
                      <i className="fa fa-search"></i>
                    </div>
                  </div>
                </div>

                <div className="icon-block">
                  <ul className="theme-color">
                    <li className="mobile-search icon-md-block">
                      <svg
                        style={{ enableBackground: 'new 0 0 512 512' }}
                        viewBox="0 0 512.002 512.002"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="m495.594 416.408-134.086-134.095c14.685-27.49 22.492-58.333 22.492-90.312 0-50.518-19.461-98.217-54.8-134.31-35.283-36.036-82.45-56.505-132.808-57.636-1.46-.033-2.92-.054-4.392-.054-105.869 0-192 86.131-192 192s86.131 192 192 192c1.459 0 2.93-.021 4.377-.054 30.456-.68 59.739-8.444 85.936-22.436l134.085 134.075c10.57 10.584 24.634 16.414 39.601 16.414s29.031-5.83 39.589-16.403c10.584-10.577 16.413-24.639 16.413-39.597s-5.827-29.019-16.407-39.592zm-299.932-64.453c-1.211.027-2.441.046-3.662.046-88.224 0-160-71.776-160-160s71.776-160 160-160c1.229 0 2.449.019 3.671.046 86.2 1.935 156.329 73.69 156.329 159.954 0 86.274-70.133 158.029-156.338 159.954z"></path>
                          <path d="m192 320.001c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128-57.42 128-128 128z"></path>
                        </g>
                      </svg>
                    </li>

                    <li
                      className="mobile-user icon-desk-none"
                      onClick={openAccount}
                    >
                      <svg viewBox="0 0 512 512"></svg>
                    </li>

                    <li className="mobile-setting" onClick={openSetting}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: 'new 0 0 512.002 512.002' }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M500.6,212.6l-59.9-14.7c-3.3-10.5-7.5-20.7-12.6-30.6l30.6-51c3.6-6,2.7-13.5-2.1-18.3L414,55.4
                                       c-4.8-4.8-12.3-5.7-18.3-2.1l-51,30.6c-9.9-5.1-20.1-9.3-30.6-12.6l-14.4-59.9C297.9,4.8,291.9,0,285,0h-60
                                       c-6.9,0-12.9,4.8-14.7,11.4l-14.4,59.9c-10.5,3.3-20.7,7.5-30.6,12.6l-51-30.6c-6-3.6-13.5-2.7-18.3,2.1L53.4,98
                                       c-4.8,4.8-5.7,12.3-2.1,18.3l30.6,51c-5.1,9.9-9.3,20.1-12.6,30.6l-57.9,14.7C4.8,214.1,0,220.1,0,227v60
                                       c0,6.9,4.8,12.9,11.4,14.4l57.9,14.7c3.3,10.5,7.5,20.7,12.6,30.6l-30.6,51c-3.6,6-2.7,13.5,2.1,18.3L96,458.6
                                       c4.8,4.8,12.3,5.7,18.3,2.1l51-30.6c9.9,5.1,20.1,9.3,30.6,12.6l14.4,57.9c1.8,6.6,7.8,11.4,14.7,11.4h60
                                       c6.9,0,12.9-4.8,14.7-11.4l14.4-57.9c10.5-3.3,20.7-7.5,30.6-12.6l51,30.6c6,3.6,13.5,2.7,18.3-2.1l42.6-42.6
                                       c4.8-4.8,5.7-12.3,2.1-18.3l-30.6-51c5.1-9.9,9.3-20.1,12.6-30.6l59.9-14.7c6.6-1.5,11.4-7.5,11.4-14.4v-60
                                       C512,220.1,507.2,214.1,500.6,212.6z
                                       M255,332c-41.4,0-75-33.6-75-75c0-41.4,33.6-75,75-75c41.4,0,75,33.6,75,75
                                       C330,298.4,296.4,332,255,332z"
                            />
                          </g>
                        </g>
                      </svg>
                    </li>

                    <li
                      className="mobile-wishlist item-count icon-desk-none"
                      onClick={openWishlist}
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512
                              512"
                        style={{ enableBackground: 'new 0 0 512 512' }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                       c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                       c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                       s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                       C512,93.417,453.532,30,376,30z"
                            />
                          </g>
                        </g>
                      </svg>
                      <div className="item-count-contain inverce"> 1 </div>
                    </li>

                    <li className="mobile-cart item-count" onClick={openCart}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: 'new 0 0 512 512' }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936
                                       C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208
                                       c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8
                                       C438.793,477.952,444.777,460.096,443.209,442.24z
                                       M319.977,128h-128V96c0-35.296,28.704-64,64-64
                                       c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z"
                            />
                          </g>
                        </g>
                      </svg>
                      <div className="item-count-contain inverce"> 3 </div>
                    </li>
                  </ul>
                  <div className="toggle-nav">
                    <i className="fa fa-bars sidebar-bar"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="searchbar-input">
          <div className="input-group">
            <div className="input-group-append">
              <span className="input-group-text"></span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="search your product"
            />
            <div className="input-group-append">
              <span className="input-group-text close-searchbar"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainHeader
