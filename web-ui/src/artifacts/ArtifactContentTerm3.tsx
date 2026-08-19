import { ReactElement } from "react";
import "./ArtifactContent.css";
import presentation from "../assets/pey-presentation.pdf";
import resume from "../assets/resume-term-3.pdf";

export const titles: string[] = [
  "More About This Web App",
  "Wattpad.com",
  "PEY Presentation",
  "Updated Resume",
];

function ArtifactContent({ artifactId }: { artifactId: number }) {
  const artifactContents: { [key: number]: ReactElement } = {
    1: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[0]}</h2>
          <p>
            For this term, I added a dark mode display. Now, viewers can toggle
            light/dark mode by clicking the button in the top left corner. The
            reason for this feature was to provide an option to customize the
            user experience. The option of light or dark mode may be simple when
            implemented like this, but it makes a big impact especially when a
            large portion of the screen is affected. A big ongoing conversation
            at my work place is how we can continue improving the user
            experience, not only by adding big features, but by ensuring we
            listen to what our users actually need and want.
            <br />
            <br />
            This topic has been my mind for the past few months, and it was
            something I spoke about my PEY presentation, which I explain further
            in the "PEY Presentation" artifact. In the presentation I also speak
            on what I learned from my internship. One of those points was that I
            became much more comfortable with React and Typescript than I was
            prior to this role. This eportfolio reflects that because I built it
            using React and Typescript. Adding a new section on this web app for
            this term was noticably easier for me than the previous two terms as
            I am more familiar with the architecture.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-08-19</div>
      </div>
    ),
    2: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[1]}</h2>
          <p>
            To reiterate from my previous terms, my role at Wattpad involves
            building the company's core web product,{" "}
            <a href="https://www.wattpad.com" target="_blank" rel="noreferrer">
              wattpad.com
            </a>
            . This summer, I got to take more ownership over my projects from
            beginning to end including techincal design, development, testing,
            bug fixes, and rollouts. I learned more about how to write a good
            techincal design document for a larger scale project, break down the
            work into sizeable tasks to then make into tickets and milestones,
            and keep product managers informed of my progress.
            <br />
            <br />
            Over the last three terms, I worked on some initiatives involving
            the account settings page at{" "}
            <a
              href="https://www.wattpad.com/settings"
              target="_blank"
              rel="noreferrer"
            >
              wattpad.com/settings
            </a>
            , the story details page at{" "}
            <a
              href="https://www.wattpad.com/story/409672351-the-wattys-2026"
              target="_blank"
              rel="noreferrer"
            >
              wattpad.com/story/409672351-the-wattys-2026
            </a>{" "}
            for example, and the Wattys contest, which you can find more
            information on in the above story. For the Wattys, I worked on
            materials that I can no longer link, as the submission window is now
            closed.
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
        <div className="last-updated">Last updated 2026-08-19</div>
      </div>
    ),
    3: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[2]}</h2>
          <p>
            Every year, the cohort of interns (also called PEYS) present what
            they worked on and learned over the year. Attached below are the
            slides I used for my presentation which took place in a department
            all-hands meeting. In my presentation, I summarized the major
            projects I worked on as well as the additional tasks I completed
            along the way. I explained three projects in detail, which were
            Account Settings Migration, Story Details Redesign, and the Wattys
            2026. I chose these three based on what I thought best reflected my
            learnings, skills, and impact on the company.
            <br />
            <br />
            To make this presentation, I reflected on what aspects were the most
            challenging, most impactful, and most fun to work on. I also made
            sure to thank everyone I worked with over the year. This made it a
            lot easier to update my resume as I had already gathered everything
            I worked on throughout this internship. At the all-hands meeting, I
            also got to listen to the other PEY's presentations which I found
            very insightful. The meeting summed up everything I enjoyed about
            the culture at Wattpad, especially how supportive everyone is.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              href={presentation}
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Open PEY Presentation
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-08-19</div>
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
        <div className="last-updated">Last updated 2026-08-19</div>
      </div>
    ),
  };

  return <>{artifactContents[artifactId]}</>;
}

export default ArtifactContent;
