import Head from 'next/head';
import { Spacer, Text } from '@nextui-org/react';
import { Box } from '../components/Box';
import Link from 'next/link';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre o Free Chat</title>
        <meta
          name="description"
          content="Free Chat é um serviço de conversação anônima gratuito que permite que você converse com desconhecidos de todo o mundo. Encontre novas amizades, conheça novas pessoas e compartilhe suas ideias em um ambiente seguro e anônimo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box>
        <Text h1>Sobre</Text>
        <Text size="$lg">
          Bem-vindo ao Free Chat, o serviço de chat anônimo criado por Theryston para possibilitar a conversação com
          desconhecidos de todo o Brasil.
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
          O Free Chat foi criado com o objetivo de permitir às pessoas conversarem de forma anônima, com desconhecidos
          de todo o Brasil. O serviço é totalmente gratuito e não requer cadastro.
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
          Você pode encontrar o código-fonte e os detalhes do projeto no GitHub de Theryston, no endereço:{' '}
          <Link href="https://github.com/Theryston/freechat">https://github.com/Theryston/freechat</Link>.
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
          A história por trás da criação do Free Chat é inspiradora. Após se formar na faculdade, Theryston começou a
          sentir-se solitário e desejou ter alguém com quem pudesse conversar. Foi então que ele decidiu criar o Free
          Chat, um serviço que permitiria às pessoas conversarem de forma anônima com desconhecidos. O objetivo era
          criar um lugar onde as pessoas pudessem compartilhar suas ideias e sentimentos sem se preocupar com o que os
          outros pensariam.
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
          Através do Free Chat, Theryston conseguiu criar uma comunidade de milhares de pessoas que compartilham ideias
          e sentimentos uns com os outros. Desde então, o serviço vem crescendo a cada dia, permitindo às pessoas
          conversarem, compartilharem suas experiências e fazerem novas amizades de forma segura e anônima.
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
          Se você está procurando por alguém com quem conversar, o Free Chat está aqui para ajudar. Venha conhecer e
          compartilhar suas experiências com outras pessoas do mundo todo.
        </Text>
      </Box>
    </>
  );
}
