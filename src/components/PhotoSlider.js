import React from 'react';
import { withRouter } from "react-router-dom";
import { Modal, Button, Card, Carousel } from "react-bootstrap";
import slider1 from '../icons/slider1.svg'
import slider2 from '../icons/slider2.svg'
import slider3 from '../icons/slider3.svg'
import '../css/PhotoSlider.css';


class PhotoSlider extends React.Component{

  constructor(props) {
      super(props);
}

render() {
    return ( <div>


        <Carousel style={{ height:'50px', width: 'auto',top:'60px', bottom:'0', left:'0', right:'0', position: 'absolute'}}>
            <Carousel.Item>
                  <img
                  className="d-block w-100" src={slider1} alt="First slide"/>

                  <Carousel.Caption className="text">

                  <h1>Welcome to the Clinical System!</h1>
                  <p>
                    This system is designed for doctors, nurses and patients.
                    We're here to help you!
                    </p>
                    <font size="10" ><i style={{'text-transform':'capitalize'}}>Hello {this.props.user.name}</i></font>

                  </Carousel.Caption>


            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100" src={slider2} alt="Third slide"/>

                <Carousel.Caption className="text">

                <h1>Welcome to the Clinical System!</h1>
                <p>
                  This system is designed for doctors, nurses and patients.
                  We're here to help you!
                  </p>
                  <font size="10" ><i style={{'text-transform':'capitalize'}}>Hello {this.props.user.name}</i></font>


                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                  <img
                  className="d-block w-100" src={slider3} alt="Third slide"/>

                  <Carousel.Caption className="text">

                  <h1>Welcome to the Clinical System!</h1>
                  <p>
                    This system is designed for doctors, nurses and patients.
                    We're here to help you!
                    </p>
                    <font size="10" ><i style={{'text-transform':'capitalize'}}>Hello {this.props.user.name}</i></font>

                  </Carousel.Caption>

            </Carousel.Item>
        </Carousel>


      </div>
    )


}


}

export default withRouter(PhotoSlider);
