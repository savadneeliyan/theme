import React from 'react'
import Banner from "../components/Banner/Banner";
import PartnerList from "../components/Partners/partnerList";
import Salecard from "../components/ShowCards/Salecard";
import ServiceCard from "../components/ShowCards/ServiceCard";
import ProductListing from "../components/productlisting/ProductListing";
import ProductListingSecond from "../components/productlisting/ProductListingSecond";
import Recent from "../components/recent/Recent";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";

function Index1() {
  return (
    <>
      <Header />
      <Banner />
      <PartnerList />
      <ProductListing title="New Arrivals" />
      <ProductListing title="Gamer World" />
      <ProductListing title="Top Selling Products" />
      <Salecard />
      <ProductListingSecond title="Popular Sales" />
      <Recent title="Popular Sales" />
      <ServiceCard bg />
      <Footer />
    </>
  );
}

export default Index1