import { opensans, poppins } from "@/FontFace";


export default function Home() {
  return (
    <>
      <h2 className={`headTitlePoppins font-normal text-[32px] ${poppins.variable}`}>Head title bold</h2>
      <h2 className="font-medium text-[32px]">Head title medium</h2>
      <h2 className="font-semibold text-[32px]">Head title semibold</h2>
      <h2 className="font-normal text-[32px]">Head title regular</h2>
      <h2 className="font-light text-[32px]">Head title light</h2>
      <h2 className="font-extralight text-[32px]">Head title extralight</h2>
      <h2 className="font-extrabold text-[32px]">Head title extrabold</h2>
      <h2 className="font-black text-[32px]">Head title black</h2>
      <p className={`desc font-medium ${opensans.variable}`}>Fugiat nulla ipsum sint laborum aute.</p>
      <p className={`desc font-semibold ${opensans.variable}`}>Fugiat nulla ipsum sint laborum aute.</p>
    </>
  );
}
