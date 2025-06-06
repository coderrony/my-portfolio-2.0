
type NavigationType={
  id:number,
  title:string,
  href:string,
  offset:number
}

export const NAVIGATION_DATA:NavigationType[] = [
  { id: 1, href: "header", title: "Home", offset: -80 },
  { id: 2, href: "about", title: "About", offset: 0 },
  { id: 3, href: "services", title: "Services", offset: 0 },
  { id: 4, href: "portfolio", title: "Portfolio", offset: 30 },
  { id: 5, href: "contact", title: "Contact", offset: -40 },
];
