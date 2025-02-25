function HomePage() {
  return (
    <main className="">
      <nav className="flex justify-around text-white absolute inset-x-0 z-100 py-3 bg-[#636363e6]">
        <h3 className="text-base font-bold cursor-pointer text-lg">
          CrowdFund
        </h3>
        <ul className="flex gap-x-10">
          <li className="cursor-pointer hover:text-[#3cb4ac]">About</li>
          <li className="cursor-pointer hover:text-[#3cb4ac]">Discover</li>
          <li className="cursor-pointer hover:text-[#3cb4ac]">Get Started</li>
        </ul>
      </nav>
      <picture className="relative">
        <source
          media="(max-width:1000px)"
          srcSet="images/image-hero-mobile.jpg"
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
      <div>
        <h2>MasterCraft Bamboo Monitor Riser</h2>
      </div>
    </main>
  );
}

export default HomePage;
