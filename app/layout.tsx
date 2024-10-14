import './globals.css';

// Define the expected properties for the RootLayout
interface LayoutProps {
  children: React.ReactNode;
  types?: string[]; // Include the 'types' property if required
}

export default function RootLayout({ children, types }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
