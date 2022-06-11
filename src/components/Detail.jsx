import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://cdn.vox-cdn.com/thumbor/eU72waq9EjmEsOS-sMcndQrGzXc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11604673/BO_RGB_s120_22a_cs_pub.pub16.318.jpg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img src="/images/bao-logo.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        The film is about an aging and lonely Chinese Canadian mother suffering
        from empty nest syndrome, who receives an unexpected second chance at
        motherhood when she makes a steamed bun (baozi) that comes to life. The
        film won the Academy Award for Best Animated Short Film at the 91st
        Academy Awards.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  align-items: center;
  display: flex;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  margin-right: 22px;
  padding: 0px 24px;
  cursor: pointer;
  letter-spacing: 1.8px;
`;
const TrailerButton = styled(PlayButton)`
  background: transparent;
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid black;
    color: black;
  }
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  margin-right: 16px;
  color: white;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 30px;
  }
  &:hover {
    background: rgb(0, 0, 0);
  }
`;
const GroupWatchButton = styled(AddButton)``;
const SubTitle = styled.div`
color: rgb(249, 249, 249);
font size: 15px;
min-height: 20px;
margin-top: 26px;

`;
const Description = styled(SubTitle)`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
