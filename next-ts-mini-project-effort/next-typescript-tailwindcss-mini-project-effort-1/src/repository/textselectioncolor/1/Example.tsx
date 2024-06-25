"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { ROTATING_TEXTS } from "./constants";
import { RotatingText } from "./interface";
import "./style.css";

const Example = () => {
  return (
    <>
      <p>
        Ullamco enim cillum nisi reprehenderit ullamco enim nostrud adipisicing.
        Voluptate culpa commodo ut aliqua minim ipsum. Sit commodo et magna
        consequat laborum occaecat sint adipisicing proident. Non est pariatur
        nisi nisi qui veniam adipisicing pariatur adipisicing aute non eiusmod
        elit do. Aliquip eiusmod nisi velit sint nisi aute commodo aute
        consequat et do dolore eu. Lorem velit consequat do id elit aute
        voluptate duis reprehenderit cillum laborum. Elit dolore dolore quis
        commodo commodo occaecat. Dolor velit laboris id commodo. Ut Lorem
        adipisicing ullamco consequat do ea non ex commodo. Sit tempor esse
        consequat nulla ut non Lorem culpa elit enim occaecat velit eu. Esse in
        aute reprehenderit aute in dolore qui velit enim consequat consectetur.
        Nostrud aute Lorem occaecat ullamco nulla pariatur do. Nostrud sunt elit
        aliqua voluptate aute cupidatat est. Et nulla commodo occaecat duis
        cillum fugiat id occaecat cupidatat. Do ea consectetur esse nostrud aute
        ex consectetur mollit. Aliquip cupidatat commodo dolor fugiat velit est
        pariatur sit est dolore consectetur. Nulla pariatur cupidatat elit
        laboris consequat consectetur dolore cillum. Incididunt voluptate
        commodo esse occaecat. Est consequat anim aliquip duis. Deserunt Lorem
        id nisi cillum. Ipsum ullamco ea irure id tempor do duis. Commodo eu
        reprehenderit eiusmod sunt tempor ipsum enim est eiusmod proident enim.
        Mollit mollit exercitation adipisicing exercitation amet veniam proident
        cupidatat non. Cupidatat do labore est sint consequat Lorem id est dolor
        laboris esse. Est consectetur culpa eu ea amet anim officia quis. Tempor
        sunt anim mollit sunt ipsum minim tempor dolore non consequat veniam
        nisi. Exercitation tempor irure occaecat mollit est exercitation id eu
        excepteur. Et laborum officia nulla anim non et id consectetur nostrud
        aliqua laborum. Culpa veniam mollit esse eiusmod ad. Id id culpa est
        laborum excepteur ullamco eiusmod eu ut. Qui cupidatat ullamco ad do
        culpa qui consectetur nostrud officia ad quis ad nisi commodo.
        Incididunt nisi ullamco ullamco aute nulla eu laboris velit adipisicing
        qui aliquip. Dolor cillum do irure culpa non ipsum in est minim commodo
        ad cillum ea. Laboris ea ipsum ex mollit duis amet pariatur et veniam
        dolore. Reprehenderit deserunt excepteur irure ex aute ea ut et
        exercitation ipsum aliqua nostrud. Fugiat commodo ad in in. Incididunt
        pariatur deserunt amet elit dolore ut. Est duis veniam proident eiusmod
        commodo elit elit occaecat est. Commodo voluptate do veniam enim in
        consectetur aliquip dolore consectetur reprehenderit fugiat labore
        eiusmod. Est exercitation ex est reprehenderit officia nulla et sit
        occaecat elit aliqua. Dolore fugiat ut sint adipisicing enim eiusmod
        eiusmod do nostrud proident. Reprehenderit excepteur ea culpa
        adipisicing commodo exercitation qui labore reprehenderit cillum
        incididunt nulla. Elit cupidatat velit aliquip ex fugiat nisi aute quis
        incididunt voluptate proident cupidatat. Laboris esse enim magna dolor
        mollit commodo nisi officia sunt laborum culpa. Veniam quis officia
        veniam aute culpa. Consequat adipisicing magna culpa ut mollit labore
        velit dolore tempor reprehenderit dolor dolore. Laborum cillum et mollit
        est Lorem laborum. Sit non consectetur ea sit excepteur aliquip culpa.
        Eiusmod dolor consequat ad nulla velit aliqua. Labore occaecat ut eu ea
        commodo occaecat eu adipisicing laborum ipsum ipsum voluptate.
      </p>
    </>
  );
};

export default Example;
