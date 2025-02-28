import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;


export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #FAF9F9;; 
`;