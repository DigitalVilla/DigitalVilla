import React from 'react'

export default function Slide({ slide, index, imageFirst }) {
  const handleClick = ({ target }) => {
    const url = target.getAttribute('data-url')
    window.open(url, '_blank')
  }
  return (
    <div className="slide custom" data-anchor={'slide' + index}>
      <div className={'content slide' + index}>
        {imageFirst && <Image src={slide.image} />}
        <div className="leyend">
          <h2>{slide.title}</h2>
          <div className="dek">
            {slide.dek.top && <Deck dekList={slide.dek.top} />}
            <span className="break"></span>
            {slide.dek.bottom && <Deck dekList={slide.dek.bottom} />}
            <span className="break button"></span>
            {slide.link && (
              <button
                type="button"
                className="btn"
                data-url={slide.link}
                onClick={handleClick}
              >
                Check it out
              </button>
            )}
          </div>
        </div>
        {!imageFirst && <Image src={slide.image} />}
      </div>
    </div>
  )
}

const Image = ({ src }) => {
  let title = src.split('/')
  title = title[title.length - 1].split('.')
  title = title[0]

  return (
    <figure className="noSelect">
      <img data-src={src} alt={title} />
    </figure>
  )
}

const Deck = ({ dekList }) => {
  return dekList.map((line, i) => {
    return typeof line === Object ? line : <p key={i}>{line}</p>
  })
}
