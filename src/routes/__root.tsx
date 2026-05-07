import {
  createRootRoute,
  Outlet,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import Layout from "../components/Layout";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    // Redirect to home if path is not found
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return <div style={{color: 'white', padding: '50px'}}>Laddar om...</div>;
  }
});

function RootComponent() {
  return (
    <html lang="sv">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>District 8 | Exclusive Club & Events</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;600;700&display=swap"
        />
        <HeadContent />
      </head>
      <body className="grain">
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
