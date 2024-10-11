"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/public/images/logo.svg";
import logoLight from "@/public/images/logo-light.svg";
import Theme from "./theme";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

const TopHeader = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      className="top__header__bg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="my__container">
        <div className="top__header">
          <div>
            <Link href="/">
              <Image
                src={theme === "dark" ? logoLight : logo}
                alt="logo"
                width={150}
                height="auto"
              />
            </Link>
          </div>
          <div>
            <Theme />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopHeader;
