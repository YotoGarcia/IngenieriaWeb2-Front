import React, { useEffect, useState } from "react"
import { getMedia } from "../../services/mediaService"
import { MediaCard } from "./MediaCard"


export const MediaView = () => {

  const [media, setMedia] = useState([]);

  const listarMedia = async () => {
    try {
      const { data } = await getMedia();
      console.log(data);
      setMedia(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarMedia();
  }, [])

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          media.map((media) => {
            return <MediaCard key={media.id} media={media} />
          })
        }
      </div>
    </div>
  )
}
