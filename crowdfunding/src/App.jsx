import { TbBrandMcdonalds } from "react-icons/tb";
function HomePage() {
  return (
    <main className="bg-[#f2f2f2] h-200">
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
      <div className="md:w-[50%] bg-[#ffff] w-[90%] my-0 mx-auto px-2 rounded-lg">
        <TbBrandMcdonalds className="bg-gray-700 text-white h-7 w-7 rounded-full p-1 mx-auto " />

        <h2 className="text-center text-xl my-0 font-bold">
          MasterCraft Bamboo Monitor Riser
        </h2>
        <p className="text-center text-[#555] text-sm">
          A beautiful handcrafted monitor stand to reduce neck and eye strain
        </p>
      </div>
    </main>
  );
}

export default HomePage;
