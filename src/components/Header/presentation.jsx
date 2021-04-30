import Wrapper from './presentation.styled'

const Header = () => {
  return (
    <Wrapper>
      <div className="navbar">Photo Gallery</div>
      <header>
       <h2>Your Pictures</h2>
       <p>Choose pictures to upload to the photo gallery</p>
      </header>
    </Wrapper> );
}

export default Header;
