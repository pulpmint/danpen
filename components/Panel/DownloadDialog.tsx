import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { FC, ReactNode, useEffect, useState } from "react";
import { Check, Copy, Download, X } from "react-feather";
import DownloadIcon from "../../assets/SVGs/DownloadIcon";
import {
  BACKGROUND_COLOR,
  ICON_BACKGROUND,
  TEXT_HIGHLIGHT
} from "../../config/colors";
import { theme } from "../../config/theme";
import { EXPORTSIZE } from "../../constants/panelSettings";
import useClipboardSupport from "../../hooks/useClipboardSupported";
import useKeyboardListener from "../../hooks/useKeyboardListener";
import usePanelSettings from "../../hooks/usePanelSettings";
import domToImage from "../../public/js/domToImage";
import { ExportSize } from "../../types/PanelSettings";
import CustomButton from "../CustomButton";
import PanelIconButton from "./PanelIconButton";

interface IOption {
  bg: string;
  color: string;
  icon: ReactNode;
  onClick: Function;
  label: string;
  disabled: boolean;
  tooltip: string;
}

type DownloadFormat = "PNG" | "BLOB";

const DownloadDialog: FC = () => {
  const download = useKeyboardListener({ key: "s", ctrl: true, alt: true });
  const copy = useKeyboardListener({ key: "c", ctrl: true, alt: true });

  const { exportSize, rendering, setExportSize, setRendering } =
    usePanelSettings();

  // colors
  const backgroundColor = useColorModeValue(
    BACKGROUND_COLOR.light,
    BACKGROUND_COLOR.dark
  );
  const iconBackground = useColorModeValue(
    ICON_BACKGROUND.light,
    ICON_BACKGROUND.dark
  );
  const textHighlghtColor = useColorModeValue(
    TEXT_HIGHLIGHT.light,
    TEXT_HIGHLIGHT.dark
  );

  const copyColor = useColorModeValue("blue.50", "blue.900");
  const downoadColor = useColorModeValue("green.50", "green.900");

  // important to check the clipboard support for the browser
  const isClipboardSupported = useClipboardSupport();

  const [open, setOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const exportImage = async (scale: ExportSize, format: DownloadFormat) => {
    if (document && window) {
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

      setRendering(true);
      setCopied(false);

      if (format === "PNG") {
        const link = document.createElement("a");

        const base64 = await domToImage.toPng(
          document.getElementById("danpen"),
          config
        );

        link.href = base64;
        link.download = `Danpen ${scale - 1}x.png`;

        document.body.appendChild(link);

        link.click();
        link.remove();

        setExportSize(scale);
        setOpen(false);
      }

      if (format === "BLOB" && isClipboardSupported) {
        const blob = await domToImage.toBlob(
          document.getElementById("danpen"),
          config
        );

        navigator.clipboard.write([
          new window.ClipboardItem({
            [blob.type]: blob
          })
        ]);

        setCopied(true);
      }

      setRendering(false);
    }
  };

  useEffect(() => {
    let myTimeOut = null;

    if (copied) {
      myTimeOut = setTimeout(() => setCopied(false), 3000);
    }

    return () => {
      if (myTimeOut) clearTimeout(myTimeOut);
    };
  }, [copied]);

  useEffect(() => {
    // download
    if (download) exportImage(exportSize, "PNG");

    // copy
    if (copy) exportImage(exportSize, "BLOB");
  }, [download, copy]);

  const handleClose = () => {
    setCopied(false);
    setOpen(false);
  };

  const OPTIONS: IOption[] = [
    {
      bg: copyColor,
      color: theme.colors.blue[500],
      icon: copied ? <Check size={20} /> : <Copy size={20} />,
      onClick: () => exportImage(exportSize, "BLOB"),
      label: copied ? "Copied" : "Copy",
      disabled: rendering || !isClipboardSupported,
      tooltip: !isClipboardSupported ? "Clipboard Not Supported" : ""
    },
    {
      bg: downoadColor,
      color: theme.colors.green[500],
      icon: <Download size={20} />,
      onClick: () => exportImage(exportSize, "PNG"),
      label: "PNG",
      disabled: rendering,
      tooltip: ""
    }
  ];

  return (
    <>
      <PanelIconButton
        buttonProps={{
          ml: "6",
          textColor: "green.500",
          transform: "rotate(180deg)",
          onClick: () => setOpen(true)
        }}
        label="Share Code Snippet"
      >
        <DownloadIcon size={24} />
      </PanelIconButton>

      <Modal isCentered onClose={() => handleClose()} isOpen={open}>
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
              <Text fontWeight="bold">Share Code Snippet</Text>
              <CustomButton
                buttonProps={{
                  p: "0",
                  onClick: () => setOpen(false),
                  disabled: rendering
                }}
              >
                <X size={16} />
              </CustomButton>
            </Box>
          </ModalHeader>

          <Divider />

          <ModalBody>
            <Box
              mt="4"
              mb="6"
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="sm" textColor={textHighlghtColor}>
                Select Code Snippet Size
              </Text>

              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                gridGap="1"
                rounded="full"
              >
                {EXPORTSIZE.map(size => (
                  <Button
                    disabled={rendering}
                    size="xs"
                    rounded="full"
                    px="3.5"
                    py="2"
                    h="fit-content"
                    fontWeight="medium"
                    fontSize="xs"
                    bg={
                      exportSize === size.value ? iconBackground : "transparent"
                    }
                    _hover={{ backgroundColor: iconBackground }}
                    _active={{ backgroundColor: iconBackground }}
                    key={size.value}
                    onClick={() => setExportSize(size.value)}
                  >
                    {size.label}
                  </Button>
                ))}
              </Box>
            </Box>

            <Divider />

            <Box
              position="relative"
              my="6"
              display="flex"
              flexDir="row"
              alignItems="center"
              gridGap="6"
            >
              {OPTIONS.map((option, i) => (
                <Box
                  key={i}
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                >
                  <PanelIconButton
                    buttonProps={{
                      disabled: option.disabled,
                      p: "4",
                      bg: option.bg,
                      textColor: option.color,
                      _hover: { backgroundColor: option.bg },
                      rounded: "full",
                      w: "max-content",
                      h: "fit-content",
                      onClick: () => option.onClick()
                    }}
                    label={option.tooltip}
                  >
                    {option.icon}
                  </PanelIconButton>

                  <Text
                    mt="2"
                    fontSize="sm"
                    fontWeight="medium"
                    textColor={textHighlghtColor}
                  >
                    {option.label}
                  </Text>
                </Box>
              ))}
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
