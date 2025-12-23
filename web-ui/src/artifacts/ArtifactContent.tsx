import { ReactElement } from "react";
import "./ArtifactContent.css";
import onboardingPlan from "../assets/30-60-90-plan.pdf";
import mentorshipProgram from "../assets/mentorship-program-cohort-16.pdf";
import solveOfTheSprint from "../assets/solve-of-the-sprint.png";
import resume from "../assets/resume.pdf";

function ArtifactContent({ artifactId }: { artifactId: number }) {
  const artifactContents: { [key: number]: ReactElement } = {
    1: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>About this Webpage</h2>
          <p>
            This webpage showcases the skills and knowledge I learned throughout
            my work term. I built this webpage using React and TypeScript, both
            of which are used in my role as a Web Engineering Intern at Wattpad.
            My work focuses primarily on front-end web development, so I
            designed this page to highlight those skills.
            <br />
            I designed the layout with the goal of a clean and intuitive user
            experience, inspired by Wattpad. I used React components and CSS
            styling to create bubble-like elements that show my artifacts. I
            felt that these bubbles would invoke a creative and imaginative
            sense, similar to Wattpad's values. The bubbles also provide an
            opportunity to demonstrate my skills in developing modular React
            components.
            <br />
            As explained in my "Mentorship Program" artifact, I've been learning
            about DevOps during my work term; specifically Docker and GitHub
            Actions. This web app ties into those skills, using GitHub Actions
            to build and deploy.
            <br />I feel that I am developing a strong foundation as a web
            developer, and I hope that my personal touch shines through in this
            portfolio.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2025-12-22</div>
      </div>
    ),
    2: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>30-60-90 Day Plan</h2>
          <p>
            As part of my onboarding, I created a 30-60-90 day plan to kickstart
            my work term with clear expectations. When creating my plan, I
            prioritized setting acheivable but challenging goals that would push
            me to grow into my role. These goals included getting involved with
            not only my team, but also other teams i would alongside with. The
            plan was shared with my manager once completed.
            <br />
            As my work term progressed, I revisited my plan to reflect on my
            progress. I found that I learned the most when I took the initiative
            to try something hands-on, or reached out to my teammates for help.
            Overall, the 30-60-90 day plan was a great way to set myself up for
            success, and I am excited to continue my role for the next two
            terms.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              href={onboardingPlan}
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Open 30-60-90 Day Plan
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2025-12-16</div>
      </div>
    ),
    3: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>Mentorship Program</h2>
          <p>
            The Engineering and Data department runs a mentorship program to
            encourage learning and connecting with other department teams. I
            signed up for the program as a mentee with goals of learning more
            about DevOps and expanding my network. I was paired with a mentor
            from the platform engineering team who had been a seasoned mentor
            for DevOps topics. With my mentor's insights, we decided to focus on
            two specific topics: Docker and GitHub Actions. My first cohort in
            the program took place from October to December, where we met
            bi-weekly to discuss my goals, learnings, and any questions I had.
            The cohort ended with a show & share session where the mentorship
            pairs shared a short presentation on their process and key
            learnings. For my presentation, I created a few short slides to aid
            my talk, which I've included below. The mentorship program has been
            a great help in my growth as an aspiring software engineer. I will
            be continuing in the program for another cohort starting in January.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              href={mentorshipProgram}
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Open Mentorship Presentation
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2025-12-09</div>
      </div>
    ),
    4: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>Wattpad.com</h2>
          <p>
            As a member of the Web team, my main responsibility is working on
            Wattpad's web app,{" "}
            <a href="https://www.wattpad.com" target="_blank" rel="noreferrer">
              wattpad.com
            </a>
            . On this platform, you can find some of the features and components
            I have contributed to, including UI changes for various buttons,
            icons, pages, and more. One of my major contributions was working on
            my first epic. I worked with the web team, in addition to the
            design, product, and QA teams, to complete a smooth implementation
            and rollout of the new changes.
            <br />
            Not shown on the web app but also important are the code
            organization and file structure. One of my first tasks was to help
            reorganize the existing code following best practices, making it
            easier for future developments. This initiative was started prior to
            my start date, and it was wrapped up by another intern and I during
            our first few weeks.
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
        <div className="last-updated">Last updated 2025-12-16</div>
      </div>
    ),
    5: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>Solve of The Sprint</h2>
          <p>
            As part of my team's sprint retrospectives, each member shares a
            bugfix, feature, or anything they're proud of that they worked on
            over the past sprint. From there, an assigned member chooses the
            "solve of the sprint". In my third month on the team, I was honored
            to have my efforts recognized as solve of the sprint. The fix I
            implemented involved using the @container CSS rule to improve the
            responsiveness of a component. This component was used in multiple
            areas, and only needed to be changed when the size of its parent
            container reached a certain threshold. To avoid affecting other
            areas where the component was used, I applied the @container rule to
            ensure the new styles only applied when needed. This approach was
            not currently implemented in the codebase, and so I was proud to
            introduce this solution to my team.
            <br />
            Below is a section I added to the team's "Solves of the sprint" blog
            page.
          </p>
          <img
            src={solveOfTheSprint}
            alt="Solve of the Sprint Screenshot"
            className="artifact-image"
          />
          <div
            className="artifact-bottom-container"
            style={{ marginTop: "24px" }}
          >
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2025-12-08</div>
      </div>
    ),
    6: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>Updated Resume</h2>
          <p>
            Click the button below to open my updated resume, detailing my
            experience at Wattpad over the past work term.
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
        <div className="last-updated">Last updated 2025-12-22</div>
      </div>
    ),
  };

  return <>{artifactContents[artifactId]}</>;
}

export default ArtifactContent;
