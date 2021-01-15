import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from "./FileUpload";
import Chat from "./Chat";
import './App.css';
import { Button } from 'react-bootstrap';


class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      pictures: [],
      imageChat: null,


    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);


  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });

    firebase.database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val()),


      });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log('Ha inicado sesion'))
      .catch(error => console.log('Error'))
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log('Ha salido'))
      .catch(error => console.log('Error'))
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {

      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      })

      task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('El archivo esta disponible en', downloadURL);
        this.setState({
          imageChat: downloadURL,

        });

      });


    }, error => {

      console.error(error.message);
    }, () => {
      const record = {
        photoURL: this.state.user.photoURL,
        displayName: this.state.user.displayName,
        image: this.state.imageChat,

      }
      console.log(task.snapshot.ref.getDownloadURL());
      const dbRef = firebase.database().ref('pictures');
      const newPicture = dbRef.push();
      newPicture.set(record);
    });

  }

  renderLoginButton() {
    if (this.state.user) {
      return (


        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
          <br/>
          <p>{this.state.user.displayName}</p>

          <div class="row align-items-start">
            <div class="col">
              <Chat />
            </div>
            <div class="col">
              <div className="chat-area" >
              {
                this.state.pictures.map(picture => (
                  <div className="App-card">
                    <figure className="App-card-image">
                      <img width="320" src={picture.image} alt={"Imagen"} />
                    </figure>
                  </div>
                ))

              }
              
              </div>
              <FileUpload onUpload={this.handleUpload} />

            </div>
          </div>


          <div>
            <Button type="submit" className="btn btn-dark px-5 mt-4" onClick={this.handleLogout}>CERRAR SESION</Button>
          </div>

        </div>


      );

    } else {
      return (
        <Button type="submit" className="btn btn-dark px-5 mt-4" onClick={this.handleAuth}>Login con Google</Button>
      );

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <br/>
          <h2>CHAT EN IONIC</h2>
          <br/>
          <p className="App-intro">
            {this.renderLoginButton()}
          </p>

        </header>
      </div>
    );
  }

}

export default App;
