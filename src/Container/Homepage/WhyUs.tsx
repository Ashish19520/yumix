import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import styled from 'styled-components'

function WhyUs () {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [image, setImage] = useState<string>('/images/work1.png')
  const [toggleFunction, setToggleFunction] = useState<boolean>(true)

  const [image_blue_rock_top, setImage_blue_rock_top] = useState<string>('80%')
  const [image_blue_rock_left, setImage_blue_rock_left] =
    useState<string>('15%')

  const [image_yellow_rock_top, setImage_yellow_rock_top] =
    useState<string>('-20%')
  const [image_yellow_rock_left, setImage_yellow_rock_left] =
    useState<string>('70%')

  const [image_blue_BIG_circle_top, setImage_blue_BIG_circle_top] =
    useState<string>('-15%')
  const [image_blue_BIG_circle_left, setImage_blue_BIG_circle_left] =
    useState<string>('15%')

  const [image_blue_SMALL_circle_top, setImage_blue_SMALL_circle_top] =
    useState<string>('50%')
  const [image_blue_SMALL_circle_left, setImage_blue_SMALL_circle_left] =
    useState<string>('93%')

  const [image_PINK_circle_top, setImage_PINK_circle_top] =
    useState<string>('100%')
  const [image_PINK_circle_left, setImage_PINK_circle_left] =
    useState<string>('70%')

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated')
          entry.target.classList.add('animate__fadeIn')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.bannerList_hidden')
    hiddenElements.forEach(el => observer.observe(el))
  }, [])

  const points = [
    {
      title: 'Save Time',
      para: 'Skip the Learning Curve. Eservz has the established best practices to help you quickly achieve your eCommerce and Amazon goals.',
      image: '/images/work1.png'
    },
    {
      title: 'Save Money',
      para: 'No need to create a new department or hire additional staff. When you work with us, you get a new E‑Commerce division.',
      image: '/images/work2.png'
    },
    {
      title: 'Make Money',
      para: 'We have worked with 100s of partners. We know what to do, what to analyze & how to focus on getting you a Return on Investment',
      image: '/images/work3.png'
    },
    {
      title: 'Be Secure',
      para: 'We value the security of our partners & take your confidentiality very seriously. We are insured for any breaches of data, so you can rest at ease.',
      image: '/images/work4.png'
    }
  ]

  function showElistratorOnSomeInterval () {
    if (selectedIndex === 0 || selectedIndex <= 3) {
      setTimeout(() => {
        setSelectedIndex(1)
        setImage('/images/work2.png')
        setImage_blue_rock_top('95%')
        setImage_blue_rock_left('70%')
        setImage_yellow_rock_top('-28%')
        setImage_yellow_rock_left('15%')

        setImage_blue_BIG_circle_top('85%')
        setImage_blue_BIG_circle_left('6%')

        setImage_PINK_circle_top('-8%')
        setImage_PINK_circle_left('80%')
      }, 2000)

      setTimeout(() => {
        setSelectedIndex(2)
        setImage('/images/work3.png')
        setImage_blue_rock_top('-20%')
        setImage_blue_rock_left('70%')
        setImage_yellow_rock_top('92%')
        setImage_yellow_rock_left('15%')

        setImage_blue_BIG_circle_top('100%')
        setImage_blue_BIG_circle_left('70%')

        setImage_PINK_circle_top('-20%')
        setImage_PINK_circle_left('15%')
      }, 4000)

      setTimeout(() => {
        setSelectedIndex(3)
        setImage('/images/work4.png')
        setImage_blue_rock_top('-35%')
        setImage_blue_rock_left('13%')
        setImage_yellow_rock_top('80%')
        setImage_yellow_rock_left('70%')

        setImage_blue_BIG_circle_top('-8%')
        setImage_blue_BIG_circle_left('80%')

        setImage_PINK_circle_top('85%')
        setImage_PINK_circle_left('6%')
      }, 6000)

      setTimeout(() => {
        setSelectedIndex(0)
        setImage('/images/work1.png')
        setImage_blue_rock_top('80%')
        setImage_blue_rock_left('15%')
        setImage_yellow_rock_top('-20%')
        setImage_yellow_rock_left('70%')

        setImage_blue_BIG_circle_top('-15%')
        setImage_blue_BIG_circle_left('15%')

        setImage_PINK_circle_top('100%')
        setImage_PINK_circle_left('70%')
      }, 8000)
    }
  }

  if (selectedIndex === 0) {
    showElistratorOnSomeInterval()
  }

  return (
    <Box style={{ background: '#fffcfc' }}>
      <Box
        className='bannerList_hidden'
        style={{ maxWidth: '100%', margin: 'auto', padding: '100px' }}
      >
        <Grid container alignItems='center'>
          <Grid
            position='relative'
            item
            xs={12}
            md={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px'
            }}
          >
            <Box
              style={{
                width: '80%',
                aspectRatio: 1,
                borderRadius: '50%',
                backgroundColor: '#F1F6FF'
              }}
            ></Box>
            <Box
              style={{
                width: '80%',
                position: 'absolute',
                top: '40%',
                left: '50%',
                zIndex: '1200',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <m.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                // src={points[selectedIndex].image}
                src={image}
                alt=''
                width='100%'
                className='fold'
              />
            </Box>

            <Box
              style={{
                width: '30%',
                position: 'absolute',
                top: `${image_yellow_rock_top}`,
                left: `${image_yellow_rock_left}`
              }}
            >
              <m.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                src='./images/rock_branchwork_yellow_Cube.png'
                alt=''
                width='100%'
              />
            </Box>

            <Box
              style={{
                width: '20%',
                position: 'absolute',
                top: `${image_blue_rock_top}`,
                left: `${image_blue_rock_left}`
              }}
            >
              <m.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                src='./images/Rock_whywork_blue.png'
                alt=''
                width='100%'
              />
            </Box>

            <Box
              style={{
                width: '10%',
                position: 'absolute',
                top: `${image_blue_BIG_circle_top}`,
                left: `${image_blue_BIG_circle_left}`
              }}
            >
              <m.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                src='./images/circle_blue_m.png'
                alt=''
                width='70%'
              />
            </Box>

            <Box
              style={{
                width: '10%',
                position: 'absolute',
                top: `${image_blue_SMALL_circle_top}`,
                left: `${image_blue_SMALL_circle_left}`
              }}
            >
              <m.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                //  src="./images/circle_blue_s.png"
                src='./images/circle_blue_m.png '
                alt=''
                width='70%'
              />
            </Box>

            <Box
              style={{
                width: '10%',
                position: 'absolute',
                top: `${image_PINK_circle_top}`,
                left: `${image_PINK_circle_left}`
              }}
            >
              <m.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                src='./images/circle_pink_m.png'
                alt=''
                width='100%'
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {points.map((item, index) => {
              return (
                <Box
                  onMouseEnter={() => setImage(points[index]?.image)}
                  onMouseLeave={() => setImage(points[selectedIndex]?.image)}
                  key={item?.title}
                  style={{ display: 'flex', gap: '15px' }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: `6px solid ${
                          selectedIndex >= index ? '#5856e9' : '#D1D1D1'
                        }`,
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        setImage(points[index].image)
                        setSelectedIndex(index)
                      }}
                    />
                    <Box
                      style={{
                        width: '2px',
                        height: '180px',
                        backgroundColor:
                          selectedIndex > index ? '#5856e9' : '#D1D1D1',
                        display: index === points.length - 1 ? 'none' : 'block'
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      height: index === points.length - 1 ? 'auto' : '150px',
                      width: '100%',
                      position: 'relative',
                      top: '-10px'
                    }}
                  >
                    <FontWrapper>
                      <Typography
                        fontSize='24px'
                        fontFamily='Poppins-Medium'
                        color={selectedIndex === index ? '#5856e9' : '#3A3B44'}
                        className='whyus-title'
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          setImage(points[index].image)
                          setSelectedIndex(index)
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </FontWrapper>
                    <FontWrapper>
                      <Typography
                        fontSize='14px'
                        fontFamily='Montserrat'
                        color='#828490'
                        style={{ cursor: 'pointer' }}
                        className='whyus-para'
                        onClick={() => {
                          setImage(points[index]?.image)
                          setSelectedIndex(index)
                        }}
                      >
                        {item?.para}
                      </Typography>
                    </FontWrapper>
                  </Box>
                </Box>
              )
            })}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default WhyUs

const FontWrapper = styled.div`
  .whyus-title {
    @media (max-width: 600px) {
      font-size: 14px;
      margin: '100px';
    }
    @media (max-width: 320px) {
      font-size: 10px;
    }
  }

  .whyus-para {
    @media (max-width: 600px) {
      font-size: 11px;
    }
    @media (max-width: 320px) {
      font-size: 7px;
    }
  }
`
