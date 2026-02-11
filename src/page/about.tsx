/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Mail, FileText } from 'lucide-react'
import { FacebookIcon, GithubIcon } from '@/components/icons'
import { useTranslation } from 'react-i18next'

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "SQL", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 70 }, 
  { name: "Python", level: 70 },
]

const AboutPage: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation
  const freelanceTasks = t("about.freelanceTasks", { returnObjects: true }) as any[];
  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const handleOpenMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t('about.title')}</h1> {/* Using translation */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{t('about.whoIAm')}</CardTitle> {/* Using translation */}
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t('about.description')}</p> {/* Using translation */}
              <p className="mb-4">{t('about.journey')}</p> {/* Using translation */}
              <p>{t('about.freelanceExperience')}</p> {/* Using translation */}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{t('about.skills')}</CardTitle> {/* Using translation */}
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t('about.quickInfo')}</CardTitle> {/* Using translation */}
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <strong>{t('about.name')}:</strong> {t('about.name')} {/* Using translation */}
                </li>
                <li>
                  <strong>{t('about.location')}:</strong> {t('about.location')} {/* Using translation */}
                </li>
                <li>
                  <strong>{t('about.role')}:</strong> {t('about.role')} {/* Using translation */}
                </li>
                <li>
                  <strong>{t('about.experience')}:</strong> {t('about.experience')} {/* Using translation */}
                </li>
                <li>
                  <strong>{t('about.interests')}:</strong> {t('about.interests')} {/* Using translation */}
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">{t('about.connect')}</h3> {/* Using translation */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => { handleOpenNewTab("https://github.com/binhkid2") }}>
                    <GithubIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => { handleOpenNewTab("https://facebook.com/binhkid01") }}>
                    <FacebookIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => { handleOpenMail("binhkid2@gmail.com") }}>
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => { handleOpenNewTab("https://docs.google.com/document/d/1z3KMBrNxJ3sOC4eAy-M8IVm1JYcXupv29sQPNYQWCGI") }}>
                    <FileText className="mr-2 h-4 w-4" />
                    {t('about.resume')} {/* Using translation */}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{t('about.workExperience')}</CardTitle> {/* Using translation */}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">{t('about.freelance')}</h3> {/* Using translation */}
                  <p className="text-sm text-muted-foreground">{t('about.freelancePeriod')}</p> {/* Using translation */}
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    {freelanceTasks.map((task: string, index: number) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
