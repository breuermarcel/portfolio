import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Timeline from './components/timeline';
import TimelineItem from './components/timeline-item';
import Headline from './components/headline';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="mx-auto max-w-8xl container">
      <div className="grid grid-cols-1 md:grid-cols-12">

        <div className="md:col-span-4 bg-gray-100 dark:bg-gray-900 p-5 lg:p-14 text-left">
          <h1 className="mt-5 font-extrabold print:text-2xl text-4xl lg:text-6xl leading-tighter">
            Marcel Breuer
          </h1>
          <p className="print:hidden mt-3 text-green-600 dark:text-green-500 text-xl">
            IT-Manager & Prokurist
          </p>
          <div className="print:hidden -mx-5 lg:-mx-16 mt-10 mb-6">
            <Image src="/assets/marcel-breuer-bw.png" className="print:hidden inline-block lg:rounded-sm" alt="Marcel Breuer" quality={75} width={750} height={0} />
          </div>
          <div className="print:hidden">
            &copy; Marcel Breuer {new Date().getFullYear()}
          </div>
        </div>

        <div className="space-y-8 md:col-span-8 mx-auto p-5 md:p-10 print:max-w-max max-w-2xl">
          <section>
            <Headline>Berufliche Tätigkeit</Headline>
            <Timeline>
              <TimelineItem heading={'06.2021 - heute'} subheading={'IT-Manager und Prokurist, consulting1x1 GmbH, Leverkusen'}>
                <ul className="ms-4 list-disc list-inside">
                  <li>Projektleitung und Entwicklung einer B2B-Plattformlösung mit über 25.000 Kunden zur Förderung der Nachhaltigkeit entlang der gesamten Wertschöpfungskette</li>
                  <li>Verantwortlich für die Leitung funktionsübergreifender Teams</li>
                  <li>Identifikation, Bewertung und Management von Projektrisiken sowie Einleitung von Eskalationsstufen</li>
                  <li>Entwicklung einer KPI-gesteuerten Reportinglösung zur Transparenz und Effizienzsteigerung</li>
                  <li>Enge Zusammenarbeit mit der Geschäftsführung sowie Stakeholdern zur Sicherstellung der Zielerreichung und Strategie</li>
                </ul>

              </TimelineItem>
              <TimelineItem heading={'09.2018 - 06.2021'} subheading={'Fachinformatiker für Anwendungsentwicklung, consulting1x1 GmbH, Leverkusen'}>
                <ul className="ms-4 list-disc list-inside">
                  <li>Fullstack Implementierung von Webapplikationen und individuellen Softwarelösungen unter Einsatz von Python, PHP und TypeScript</li>
                  <li>Technisches Design und Entwicklung von Backend- und Frontendlösungen unter Verwendung agiler Methoden</li>
                </ul>
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
                <ul className="ms-4 list-disc list-inside">
                  <li>Deutsch (C2)</li>
                  <li>Englisch (C1)</li>
                </ul>
              </TimelineItem>
              <TimelineItem heading={'Zertifikate'}>
                <ul className="ms-4 list-disc list-inside">
                  <li>Professional Scrum Master I</li>
                </ul>
              </TimelineItem>
              <TimelineItem heading={'Technologien & Tools'}>
                <ul className="ms-4 list-disc list-inside">
                  <li>Jira</li>
                  <li>Confluence</li>
                  <li>Git</li>
                  <li>Docker</li>
                </ul>
              </TimelineItem>
              <TimelineItem heading={'Programmiersprachen'}>
                <ul className="ms-4 list-disc list-inside">
                  <li>Go, Python, PHP, TypeScript, SQL</li>
                  <li>FastAPI, Laravel, NextJS, Angular</li>
                </ul>
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
