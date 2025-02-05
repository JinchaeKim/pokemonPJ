import styled from "styled-components";

// Home
export const BgImg = styled.img`
  opacity: 70%;
  background-size: cover;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const TitleImg = styled.img`
  position: absolute;
  width: 600px;
  z-index: 2;
`;

export const BtnSt = styled.button`
  position: absolute;
  margin-top: 300px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: red;
  color: white;
  border-radius: 5px;
  z-index: 2;
`;

// Dashboard
export const Header = styled.div`
  /* display: block; */
  width: auto;
  background-color: #586249;
  margin: 20px 90px;
  border-radius: 10px;
  text-align: center;
  padding-bottom: 20px;
`;

export const Title = styled.img`
  display: flex;
  margin: auto;
  align-items: center;
  padding: 10px;
`;

export const Balls = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;

export const BallSt = styled.img`
  width: 50px;
  height: 50px;
  border: 2px dashed #ffffff;
  border-radius: 10px;
  padding: 30px;
  background-color: #ffffff6f;
  margin: 20px;
`;

// List
export const BgMain = styled.div`
  width: auto;
  margin: 20px 90px;
  background-color: #aeb79e;
  /* background-image: url("https://i.namu.wiki/i/og8wF79k4GZrGDG6hkUl9si686oUjZCFIfa3qQb3EJVk4aWj4gK0YJiNjkF2_sSLewYRsI576AWQwy_HuGDl7Q.webp"); */
  padding: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
`;

export const MonCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 28px;
  place-items: center;
`;

// Cards
export const MonCard = styled.div`
  background-color: white;
  box-shadow: 0px 0px 7px 0px rgb(77, 77, 77);
  border-radius: 10px;
  width: 170px;
  height: 250px;

  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
  }
`;

export const BottomWrap = styled.div`
  padding: 10px;
`;

export const MonImg = styled.img`
  margin-top: 15px;
`;

export const MonName = styled.div`
  padding: 5px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AddBtn = styled.button`
  background-color: #284f41;
  color: white;
  border: white;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  background-color: #d90000;
  color: white;
  border: white;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
  cursor: pointer;
`;
