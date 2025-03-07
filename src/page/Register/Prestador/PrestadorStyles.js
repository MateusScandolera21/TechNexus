import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const Section = styled.section`
  min-height: 100vh;  
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;  

  @media (max-width: 1024px) {
  
  }

  @media (max-width: 768px) {
    
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 30px;
  text-align: center;
  margin: 0 auto;
  margin-top: 10rem;
  box-sizing: border-box;
  margin-bottom: 15rem;

  h2 {
    margin-bottom: 4rem;
  }

  @media (max-width: 1024px) {
    margin-top: calc(15% + 250);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 6.50rem;
    padding: 20px;
    margin-left: 1rem;
    width: 100%; 
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-top: 0;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; 
  
  @media (max-width: 1024px) {
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
    column-gap: 0;
    row-gap: 15px;
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
  font-weight: bold;
  text-align: left;
}

input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline-color: #488574;
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
    margin-bottom: 8px;
    font-weight: bold;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 14px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: left;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline-color: #488574;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
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

  @media (max-width: 1024px) {
    top: 140px;
    left: 50px;
  }

  @media (max-width: 768px) {
    top: 130px;
    left: 5%;
  }
`;

export const Textbox = styled.textarea`
  width: 100%;
  max-width: 976px;
  min-width: 976px;
  height: 157px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: horizontal;
  margin-bottom: 15rem;

  &::placeholder {
    font-size: 18px; 
    color: #888; 
  }

  @media (max-width: 768px){
    width: 100%;
    max-width: 676px;
    min-width: 676px;
  }
`;



