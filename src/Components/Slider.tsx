import React from 'react'
import SwiftSlider from 'react-swift-slider'
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { FaChevronLeft } from "react-icons/fa";




export const Slider = () => {

    // const data =  [
    //     {'id':'1','src':'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg'},
    //     {'id':'2','src':'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg'},
    //     {'id':'3','src':'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
    //     {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
    //     {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
    //   ];

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];


    const arrowBtn=()=>{
        return(
            <div>
                <FaChevronLeft />
            </div>
        )
    }
  return (
    // <SwiftSlider data={data} height={200}/>
    
    // @ts-ignore
    <Carousel breakPoints={breakPoints} pagination={false} disableArrowsOnEnd={false} >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
    <Item>Four</Item>
    <Item>Five</Item>
    <Item>Six</Item>
    <Item>Seven</Item>
    <Item>Eight</Item>
  </Carousel>
  )
}
