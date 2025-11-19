import Header from '@/components/common/Header'
import Banner from '@/components/home/Banner'
import TopCategories from '@/components/home/TopCategories'
import TopCollection from '@/components/home/TopCollection'
import React from 'react'

const page = () => {
  return (
    <main>
     <Banner/>
     <TopCategories/>
     <TopCollection/>
    </main>
  )
}

export default page