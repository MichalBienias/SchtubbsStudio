import React from 'react';

function HomePage() {
  return (
    <div>
      <header>
        <h1>Schtubbs LLC</h1>
        <p>Amazon & Etsy Selling Business</p>
      </header>

      <section className="about">
        <h2>About Michal Bienias</h2>
        <p>Owner of Schtubbs LLC. Currently an undergrad student at West Chester University studying Computer Science.</p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:michalbienias9@gmail.com">michalbienias9@gmail.com</a></p>
        <p>Phone: 201-256-5925</p>
      </section>
    </div>
  );
}

export default HomePage;
