/* eslint-disable @typescript-eslint/no-explicit-any */
  
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {   Mail, FileText } from 'lucide-react' 
import { FacebookIcon, GithubIcon } from "@/components/icons"
import { useTranslation } from "react-i18next";
export   function Home() {
  const handleOpenNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const handleOpenMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };
  const { t } = useTranslation();
  const educationCards = t("educationCards", { returnObjects: true }) as any[];

  return (  

        <div className="container mx-auto px-4 py-8">
          <section className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <Avatar className="w-48 h-48">
              <AvatarImage src="https://res.cloudinary.com/yenvietsoft/image/upload/v1748593058/IMG_20250530_155821_2_zlzibi.jpg" alt="Duc Binh" />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold mb-4">  {t("greeting")} </h1>
              <p className="text-xl text-muted-foreground mb-4">
              {t("introduction")} 
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" onClick={()=>{handleOpenNewTab("https://github.com/binhkid2")}}>
                  <GithubIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={()=>{handleOpenNewTab("https://facebook.com/binhkid01")}}>
                  <FacebookIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon"   onClick={()=>{handleOpenMail("https://gmail.com/binhkid2")}}  >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={()=>{handleOpenNewTab("https://rxresu.me/binhkid2/duc-binh-2026")}}>
                  <FileText className="mr-2 h-4 w-4" />
                   {t("Resume")}
                </Button>
              </div>
            </div>
          </section>

          <section>
          <h2 className="text-3xl font-bold mb-8">{t("education")}</h2>
        <div className="space-y-6">
          {educationCards.map((card: any, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{card.institution}</p>
                <p className="text-sm text-muted-foreground">{card.duration}</p>
                <p className="mt-2">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

          </section>
        </div> 
  )
}
 
