import './global.css';

export default async function RootLayout({
  children
}) {

  return (
    <html lang="en-GB">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
          {children}
      </body>
    </html>
  );
}