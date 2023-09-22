import React from 'react';
import { useParams } from 'react-router-dom';
import AuthForm from '../../AuthForm/AuthForm';
// import { Container, ImgWrapper, Section } from './AuthPage.Styled';


const AuthPage = () => {
  const { id } = useParams();

  return (
    <main>
      {/* <Section>
      <Container>
      <ImgWrapper /> */}
          <AuthForm isRegistration={id !== 'signin'} />
      {/* </Container>
      </Section> */}
    </main>
  );
};

export default AuthPage;