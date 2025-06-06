// "use client"
// import { ThemeContext, ThemeNameType } from '@/contexts';
// import { themes } from '@/static/themes.static';

// import { FC, useEffect, useState } from 'react';

// interface ThemesProviderProps {
//   className?: string;
//   children: React.ReactNode;
// }


// const ThemesProvider: FC<ThemesProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<ThemeNameType>('yellow');

//   const {primaryKey,foregroundKey,colors} = themes 
//   const {primary,foreground} = colors[theme] 

//   // console.log(primary);
//   // console.log(foreground);

//   console.log("theme ",theme);
  


// //  useEffect(()=>{ 

// //   primaryKey.map((item)=>{
// //   document.documentElement.style.setProperty(item, primary);
// //   })
// //   foregroundKey.map((item)=>{
// //   document.documentElement.style.setProperty(item, foreground);
// //   })

// //   },[theme])

//   return (
//     <ThemeContext.Provider value={{ theme,setTheme:(v:ThemeNameType)=> setTheme(v)}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemesProvider;