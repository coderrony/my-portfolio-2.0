import { themes } from "@/static/themes.static"


export const getColors = ()=>{ 
  const sortColor =  Object.entries(themes.colors).flat()
  // console.log(sortColor);
  return sortColor.filter((item)=> typeof item === 'string'  )
  
}