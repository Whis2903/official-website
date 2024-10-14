import './globals.css';

// Define the expected properties for the RootLayout
interface LayoutProps {
  children: React.ReactNode;
  types?: string[]; // Include the 'types' property if required
}

export default function RootLayout({ children, types = [] }: LayoutProps) { // Default to an empty array
  return (
    <html lang="en">
      <body>
        {types.length > 0 && types.map((type, index) => (
          <div key={index} className="type-label">
            {type}
          </div>
        ))}
        {children}
      </body>
    </html>
  );
}
