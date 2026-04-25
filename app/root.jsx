import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

export function Layout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Tasty Burger — Hamburgeria Artesanal"
        />
        <title>Tasty Burger</title>
        <link rel="icon" href="/favicon.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <noscript>Você precisa habilitar o JavaScript para rodar este app.</noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function meta() {
  return [
    { title: "Tasty Burger" },
    { name: "description", content: "Tasty Burger — Hamburgeria Artesanal" },
  ];
}