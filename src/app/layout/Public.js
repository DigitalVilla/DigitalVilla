import React from 'react'
import Slide from '../components/Slide.js'

const slides = [
  {
    image: 'https://assets.digitalvilla.ca/pages/mac-rainbow.jpg',
    title: 'Professional Work',
    dek: {
      top: [
        'Highlighted projects for',
        <>
          <a href="https://quantifi.ca">Quantifi</a>,{' '}
          <a href="https://thearcane.com">The Arcane</a>
        </>,
        <>
          and <a href="https://mobilityquotient.com">Mobility Quotient</a>
        </>,
      ],
      bottom: [
        'Applied Technologies:',
        'Typescript, React (DOM/Native),',
        'AWS, NodeJS, Ruby, Angular & PHP',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/quantifi.jpg',
    title: 'Quantifi',
    link: 'https://quantifi.ca',
    dek: {
      top: [
        'Calgary based Fintech company',
        'Helping customers to better assess',
        'and manage consumer credit risk.',
      ],
      bottom: [
        'Migrated our marketing page from',
        'Contentful to our own react CRM.',
        'Developed all of our latest products',
        'as AWS serverless applications.',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/worksheet.png',
    title: 'Quantifi App',
    link: 'https://signup.quantifi.ca',
    dek: {
      top: [
        'Migrated our core business application',
        'to a modern micro-services architecture.',
        'With a new UI/Component library from scratch',
      ],
      bottom: [
        'Now our customers can work faster',
        'and enjoy a beautiful/responsive design',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/quantum.png',
    title: 'Quantifi Systems',
    dek: {
      top: [
        'To improve dev and deployment processes;',
        'I moved all of our apps and APIs to a single',
        'monorepo. (Currently it is not open-source)',
      ],
      bottom: [
        'To manage each technology in our stack',
        'I developed a Node/bash CLI framework.',
        'Now each dev phase can be triggered with',
        'simple tech-agnostic commands',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/greyeagle.png',
    title: 'Grey Eagle',
    link: 'https://greyeagleresortandcasino.ca/',
    dek: {
      top: [
        "Calgary's most famous Casino has",
        'a new modern and attractive website',
      ],
      bottom: [
        'Web performance and accessibility',
        'Carousels and map integration',
        'COVID popup implementation',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/kit.jpg',
    title: 'KIT Online Store',
    link: 'http://kitinteriorobjects.previewurl.ca/',
    dek: {
      top: [
        'I was in charge of creating an e-commerce MVP',
        'for a local furniture store in Calgary, AB',
      ],
      bottom: [
        'Unfortunately the client was affected by COVID-19',
        'and their portal could not move to development',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/tlc.jpg',
    title: 'TLC Pricing Tool',
    link: 'https://tlc.previewurl.ca/quoting-tool/pricing.php',
    dek: {
      top: [
        'TLC was looking for an innovative way',
        'to showcase their high-end services.',
      ],
      bottom: [
        'I was assigned to build them a web app.',
        'TLC loved it so much that Arcane has earned',
        'their trust to build them a real website.',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/winsight.jpg',
    title: 'Winsight',
    link: 'https://winsightmedia.com/',
    dek: {
      top: [
        "After redesigning each of Winsight's",
        'brands we upgraded its main website.',
      ],
      bottom: [
        'They wanted to emphasize a people',
        'centred company comes before being',
        'a multimillion-dollar food industry.',
      ],
    },
  },
  {
    image: 'https://assets.digitalvilla.ca/projects/justbeer.jpg',
    title: 'JustBeer',
    link: 'https://justbeerapp.com/guides',
    dek: {
      top: [
        'The app for beer lovers around the world.',
        'Research new beers, and connect with the locals.',
      ],
      bottom: [
        'Data personalization based on location.',
        'Advanced SEO and accessibility practices.',
        'Google ads and JSON-ld compatibility.',
      ],
    },
  },
]

export default React.memo(function Public(props) {
  return (
    <>
      {slides.map((slide, i) => (
        <Slide key={`${slide.title}-${i}`} slide={slide} index={i} />
      ))}
    </>
  )
})
