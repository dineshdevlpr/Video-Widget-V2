import './card.css'
import video from '../asset/sample-video.mp4'

export default function Card  ({ item }) {
    return (
      <div style={{ textAlign: "center" , margin : "3px" }}>

        <video className="video_widget" controls poster={item.imageUrl}
                style={{
                    width: "210px",
                    height: "160px",
                    margin: "5px",
                    padding : "10px"
                }}>
        <source src={video} type="video/mp4"/>
        Note : Your browser does not support the video tag.
        </video>

        <p style={{ fontSize: "15px" }}>{(item.title).toUpperCase()}</p>
        
      </div>
    );
  };