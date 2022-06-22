import React from "react"
import IconPlay from "../../Icons/Play"
import IconPause from "../../Icons/Pause"
import { useAppSelector, useAppDispatch } from "../../../hooks/redux"
import { changeIconPlay } from "../../../redux/features/audioSlice"

const PlayControl:React.FC = () => {

  const isPlay = useAppSelector((state) => state.audio.isPlay)
  const dispatch = useAppDispatch()

  const handlePlaySong = () => {
    isPlay
    ? dispatch(changeIconPlay( false ))
    : dispatch(changeIconPlay( true ))
  }

  return (
    <button
      className={"w-[42px] h-[42px] mx-2 my-0 style__buttons"}
      title="Play Song"
      onClick={ handlePlaySong }
    >
      {
        isPlay
        ? <IconPause setColor="white" setWidth="24px" setHeight="24px"/>
        : <IconPlay setColor="white" setWidth="24px" setHeight="24px"/>
      }
    </button>
  )
}

export default PlayControl