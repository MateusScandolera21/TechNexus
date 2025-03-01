import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 30px;
  text-align: center;
  margin-left: 25%;

  h2 {
    margin-bottom: 4rem;
  }

  @media (max-width: 1000px) {
    margin-left: 5rem;
    margin-top: calc(15% + 250);
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-top: 0;
  justify-content: space-between;
  gap: 20px;
  

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center; 
    width: 100%; 
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem; 
  row-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
font-size: 14px;
align-items: flex-start; 
margin-bottom: 16px;

label {
  margin-bottom: 8px;
  font-weight: bold; 
}

input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
`;

export const AddressGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px; 
  gap: 10px; 
  width: 100%;
  align-items: start;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 14px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    text-align: left;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ErrorMessage = styled.span`
  color: #ff0000; 
  font-size: 0.875rem; 
  margin-top: 0.25rem; 
  display: block; 
`;

export const TopLeftLink = styled(Link)`
  position: fixed;
  top: 130px;
  left: 8rem;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  z-index: 10;

  @media (max-width: 1000px) {
    top: 140px;
    left: 50px;
  }
`;
