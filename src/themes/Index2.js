import React from 'react'
import Banner2 from '../components/Banner/Banner2'
import Header from '../layout/Header/Header';
import ServiceCard from '../components/ShowCards/ServiceCard';
import PartnerRound from '../components/Partners/PartnerRound';
import Footer from '../layout/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import ProductListing from '../components/productlisting/ProductListing';
import ProductListingSecond from '../components/productlisting/ProductListingSecond';
import Banner3 from '../components/Banner/Banner3';

function Index2() {
  return (
    <>
      <Header />
      <Banner2 />
      <ServiceCard/>
      <ProductListing title="New Arrivals" />
      <Banner3/>
      <PartnerRound/>
      <ProductListing title="Gamer World" />
      <ProductListingSecond title="Popular Sales" />
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default Index2