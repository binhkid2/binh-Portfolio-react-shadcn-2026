import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from 'lucide-react'
import { FacebookIcon, GithubIcon } from './icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation(); // Initialize translation
  const navigate = useNavigate();

  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const handleOpenMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('footer.name')}</h2> {/* Using translation */}
            <p className="text-muted-foreground mb-4">
              {t('footer.role')} {/* Using translation */}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="GitHub" onClick={() => { handleOpenNewTab("https://github.com/binhkid2") }}>
                <GithubIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" onClick={() => { handleOpenNewTab("https://facebook.com/binhkid01") }}>
                <FacebookIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email" onClick={() => { handleOpenMail("binhkid2@gmail.com") }}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
  <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3> {/* Using translation */}
  <ul className="space-y-2">
    <li><Button variant="link" className="p-0 h-auto" onClick={() => { navigate('/') }}>{t('footer.home')}</Button></li> {/* Using translation */}
    <li><Button variant="link" className="p-0 h-auto" onClick={() => { navigate('/projects') }}>{t('footer.projects')}</Button></li> {/* Using translation */}
    <li><Button variant="link" className="p-0 h-auto" onClick={() => { navigate('/about') }}>{t('footer.about')}</Button></li> {/* Using translation */}
    <li><Button variant="link" className="p-0 h-auto" onClick={() => { navigate('/contact') }}>{t('footer.contact')}</Button></li> {/* Using translation */}
  </ul>
</div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.stayUpdated')}</h3> {/* Using translation */}
            <p className="text-muted-foreground mb-4">
              {t('footer.subscribeMessage')} {/* Using translation */}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex space-x-2">
              <Input
                type="email"
                placeholder={t('footer.emailPlaceholder')} // Using translation
                className="max-w-[200px]"
              />
              <Button type="submit">{t('footer.subscribe')}</Button> {/* Using translation */}
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {t('footer.name')}. All rights reserved. {/* Using translation */}
          </p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li><Button variant="link" className="p-0 h-auto">{t('footer.privacyPolicy')}</Button></li> {/* Using translation */}
              <li><Button variant="link" className="p-0 h-auto">{t('footer.termsOfService')}</Button></li> {/* Using translation */}
              <li><Button variant="link" className="p-0 h-auto">{t('footer.cookiePolicy')}</Button></li> {/* Using translation */}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
