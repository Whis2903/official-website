import './globals.css';

// Define the expected properties for the RootLayout
interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

