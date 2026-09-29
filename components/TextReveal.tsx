"use client";

import {  easeOut, motion, type Variants } from "motion/react";
import type { ReactNode, ReactElement } from "react";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const TextReveal = ({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) => {
  const renderNode = (node: ReactNode): ReactNode => {
    // Text
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((part, index) => {
        if (part.trim() === "") {
          return part;
        }

        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {part}
          </motion.span>
        );
      });
    }

    // Multiple children
    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <span key={index}>{renderNode(child)}</span>
      ));
    }

    // Custom span
    if (
      typeof node === "object" &&
      node !== null &&
      "type" in node
    ) {
      const element = node as ReactElement<{
        children?: ReactNode;
        className?: string;
      }>;

      return (
        <span className={element.props.className}>
          {renderNode(element.props.children)}
        </span>
      );
    }

    return node;
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: delay,
        delay: delay,
        staggerChildren: 0.15,
      }}
      className={className}
    >
      {renderNode(children)}
    </motion.h1>
  );
};

export default TextReveal;