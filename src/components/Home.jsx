import React from 'react'
import MainHeader from './HeaderCompnents/MainHeader'
import TopHeader from './HeaderCompnents/TopHeader'
import ShopBy from './HeaderCompnents/ShopBy'
import MegaStore from './HomeSlider/MegaStore'
import CollectionBanner from './CollectionBanner/CollectionBanner.jsx'
import Footer from './Footer/Footer.jsx'
import Services from './Services/Services.jsx'
import FearturedBrands from './FeaturedBrands/FearturedBrands.jsx'
import HappyClients from './HappyClients/HappyClients.jsx'
import DiscountBanner from './DiscountBanner/DiscountBanner'
import SaleBanner from './SaleBanner/SaleBanner'
import NewProduct from './NewProduct/NewProduct.jsx'
import SaleBanner_1 from './SaleBanner/SaleBanner_1.jsx'
import Deals from './Deals/Deals.jsx'
import CategoryProducts from './CategoryProducts/CategoryProducts.jsx'
import Footer_1 from './Footer/Footer_1.jsx'

const Header = () => {
  return (
    <>
      <header id="stickyheader" className="header-style2">
        <TopHeader />
        <MainHeader />
        <div className="category-header7">
          <ShopBy />
        </div>
      </header>
      <MegaStore />
      <Services />
      <NewProduct />
      <CollectionBanner />
      <SaleBanner />
      <SaleBanner_1 />
      <Deals />
      <CategoryProducts />
      <DiscountBanner />
      <HappyClients />
      <FearturedBrands />

      <Footer_1 />
    </>
  )
}

export default Header
