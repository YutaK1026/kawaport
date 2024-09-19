// import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";
import "./styles/globals.scss";

export const metadata = {
  title: "KawaPort",
  description: "河村悠太のポートフォリオ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body>
        <ThemeProvider attribute="data-theme">{children}</ThemeProvider>
      </body>
    </html>
  );
}
