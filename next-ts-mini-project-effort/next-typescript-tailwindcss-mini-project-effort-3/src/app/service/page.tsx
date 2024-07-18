"use client"
import Banner from '@/components/banner'
import AppFetchData from '@/components/restapifetchdata/6';
import MainLayout from '@/layout/MainLayout';

const Service = () => {
  return (
    <MainLayout>
        <Banner title="Service page" description="Quis sint sunt eu pariatur sint irure magna velit sunt excepteur eu."/>
        <AppFetchData/>
    </MainLayout>
  )
}

export default Service