import styled from "styled-components";

import Head from "next/head";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Parked Domain!</title>
      </Head>

      <Main>
        <Title>
          Coming Soon
        </Title>
        <Description>
          This domain has been parked by the Metro Reviews Development team.
          <br />
          whatever you are expecting to be here will be available soon! 
        </Description>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const P = styled.span`
  margin-right: 5px;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-top: 20px;
  color: white
`;

const FooterText = styled.p`
  color: white;
`;

const Twitter = styled.a`
  text-decoration: none;
  color: #025683;
`;

const Website = styled.a`
  text-decoration: none;
  color: #025683;
`;
