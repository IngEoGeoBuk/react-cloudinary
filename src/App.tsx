import React, { useState } from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

function App() {

  const [imageSelected, setImageSelected] = useState<any>("");

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "mflotl43")
    
    Axios.post("https://api.cloudinary.com/v1_1/Put your Cloud name/image/upload", formData)
    .then((res) => console.log(res))
  };

  return (
    <div className="App">
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => {setImageSelected(e.target.files![0])}}
      />
      <button onClick={uploadImage}>Upload Image </button>
    </div>
  );
}

export default App;
