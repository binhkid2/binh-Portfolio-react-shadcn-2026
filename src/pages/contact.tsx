import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FileText, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, GithubIcon } from '@/components/icons'
import axios from 'axios'
import { useTranslation } from 'react-i18next' 
import { showToast } from '@/lib/toastSetting'

const ContactPage: React.FC = () => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async (fromEmail: string, message: string, toEmail: string, subject: string) => {
    const apiKey = import.meta.env['VITE_RESEND_API_KEY'];
    const url = 'https://api.resend.com/emails';

    const emailData = {
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      subject: subject,
      html: `<p>From: ${name} (${fromEmail})</p><p>${message}</p>`,
    };

    try {
       await axios.post(url, emailData, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const success = await sendEmail(email, message, 'binhkid2@gmail.com', `New contact from ${name}`);
    if (success) {
      showToast('success', t('contact.toast.success'));
      setName('')
      setEmail('')
      setMessage('')
    } else {
      showToast('error', t('contact.toast.error'));
    }
  }

  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('contact.pageTitle')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('contact.sendMessage')}</CardTitle>
            <CardDescription>{t('contact.formInstructions')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('contact.labels.name')}</Label>
                <Input 
                  id="name" 
                  placeholder={t('contact.placeholders.name')} 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('contact.labels.email')}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t('contact.placeholders.email')} 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t('contact.labels.message')}</Label>
                <Textarea 
                  id="message" 
                  placeholder={t('contact.placeholders.message')} 
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">{t('contact.labels.submit')}</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.contactInfo')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>binhkid2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+84 348687107</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Thai Binh City, Vietnam</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('contact.connectWithMe')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" onClick={() => handleOpenNewTab("https://github.com/binhkid2")}>
                  <GithubIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleOpenNewTab("https://facebook.com/binhkid01")}>
                  <FacebookIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleOpenMail("binhkid2@gmail.com")}>
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => handleOpenNewTab("https://docs.google.com/document/d/1z3KMBrNxJ3sOC4eAy-M8IVm1JYcXupv29sQPNYQWCGI")}>
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
