import Image from 'next/image';
import { FaAddressCard, FaGithub, FaGlobe, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import Timeline from './components/timeline';
import TimelineItem from './components/timeline-item';
import Headline from './components/headline';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl container">
      <div className="grid grid-cols-1 md:grid-cols-12">

        <div className="md:col-span-4 bg-gray-100 dark:bg-gray-900 p-5 lg:p-14 text-left">
          <h1 className="mt-5 font-extrabold print:text-2xl text-4xl lg:text-6xl leading-tighter">
            Marcel Breuer
          </h1>
          <p className="print:hidden mt-3 text-green-600 dark:text-green-500 text-xl">
            IT-Manager & Prokurist
          </p>
          <div className="print:hidden -mx-5 lg:-mx-16 mt-10">
            <Image src="/assets/marcel-breuer-bw.png" className="print:hidden inline-block lg:rounded-sm" alt="Marcel Breuer" sizes="(max-width: 768px) 100vw, 35vw" quality={75} width={500} height={350} />
          </div>
          <p className="print:hidden mt-10 text-gray-700 dark:text-gray-300 text-balance leading-relaxed">
            {/* DESCRIPTION */}
          </p>
          <div className="print:hidden print:d-flex space-y-5 mt-10">
            <div className="flex items-center gap-5">
              <FaAddressCard className="size-6 text-black dark:text-white" />
              <span className="font-medium truncate">Solingen, DE</span>
            </div>
            <div className="flex items-center gap-5">
              <FaPhone className="size-6 text-black dark:text-white" />
              <a href="javascript:void(0)" className="font-medium text-black hover:text-black/75 dark:hover:text-white/75 dark:text-white underline truncate">
                info@marcel-breuer.net
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaGlobe className="size-6 text-black dark:text-white" />
              <a className="font-medium text-black hover:text-black/75 dark:hover:text-white/75 dark:text-white underline truncate" href="javascript:void(0)">
                https://marcel-breuer.net
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:col-span-8 mx-auto p-5 md:p-10 print:max-w-max max-w-2xl">
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
                Thesis: <i>„Einfluss von KI-gestützten Anwendungen bei Veränderungsprozessen in Unternehmen“</i>
              </TimelineItem>
              <TimelineItem heading={'09.2018 - 06.2021'} subheading={'Fachinformatiker für Anwendungsentwicklung, Georg-Simon-Ohm Berufskolleg, Köln'}>
                Ausbildung zum Fachinformatiker für Anwendungsentwicklung
              </TimelineItem>
            </Timeline>
          </section>

          <section>
            <Headline>Qualifikationen</Headline>
            <Timeline>
              <TimelineItem heading={'Sprachen'}>
                - Deutsch (C2)<br />
                - Englisch (C1)
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
                <a href="https://www.linkedin.com/in/m-breuer/" target='_blank' className="font-medium text-black hover:text-black/75 dark:hover:text-white/75 dark:text-white underline truncate">
                  LinkedIn
                </a>
              </div>

              <div className='flex gap-2'>
                <FaGithub className="size-6 text-black dark:text-white" />
                <a href="https://github.com/breuermarcel/" target='_blank' className="font-medium text-black hover:text-black/75 dark:hover:text-white/75 dark:text-white underline truncate">
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
