import '@/app/ui/global.css'
import { merriweatherSans } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweatherSans.className} antialiased`} >{children}</body>
    </html>
  );
}
