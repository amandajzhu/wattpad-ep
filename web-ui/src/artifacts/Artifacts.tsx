import { useState } from "react";
import "./Artifacts.css";
import ArtifactContentTerm1 from "./ArtifactContentTerm1";
import { titles as artifactTitlesTerm1 } from "./ArtifactContentTerm1";
import ArtifactContentTerm2 from "./ArtifactContentTerm2";
import { titles as artifactTitlesTerm2 } from "./ArtifactContentTerm2";
import ArtifactContentTerm3 from "./ArtifactContentTerm3";
import { titles as artifactTitlesTerm3 } from "./ArtifactContentTerm3";

function Artifacts({ term }: { term: number }) {
  const dialog = document.querySelector("dialog");

  let numArtifacts = 0;
  let artifactTitles: string[] = [];

  switch (term) {
    case 1:
      numArtifacts = artifactTitlesTerm1.length;
      artifactTitles = artifactTitlesTerm1;
      break;
    case 2:
      numArtifacts = artifactTitlesTerm2.length;
      artifactTitles = artifactTitlesTerm2;
      break;
    case 3:
      numArtifacts = artifactTitlesTerm3.length;
      artifactTitles = artifactTitlesTerm3;
      break;
    default:
      break;
  }

  const [artifactId, setArtifactId] = useState<number | null>(null);

  const openArtifact = (artifactId: number) => {
    setArtifactId(artifactId);
    dialog?.showModal();
  };

  return (
    <div className="artifacts-container">
      <dialog className="artifact-dialog">
        {term === 1 && (
          <ArtifactContentTerm1 artifactId={artifactId as number} />
        )}
        {term === 2 && (
          <ArtifactContentTerm2 artifactId={artifactId as number} />
        )}
        {term === 3 && (
          <ArtifactContentTerm3 artifactId={artifactId as number} />
        )}
        <button className="close-button" onClick={() => dialog?.close()}>
          Close
        </button>
      </dialog>

      <div className={`artifacts ${numArtifacts === 4 && "four-artifacts"}`}>
        {artifactTitles.map((title, index) => (
          <button
            className={`artifact${index + 1}`}
            onClick={() => openArtifact(index + 1)}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Artifacts;
