import AppLayout from "@/layout/AppLayout";
import Banner from "@/layout/Banner";
import Image from "next/image";
import UsersList from './../../components/UsersList';

export default function Service() {
  return (
    <>
    <div className="content">
      <AppLayout>
        <Banner title="Service" desc="Enim cillum excepteur est officia id magna ex do ipsum ex reprehenderit mollit eu eiusmod."/>
        <div className="container mx-auto">
          <UsersList/>
        </div>
      </AppLayout>
    </div>
    </>
  );
}
