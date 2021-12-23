import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./video-listing.css";
import Card from "./card";
//import SampleImg from '../asset/sample-img.jpg'


const settings = {
  slidesToShow: 5,
  infinite : true,
  slidesToScroll : 5,
  centerMode: false,
  rows : 2,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 4,
      },
    },
  ],
};

export default function VideoListing () {

    let [data, setdata] = useState([])
  
    useEffect( () => {
        async function fetchFunction() {
        let fetchData = await fetch("https://61be57632a1dd4001708a2d5.mockapi.io/sampledata/ventunotech/id", {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json"
          },
        })
        let apiData = await fetchData.json();
       
        setdata([...apiData]);
    }
    fetchFunction();
    }, [])
  return (
    <div style={{ margin: "30px 10px" }} className="carousel">
      <div className="container row col-12">
        <div className="container col-6 text-muted">
          <h1>Animation</h1>
        </div>
        <div className="container col-6"  style={{textAlign: "right"}}>
          <button className="btn btn-outline-primary" style={{ marginRight: "25px"}} onClick={()=>alert("Follow Button Clicked")}>
              + Follow
          </button>
        </div>
      </div>
      {/* <div className="container row col-12"> */}
        {/* <div className="container col-3 pb-1" style={{textAlign: "left"}}>
            <div className="avatar-container text-center mx-auto" style={{width:"100%", height : "200px", margin:"35px 50px 35px 35px"}}>
                <div className="card-up bg-for-card"></div>
                <div className="avatar mx-auto">
                    <img src={SampleImg} className="image" alt="avatar" />
                </div>
                <div className="card-body">
                    <h4 className="card-title font-weight-bold">Title as required</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
                    <button className="btn btn-primary" onClick={()=>alert("Watch Button Clicked")}>WATCH</button>
                </div>
                <div className="card-body">
                </div>
            </div>
        </div> */}
        <div style={{textAlign: "right"}}>
          <Slider {...settings}>
            {data.map((item) => (
              <Card item={item} />
            ))}
          </Slider>
        </div>
      {/* </div> */}
      
      
    </div>
  );
};
