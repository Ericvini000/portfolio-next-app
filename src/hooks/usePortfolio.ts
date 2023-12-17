"use client";

import { PortfolioContext } from "@/contexts/portfolio.context";
import { useContext } from "react";

const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  return context;
};

export default usePortfolio;
