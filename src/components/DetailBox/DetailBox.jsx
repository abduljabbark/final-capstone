import React from 'react'
import Heading from './Heading'
import HeroImg from './HeroImg'
import CallAction from './CallAction'

const DetailBox = () => {
  return (
    <div  style={styles.Detailbox}>
        <Heading/>
        <HeroImg/>
        <CallAction/>
    </div>
  )
}
const styles = {
    Detailbox: {
      height:"750px"
       
    },
}
export default DetailBox