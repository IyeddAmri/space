import React from 'react';
import Link from 'next/link';
import './style.css';

function HomePage() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing deals and shop your favorite products.</p>
      </header>
      <main>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list">
            {/* Dummy product cards */}
            {[...Array(6)].map((_, index) => (
              <div className="product-card" key={index}>
                <img
                  src={`/placeholder-product-${index % 3 + 1}.jpg`}
                  alt="Product"
                  loading="lazy"
                />
                <h3>Product Name</h3>
                <p>$99.99</p>
              </div>
            ))}
            <div className="view-all-products">
              <Link href="/shop">
                View All Products
              </Link>
            </div>
          </div>
        </section>
        <section className="promotions">
          <h2>Promotions</h2>
          <div className="promotion-list">
            {/* Dummy promotion banners */}
            {[...Array(2)].map((_, index) => (
              <div className="promotion-banner" key={index}>
                <img
                  src={`/placeholder-promotion-${index + 1}.jpg`}
                  alt="Promotion"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/shop">
                Shop Now
              </Link>
            </li>
            <li>
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default HomePage;
