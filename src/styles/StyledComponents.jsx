import styled from "styled-components";

// Home
export const BgImg = styled.img`
  opacity: 75%;
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
  background-color: #ff1010;
  color: white;
  border-radius: 5px;
  z-index: 2;

  a {
    padding: 0 0.3em;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background-color: #d90000;
  }
`;

// Dashboard
export const Header = styled.div`
  width: auto;
  background-color: #586249;
  margin: 20px 90px;
  border-radius: 10px;
  text-align: center;
  padding-bottom: 20px;
`;

export const HomeBtn = styled.button`
  background-color: #586249;
  color: #292e21;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  border: 1px solid #586249;
  border-radius: 10px;
  font-size: large;
`;

export const Title = styled.img`
  display: flex;
  margin: auto;
  align-items: center;
  padding: 10px;
`;

export const Balls = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  cursor: pointer;

  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
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

  a {
    padding: 0 0.3em;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background-color: #5d9582;
  }
`;

export const DeleteBtn = styled.button`
  background-color: #d90000;
  color: white;
  border: white;
  border-radius: 5px;
  padding: 7px 20px;
  margin-top: 10px;
  cursor: pointer;

  a {
    padding: 0 0.3em;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background-color: #e97777;
  }
`;

// Detail
export const DetailMain = styled.div`
  width: 100%;
  margin: 10px auto;
  position: relative;
`;

export const DetailBgImg = styled.img`
  opacity: 75%;
  background-size: cover;
  position: relative;
  width: 100%;
  vertical-align: middle;
  z-index: 1;
`;
export const DetailCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;

  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  background-color: #fcfcfcf5;
  border: 12px solid #c1c1c1;
  border-radius: 20px;
  width: 600px;
  height: 400px;
`;

export const DetailCard = styled.div`
  z-index: 2;
`;

export const DTitle = styled.div`
  font-size: larger;
  font-weight: bold;
  color: #060677;
  padding: 30px;
`;

export const DType = styled.div`
  padding: 10px;
  font-weight: 600;
  padding-bottom: 40px;
`;

export const DBtn = styled.button`
  background-color: #5f5f5f;
  color: white;
  margin-top: 50px;
  padding: 10px 20px;
  border: 1px solid #f5f5f5ed;
  border-radius: 5px;
  cursor: pointer;

  a {
    padding: 0 0.3em;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background-color: #929292;
  }
`;

export const D_AddBtn = styled.button`
  background-color: #284f41;
  color: white;
  margin-top: 50px;
  padding: 10px 20px;
  border: 1px solid #f5f5f5ed;
  border-radius: 5px;
  cursor: pointer;

  a {
    padding: 0 0.3em;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background-color: #5d9582;
  }
`;

export const D_DelteBtn = styled.button`
  background-color: #d90000;
  color: white;
  margin-top: 50px;
  padding: 10px 20px;
  border: 1px solid #f5f5f5ed;
  border-radius: 5px;
  cursor: pointer;

  a {
    padding: 0 0.3em;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
    background-color: #e97777;
  }
`;
