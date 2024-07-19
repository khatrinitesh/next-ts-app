"use client";
import React, { useRef, ReactNode, useEffect, useState } from "react";
// import './style.css';
import Link from "next/link";
import Image from "next/image";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoScreen from "../../../assets/video/movie.mp4";
import axios from "axios";

const Example: React.FC<{imageUrl: string; alt: string }> = ({imageUrl,alt}) => {
    
  
  return (
    <>
         <div className="resize-none">
      {/* Content of your resizable div */}
      <p>Quis do ea ea sint culpa sit voluptate nisi. Elit laborum nulla minim minim id incididunt irure non excepteur sint est. Dolore nulla sit cillum ex nisi amet occaecat. Magna labore elit quis mollit est elit nisi id sint voluptate duis. Dolore nulla quis proident anim id ullamco fugiat et. Elit amet pariatur aliqua elit dolore dolore id laboris. Reprehenderit commodo ex tempor ut nisi esse officia ex elit officia nostrud.

Quis sunt in dolore officia ad eiusmod pariatur aute do. Veniam mollit Lorem do ullamco est eiusmod. Consectetur officia proident ullamco amet ullamco aute fugiat sit tempor ad duis culpa aliquip incididunt. Tempor et cillum consequat deserunt sunt consequat do sit.

Et officia nostrud enim aute culpa. Dolor eu deserunt ipsum est et sunt tempor. Nisi aliquip velit excepteur id officia. Aliqua esse deserunt id esse non eiusmod laboris aliqua. Nisi dolor fugiat consectetur aliqua.

Anim anim sint magna id ullamco et cupidatat incididunt sint exercitation eu excepteur enim. Aliquip ut mollit tempor elit fugiat voluptate dolor cupidatat non qui voluptate laboris. Consectetur officia dolore elit adipisicing esse Lorem aliqua. Non non laboris velit ex laboris fugiat magna cillum veniam et voluptate.

Ut nulla veniam laborum id Lorem velit ut do aute. Cupidatat voluptate esse ullamco ea velit laborum mollit enim nisi laborum in culpa. Ipsum sunt et fugiat cillum Lorem incididunt excepteur aute aliquip mollit anim cupidatat aute. Irure incididunt excepteur quis eu id excepteur adipisicing.

Nisi laboris consectetur sit qui. Est officia irure ad adipisicing non aliquip excepteur labore non id minim esse ad magna. Non fugiat laboris deserunt minim. Elit sit nisi nisi proident aliqua.

Pariatur sunt in quis aute nostrud occaecat. Excepteur reprehenderit in laborum laborum dolor in eu consequat nostrud. Dolore ad ex magna sunt pariatur ipsum veniam culpa tempor mollit. Quis ipsum ad laborum deserunt.

Aute in Lorem Lorem do. Laboris cillum est officia commodo. Eu minim ad duis ex adipisicing aute excepteur aliquip eu irure commodo aute nostrud. Et voluptate cillum excepteur consequat dolor anim tempor id tempor commodo excepteur pariatur adipisicing.

Anim eu aliqua tempor commodo consequat ut consectetur anim. Cillum ullamco amet ipsum adipisicing nostrud. Laborum in cupidatat fugiat non nostrud irure ipsum. In amet excepteur deserunt veniam sint aliqua enim consectetur aliqua Lorem non.

Nisi fugiat est laborum ut ex Lorem dolore. Do esse Lorem ut laboris. Et cupidatat pariatur dolor mollit.</p>
      <p></p>
    </div>
    </>
  );
};

export default Example;
