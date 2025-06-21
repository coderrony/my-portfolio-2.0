import { ScrollArea } from '@/components/ui/scroll-area';
import Header from '@/components/header/Header';
import FloatingNav from '@/components/navbar/FlotingNav';
import ScrollBarNav from '@/components/scrollBar/ScrollBar';
import About from '@/components/about/About';
import MySkills from '@/components/mySkills/MySkills';
import MyWork from '@/components/myWork/MyWork';
import CertificateAndAwards from '@/components/certificateAndAwards/CertificateAndAwards';
import ContactMe from '@/components/contactMe/ContactMe';
import Footer from '@/components/footer/Footer';
function Home() {
  return (
    <ScrollArea >
       <ScrollBarNav />
       <FloatingNav />
        <Header />
        <About />
        <MySkills />
        <MyWork />
        <CertificateAndAwards />
        <ContactMe />
        <Footer />
 
   
   
    </ScrollArea>
  );
}

export default Home;
