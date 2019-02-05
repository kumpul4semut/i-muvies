import React from 'react';
import logo from '../assets/images/logo.png';
import { Footer, FooterTitle, FooterLink, FooterCopyRigth } from '../modules';
const footer = () => {
  return (
    <Footer copyrigth="I-MOVIES @2019">
      <FooterTitle title="THE BASIC">
        <FooterLink href="/">Abut IMovies</FooterLink>
        <FooterLink href="/">Contact Us</FooterLink>
        <FooterLink href="/">Support forums</FooterLink>
        <FooterLink href="/">Blog</FooterLink>
      </FooterTitle>
      <FooterTitle title="GET INVOLVED">
        <FooterLink href="/">Contribution</FooterLink>
        <FooterLink href="/">Add Movies</FooterLink>
        <FooterLink href="/">Add TV Show</FooterLink>
        <FooterLink href="/">Applications</FooterLink>
      </FooterTitle>
      <FooterTitle title="COMMUNITY">
        <FooterLink href="/">Guidelines</FooterLink>
        <FooterLink href="/">Leaderboard</FooterLink>
        <FooterLink href="/">Forums</FooterLink>
        <FooterLink href="/">Facebook</FooterLink>
      </FooterTitle>
      <FooterTitle title="LEGAL">
        <FooterLink href="/">Terms Of Use</FooterLink>
        <FooterLink href="/">Privacy Police </FooterLink>
      </FooterTitle>
      <FooterCopyRigth logo={logo} moto={['Movie Streaming', ' Fast']} />
    </Footer>
  );
};

export default footer;
