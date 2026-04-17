import { useState } from "react";
import "./Artifacts.css";
import ArtifactContentTerm1 from "./ArtifactContentTerm1";
import { titles as artifactTitlesTerm1 } from "./ArtifactContentTerm1";
import ArtifactContentTerm2 from "./ArtifactContentTerm2";
import { titles as artifactTitlesTerm2 } from "./ArtifactContentTerm2";

function Artifacts({ term }: { term: number }) {
  const dialog = document.querySelector("dialog");

  const numArtifacts =
    term === 2 ? artifactTitlesTerm2.length : artifactTitlesTerm1.length;
  const artifactTitles = term === 2 ? artifactTitlesTerm2 : artifactTitlesTerm1;

  const [artifactId, setArtifactId] = useState<number | null>(null);

  const openArtifact = (artifactId: number) => {
    setArtifactId(artifactId);
    dialog?.showModal();
  };

  return (
    <div className="artifacts-container">
      <dialog className="artifact-dialog">
        {term === 2 ? (
          <ArtifactContentTerm2 artifactId={artifactId as number} />
        ) : (
          <ArtifactContentTerm1 artifactId={artifactId as number} />
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
