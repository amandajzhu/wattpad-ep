import { useState } from "react";
import "./Artifacts.css";
import ArtifactContent from "./ArtifactContent";

function Artifacts() {
  const dialog = document.querySelector("dialog");
  const [artifactId, setArtifactId] = useState<number | null>(null);

  const openArtifact = (artifactId: number) => {
    setArtifactId(artifactId);
    dialog?.showModal();
  };

  return (
    <div className="artifacts-container">
      <dialog className="artifact-dialog">
        <ArtifactContent artifactId={artifactId as number} />
        <button className="close-button" onClick={() => dialog?.close()}>
          Close
        </button>
      </dialog>

      <div className="artifacts">
        <button className="artifact1" onClick={() => openArtifact(1)}>
          About this Webpage
        </button>
        <button className="artifact2" onClick={() => openArtifact(2)}>
          30-60-90 Day Plan
        </button>
        <button className="artifact3" onClick={() => openArtifact(3)}>
          Mentorship Program
        </button>
        <button className="artifact4" onClick={() => openArtifact(4)}>
          Wattpad.com
        </button>
        <button className="artifact5" onClick={() => openArtifact(5)}>
          Solve of The Sprint
        </button>
        <button className="artifact6" onClick={() => openArtifact(6)}>
          Updated Resume
        </button>
      </div>
    </div>
  );
}

export default Artifacts;
