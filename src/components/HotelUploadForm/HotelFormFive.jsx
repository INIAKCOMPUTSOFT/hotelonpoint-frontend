import { connect, Field } from "formik";
import React, { Component } from "react";
import './upload.css';

const newRooms = {
  roomName: "",
  roomType: "",
  roomSize: "",
  roomsOfThisType: "",
  bedType: "",
  bedNumber: "",
  weekendRate: "",
  standardRate: "",
  occupantNumber: "",
  roomPrice: "",
  roomAmenities: [],
  moreAmenities: []
};

class HotelFormFive extends Component {
  render() {
    const { values } = this.props.formik;

    console.log("Hello there");
    console.log(this.props);
    return (
      <div className="container bigd">
     

          <div className="p-3 custom-shadow">
            <h3>Upload Picturs of your hotel</h3>
          </div>
          <div className="col-md-6">
            <div class="form-group">
              <Field type="file" name="files" className="form-control" />
              <Field type="file" name="files" className="form-control" />
              <Field type="file" name="files" className="form-control" />
              <Field type="file" name="files" className="form-control" />
              <Field type="file" name="files" className="form-control" />
            </div>
          </div>
        </div>
    );
  }
}

export default connect(HotelFormFive);
