import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styled from 'styled-components';
import { Header, Container, HeroTitle, HeroTitleBottom, ButtonBox } from './HomepageHeader.styled';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Header>
      <Container>
        <br />

        <HeroTitle></HeroTitle>
        <HeroTitleBottom>
        </HeroTitleBottom>

        <ButtonBox>
          <Link className='button button--primary button--lg' to='/docs/frontend/intro'>
          </Link>
        </ButtonBox>
        <br />
        <br />
        <img
          src='https://gifsec.com/wp-content/uploads/2022/09/among-us-gif-13.gif'
        />
      </Container>
    </Header>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

// const Header = styled.header`
//   max-width: 100%;
//   text-align: center;
// `;

// const Container = styled.div`
//   padding: 1rem;
//   width: 100%;
// `;

// const HeroTitle = styled.h1`
//   font-weight: 700;
//   font-size: 58px;
// `;

// const HeroTitleBottom = styled.h1`
//   font-weight: 400;
//   font-size: 18px;
// `;

// const ButtonBox = styled.div``;
