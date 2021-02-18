import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [img, setimg] = useState('');
  const [service,setService] = useState([]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     heading: '',
  //     description: '',
  //     img: '',
  //     result: []
  //   };
  //   this.getServices = this.getServices.bind(this);
  // }
  // const getServices = () => {
  //   return fetch('http://localhost:9999/getservices',)
  //     .then(r => {
  //       if (r.ok) {
  //         return r.json();
  //       } else {
  //         setHeading(false);
  //         setDescription(false);
  //         setimg(false);
  //         return { success: false };
  //       }
  //     }).then(r => {
  //       service.push(r);
  //     console.log('service',service);
  //       if (r.success !== false) {
  //         setHeading(r.heading);
  //         setDescription(r.description);
  //         setimg(r.img);
          
  //       }
  //     });
  // }

  useEffect(() => {
    return fetch('http://localhost:9999/getservices',)
      .then(r => {
        if (r.ok) {
          return r.json();
          
        } else {
          setHeading(false);
          setDescription(false);
          setimg(false);
          return { success: false };
        }
      }).then(r => {
        service.push(r);
      console.log('service',service);
      if (r.success !== false) {
          setimg(r.img);
          setHeading(r.heading);
          setDescription(r.description);
          
        }
      });
  },[]);
  // const getServices=()=> {
  //   axios.get('http://localhost:9999/getservices',)
  //   .then(r => {
  //     if(r.ok) {
  //       return r.json();
  //     }
  //   });

  // }
  // // componentDidMount() {
  // //   this.getServices();
  // // }
  // useEffect(() => {
  //   getServices();
  //   }, [])

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col text-center">
          <h2 className="text-uppercase">OUR SERVICES</h2>
          <hr />
        </div>

      </div>
      <div className="row">
        {service.length > 0 ?
          service.map((data, index) => {
            console.log('data',data);
            return (
              <div className="col-md-4 mb-5" key={index}>
                <div className="">
                  <img className="card-img-top" src={data.img} alt="" />
                  <div className="card-body">
                    <h5 className="card-title mt-5">{data.heading}</h5>
                    <hr />
                    <p className="card-text">{data.description}</p>
                  </div>
                </div>
              </div>
            )
          }) : <p>no data..</p>

        }
      </div>
    </div>
  );
}

export default App;