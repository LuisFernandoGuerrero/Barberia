import ReactPlayer from "react-player"

const Video = () => {

    let videosrc = "/video/video1.mp4"

    return (
        <>
            <ReactPlayer 
                width="100%"
                height="500px"
                url={videosrc}
                controls={true}
                light={false}
                pip={true}
            />         
            <source src={videosrc} type="video/mp4" />
        </>
    )
}

export default Video