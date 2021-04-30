import Wrapper from './presentation.styled'
import React, { useState } from 'react'

const UploadForm = () => {
  const [images, setImages] = useState([])

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        setImages([...images, reader.result])
      }, false);
    }
  }
  return (
    <Wrapper>
      <form>
      <label htmlFor="upload" className="file-upload">
        <input type="file" name="upload" id="upload" accept="image/*" onChange={handleUpload} />
        Upload File
      </label>
      </form>
      <section>
        {images && images.map((image, index) => (
          <div key={index} className="img-wrapper">
            <img src={image} alt={image} className="img-size" />
          </div>
        ))}
      </section>
    </Wrapper>
  );
}

export default UploadForm;
