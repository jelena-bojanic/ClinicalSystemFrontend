import React from "react";
import {Route, withRouter, Switch } from "react-router-dom";
import axios from 'axios';
import { Form, DropdownButton, Button, ControlLabel, Dropdown,Card } from "react-bootstrap";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AppointmentReqTable from "./AppointmentReqTable";
import sad from '../icons/sad.svg';


class AppointmentRequests extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            requests: []
        }

        let token = localStorage.getItem('token');
        const options = {
            headers: { 'Authorization': 'Bearer ' + token}
        };

        axios.get("http://localhost:8081/api/appointmentrequest/all",options).then(
            (resp) => this.onSuccessHandler(resp),
            (resp) => this.onErrorHandler(resp)
        );
    }

    onSuccessHandler(resp) {


        var temp = [];

        for (var i = 0; i < resp.data.length; i++) {

            var startTime =  resp.data[i].startTime.toString();
            var endTime =  resp.data[i].endTime.toString();

            console.log(endTime);
            console.log(startTime);

            temp.push({startTime:startTime,endTime:endTime,id:resp.data[i].id,date:resp.data[i].date,
            examTypeName:resp.data[i].examTypeName,name:resp.data[i].name,doctorid:resp.data[i].doctorid,
            doctorEmail:resp.data[i].doctorEmail,start:resp.data[i].start});

        }

        this.setState({
            requests: temp
        });

    }

    onErrorHandler(response) {
        alert("Error response: Uncovered case");
    }

    render() {
      if(this.state.requests.lenght == 0)
      {
        return (
            <div>
                <div className="col-md-10-drcards">
                        <br />
                        <AppointmentReqTable content={this.state.requests} />
                    </div>
            </div>
        )
      }else {

        return (
          <div style={{margin:'200px 0px 0px 200px',width:'60%'}}>
          <Card>
          <Card.Body style={{textAlign:'center'}}>
          Currently no requests to manage.
          <br/>
          <Card.Img src={sad} style={{height:'50px',width:'50px',margin:'20px 0px 0px 0px'}}></Card.Img>

          </Card.Body>
          </Card>
          </div>

        );
      }
    }

} export default withRouter(AppointmentRequests);
