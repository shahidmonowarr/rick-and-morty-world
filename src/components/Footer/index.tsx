'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FooterContainer } from './styles';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <FooterContainer>
      <Link href="/">
        <Image src="/images/logo.webp" alt="Rick and Morty" width={150} height={84} />
      </Link>
      <>
        <span>
          Data provided by{' '}
          <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
            Rick and Morty API
          </a>
        </span>
        <span>
          Developed by{' '}
          <a href="https://shahidmonowar.com" target="_blank" rel="noreferrer">
            Shahid Monowar
          </a>
        </span>
      </>
    </FooterContainer>
  );
};

export default Footer;
