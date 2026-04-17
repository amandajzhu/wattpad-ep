import { ReactElement } from "react";
import "./ArtifactContent.css";

export const titles: string[] = [
  "More About this Webpage",
  "Team Newsletter",
  "Wattpad.com",
  "Updated Resume",
];

function ArtifactContent({ artifactId }: { artifactId: number }) {
  const artifactContents: { [key: number]: ReactElement } = {
    1: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[0]}</h2>
          <p></p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-04-16</div>
      </div>
    ),
    2: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[1]}</h2>
          <p></p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              // href={}
              target="_blank"
              rel="noreferrer"
              className="artifact-link"
            >
              Open
            </a>
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
          </div>
        </div>
        <div className="last-updated">Last updated 2026-04-16</div>
      </div>
    ),
    4: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[2]}</h2>
          <p>
            <a href="https://www.wattpad.com" target="_blank" rel="noreferrer">
              wattpad.com
            </a>
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
        <div className="last-updated">Last updated 2026-04-16</div>
      </div>
    ),
    5: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[3]}</h2>
          <p></p>
          <img
            // src={}
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
        <div className="last-updated">Last updated 2026-04-16</div>
      </div>
    ),
    6: (
      <div className="artifact-container">
        <div className="artifact-content">
          <h2>{titles[4]}</h2>
          <p>
            Click the button below to open my resume. It has been updated with
            my latest experience this past term.
          </p>
          <div className="artifact-bottom-container">
            <div className="decorative-bubble1" />
            <div className="decorative-bubble2" />
            <a
              // href={resume}
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
        <div className="last-updated">Last updated 2026-04-16</div>
      </div>
    ),
  };

  return <>{artifactContents[artifactId]}</>;
}

export default ArtifactContent;
