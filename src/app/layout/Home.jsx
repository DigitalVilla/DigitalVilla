import React from "react"
import Icon from "../components/Icons.jsx"
import video from "../images/nebula.mp4"
import poster from "../constants/poster"
import Banner from "../components/Banner"
import Video from "../components/Video"
import isMedia from "../utils/isMedia"

const Home = props => {
  let icon = isMedia("mobile") ? "chevronCircleDn" : "mouse"

  const handlePageDown = () => {
    props.api.moveTo(2)
  }

  return (
    <>
      <Banner text1="Transforming Ideas" text2="With Living Designs" />
      <Video poster={poster} media={'https://digitalv.netlify.com/static/nebula-35cf0716cab568efbbfeee0d289009b5.mp4'} />
      <div className="scroll">
        <Icon
          className="scroll-icon svg-md"
          icon={icon}
          action={handlePageDown}
        />
      </div>
    </>
  )
}

export default Home
