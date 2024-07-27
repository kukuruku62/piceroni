import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between  py-8">
        
        {/* Left part */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizzeroni</h1>
            <p className="text-sm leading-3 text-gray-400">The tastiest</p>
          </div>
        </div>

        {/* Right Part */}
        <div className="flex gap-3 items-center">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log In
          </Button>

          <div>
            <Button className="group relative">
              <b>10$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart strokeWidth={2} size={16} className=" relative" />
                <b>1</b>
              </div>
              <ArrowRight
                size={20}
                className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>

      </Container>
    </header>
  );
};
