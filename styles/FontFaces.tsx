import { FC } from "react";

const FontFaces: FC = () => {
  return (
    <style jsx global>{`
      @font-face {
        font-family: "Fira Mono";
        src: local("Fira Mono"), url(/fonts/FiraMono-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "IBM Plex Mono";
        src: local("IBM Plex Mono"), url(/fonts/IBMPlexMono-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Jet Brains Mono";
        src: local("Jet Brains Mono"), url(/fonts/JetBrainsMono-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Roboto Mono";
        src: local("Roboto Mono"), url(/fonts/RobotoMono-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Source Code Pro";
        src: local("Source Code Pro"), url(/fonts/SourceCodePro-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Space Mono";
        src: local("Space Mono"), url(/fonts/SpaceMono-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Ubuntu Mono";
        src: local("Ubuntu Mono"), url(/fonts/UbuntuMono-Regular.ttf) format("truetype");
      }
    `}</style>
  );
};

export default FontFaces;
