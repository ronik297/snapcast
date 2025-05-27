import Header from '@/components/Header';
import React from 'react'

type ParamsWithSearch = {
  params: {
    id: string;
  };
};

const Page = async ({ params } : ParamsWithSearch) => {
    const { id } = params;

  return (
    <div className='wrapper page'>
        <Header subHeader='adrian@jsmastery.pro' title='Adrian | JS Mastery' userImg='/assets/images/dummy.jpg'  />
        <h1 className='text-2xl font-karla'>USER ID: {id}</h1>
    </div>
  )
}

export default Page