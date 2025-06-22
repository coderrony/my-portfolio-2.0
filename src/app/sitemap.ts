
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ronydas.dev';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 


  return [{ url: BASE_URL }];


}
