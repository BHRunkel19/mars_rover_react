import React, {Component} from 'react';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';

const API_KEY = "n86qMaMLkYf1A5jFbSf97jA7oYRO0cue8IIUdsIE";

class GetImageForm extends Component {
  constructor(props) {
    super(props);

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.fetchRoverImage = this.fetchRoverImage.bind(this);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: 0,
    }
  }

  handleRover(event) {
    this.setState({rover: event.target.value})
  }

  handleCamera(event) {
    this.setState({camera: event.target.value})
  }

  handleSol(event) {
    this.setState({sol: event.target.value})
  }

  fetchRoverImage = () => {
    this.setState({camera: this.state.camera, rover: this.state.rover, sols: this.state.sols, images: []});

    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    let imageURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageURL).then(results => results.json()).then(data => {
      console.log(data);
      this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol, images: data.photos});
    }).catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  render() {
    return (
      <div className="form_container">
        <div className="form-group">

          <div className="form_wrapper">
          <label htmlFor="rover">
            Select Rover:
          </label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          <GetImageButton search={this.fetchRoverImage}/>
          </div>

          <div className="form_wrapper_two">
          <h3 className="roverName">View from: {this.state.rover}</h3>
          </div>

          <div className="image_grid">
          <ImageDisplay photos={this.state.images}/>
          </div>

        </div>
      </div>

    );
  }
}

export default GetImageForm;
