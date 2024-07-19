"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Example = () => {
  return (
    <>
      <Navigation />
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </>
  );
};

export default Example;

const Navigation = () => {
  const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement)?.getAttribute("href");
      if (target) {
        smoothScroll(target);
      }
    };

    document.querySelectorAll("nav ul li a").forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll("nav ul li a").forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Your logo or site title */}
              <Link href="#" className="font-bold text-gray-800">
                Your Logo
              </Link>
            </div>
            {/* Navigation links */}
            <div className="hidden md:block">
              <ul className="ml-10 flex space-x-4">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div id="home" className="h-screen bg-gray-100 py-[80px]">
        {/* Content of the home section */}
        <h2 className="font-bold text-[32px]">Home</h2>
        Nostrud dolor sint voluptate aliquip anim proident sit irure.
        Reprehenderit minim aute magna commodo minim tempor nisi cupidatat et
        sint irure aliqua cillum ea. Id enim exercitation magna id velit mollit
        elit excepteur consectetur veniam esse cillum aliquip ut. Sit proident
        cupidatat ipsum occaecat esse do quis ut consequat esse in quis. Nostrud
        excepteur dolor qui fugiat duis veniam est. Ad voluptate et nostrud anim
        duis consequat. Do amet qui officia dolor sit qui non elit.
        Reprehenderit adipisicing qui proident sit ut minim. Enim ullamco duis
        laborum reprehenderit aliquip magna esse qui eiusmod tempor commodo sint
        magna. Dolore aute laborum nostrud irure dolore eu laborum tempor eu.
        Dolor quis incididunt eiusmod minim irure qui adipisicing sunt
        voluptate. Enim nostrud ullamco consequat aliquip duis sit consequat
        laboris excepteur amet magna qui enim. In consequat excepteur id ad
        culpa eu. Sint deserunt nostrud aute magna est consectetur laboris
        excepteur ea proident fugiat ad eiusmod. Veniam tempor consequat
        cupidatat tempor adipisicing. Culpa anim minim amet irure do sint Lorem
        et labore duis ea. Nostrud eu eu ullamco officia minim enim minim qui
        qui dolore aute officia magna sunt. Ut et consectetur mollit irure ad do
        do esse laboris occaecat Lorem. Ut nisi labore culpa fugiat cillum quis
        pariatur sint voluptate. Ipsum aliquip cupidatat veniam nostrud laborum
        fugiat fugiat velit. Commodo occaecat eu excepteur nostrud sint ut
        laborum esse id. Cupidatat aute occaecat sit labore laboris non irure
        consequat quis pariatur ex nulla aliqua ullamco. Anim Lorem dolor
        deserunt ea in eiusmod mollit laboris aliqua tempor est dolore aliquip.
        Sit et incididunt nulla ipsum dolore minim mollit laboris. Aute
        incididunt mollit duis exercitation excepteur ex irure sit. Dolore non
        ex adipisicing non laborum anim irure magna incididunt aliquip et
        reprehenderit commodo. Laboris ex quis esse irure ad dolore aliqua eu ea
        ea id cillum. Laborum eu ullamco aliquip consequat Lorem minim eu
        ullamco. Reprehenderit Lorem enim nulla eiusmod sint esse pariatur
        incididunt excepteur. Reprehenderit labore laborum esse amet ex nulla in
        ullamco quis duis. Nostrud dolore proident laboris ipsum nostrud
        occaecat id aliqua pariatur anim voluptate ea aute amet. Laborum velit
        pariatur laboris id laboris adipisicing dolore quis sit sunt excepteur
        quis laboris. Cillum amet ea dolor laboris est et ex in Lorem in ut
        quis. Cupidatat amet laboris dolor voluptate ex esse pariatur consequat
        est officia aliquip anim magna et. Lorem consectetur dolor voluptate
        voluptate eu occaecat incididunt ad officia ullamco exercitation nisi.
        Ea commodo exercitation ullamco nostrud minim veniam nulla Lorem sunt
        nulla ipsum incididunt esse ex. Sint exercitation quis pariatur cillum
        cillum sint consequat exercitation non est excepteur ipsum. In commodo
        est non veniam tempor aliquip irure. Minim dolore id tempor adipisicing
        amet dolor culpa ex ut. Do minim officia ullamco ullamco deserunt nisi.
        Minim do ut exercitation in ad. Mollit qui dolor est reprehenderit.
        Laborum ut amet adipisicing consequat ad consectetur proident minim
        reprehenderit sit ex cillum cillum fugiat. Id laboris exercitation
        cillum nulla nostrud tempor consequat veniam ad reprehenderit. Duis eu
        mollit minim eiusmod ut duis elit reprehenderit occaecat esse
        consectetur velit nostrud. Laboris occaecat commodo cupidatat labore
        veniam est officia aute adipisicing irure mollit veniam enim.
        Consectetur magna voluptate commodo qui. Est aute consequat proident
        magna do duis ea eu. Elit consequat ipsum consectetur tempor minim qui
        elit sit esse laboris ex. Quis consequat proident sint ex non cillum
        ullamco mollit.
      </div>
    </>
  );
};
const About = () => {
  return (
    <>
      <div id="about" className="h-screen bg-gray-100 py-[80px]">
        {/* Content of the home section */}
        <h2 className="font-bold text-[32px]">About</h2>
        Nostrud dolor sint voluptate aliquip anim proident sit irure.
        Reprehenderit minim aute magna commodo minim tempor nisi cupidatat et
        sint irure aliqua cillum ea. Id enim exercitation magna id velit mollit
        elit excepteur consectetur veniam esse cillum aliquip ut. Sit proident
        cupidatat ipsum occaecat esse do quis ut consequat esse in quis. Nostrud
        excepteur dolor qui fugiat duis veniam est. Ad voluptate et nostrud anim
        duis consequat. Do amet qui officia dolor sit qui non elit.
        Reprehenderit adipisicing qui proident sit ut minim. Enim ullamco duis
        laborum reprehenderit aliquip magna esse qui eiusmod tempor commodo sint
        magna. Dolore aute laborum nostrud irure dolore eu laborum tempor eu.
        Dolor quis incididunt eiusmod minim irure qui adipisicing sunt
        voluptate. Enim nostrud ullamco consequat aliquip duis sit consequat
        laboris excepteur amet magna qui enim. In consequat excepteur id ad
        culpa eu. Sint deserunt nostrud aute magna est consectetur laboris
        excepteur ea proident fugiat ad eiusmod. Veniam tempor consequat
        cupidatat tempor adipisicing. Culpa anim minim amet irure do sint Lorem
        et labore duis ea. Nostrud eu eu ullamco officia minim enim minim qui
        qui dolore aute officia magna sunt. Ut et consectetur mollit irure ad do
        do esse laboris occaecat Lorem. Ut nisi labore culpa fugiat cillum quis
        pariatur sint voluptate. Ipsum aliquip cupidatat veniam nostrud laborum
        fugiat fugiat velit. Commodo occaecat eu excepteur nostrud sint ut
        laborum esse id. Cupidatat aute occaecat sit labore laboris non irure
        consequat quis pariatur ex nulla aliqua ullamco. Anim Lorem dolor
        deserunt ea in eiusmod mollit laboris aliqua tempor est dolore aliquip.
        Sit et incididunt nulla ipsum dolore minim mollit laboris. Aute
        incididunt mollit duis exercitation excepteur ex irure sit. Dolore non
        ex adipisicing non laborum anim irure magna incididunt aliquip et
        reprehenderit commodo. Laboris ex quis esse irure ad dolore aliqua eu ea
        ea id cillum. Laborum eu ullamco aliquip consequat Lorem minim eu
        ullamco. Reprehenderit Lorem enim nulla eiusmod sint esse pariatur
        incididunt excepteur. Reprehenderit labore laborum esse amet ex nulla in
        ullamco quis duis. Nostrud dolore proident laboris ipsum nostrud
        occaecat id aliqua pariatur anim voluptate ea aute amet. Laborum velit
        pariatur laboris id laboris adipisicing dolore quis sit sunt excepteur
        quis laboris. Cillum amet ea dolor laboris est et ex in Lorem in ut
        quis. Cupidatat amet laboris dolor voluptate ex esse pariatur consequat
        est officia aliquip anim magna et. Lorem consectetur dolor voluptate
        voluptate eu occaecat incididunt ad officia ullamco exercitation nisi.
        Ea commodo exercitation ullamco nostrud minim veniam nulla Lorem sunt
        nulla ipsum incididunt esse ex. Sint exercitation quis pariatur cillum
        cillum sint consequat exercitation non est excepteur ipsum. In commodo
        est non veniam tempor aliquip irure. Minim dolore id tempor adipisicing
        amet dolor culpa ex ut. Do minim officia ullamco ullamco deserunt nisi.
        Minim do ut exercitation in ad. Mollit qui dolor est reprehenderit.
        Laborum ut amet adipisicing consequat ad consectetur proident minim
        reprehenderit sit ex cillum cillum fugiat. Id laboris exercitation
        cillum nulla nostrud tempor consequat veniam ad reprehenderit. Duis eu
        mollit minim eiusmod ut duis elit reprehenderit occaecat esse
        consectetur velit nostrud. Laboris occaecat commodo cupidatat labore
        veniam est officia aute adipisicing irure mollit veniam enim.
        Consectetur magna voluptate commodo qui. Est aute consequat proident
        magna do duis ea eu. Elit consequat ipsum consectetur tempor minim qui
        elit sit esse laboris ex. Quis consequat proident sint ex non cillum
        ullamco mollit.
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div id="services" className="h-screen bg-gray-100 py-[80px]">
        {/* Content of the home section */}
        <h2 className="font-bold text-[32px]">Services</h2>
        Nostrud dolor sint voluptate aliquip anim proident sit irure.
        Reprehenderit minim aute magna commodo minim tempor nisi cupidatat et
        sint irure aliqua cillum ea. Id enim exercitation magna id velit mollit
        elit excepteur consectetur veniam esse cillum aliquip ut. Sit proident
        cupidatat ipsum occaecat esse do quis ut consequat esse in quis. Nostrud
        excepteur dolor qui fugiat duis veniam est. Ad voluptate et nostrud anim
        duis consequat. Do amet qui officia dolor sit qui non elit.
        Reprehenderit adipisicing qui proident sit ut minim. Enim ullamco duis
        laborum reprehenderit aliquip magna esse qui eiusmod tempor commodo sint
        magna. Dolore aute laborum nostrud irure dolore eu laborum tempor eu.
        Dolor quis incididunt eiusmod minim irure qui adipisicing sunt
        voluptate. Enim nostrud ullamco consequat aliquip duis sit consequat
        laboris excepteur amet magna qui enim. In consequat excepteur id ad
        culpa eu. Sint deserunt nostrud aute magna est consectetur laboris
        excepteur ea proident fugiat ad eiusmod. Veniam tempor consequat
        cupidatat tempor adipisicing. Culpa anim minim amet irure do sint Lorem
        et labore duis ea. Nostrud eu eu ullamco officia minim enim minim qui
        qui dolore aute officia magna sunt. Ut et consectetur mollit irure ad do
        do esse laboris occaecat Lorem. Ut nisi labore culpa fugiat cillum quis
        pariatur sint voluptate. Ipsum aliquip cupidatat veniam nostrud laborum
        fugiat fugiat velit. Commodo occaecat eu excepteur nostrud sint ut
        laborum esse id. Cupidatat aute occaecat sit labore laboris non irure
        consequat quis pariatur ex nulla aliqua ullamco. Anim Lorem dolor
        deserunt ea in eiusmod mollit laboris aliqua tempor est dolore aliquip.
        Sit et incididunt nulla ipsum dolore minim mollit laboris. Aute
        incididunt mollit duis exercitation excepteur ex irure sit. Dolore non
        ex adipisicing non laborum anim irure magna incididunt aliquip et
        reprehenderit commodo. Laboris ex quis esse irure ad dolore aliqua eu ea
        ea id cillum. Laborum eu ullamco aliquip consequat Lorem minim eu
        ullamco. Reprehenderit Lorem enim nulla eiusmod sint esse pariatur
        incididunt excepteur. Reprehenderit labore laborum esse amet ex nulla in
        ullamco quis duis. Nostrud dolore proident laboris ipsum nostrud
        occaecat id aliqua pariatur anim voluptate ea aute amet. Laborum velit
        pariatur laboris id laboris adipisicing dolore quis sit sunt excepteur
        quis laboris. Cillum amet ea dolor laboris est et ex in Lorem in ut
        quis. Cupidatat amet laboris dolor voluptate ex esse pariatur consequat
        est officia aliquip anim magna et. Lorem consectetur dolor voluptate
        voluptate eu occaecat incididunt ad officia ullamco exercitation nisi.
        Ea commodo exercitation ullamco nostrud minim veniam nulla Lorem sunt
        nulla ipsum incididunt esse ex. Sint exercitation quis pariatur cillum
        cillum sint consequat exercitation non est excepteur ipsum. In commodo
        est non veniam tempor aliquip irure. Minim dolore id tempor adipisicing
        amet dolor culpa ex ut. Do minim officia ullamco ullamco deserunt nisi.
        Minim do ut exercitation in ad. Mollit qui dolor est reprehenderit.
        Laborum ut amet adipisicing consequat ad consectetur proident minim
        reprehenderit sit ex cillum cillum fugiat. Id laboris exercitation
        cillum nulla nostrud tempor consequat veniam ad reprehenderit. Duis eu
        mollit minim eiusmod ut duis elit reprehenderit occaecat esse
        consectetur velit nostrud. Laboris occaecat commodo cupidatat labore
        veniam est officia aute adipisicing irure mollit veniam enim.
        Consectetur magna voluptate commodo qui. Est aute consequat proident
        magna do duis ea eu. Elit consequat ipsum consectetur tempor minim qui
        elit sit esse laboris ex. Quis consequat proident sint ex non cillum
        ullamco mollit.
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div id="contact" className="h-screen bg-gray-100 py-[80px]">
        {/* Content of the home section */}
        <h2 className="font-bold text-[32px]">Contact</h2>
        Nostrud dolor sint voluptate aliquip anim proident sit irure.
        Reprehenderit minim aute magna commodo minim tempor nisi cupidatat et
        sint irure aliqua cillum ea. Id enim exercitation magna id velit mollit
        elit excepteur consectetur veniam esse cillum aliquip ut. Sit proident
        cupidatat ipsum occaecat esse do quis ut consequat esse in quis. Nostrud
        excepteur dolor qui fugiat duis veniam est. Ad voluptate et nostrud anim
        duis consequat. Do amet qui officia dolor sit qui non elit.
        Reprehenderit adipisicing qui proident sit ut minim. Enim ullamco duis
        laborum reprehenderit aliquip magna esse qui eiusmod tempor commodo sint
        magna. Dolore aute laborum nostrud irure dolore eu laborum tempor eu.
        Dolor quis incididunt eiusmod minim irure qui adipisicing sunt
        voluptate. Enim nostrud ullamco consequat aliquip duis sit consequat
        laboris excepteur amet magna qui enim. In consequat excepteur id ad
        culpa eu. Sint deserunt nostrud aute magna est consectetur laboris
        excepteur ea proident fugiat ad eiusmod. Veniam tempor consequat
        cupidatat tempor adipisicing. Culpa anim minim amet irure do sint Lorem
        et labore duis ea. Nostrud eu eu ullamco officia minim enim minim qui
        qui dolore aute officia magna sunt. Ut et consectetur mollit irure ad do
        do esse laboris occaecat Lorem. Ut nisi labore culpa fugiat cillum quis
        pariatur sint voluptate. Ipsum aliquip cupidatat veniam nostrud laborum
        fugiat fugiat velit. Commodo occaecat eu excepteur nostrud sint ut
        laborum esse id. Cupidatat aute occaecat sit labore laboris non irure
        consequat quis pariatur ex nulla aliqua ullamco. Anim Lorem dolor
        deserunt ea in eiusmod mollit laboris aliqua tempor est dolore aliquip.
        Sit et incididunt nulla ipsum dolore minim mollit laboris. Aute
        incididunt mollit duis exercitation excepteur ex irure sit. Dolore non
        ex adipisicing non laborum anim irure magna incididunt aliquip et
        reprehenderit commodo. Laboris ex quis esse irure ad dolore aliqua eu ea
        ea id cillum. Laborum eu ullamco aliquip consequat Lorem minim eu
        ullamco. Reprehenderit Lorem enim nulla eiusmod sint esse pariatur
        incididunt excepteur. Reprehenderit labore laborum esse amet ex nulla in
        ullamco quis duis. Nostrud dolore proident laboris ipsum nostrud
        occaecat id aliqua pariatur anim voluptate ea aute amet. Laborum velit
        pariatur laboris id laboris adipisicing dolore quis sit sunt excepteur
        quis laboris. Cillum amet ea dolor laboris est et ex in Lorem in ut
        quis. Cupidatat amet laboris dolor voluptate ex esse pariatur consequat
        est officia aliquip anim magna et. Lorem consectetur dolor voluptate
        voluptate eu occaecat incididunt ad officia ullamco exercitation nisi.
        Ea commodo exercitation ullamco nostrud minim veniam nulla Lorem sunt
        nulla ipsum incididunt esse ex. Sint exercitation quis pariatur cillum
        cillum sint consequat exercitation non est excepteur ipsum. In commodo
        est non veniam tempor aliquip irure. Minim dolore id tempor adipisicing
        amet dolor culpa ex ut. Do minim officia ullamco ullamco deserunt nisi.
        Minim do ut exercitation in ad. Mollit qui dolor est reprehenderit.
        Laborum ut amet adipisicing consequat ad consectetur proident minim
        reprehenderit sit ex cillum cillum fugiat. Id laboris exercitation
        cillum nulla nostrud tempor consequat veniam ad reprehenderit. Duis eu
        mollit minim eiusmod ut duis elit reprehenderit occaecat esse
        consectetur velit nostrud. Laboris occaecat commodo cupidatat labore
        veniam est officia aute adipisicing irure mollit veniam enim.
        Consectetur magna voluptate commodo qui. Est aute consequat proident
        magna do duis ea eu. Elit consequat ipsum consectetur tempor minim qui
        elit sit esse laboris ex. Quis consequat proident sint ex non cillum
        ullamco mollit.
      </div>
    </>
  );
};
