import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Modal, Button, Card } from "react-bootstrap";
import roomicon from '../icons/surgery-room.svg'
import '../css/OperationRoom.css';
import EditRoom from './EditRoom';
import 'react-table-6/react-table.css';
import matchSorter from 'match-sorter'
var ReactTable = require('react-table-6').default;



const DoctorDeletedAlert = withReactContent(Swal)
class OperationRoomTable extends React.Component {
    constructor(props) {
        super(props);

        this.renderTableData = this.renderTableData.bind(this);
    }

    deleteRoom(room) {

        let token = localStorage.getItem('token');
        const options = {
            headers: { 'Authorization': 'Bearer ' + token}
        };

        //console.log(doctor.email);

         axios.post("http://localhost:8081/api/rooms/deleteroom", room, options).then(
             console.log(room),
             (resp) => this.onSuccessHandler(resp),
             (resp) => this.onErrorHandler(resp)
         );

         console.log(room);
    }

    onErrorHandler(resp) {
      console.log("error");
      alert("error");

    }

    onSuccessHandler(resp) {
        window.location.reload();
    
    }

    renderTableData() {
        
        return this.props.content.map((room, index) => {
            const { name, number,reserved } = room//destructuring
            return (
         
         
               <tr key={name.toString()}>
                 <img src={roomicon} style={{ width: '20px',top:'10px',height:'20px'}} />
                 <td>{room.name}</td>
                 <td>{room.number}</td>
                 <td>{room.reserved}</td>
                 <td><Button className="deleteRoom" variant="outline-danger" onClick={this.deleteRoom.bind(this, room)} >Delete</Button></td>
                 <td><EditRoom/></td>
               </tr>
         
         
         
            )
         })
      
        }
    
        render() {

            const rooms = [];

            for (var i = 0; i < this.props.content.length; i++) {

                const name = this.props.content[i].name;
                const number = this.props.content[i].number;
                const reserved =  this.props.content[i].reserved;

                let res = reserved;

                console.log(this.props.content[i]);
              
              
               {rooms.push({name : name, number: number,reserved: res});}
              
              }

            const columns = [

                  {
                    accessor: "name",
                    Header:"Name",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                  filterAll: true
                  },
                  {
                    accessor: "number",
                    Header: "Number",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["number"] }),
                  filterAll: true
                  },
                  {
                    accessor: "reserved",
                    Header: "Reserved",
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["reserved"] }),
                  filterAll: true
                  },
                  {
                    accessor: "number",
                    Header: "Delete",
                    Cell: ({ original }) => (<Button className="deleteRoom" variant="outline-danger" onClick={this.deleteRoom.bind(this, original)} >Delete</Button>)
                  },
                  {
                    accessor: "number",
                    Header: "Edit",
                    Cell: ({ original }) => (<EditRoom content={original}/>)
                  }
            ];

            return (
              <div>
                <ReactTable data={rooms} columns={columns}
                  minRows={0}
                  showPagination={false}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]) === filter.value} />
              </div>
            )
    
        }
}
export default OperationRoomTable;
