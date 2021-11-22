import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Divider, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import { FC, useState } from "react";
import { X } from "react-feather";
import DownloadIcon from "../../assets/SVGs/DownloadIcon";
import {
  BACKGROUND_COLOR,
  ICON_BACKGROUND,
  ICON_BACKGROUND_HOVER,
  TEXT_HIGHLIGHT
} from "../../config/colors";
import { theme } from "../../config/theme";
import { EXPORTSIZE } from "../../constants/panelSettings";
import usePanelSettings from "../../hooks/usePanelSettings";
import domToImage from "../../public/js/domToImage";
import { ExportSize } from "../../types/PanelSettings";
import CustomButton from "../CustomButton";
import PanelIconButton from "./PanelIconButton";

const DownloadDialog: FC = () => {
  const { exportSize, setExportSize } = usePanelSettings();

  // colors
  const backgroundColor = useColorModeValue(
    BACKGROUND_COLOR.light,
    BACKGROUND_COLOR.dark
  );
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const iconBackgroundHover = useColorModeValue(
    ICON_BACKGROUND_HOVER.light,
    ICON_BACKGROUND_HOVER.dark
  );
  const textHighlghtColor = useColorModeValue(
    TEXT_HIGHLIGHT.light,
    TEXT_HIGHLIGHT.dark
  );

  const [open, setOpen] = useState<boolean>(false);

  const exportImage = async (scale: ExportSize) => {
    if (document && window) {
      const link = document.createElement("a");

      const picArea = document.getElementById("pic-area");

      picArea.style.backgroundColor = "transparent";

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

      picArea.style.backgroundColor = theme.colors.blackAlpha[100];

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
      <PanelIconButton
        buttonProps={{
          ml: "6",
          textColor: "green.500",
          onClick: () => setOpen(true)
        }}
        label="Download Image"
      >
        <DownloadIcon size={24} />
      </PanelIconButton>

      <Modal isCentered onClose={() => setOpen(false)} isOpen={open}>
        <ModalOverlay />

        <ModalContent
          rounded="2xl"
          overflow="hidden"
          bg={backgroundColor}
          shadow="none"
        >
          <ModalHeader>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontWeight="bold">Select Size</Text>
              <CustomButton
                buttonProps={{ p: "0", onClick: () => setOpen(false) }}
              >
                <X size={16} />
              </CustomButton>
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
                  <CustomButton
                    key={size.value}
                    buttonProps={{
                      textColor:
                        exportSize === size.value ? "white" : textHighlghtColor,
                      px: "4",
                      rounded: "none",
                      bg:
                        exportSize === size.value
                          ? theme.colors.green[500]
                          : iconBackground,
                      _hover: {
                        backgroundColor:
                          exportSize === size.value
                            ? theme.colors.green[400]
                            : iconBackgroundHover
                      },
                      onClick: () => setExportSize(size.value)
                    }}
                  >
                    {size.label}
                  </CustomButton>
                ))}
              </Box>

              <CustomButton
                buttonProps={{
                  px: "4",
                  onClick: () => exportImage(exportSize)
                }}
              >
                Save Image
              </CustomButton>
            </Box>

            <Divider />

            <Text my="4" fontSize="sm" textColor={textHighlghtColor}>
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
