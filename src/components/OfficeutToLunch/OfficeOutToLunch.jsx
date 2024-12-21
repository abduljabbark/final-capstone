import React from 'react'
import Heading from '../DetailBox/Heading'
import BackgroundImage from './BackgroundImage'
import DetailAction from './DetailAction'

const OfficeOutToLunch = () => {
  return (
    <div  style={styles.Detailbox}>
    <Heading/>
    <BackgroundImage/>
    <DetailAction/>
</div>
  )
}
const styles = {
    Detailbox: {
      height:"650px"
       
    },
}
export default OfficeOutToLunch