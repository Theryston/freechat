import Head from 'next/head';
import { Spacer, Text } from '@nextui-org/react';
import { Box } from '../components/Box';

export default function Home() {
  return (
    <>
      <Head>
        <title>Converse com desconhecidos no Free Chat</title>
        <meta
          name="description"
          content="Free Chat é um serviço de bate-papo anônimo gratuito que permite que você converse com desconhecidos de todo o mundo. Experimente conversas divertidas e interessantes, conheça pessoas novas, faça amigos, discuta sobre assuntos variados e crie memórias únicas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Text h1>Em-breve!</Text>
      </Box>
    </>
  );
}
