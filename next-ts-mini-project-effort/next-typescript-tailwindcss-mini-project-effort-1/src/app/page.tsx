import Banner from "@/components/banner";
import CustomApp from "@/repository/404error/1/Custom";

export default function Home() {
  
  return (
    <div className="content">
      <Banner
        title="Home"
        desc="Ex non tempor eu quis s int minim sint. Aute quis voluptate ad laboris quis consequat occaecat adipisicing consequat voluptate anim. Officia esse cillum ex duis elit cupidatat. Tempor aliquip anim elit cupidatat ex eu qui. Consectetur labore anim reprehenderit ut exercitation qui dolore eu. Aliquip excepteur id tempor do sunt aliqua sint aliqua dolor. Voluptate sunt et non officia laborum voluptate proident fugiat cupidatat voluptate officia deserunt elit. Duis commodo ipsum sunt minim mollit ea nostrud. In id dolor eiusmod non ea in. Non nulla aliqua do proident nulla id enim non ullamco aute."
        bannerStyle="bg-[silver] text-white"
      />
      <CustomApp/>
    </div>
  );
}
