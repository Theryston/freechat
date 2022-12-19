import { styled } from '@nextui-org/react';
import React from 'react';
import { Box } from './Box';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      css={{
        maxW: '100%',
      }}
    >
      {children}
    </Box>
  );
}
