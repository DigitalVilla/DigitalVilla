import React from 'react'
import Slide from '../components/Slide.js'

export default React.memo(function Private(props) {
  const slides = [
    {
      image: 'https://assets.digitalvilla.ca/pages/old-games.jpg',
      title: 'Up for a Challenge?',
      link: 'https://match-io.netlify.com',
      dek: {
        top: ["Let's play Match.io !"],
        bottom: [
          'A minimalistic React memory game with',
          'responsive layout, sleek animations,',
          'and an advance randomized algorithm.',
        ],
      },
    },
  ]

  return (
    <>
      {slides.map((slide, i) => (
        <Slide key={`${slide.title}-${i}`} imageFirst slide={slide} index={i} />
      ))}
    </>
  )
})
