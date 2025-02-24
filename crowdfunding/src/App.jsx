function HomePage() {
  return (
    <main>
      <nav>
        <h3></h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <picture>
        <source
          media="(max-width: 1000px)"
          srcSet="images/image-hero-desktop.jpg"
        />
        <source
          media="(max-width:500px )"
          srcSet="images/image-hero-mobile.jpg"
        />
        <img
          src="images/image-hero-desktop.jpg"
          alt="Crowdfunding-desktop-view-image"
          height="750"
          width="1500"
        />
      </picture>
    </main>
  );
}

export default HomePage;
