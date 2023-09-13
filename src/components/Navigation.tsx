import { AnimatePresence, Variants, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import IconLink from "./IconLink";
import resume from "../assets/resume_v4_4.pdf";

import "./Navigation.css";

const navigationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
} as const satisfies Variants;

const navigationItem: Variants = {
  hidden: { opacity: 0, translateY: 30 },
  show: { opacity: 1, translateY: 0, transition: { bounce: 0 } },
} as const satisfies Variants;

interface NavigationProps {
  show: boolean;
}

function Navigation(props: NavigationProps) {
  const { show } = props;
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="navigation__wrapper"
          variants={navigationContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={navigationItem}>
            <IconLink
              Icon={IoDocumentText}
              name="Resumé"
              color="#b5a66ee6"
              href={resume}
            />
          </motion.div>
          <motion.div variants={navigationItem}>
            <IconLink
              Icon={FaLinkedin}
              name="Linkedin"
              color="rgb(47 80 114)"
              href="https://www.linkedin.com/in/stanleyguosq/"
            />
          </motion.div>
          <motion.div variants={navigationItem}>
            <IconLink
              Icon={FaGithub}
              name="Github"
              href="https://github.com/sqguo"
            />
          </motion.div>
          <motion.div variants={navigationItem}>
            <IconLink
              Icon={RiContactsBook2Fill}
              name="Contact"
              color="#551d4d96"
              href="mailto:sqguo@uwaterloo.ca"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Navigation;
