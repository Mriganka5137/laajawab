"use client";
import { ShoppingBag, X, Menu, User, LogOut, Settings } from "lucide-react";
import { Button } from "../ui/button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { getCustomer, logout } from "@/lib/data/customer";

function useCustomer() {
  const [customer, setCustomer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const data = await getCustomer();
        setCustomer(data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCustomer();
  }, []);

  return { customer, isLoading };
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <motion.span
        className={`relative inline-block px-1 py-2 transition-colors ${
          isActive ? "text-primary" : "text-foreground hover:text-primary"
        }`}
        whileHover={{ scale: 1.05 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
            layoutId="navbar-underline"
          />
        )}
      </motion.span>
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="block">
      <motion.div
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-2 rounded-md transition-colors ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground hover:bg-secondary"
        }`}
      >
        {children}
      </motion.div>
    </Link>
  );
};

const AccountDropdown = ({ customer }: { customer: any }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {customer.first_name?.[0]?.toUpperCase() || (
            <User className="w-4 h-4" />
          )}
        </span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <div className="px-2 py-1.5 text-sm">
        <div className="font-medium">
          {customer.first_name} {customer.last_name}
        </div>
        <div className="text-muted-foreground text-xs">{customer.email}</div>
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/account" className="w-full cursor-pointer">
          <User className="w-4 h-4 mr-2" />
          Account
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/account/orders" className="w-full cursor-pointer">
          <ShoppingBag className="w-4 h-4 mr-2" />
          Orders
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/account/settings" className="w-full cursor-pointer">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        className="text-destructive cursor-pointer"
        onClick={() => logout()}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const MobileAccountSection = ({ customer }: { customer: any }) => {
  if (!customer) {
    return (
      <div className="px-4 mb-2">
        <Link
          href="/signin"
          className="w-full px-3 py-1.5 bg-primary rounded-md text-primary-foreground text-sm flex items-center justify-center"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-3 border-b border-border/10">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {customer.first_name?.[0]?.toUpperCase() || (
            <User className="w-4 h-4" />
          )}
        </span>
        <div>
          <div className="font-medium">
            {customer.first_name} {customer.last_name}
          </div>
          <div className="text-muted-foreground text-xs">{customer.email}</div>
        </div>
      </div>
      <div className="space-y-1">
        <MobileNavLink href="/account">Account</MobileNavLink>
        <MobileNavLink href="/account/orders">Orders</MobileNavLink>
        <MobileNavLink href="/account/settings">Settings</MobileNavLink>
      </div>
      <Button
        variant="destructive"
        className="w-full mt-3"
        onClick={() => logout()}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Log out
      </Button>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { customer, isLoading } = useCustomer();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 h-fit py-2 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Laajawab"
                width={150}
                height={50}
                quality={100}
                priority
                className="max-md:size-20 "
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/about-us">About</NavLink>
            <NavLink href="/contact-us">Contact</NavLink>
            <NavLink href="/blog">Blog</NavLink>

            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="hover:text-primary transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>

              {!isLoading && (
                <>
                  {customer ? (
                    <AccountDropdown customer={customer} />
                  ) : (
                    <Link
                      href="/signin"
                      className="px-4 py-1.5 bg-primary rounded-md text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                    >
                      Sign In
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="hover:text-primary transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg"
      >
        <div className="divide-y divide-border/10">
          {!isLoading && <MobileAccountSection customer={customer} />}
          <div className="px-4 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/products">Products</MobileNavLink>
            <MobileNavLink href="/about-us">About</MobileNavLink>
            <MobileNavLink href="/contact-us">Contact</MobileNavLink>
            <MobileNavLink href="/blog">Blog</MobileNavLink>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
