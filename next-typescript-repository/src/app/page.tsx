"use client"

import ActiveApp from '@/repository/activeClass/1/2/App';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const bannerVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={bannerVariants}
    >
      <BannerContainer>
        Welcome to Our Website!
      </BannerContainer>
      <ActiveApp/>
    </motion.div>
    </>
  );
}
