import styled from 'styled-components'

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    width: 960px;
    margin: 0 auto;
  }
  .img-wrapper {
    width: 250px;
    height: 250px;
    margin: 2rem .7rem;
    overflow: hidden;
    border: 3px solid pink;
    border-radius: 5px;
  }
  .img-size {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  input[type="file"] {
    display: none;
  }
  .file-upload {
    display: inline-block;
    border: 3px solid pink;
    border-radius: 5px;
    padding: .5rem;
    font-weight: 400;
    cursor: pointer;
  }
`

export default Wrapper
