import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { themes } from '@/static/themes.static';

export type ThemeNameType = keyof typeof themes.colors;

type ThemeStoreType = {
  theme: string;
  hydrated: boolean;
  setTheme: (v: ThemeNameType) => void;
  setHydrated: () => void;
};

export const useThemeStore = create<ThemeStoreType>()(
  persist(
    immer((set) => ({
      theme: 'orange',
      hydrated: false,
      setHydrated() {
        set({ hydrated: true });
      },

      setTheme: (color: ThemeNameType) => {
        set({ theme: color });
        
        console.log("color ",color);
       
        
        const { primaryKey, foregroundKey, colors } = themes;
        const { primary, foreground } = colors[color];

        primaryKey.map(item => {
          document.documentElement.style.setProperty(item, primary);
        });
        foregroundKey.map(item => {
          document.documentElement.style.setProperty(item, foreground);
        });

      },
    })),

    {
      name: 'ronydas-portfolio',
      onRehydrateStorage() {
        return (state, error) => {
          if (!error) state?.setTheme(state.theme as ThemeNameType);
        };
      },
    },
  ),
);
