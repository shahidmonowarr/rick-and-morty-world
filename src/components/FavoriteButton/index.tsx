'use client';
import { useFavorite } from '@/hooks';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FavoritesListButton } from './styles';

interface Props {}

const FavoriteButton: React.FC<Props> = () => {
  const { favoritesChar } = useFavorite();

  const totalCharsInTheFavorites = favoritesChar.length;

  return (
    <FavoritesListButton href="/favorites">
      <AiFillHeart />
      {totalCharsInTheFavorites > 0 && <span>{totalCharsInTheFavorites}</span>}
    </FavoritesListButton>
  );
};

export default FavoriteButton;
