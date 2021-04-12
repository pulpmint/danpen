import { Button, IconButton } from "@chakra-ui/button";
import { Box, Divider, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC, useState } from "react";
import { Image, X } from "react-feather";
import { event } from "react-ga";
import { SHOT_COUNT } from "../constants/localStorage";
import { EXPORTSIZE } from "../constants/panelSettings";
import usePanelSettings from "../hooks/usePanelSettings";

import domToImage from "../public/js/domToImage";
import { ExportSize, IExportOptions } from "../types/PanelSettings";

const DownloadDialog: FC = () => {
  const { exportSize, setExportSize } = usePanelSettings();

  const [open, setOpen] = useState<boolean>(false);

  const exportImage = async (scale: ExportSize) => {
    if (document && window) {
      let count: number = parseInt(localStorage.getItem(SHOT_COUNT));

      if (isNaN(count)) count = 0;

      const link = document.createElement("a");

      const config = {
        style: {
          transform: `scale(${scale})`,
          "transform-origin": "top left",
          background: "none"
        },
        filter: n => {
          if (n.className) {
            const className = String(n.className);
            if (className.includes("eliminateOnRender")) {
              return false;
            }
            if (className.includes("CodeMirror-cursors")) {
              return false;
            }
          }
          return true;
        },
        width: document.getElementById("danpen").offsetWidth * scale,
        height: document.getElementById("danpen").offsetHeight * scale
      };

      const base64 = await domToImage.toPng(document.getElementById("danpen"), config);

      link.href = base64;
      link.download = `Danpen ${scale - 1}x.png`;

      document.body.appendChild(link);

      link.click();
      link.remove();

      localStorage.setItem(SHOT_COUNT, (count + 1).toString());
    }

    setExportSize(scale);
    setOpen(false);
  };

  const handleDownloadAnalytics = (download: IExportOptions) => {
    const count = parseInt(localStorage.getItem("shot"));

    event({
      category: "Download",
      action: download.label,
      // value: count
    });
  };

  return (
    <>
      <Tooltip label="Download Image">
        <IconButton
          colorScheme="green"
          borderRadius="full"
          aria-label="Download Image"
          icon={<Image size={20} />}
          onClick={() => setOpen(true)}
        />
      </Tooltip>

      <Modal isCentered onClose={() => setOpen(false)} isOpen={open}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Text fontWeight="bold">Size Matters</Text>
              <IconButton
                size="sm"
                borderRadius="full"
                aria-label="close"
                icon={<X size={16} />}
                onClick={() => setOpen(false)}
              />
            </Box>
          </ModalHeader>

          <Divider />

          <ModalBody>
            <Text mt="2" mb="4">
              We all say size doesn't matter but it's not true and we all know it. Select a size to
              download.
            </Text>

            <Box display="flex" alignItems="center" mb="4">
              {EXPORTSIZE.map(size => (
                <Button
                  key={size.value}
                  size="xs"
                  mr="2"
                  colorScheme={exportSize === size.value ? "green" : "gray"}
                  onClick={() => {
                    handleDownloadAnalytics(size);
                    exportImage(size.value);
                  }}
                >
                  {size.label}
                </Button>
              ))}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DownloadDialog;
