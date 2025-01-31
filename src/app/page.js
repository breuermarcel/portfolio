import Image from 'next/image';
import { FaAddressCard, FaGithub, FaGlobe, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import Timeline from './components/timeline';
import TimelineItem from './components/timeline-item';
import Headline from './components/headline';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12">

        <div className="bg-gray-100 p-5 text-left dark:bg-gray-900 md:col-span-4 lg:p-14">
          <h1 className="leading-tighter mt-5 text-4xl font-extrabold lg:text-6xl">
            Marcel Breuer
          </h1>
          <p className="mt-3 text-xl text-green-600 dark:text-green-500">
            IT-Manager & Prokurist
          </p>
          <div className="-mx-5 mt-10 lg:-mx-16">
            <Image src="/assets/marcel-breuer-black-and-white.png" className="inline-block lg:rounded-sm print:hidden" alt="Marcel Breuer" width={550} height={350} />
          </div>
          <p className="mt-10 text-balance leading-relaxed text-gray-700 dark:text-gray-300">
            {/* DESCRIPTION */}
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-5">
              <FaAddressCard className="size-6 text-black dark:text-white" />
              <span className="truncate font-medium">Solingen, DE</span>
            </div>
            <div className="flex items-center gap-5">
              <FaPhone className="size-6 text-black dark:text-white" />
              <a href="javascript:void(0)" className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75">
                info@marcel-breuer.net
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaGlobe className="size-6 text-black dark:text-white" />
              <a className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75" href="javascript:void(0)">
                https://marcel-breuer.net
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl space-y-16 p-5 md:col-span-8 md:p-10">
          <section>
            <Headline>Berufliche Tätigkeit</Headline>
            <Timeline>
              <TimelineItem heading={'06.2021 - heute'} subheading={'IT-Manager und Prokurist, consulting1x1 GmbH, Leverkusen'}>
                - Projektleitung und Entwicklung einer B2B-Plattformlösung mit über 25.000 Kunden zur Förderung der Nachhaltigkeit entlang der gesamten Wertschöpfungskette<br />
                - Verantwortlich für die Leitung funktionsübergreifender Teams <br />
                - Identifikation, Bewertung und Management von Projektrisiken sowie Einleitung von Eskalationsstufen<br />
                - Entwicklung einer KPI-gesteuerten Reportinglösung zur Transparenz und Effizienzsteigerung<br />
                - Enge Zusammenarbeit mit der Geschäftsführung sowie Stakeholdern zur Sicherstellung der Zielerreichung und Strategie
              </TimelineItem>
              <TimelineItem heading={'09.2018 - 06.2021'} subheading={'Fachinformatiker für Anwendungsentwicklung, consulting1x1 GmbH, Leverkusen'}>
                - Fullstack Implementierung von Webapplikationen und individuellen Softwarelösungen unter
                Einsatz von Python, PHP und TypeScript<br />
                - Technisches Design und Entwicklung von Backend- und Frontendlösungen unter Verwendung
                agiler Methoden
              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Bildungsgang</Headline>
            <Timeline>
              <TimelineItem heading={'09.2024 - heute'} subheading={'M.Sc. Business Intelligence & Data Science, International School of Management, Köln'}>
                Schwerpunkte: Datenanalyse, IT-Management und digitale Prozessoptimierung
              </TimelineItem>
              <TimelineItem heading={'09.2019 - 10.2024'} subheading={'B.A. Business Administration, International School of Management, Köln'}>
                Schwerpunkte: Internationale Rechnungslegung, Controlling und Unternehmensführung<br />
                Thesis: „Einfluss von KI-gestützten Anwendungen bei Veränderungsprozessen in Unternehmen“
              </TimelineItem>
              <TimelineItem heading={'09.2018 - 06.2021'} subheading={'Fachinformatiker für Anwendungsentwicklung, Georg-Simon-Ohm Berufskolleg, Köln'}>

              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Qualifikationen</Headline>
            <Timeline>
              <TimelineItem heading={'Sprachen'}>
                - Deutsch (Muttersprache)<br />
                - Englisch (fließend)
              </TimelineItem>
              <TimelineItem heading={'Zertifikate'}>
                - Professional Scrum Master I
              </TimelineItem>
              <TimelineItem heading={'Technologien & Tools'}>
                - Jira, Confluence<br />
                - Git, Docker
              </TimelineItem>
              <TimelineItem heading={'Programmiersprachen'}>
                - Python, PHP, TypeScript, SQL<br />
                - FastAPI, Laravel, NextJS, Angular
              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Socials</Headline>

            <div className='flex gap-8'>
              <div className='flex gap-2'>
                <FaLinkedin className="size-6 text-black dark:text-white" />
                <a href="https://www.linkedin.com/in/m-breuer/" target='_blank' className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75">
                  LinkedIn
                </a>
              </div>

              <div className='flex gap-2'>
                <FaGithub className="size-6 text-black dark:text-white" />
                <a href="https://github.com/breuermarcel/" target='_blank' className="truncate font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75">
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main >
  );
}
