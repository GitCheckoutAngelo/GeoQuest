import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface CategoryButtonProps {
  category: string;
}

const CategoryButton = ({ category }: CategoryButtonProps) => {
  return (
    <Link
      href={{
        pathname: '/region',
        query: { category: category.replaceAll(' ', '-').toLowerCase() },
      }}
    >
      <Button
        variant="outlined"
        style={{
          height: '56px',
          width: '172px',
          borderRadius: '32px',
          fontSize: '16px',
        }}
      >
        {category}
      </Button>
    </Link>
  );
};

export default CategoryButton;
