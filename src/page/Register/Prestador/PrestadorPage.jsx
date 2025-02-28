import React, { useRef } from 'react';
import * as S from './PrestadorStyles';

const Prestador = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
     
      <S.Container>
        <S.Section ref={section1Ref} bgColor="lightblue">
          <h1>Seção 1</h1>
        </S.Section>
        <S.Section ref={section2Ref} bgColor="lightgreen">
          <h1>Seção 2</h1>
        </S.Section>
        <S.Section ref={section3Ref} bgColor="lightcoral">
          <h1>Seção 3</h1>
        </S.Section>
      </S.Container>
    </>
  );
};

export default Prestador;