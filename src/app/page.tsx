'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import Timeline from './components/timeline'
import TimelineItem from './components/timeline-item'
import Headline from './components/headline'
import Footer from './components/footer'

export default function Home() {
  const [activeTheme, setActiveTheme] = useState<string>('system')

  useEffect(() => {
    const savedTheme = sessionStorage.getItem('theme')
    if (savedTheme === 'system' || !savedTheme) {
      applySystemTheme()
      setActiveTheme('system')
    } else {
      applyTheme(savedTheme)
      setActiveTheme(savedTheme)
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === 'system') {
        applySystemTheme()
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const applyTheme = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme)
    sessionStorage.setItem('theme', newTheme)
    if (newTheme === 'system') {
      applySystemTheme()
    } else {
      applyTheme(newTheme)
    }
  }

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <main className="max-w-8xl container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="bg-gray-100 p-5 text-left md:col-span-4 lg:p-14 dark:bg-gray-900">
          <section className="flex justify-end space-x-2 print:hidden md:hidden">
            <button onClick={() => handleThemeChange('light')} title="Dark">
              <FaSun className="text-green-600 dark:text-gray-100" />
            </button>
            <button onClick={() => handleThemeChange('dark')} title="Light">
              <FaMoon className="text-gray-900 dark:text-green-600" />
            </button>
            <button onClick={() => handleThemeChange('system')} title="System">
              <FaGear className="text-gray-900 dark:text-gray-100" />
            </button>
          </section>

          <h1 className="leading-tighter mt-1 md:mt-5 text-4xl font-extrabold lg:text-6xl print:text-2xl">
            Marcel Breuer
          </h1>
          <p className="mt-3 text-xl text-green-600 dark:text-green-500 print:hidden">
            IT-Manager & Prokurist
          </p>
          <div className="-mx-5 mb-6 mt-10 lg:-mx-16 print:hidden">
            <Image
              src="/assets/marcel-breuer-bw.png"
              className="inline-block lg:rounded-sm print:hidden"
              alt="Marcel Breuer"
              quality={75}
              width={750}
              height={0}
            />
          </div>

          <div className="print:hidden">
            <p className="font-semibold text-sm">
              &copy; Marcel Breuer {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl space-y-8 p-5 md:col-span-8 md:p-10 print:max-w-max">
          <section className="justify-end space-x-2 print:hidden hidden md:flex">
            <button onClick={() => handleThemeChange('light')} title="Dark">
              <FaSun className="text-green-600 dark:text-gray-100" />
            </button>
            <button onClick={() => handleThemeChange('dark')} title="Light">
              <FaMoon className="text-gray-900 dark:text-green-600" />
            </button>
            <button onClick={() => handleThemeChange('system')} title="System">
              <FaGear className="text-gray-900 dark:text-gray-100" />
            </button>
          </section>

          <section className="!mt-0" id="work-experience">
            <Headline>Berufliche Tätigkeit</Headline>
            <Timeline>
              <TimelineItem
                heading={'06.2021 - heute'}
                subheading={
                  'IT-Manager und Prokurist, consulting1x1 GmbH, Leverkusen'
                }
              >
                <ul className="ms-4 list-inside list-disc">
                  <li>
                    Strategische Leitung und Koordination der Entwicklung einer
                    B2B-Plattform mit{' '}
                    <span className="inline-block">&gt; 25.000</span> aktiven
                    Kunden zur Förderung nachhaltiger Chemikaliennutzung in der
                    Textil- und Lederindustrie
                  </li>
                  <li>
                    Führung funktionsübergreifender, internationaler Teams und
                    direkte Zusammenarbeit mit Geschäftsleitung und Stakeholdern
                  </li>
                  <li>
                    Risiko- und Eskalationsmanagement zur Sicherstellung von
                    Projektzielen und Meilensteinen
                  </li>
                  <li>
                    Verantwortung für Projektplanung, Fortschrittskontrolle und
                    Reporting an das Management
                  </li>
                  <li>
                    Sicherstellung höchster Qualitätsstandards und Compliance
                    mit der Unternehmens-Datenstrategie
                  </li>
                </ul>
              </TimelineItem>
              <TimelineItem
                heading={'09.2018 - 06.2021'}
                subheading={
                  'Fachinformatiker für Anwendungsentwicklung, consulting1x1 GmbH, Leverkusen'
                }
              >
                <ul className="ms-4 list-inside list-disc">
                  <li>
                    Fullstack Implementierung von Webapplikationen und
                    individuellen Softwarelösungen unter Einsatz von Python, PHP
                    und TypeScript
                  </li>
                  <li>
                    Technisches Design und Entwicklung von Backend- und
                    Frontendlösungen unter Verwendung agiler Methoden
                  </li>
                </ul>
              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Bildungsgang</Headline>
            <Timeline>
              <TimelineItem
                heading={'09.2024 - heute'}
                subheading={
                  'M.Sc. Business Intelligence & Data Science, International School of Management, Köln'
                }
              >
                Schwerpunkte: Datenanalyse, IT-Management und digitale
                Prozessoptimierung
              </TimelineItem>
              <TimelineItem
                heading={'09.2019 - 12.2024'}
                subheading={
                  'B.A. Business Administration, International School of Management, Köln'
                }
              >
                Schwerpunkte: Internationale Rechnungslegung, Controlling und
                Unternehmensführung
                <br />
                Thesis:{' '}
                <i>
                  „Einfluss von KI-gestützten Anwendungen bei
                  Veränderungsprozessen in Unternehmen“
                </i>
              </TimelineItem>
              <TimelineItem
                heading={'09.2018 - 06.2021'}
                subheading={
                  'Fachinformatiker für Anwendungsentwicklung, Georg-Simon-Ohm Berufskolleg, Köln'
                }
              >
                Ausbildung zum Fachinformatiker für Anwendungsentwicklung
              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Qualifikationen</Headline>
            <Timeline>
              <TimelineItem heading={'Sprachen'}>
                <ul className="ms-4 list-inside list-disc">
                  <li>Deutsch (C2)</li>
                  <li>Englisch (C1)</li>
                </ul>
              </TimelineItem>
              <TimelineItem heading={'Zertifikate'}>
                <ul className="ms-4 list-inside list-disc">
                  <li>Professional Scrum Master I</li>
                </ul>
              </TimelineItem>
              <TimelineItem heading={'Technologien & Tools'}>
                <ul className="ms-4 list-inside list-disc">
                  <li>Jira</li>
                  <li>Confluence</li>
                  <li>Salesforce</li>
                  <li>Git</li>
                  <li>Docker</li>
                </ul>
              </TimelineItem>
              <TimelineItem heading={'Programmiersprachen'}>
                <ul className="ms-4 list-inside list-disc">
                  <li>Go, Python, PHP, TypeScript, SQL</li>
                  <li>FastAPI, Laravel, NextJS, Angular</li>
                </ul>
              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Socials</Headline>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/m-breuer/"
                target="_blank"
                className="flex gap-2 items-center font-medium text-black hover:text-green-600 dark:text-white dark:hover:text-green-600"
              >
                <FaLinkedin className="size-8" />
                LinkedIn
              </a>

              <a
                href="https://github.com/breuermarcel/"
                target="_blank"
                className="flex gap-2 items-center font-medium text-black hover:text-green-600 dark:text-white dark:hover:text-green-600"
              >
                <FaGithub className="size-8" />
                GitHub
              </a>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  )
}
