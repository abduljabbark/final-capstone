import React from 'react'

import HeroPart from '../../HeroPart/HeroPart'
import Footer from '../Footer/Footer'
import DetailBox from '../DetailBox/DetailBox'
import OfficeOutToLunch from '../OfficeutToLunch/OfficeOutToLunch'
import Cities from '../Cities/Cities'
import PutPocketSection from '../PutPocketSEction/PutPocketSection'
import HeroTextPart from '../HeroTextPart/HeroTextPart'


const HomeSection = () => {
  return (
<>



<HeroPart/>
<DetailBox/>
<Cities/>
<PutPocketSection/>
<OfficeOutToLunch/>
<HeroTextPart/>
<Footer/>
</>

  )
}

export default HomeSection