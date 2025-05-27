import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react'

const Page = async () => {

  return (
    <div className='wrapper page'>
        <Header subHeader='adrian@jsmastery.pro' title='Adrian | JS Mastery' userImg='/assets/images/dummy.jpg'  />

        <section className='video-grid'> 
            {dummyCards.map((card) => (
                <VideoCard
                key={card.id}
                {...card}
                />
            ))}
        </section>

    </div>
  )
}

export default Page