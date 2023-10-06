interface ThemeObject {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
}

export type { ThemeObject };
