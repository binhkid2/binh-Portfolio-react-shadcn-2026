"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Menu, Info, FolderOpen, Mail, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" 
import NavbarLogo from "./NavBarLogo"
import LanguageToggle from "./LanguageToggle" 
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useState } from "react" 
import { useTranslation } from "react-i18next"

export default function NavBar() {
  const navigate = useNavigate() 
   const { t } = useTranslation()
  const nav = t("nav", { returnObjects: true }) as any 
  const [isOpen, setIsOpen] = useState(false) 
 
 

  return (
    <div className="shadow-sm border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavbarLogo logoUrl={import.meta.env["VITE_AVATAR"]} />

        <div className="flex items-center space-x-4">
          {/* Desktop Language Toggle */}
          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          {/* Hamburger menu for small screens */}
          <div className="-mr-2 -my-2 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold flex items-center">
                    <NavbarLogo logoUrl={import.meta.env["VITE_AVATAR"]} />
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8">
                  <div className="grid gap-2 grid-cols-1">
                     
                        <Link
                          to="/about"
                          className="flex items-center p-3 m-1 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Info className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-foreground">{nav.about}</span>
                        </Link>
                        <Link
                          to="/projects"
                          className="flex items-center p-3 m-1 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <FolderOpen className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-foreground">{nav.projects}</span>
                        </Link>
                        <Link
                          to="/contact"
                          className="flex items-center p-3 m-1 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Mail className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-foreground">{nav.contact}</span>
                        </Link> 
                  </div>
                </nav>

                {/* Language Toggle Section */}
                <div className="mt-8 pt-4 border-t border-border">
                  <div className="flex items-center justify-center">
                    <Badge variant="secondary" className="mr-2">
                      Language
                    </Badge>
                     <LanguageToggle/>
                  </div>
                </div>

               
                  <div className="mt-8 pt-4 border-t border-border">
                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => {
                          navigate("/signin")
                          setIsOpen(false)
                        }}
                      >
                        Sign In <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div> 
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/about"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors relative group whitespace-nowrap"
            >
              {nav.about}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link
              to="/projects"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors relative group whitespace-nowrap"
            >
              {nav.projects}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link
              to="/contact"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors relative group whitespace-nowrap"
            >
              {nav.contact}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
 
          </div>
        </div>
      </div>
    </div>
  )
}
