import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import { ThemeObject } from "./types/ThemeObject";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

const __HTMLRootElement = document.documentElement;

const App = () => {
  const [themeMode, setThemeMode] = useState<string>("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  const changeTheme = useCallback(() => {
    if (themeMode === "dark") __HTMLRootElement.classList.add("dark");
    else __HTMLRootElement.classList.toggle("dark");
  }, [themeMode, setThemeMode, __HTMLRootElement]);

  useEffect(changeTheme, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme } as ThemeObject}>
      <div className="flex min-h-screen flex-wrap items-center">
        <div className="w-full">
          <div className="mx-auto mb-4 flex w-full max-w-sm justify-end">
            <ThemeBtn />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
