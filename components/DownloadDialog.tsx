import { Button, IconButton } from "@chakra-ui/button";
import { Box, Divider, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC, useState } from "react";
import { LogOut, X } from "react-feather";
import { EXPORTSIZE } from "../constants/panelSettings";
import usePanelSettings from "../hooks/usePanelSettings";
import domToImage from "../public/js/domToImage";
import { ExportSize } from "../types/PanelSettings";

const DownloadDialog: FC = () => {
  const { darkMode, exportSize, setExportSize } = usePanelSettings();

  const [open, setOpen] = useState<boolean>(false);

  const exportImage = async (scale: ExportSize) => {
    if (document && window) {
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

      const base64 = await domToImage.toPng(
        document.getElementById("danpen"),
        config
      );

      link.href = base64;
      link.download = `Danpen ${scale - 1}x.png`;

      document.body.appendChild(link);

      link.click();
      link.remove();
    }

    setExportSize(scale);
    setOpen(false);
  };

  return (
    <>
      <Tooltip label="Export Image">
        <IconButton
          colorScheme="gray"
          borderRadius="full"
          aria-label="Export Image"
          transform="rotate(-90deg)"
          icon={<LogOut size={16} />}
          onClick={() => setOpen(true)}
        />
      </Tooltip>

      <Modal isCentered onClose={() => setOpen(false)} isOpen={open}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontWeight="bold">Select Size</Text>
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
              Select the size of the download. It might take a few seconds to
              render the image. Please be patient.
            </Text>

            <Box
              display="flex"
              alignItems="center"
              mb="4"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
                rounded="full"
                overflow="hidden"
              >
                {EXPORTSIZE.map(size => (
                  <Button
                    key={size.value}
                    size="sm"
                    px="4"
                    rounded="none"
                    colorScheme={exportSize === size.value ? "green" : "gray"}
                    onClick={() => setExportSize(size.value)}
                  >
                    {size.label}
                  </Button>
                ))}
              </Box>

              <Button
                key="download"
                size="sm"
                mr="2"
                px="4"
                rounded="full"
                colorScheme="green"
                onClick={() => exportImage(exportSize)}
              >
                Save Image
              </Button>
            </Box>

            <Divider />

            <Text my="4" fontSize="sm" textColor="gray.500">
              <b>Note:</b> Avoid large size background images as it might take
              long time to load or can make the site unresponsive.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DownloadDialog;
