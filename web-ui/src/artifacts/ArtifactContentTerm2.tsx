import { ReactElement } from "react";
import "./ArtifactContent.css";
import techDoc from "../assets/tech-doc.pdf";
import resume from "../assets/resume-term-2.pdf";

export const titles: string[] = [
  "This Web App, Improved",
  "Technical Design Document",
  "Wattpad.com",
  "Updated Resume",
];

function ArtifactContent({ artifactId }: { artifactId: number }) {
  const artifactContents: { [key: number]: ReactElement } = {
    1: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[0]}</h2>
          <p>
            Since the end of last term, I have worked on several new features
            and enhancements that enabled me to grow as a web developer. I had
            to oppourtunity to work on an exciting project that involved more
            complex components. The components required me to do some research
            and become comfortable with patterns that I have not used before.
            So, for my eportfolio, I decided to apply these skills and build on
            my exisitng eportfolio from last term. The updates made to this web
            app are my first artifact for this term.
            <br />
            <br />
            By default, this web app opens to my "Winter 2026" artifacts. There
            are four artifacts for this term, and they are displayed in
            bubble-like buttons similar to those from last term. Clicking on the
            term buttons in the centre of the page toggles between "Fall 2025"
            and "Winter 2026" artifacts. One of the more challenging aspects of
            developing this was effectively switching between two terms that
            have a different number of artifacts. To do this, I implemented
            conditional rendering with props to reuse the same components for
            both terms, avoiding unnecessary duplication. This approach appeared
            multiple times throughout my work term, and I applied it in my
            eportfolio to demonstrate my improvement.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-04-17</div>
      </div>
    ),
    2: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[1]}</h2>
          <p>
            Part of the planning stages for projects in my team are creating
            technical design documents. This term, I helped a member ofmy team
            create one of these documents. I also had the opportunity to write
            one on my own for another project I was starting. These documents
            are important for sharing technical details with the team and
            keeping record of the changes made. They are also a great way to lay
            out the specifics before beginning development.
            <br />
            <br />
            For this artifact, I have linked below a techincal design document I
            created for developing this ePortfolio. It is similar to the ones I
            worked on in my work term, but it is tailored to this project. It
            includes an overview of the project, a breakdown of the components
            and their intended changes, and a rough estimate of the time it will
            take it develop. The document was written in Confluence and exported
            to a PDF.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              href={techDoc}
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Open Technical Design Document
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-04-19</div>
      </div>
    ),
    3: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[2]}</h2>
          <p>
            Similar to last term, I have spent this term working on Wattpad's
            core web app,{" "}
            <a href="https://www.wattpad.com" target="_blank" rel="noreferrer">
              wattpad.com
            </a>
            . This term, I started my second epic, which involved the redesign
            of one of Wattpad's most important pages. The epic took several
            stages and spanned across almost the entire term. I collaborated
            with the web team to develop the page, the design and product teams
            to ensure the new design was implemented as intended, the data team
            to enable event tracking, and the QA team to test and detect issues.
            The project was released near the end of this term, and I am proud
            to have contributed to an initiative that will impact millions of
            users.
            <br />
            <br />
            Working on this epic was a great learning experience. It was the
            largest project I have worked on to date, and while it was
            challenging to navigate at times, it was very exciting to see the
            changes come together.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              href="https://www.wattpad.com"
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Visit Wattpad.com
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-04-17</div>
      </div>
    ),
    4: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[3]}</h2>
          <p>
            Click the button below to open my resume. It has been updated with
            my latest experience from this past term.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Open Resume
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-04-19</div>
      </div>
    ),
  };

  return <>{artifactContents[artifactId]}</>;
}

export default ArtifactContent;
