"use client";
import { useState, useEffect } from "react";
// LIBRARY
// INTERFACE
// STYLING
import "./style.css";

const Example: React.FC = () => {
  return (
    <>
      <ShrinkNavigationMenuScroll />
      <p>
        Mollit ullamco tempor Lorem consectetur laboris do do ullamco
        consectetur amet.
      </p>
      <p>
        Cupidatat reprehenderit quis magna culpa dolore ea consequat laboris
        aute qui pariatur officia. Exercitation dolor excepteur incididunt nulla
        commodo. Sit dolor quis enim nisi elit culpa nisi enim. Veniam laborum
        esse deserunt sit anim aliqua laboris nisi fugiat ad ipsum velit fugiat.
        Labore laborum dolore nulla nulla deserunt culpa qui nulla commodo
        cillum quis culpa aute. Sunt occaecat sunt mollit aliqua non eu
        consequat ea. Commodo exercitation culpa cupidatat nulla id quis commodo
        commodo est voluptate cillum proident veniam mollit. Eiusmod pariatur
        minim ullamco quis qui ut dolore voluptate fugiat elit ut. Officia irure
        minim qui pariatur et nostrud aliquip sit reprehenderit irure
        reprehenderit adipisicing aliqua dolor. Mollit consequat Lorem eiusmod
        duis irure elit ipsum proident reprehenderit ad occaecat. Proident
        consequat commodo dolore eiusmod enim. Ut in est non consectetur
        proident dolor ullamco ea. Adipisicing dolore consectetur duis do ea
        tempor esse ex. Tempor sint voluptate exercitation deserunt id
        incididunt. Ex ipsum sint occaecat Lorem. Est id dolore non dolor est
        eiusmod deserunt quis. Reprehenderit deserunt reprehenderit id ut
        occaecat cillum nulla tempor consectetur dolore. Ea mollit voluptate
        laborum voluptate. Excepteur veniam sunt laboris sit reprehenderit
        consectetur excepteur eu enim et reprehenderit culpa. Sit mollit qui
        laborum cupidatat quis. Magna elit consequat deserunt aute officia do
        ullamco anim Lorem nisi. Dolore commodo eiusmod id reprehenderit nostrud
        do cupidatat velit consectetur culpa. Fugiat Lorem ut do occaecat elit
        consequat. Veniam mollit pariatur excepteur consequat ex esse culpa do
        duis eu mollit. Ullamco velit labore nisi irure consectetur adipisicing
        dolor sunt adipisicing in commodo qui tempor ipsum. Occaecat veniam
        aliquip commodo quis minim ad mollit. Ea irure ad sint enim proident
        quis aliqua veniam esse labore aliquip ut nulla elit. Sit eiusmod duis
        do Lorem ea quis ut nostrud cillum. Consectetur tempor sit do deserunt
        dolor mollit aliqua cupidatat. Voluptate ipsum esse mollit fugiat
        aliquip proident veniam. Do eiusmod eu non in anim mollit do. Elit
        eiusmod cillum pariatur ad id veniam nulla ad veniam. Ipsum eu eiusmod
        adipisicing sit eu. Nulla dolore nulla dolor elit adipisicing eu
        voluptate consequat ut. Exercitation consectetur magna anim deserunt
        velit commodo do exercitation esse. Ea enim velit pariatur cillum aute.
        Sunt reprehenderit labore cupidatat pariatur proident esse.
        Reprehenderit velit minim exercitation excepteur tempor enim anim et
        reprehenderit labore velit ipsum ut. Proident eiusmod qui occaecat
        consectetur sunt officia cillum ut excepteur. Veniam deserunt elit ea
        eiusmod commodo ad dolor est. Duis laboris laborum exercitation nisi non
        consequat. Dolor consectetur aliqua reprehenderit commodo esse occaecat
        minim est dolor amet adipisicing quis aute laborum. Occaecat
        exercitation consectetur non fugiat aliquip cupidatat in laboris commodo
        deserunt irure in nisi. Nulla pariatur eu id labore adipisicing
        exercitation voluptate amet quis veniam aliqua laboris anim ea. Duis
        sunt cillum nisi enim non dolore adipisicing laborum proident sint.
      </p>
      <p>
        Cupidatat reprehenderit quis magna culpa dolore ea consequat laboris
        aute qui pariatur officia. Exercitation dolor excepteur incididunt nulla
        commodo. Sit dolor quis enim nisi elit culpa nisi enim. Veniam laborum
        esse deserunt sit anim aliqua laboris nisi fugiat ad ipsum velit fugiat.
        Labore laborum dolore nulla nulla deserunt culpa qui nulla commodo
        cillum quis culpa aute. Sunt occaecat sunt mollit aliqua non eu
        consequat ea. Commodo exercitation culpa cupidatat nulla id quis commodo
        commodo est voluptate cillum proident veniam mollit. Eiusmod pariatur
        minim ullamco quis qui ut dolore voluptate fugiat elit ut. Officia irure
        minim qui pariatur et nostrud aliquip sit reprehenderit irure
        reprehenderit adipisicing aliqua dolor. Mollit consequat Lorem eiusmod
        duis irure elit ipsum proident reprehenderit ad occaecat. Proident
        consequat commodo dolore eiusmod enim. Ut in est non consectetur
        proident dolor ullamco ea. Adipisicing dolore consectetur duis do ea
        tempor esse ex. Tempor sint voluptate exercitation deserunt id
        incididunt. Ex ipsum sint occaecat Lorem. Est id dolore non dolor est
        eiusmod deserunt quis. Reprehenderit deserunt reprehenderit id ut
        occaecat cillum nulla tempor consectetur dolore. Ea mollit voluptate
        laborum voluptate. Excepteur veniam sunt laboris sit reprehenderit
        consectetur excepteur eu enim et reprehenderit culpa. Sit mollit qui
        laborum cupidatat quis. Magna elit consequat deserunt aute officia do
        ullamco anim Lorem nisi. Dolore commodo eiusmod id reprehenderit nostrud
        do cupidatat velit consectetur culpa. Fugiat Lorem ut do occaecat elit
        consequat. Veniam mollit pariatur excepteur consequat ex esse culpa do
        duis eu mollit. Ullamco velit labore nisi irure consectetur adipisicing
        dolor sunt adipisicing in commodo qui tempor ipsum. Occaecat veniam
        aliquip commodo quis minim ad mollit. Ea irure ad sint enim proident
        quis aliqua veniam esse labore aliquip ut nulla elit. Sit eiusmod duis
        do Lorem ea quis ut nostrud cillum. Consectetur tempor sit do deserunt
        dolor mollit aliqua cupidatat. Voluptate ipsum esse mollit fugiat
        aliquip proident veniam. Do eiusmod eu non in anim mollit do. Elit
        eiusmod cillum pariatur ad id veniam nulla ad veniam. Ipsum eu eiusmod
        adipisicing sit eu. Nulla dolore nulla dolor elit adipisicing eu
        voluptate consequat ut. Exercitation consectetur magna anim deserunt
        velit commodo do exercitation esse. Ea enim velit pariatur cillum aute.
        Sunt reprehenderit labore cupidatat pariatur proident esse.
        Reprehenderit velit minim exercitation excepteur tempor enim anim et
        reprehenderit labore velit ipsum ut. Proident eiusmod qui occaecat
        consectetur sunt officia cillum ut excepteur. Veniam deserunt elit ea
        eiusmod commodo ad dolor est. Duis laboris laborum exercitation nisi non
        consequat. Dolor consectetur aliqua reprehenderit commodo esse occaecat
        minim est dolor amet adipisicing quis aute laborum. Occaecat
        exercitation consectetur non fugiat aliquip cupidatat in laboris commodo
        deserunt irure in nisi. Nulla pariatur eu id labore adipisicing
        exercitation voluptate amet quis veniam aliqua laboris anim ea. Duis
        sunt cillum nisi enim non dolore adipisicing laborum proident sint.
      </p>
      <p>
        Cupidatat reprehenderit quis magna culpa dolore ea consequat laboris
        aute qui pariatur officia. Exercitation dolor excepteur incididunt nulla
        commodo. Sit dolor quis enim nisi elit culpa nisi enim. Veniam laborum
        esse deserunt sit anim aliqua laboris nisi fugiat ad ipsum velit fugiat.
        Labore laborum dolore nulla nulla deserunt culpa qui nulla commodo
        cillum quis culpa aute. Sunt occaecat sunt mollit aliqua non eu
        consequat ea. Commodo exercitation culpa cupidatat nulla id quis commodo
        commodo est voluptate cillum proident veniam mollit. Eiusmod pariatur
        minim ullamco quis qui ut dolore voluptate fugiat elit ut. Officia irure
        minim qui pariatur et nostrud aliquip sit reprehenderit irure
        reprehenderit adipisicing aliqua dolor. Mollit consequat Lorem eiusmod
        duis irure elit ipsum proident reprehenderit ad occaecat. Proident
        consequat commodo dolore eiusmod enim. Ut in est non consectetur
        proident dolor ullamco ea. Adipisicing dolore consectetur duis do ea
        tempor esse ex. Tempor sint voluptate exercitation deserunt id
        incididunt. Ex ipsum sint occaecat Lorem. Est id dolore non dolor est
        eiusmod deserunt quis. Reprehenderit deserunt reprehenderit id ut
        occaecat cillum nulla tempor consectetur dolore. Ea mollit voluptate
        laborum voluptate. Excepteur veniam sunt laboris sit reprehenderit
        consectetur excepteur eu enim et reprehenderit culpa. Sit mollit qui
        laborum cupidatat quis. Magna elit consequat deserunt aute officia do
        ullamco anim Lorem nisi. Dolore commodo eiusmod id reprehenderit nostrud
        do cupidatat velit consectetur culpa. Fugiat Lorem ut do occaecat elit
        consequat. Veniam mollit pariatur excepteur consequat ex esse culpa do
        duis eu mollit. Ullamco velit labore nisi irure consectetur adipisicing
        dolor sunt adipisicing in commodo qui tempor ipsum. Occaecat veniam
        aliquip commodo quis minim ad mollit. Ea irure ad sint enim proident
        quis aliqua veniam esse labore aliquip ut nulla elit. Sit eiusmod duis
        do Lorem ea quis ut nostrud cillum. Consectetur tempor sit do deserunt
        dolor mollit aliqua cupidatat. Voluptate ipsum esse mollit fugiat
        aliquip proident veniam. Do eiusmod eu non in anim mollit do. Elit
        eiusmod cillum pariatur ad id veniam nulla ad veniam. Ipsum eu eiusmod
        adipisicing sit eu. Nulla dolore nulla dolor elit adipisicing eu
        voluptate consequat ut. Exercitation consectetur magna anim deserunt
        velit commodo do exercitation esse. Ea enim velit pariatur cillum aute.
        Sunt reprehenderit labore cupidatat pariatur proident esse.
        Reprehenderit velit minim exercitation excepteur tempor enim anim et
        reprehenderit labore velit ipsum ut. Proident eiusmod qui occaecat
        consectetur sunt officia cillum ut excepteur. Veniam deserunt elit ea
        eiusmod commodo ad dolor est. Duis laboris laborum exercitation nisi non
        consequat. Dolor consectetur aliqua reprehenderit commodo esse occaecat
        minim est dolor amet adipisicing quis aute laborum. Occaecat
        exercitation consectetur non fugiat aliquip cupidatat in laboris commodo
        deserunt irure in nisi. Nulla pariatur eu id labore adipisicing
        exercitation voluptate amet quis veniam aliqua laboris anim ea. Duis
        sunt cillum nisi enim non dolore adipisicing laborum proident sint.
      </p>
      <p>
        Cupidatat reprehenderit quis magna culpa dolore ea consequat laboris
        aute qui pariatur officia. Exercitation dolor excepteur incididunt nulla
        commodo. Sit dolor quis enim nisi elit culpa nisi enim. Veniam laborum
        esse deserunt sit anim aliqua laboris nisi fugiat ad ipsum velit fugiat.
        Labore laborum dolore nulla nulla deserunt culpa qui nulla commodo
        cillum quis culpa aute. Sunt occaecat sunt mollit aliqua non eu
        consequat ea. Commodo exercitation culpa cupidatat nulla id quis commodo
        commodo est voluptate cillum proident veniam mollit. Eiusmod pariatur
        minim ullamco quis qui ut dolore voluptate fugiat elit ut. Officia irure
        minim qui pariatur et nostrud aliquip sit reprehenderit irure
        reprehenderit adipisicing aliqua dolor. Mollit consequat Lorem eiusmod
        duis irure elit ipsum proident reprehenderit ad occaecat. Proident
        consequat commodo dolore eiusmod enim. Ut in est non consectetur
        proident dolor ullamco ea. Adipisicing dolore consectetur duis do ea
        tempor esse ex. Tempor sint voluptate exercitation deserunt id
        incididunt. Ex ipsum sint occaecat Lorem. Est id dolore non dolor est
        eiusmod deserunt quis. Reprehenderit deserunt reprehenderit id ut
        occaecat cillum nulla tempor consectetur dolore. Ea mollit voluptate
        laborum voluptate. Excepteur veniam sunt laboris sit reprehenderit
        consectetur excepteur eu enim et reprehenderit culpa. Sit mollit qui
        laborum cupidatat quis. Magna elit consequat deserunt aute officia do
        ullamco anim Lorem nisi. Dolore commodo eiusmod id reprehenderit nostrud
        do cupidatat velit consectetur culpa. Fugiat Lorem ut do occaecat elit
        consequat. Veniam mollit pariatur excepteur consequat ex esse culpa do
        duis eu mollit. Ullamco velit labore nisi irure consectetur adipisicing
        dolor sunt adipisicing in commodo qui tempor ipsum. Occaecat veniam
        aliquip commodo quis minim ad mollit. Ea irure ad sint enim proident
        quis aliqua veniam esse labore aliquip ut nulla elit. Sit eiusmod duis
        do Lorem ea quis ut nostrud cillum. Consectetur tempor sit do deserunt
        dolor mollit aliqua cupidatat. Voluptate ipsum esse mollit fugiat
        aliquip proident veniam. Do eiusmod eu non in anim mollit do. Elit
        eiusmod cillum pariatur ad id veniam nulla ad veniam. Ipsum eu eiusmod
        adipisicing sit eu. Nulla dolore nulla dolor elit adipisicing eu
        voluptate consequat ut. Exercitation consectetur magna anim deserunt
        velit commodo do exercitation esse. Ea enim velit pariatur cillum aute.
        Sunt reprehenderit labore cupidatat pariatur proident esse.
        Reprehenderit velit minim exercitation excepteur tempor enim anim et
        reprehenderit labore velit ipsum ut. Proident eiusmod qui occaecat
        consectetur sunt officia cillum ut excepteur. Veniam deserunt elit ea
        eiusmod commodo ad dolor est. Duis laboris laborum exercitation nisi non
        consequat. Dolor consectetur aliqua reprehenderit commodo esse occaecat
        minim est dolor amet adipisicing quis aute laborum. Occaecat
        exercitation consectetur non fugiat aliquip cupidatat in laboris commodo
        deserunt irure in nisi. Nulla pariatur eu id labore adipisicing
        exercitation voluptate amet quis veniam aliqua laboris anim ea. Duis
        sunt cillum nisi enim non dolore adipisicing laborum proident sint.
      </p>
      <p>
        Cupidatat reprehenderit quis magna culpa dolore ea consequat laboris
        aute qui pariatur officia. Exercitation dolor excepteur incididunt nulla
        commodo. Sit dolor quis enim nisi elit culpa nisi enim. Veniam laborum
        esse deserunt sit anim aliqua laboris nisi fugiat ad ipsum velit fugiat.
        Labore laborum dolore nulla nulla deserunt culpa qui nulla commodo
        cillum quis culpa aute. Sunt occaecat sunt mollit aliqua non eu
        consequat ea. Commodo exercitation culpa cupidatat nulla id quis commodo
        commodo est voluptate cillum proident veniam mollit. Eiusmod pariatur
        minim ullamco quis qui ut dolore voluptate fugiat elit ut. Officia irure
        minim qui pariatur et nostrud aliquip sit reprehenderit irure
        reprehenderit adipisicing aliqua dolor. Mollit consequat Lorem eiusmod
        duis irure elit ipsum proident reprehenderit ad occaecat. Proident
        consequat commodo dolore eiusmod enim. Ut in est non consectetur
        proident dolor ullamco ea. Adipisicing dolore consectetur duis do ea
        tempor esse ex. Tempor sint voluptate exercitation deserunt id
        incididunt. Ex ipsum sint occaecat Lorem. Est id dolore non dolor est
        eiusmod deserunt quis. Reprehenderit deserunt reprehenderit id ut
        occaecat cillum nulla tempor consectetur dolore. Ea mollit voluptate
        laborum voluptate. Excepteur veniam sunt laboris sit reprehenderit
        consectetur excepteur eu enim et reprehenderit culpa. Sit mollit qui
        laborum cupidatat quis. Magna elit consequat deserunt aute officia do
        ullamco anim Lorem nisi. Dolore commodo eiusmod id reprehenderit nostrud
        do cupidatat velit consectetur culpa. Fugiat Lorem ut do occaecat elit
        consequat. Veniam mollit pariatur excepteur consequat ex esse culpa do
        duis eu mollit. Ullamco velit labore nisi irure consectetur adipisicing
        dolor sunt adipisicing in commodo qui tempor ipsum. Occaecat veniam
        aliquip commodo quis minim ad mollit. Ea irure ad sint enim proident
        quis aliqua veniam esse labore aliquip ut nulla elit. Sit eiusmod duis
        do Lorem ea quis ut nostrud cillum. Consectetur tempor sit do deserunt
        dolor mollit aliqua cupidatat. Voluptate ipsum esse mollit fugiat
        aliquip proident veniam. Do eiusmod eu non in anim mollit do. Elit
        eiusmod cillum pariatur ad id veniam nulla ad veniam. Ipsum eu eiusmod
        adipisicing sit eu. Nulla dolore nulla dolor elit adipisicing eu
        voluptate consequat ut. Exercitation consectetur magna anim deserunt
        velit commodo do exercitation esse. Ea enim velit pariatur cillum aute.
        Sunt reprehenderit labore cupidatat pariatur proident esse.
        Reprehenderit velit minim exercitation excepteur tempor enim anim et
        reprehenderit labore velit ipsum ut. Proident eiusmod qui occaecat
        consectetur sunt officia cillum ut excepteur. Veniam deserunt elit ea
        eiusmod commodo ad dolor est. Duis laboris laborum exercitation nisi non
        consequat. Dolor consectetur aliqua reprehenderit commodo esse occaecat
        minim est dolor amet adipisicing quis aute laborum. Occaecat
        exercitation consectetur non fugiat aliquip cupidatat in laboris commodo
        deserunt irure in nisi. Nulla pariatur eu id labore adipisicing
        exercitation voluptate amet quis veniam aliqua laboris anim ea. Duis
        sunt cillum nisi enim non dolore adipisicing laborum proident sint.
      </p>
    </>
  );
};

export default Example;

const ShrinkNavigationMenuScroll: React.FC = () => {
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // You can adjust this threshold as needed
      if (currentScrollY > 50) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isShrink ? "shrink" : ""}`}>
      <ul className="flex">
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </header>
  );
};
