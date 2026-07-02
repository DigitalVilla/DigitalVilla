import React from 'react'
import Slide from '../components/Slide.js'

const slides = [
  {
    image: 'https://assets.digitalvilla.ca/pages/old-games.jpg',
    title: 'Up for a Challenge?',
    link: 'https://match-io.netlify.com',
    dek: {
      top: ["Let's play Match.io!"],
      bottom: [
        'A minimalistic memory game',
        'with sleek animations and an',
        'advance randomized algorithm.',
        '...',
        'Beat the game in 24 moves or less!',
      ],
    },
    cta: "Let's play!",
  },
]

export default React.memo(function Private(props) {
  return (
    <>
      {slides.map((slide, i) => (
        <Slide key={`${slide.title}-${i}`} imageFirst slide={slide} index={i} />
      ))}
    </>
  )
})
