import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0;
  padding: 2rem;
`;
export const Left = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.6) 0 1px 2px 0;
  width: 30rem;
  height: 108vh;
  text-align: left;
  padding: 1rem;
  border-radius: 0.5rem;
  h2 {
    color: #dd8533;
    text-transform: uppercase;
  }
  label {
    font-weight: bold;
    color: #56514d;
  }
  input {
    color: #6d6d6d;
  }
  input:focus {
    color: black;
    border-color: #dd8533;
    outline: none;
    box-shadow: 0 0 10px #ed9e17;
  }
  span {
    color: red;
    margin-top: 1rem;
    text-transform: capitalize;
    font-weight: bold;
    width: 1rem;
    font-size: small;
  }
  .multipulControlsContainer {
    background-color: #f0f2e9;
    height: 11rem;
    margin-bottom: 0.5rem;
    border-right: 2px solid rgb(215, 190, 0);
    .iTrash {
      margin: 0 0.5rem;
      cursor: pointer;
      opacity: 0.5;
      font-size: 1.5rem;
      color: red;
      transition: 0.2s all ease-in-out;
    }
    .iTrash:hover {
      opacity: 1;
    }
  }
`;

export const List = styled.ul`
  padding: 0.2rem;
  height: 11rem;
  width: 100%;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding: 0.5rem;
  width: 100%;
`;

export const Center = styled.div`
  width: 30rem;
  height: 108vh;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.6) 0 1px 2px 0;

  h4 {
    color: #948e8a;
    padding-left: 1.1rem;
    padding-bottom: 1.5rem;
  }

  ul {
    height: 92vh;
    padding: 0;
    list-style-type: circle;
    overflow-y: scroll;
  }

  li {
    width: 23rem;
    border-bottom: 1px solid #ffa143;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`;
export const Right = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.6) 0 1px 2px 0;
  padding: 1rem;
  width: 30rem;
  height: 108vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  Button {
    width: 100%;
    height: 3.2rem;
  }
`;

export const ThumpImgContainer = styled.div`
  width: 100%;
  height: 15rem;
  margin-bottom: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 0;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  margin-bottom: 2rem;
  width: 100%;
  height: 21rem;
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 15rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
