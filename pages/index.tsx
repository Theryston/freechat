import Head from 'next/head';
import { Grid, Image, Text } from '@nextui-org/react';
import WebFriendsImg from '../assets/web-friends.jpg';
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

      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Text
          h1
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 100%',
          }}
          weight="bold"
          size={60}
        >
          Free Chat
        </Text>
        <Text h3>Fale com desconhecidos!</Text>
        <Text
          size="$lg"
          css={{
            textAlign: 'center',
          }}
        >
          Free Chat é um serviço de bate-papo anônimo gratuito que permite que você converse com desconhecidos de todo o
          mundo. Experimente conversas divertidas e interessantes, conheça pessoas novas, faça amigos, discuta sobre
          assuntos variados e crie memórias únicas.
        </Text>
      </Box>
    </>
  );
}
