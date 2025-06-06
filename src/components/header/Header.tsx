"use client"
// import { FaLinkedinIn } from "react-icons/fa";
// import { AiFillGithub } from "react-icons/ai";
// import { FaFacebookF } from "react-icons/fa";
import { Facebook, Github, Linkedin } from "lucide-react";

import HeaderImage from "@/assets/my-image/ronyDasImageOne.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Header = () => {
  return (
    <header
      id="header"
      className="mt-24 mb-4 h-[calc(100vh-5rem)] grid place-items-center bg-white transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col items-center relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-72 h-88 rounded-[9rem_9rem_2rem_2rem] overflow-hidden mb-6"
        >
          <Image src={HeaderImage} alt="Header Portait" />
        </motion.div>

        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Rony Das
        </motion.h3>

        <motion.p
          className="w-[35rem] text-center my-6 max-w-full px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I'm ready to transform your vision into a modern, mobile-responsive,
          and highly performant website or web application today. Send me the
          details.
        </motion.p>

        <motion.div
          className="flex items-center gap-5 mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn bg-primary text-primary-foreground">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </motion.div>

        <motion.div
          className="absolute left-0 bottom-0 flex flex-col gap-4 max-[600px]:hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/in/coderrony/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 aspect-square grid place-items-center rounded-lg bg-gray-200 text-black hover:bg-primary hover:text-white hover:-translate-x-2 transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/coderrony"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 aspect-square grid place-items-center rounded-lg bg-gray-200 text-black hover:bg-primary hover:text-white hover:-translate-x-2 transition"
          >
           <Github />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100069111909750"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 aspect-square grid place-items-center rounded-lg bg-gray-200 text-black hover:bg-primary hover:text-white hover:-translate-x-2 transition"
          >
            <Facebook />
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
