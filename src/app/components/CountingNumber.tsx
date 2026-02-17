"use client";

import { useEffect, useState } from "react";

interface CountingNumberProps {
  value: string;
  duration?: number;
  isAnimating: boolean;
}

export const CountingNumber = ({ value, duration = 2000, isAnimating }: CountingNumberProps) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isAnimating) return;

    const numMatch = value.match(/[\d.,]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const numStr = numMatch[0];
    let numValue: number;
    let decimals = 0;

    if (numStr.includes(",")) {
      const parts = numStr.split(",");
      if (parts[1]?.length === 1) {
        numValue = parseFloat(parts.join("."));
        decimals = 1;
      } else {
        numValue = parseFloat(numStr.replace(/,/g, ""));
        decimals = 0;
      }
    } else if (numStr.includes(".")) {
      numValue = parseFloat(numStr);
      decimals = numStr.split(".")[1].length;
    } else {
      numValue = parseFloat(numStr);
      decimals = 0;
    }

    const prefix = value.substring(0, value.indexOf(numStr));
    const suffix = value.substring(value.indexOf(numStr) + numStr.length);

    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNum = numValue * easeOut;

      let formattedNum: string;
      if (decimals > 0) {
        formattedNum = currentNum.toFixed(decimals);
      } else {
        formattedNum = Math.round(currentNum).toLocaleString("en-IN");
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isAnimating, value, duration]);

  return <>{displayValue}</>;
};
