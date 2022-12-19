import { Navbar, Link, Text, useTheme, Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

type Page = {
  name: string;
  href: string;
  current: boolean;
};

export default function App() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const [pages, setPages] = useState<Page[]>([
    {
      name: 'Home',
      href: '/',
      current: false,
    },
    {
      name: 'Sobre',
      href: '/sobre',
      current: false,
    },
    {
      name: 'Chat',
      href: '/chat',
      current: false,
    },
  ]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPages((pages) => pages.map((page) => ({ ...page, current: page.href === currentPath })));
  }, []);

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
          gap: '$2',
        }}
      >
        <Link color="inherit" href="/">
          <Logo />
        </Link>
        <Text b color="inherit" hideIn="xs">
          Free Chat
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="highlight-rounded">
        {pages.map((page) => (
          <Navbar.Link isActive={page.current} key={page.href} href={page.href}>
            {page.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content
        css={{
          gap: '$3',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Switch size="xs" checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
        <Text color="inherit" b>
          Dark
        </Text>
      </Navbar.Content>
      <Navbar.Collapse>
        {pages.map((item) => (
          <Navbar.CollapseItem key={item.href} activeColor="secondary" isActive={item.current}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={item.href}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
