import { IconButton } from "@chakra-ui/button";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC, ReactNode, useState } from "react";
import { AtSign, Twitter, X } from "react-feather";
import ReactMarkdown from "react-markdown";
import { aboutMarkdown } from "../constants/about";
import usePanelSettings from "../hooks/usePanelSettings";

export interface SocialTags {
  link: string;
  label: string;
  service: string;
  icon: ReactNode;
}

const social: SocialTags[] = [
  {
    link: "https://twitter.com/pulpmint",
    label: "Say 👋 on Twitter",
    service: "Twitter",
    icon: <Twitter size={20} />
  }
];

const AboutDialog: FC = () => {
  const { darkMode } = usePanelSettings();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        size="sm"
        aria-label="About"
        colorScheme="blackAlpha"
        borderRadius="full"
        icon={<AtSign size={16} />}
        onClick={() => setOpen(true)}
      />

      <Modal
        isCentered
        onClose={() => setOpen(false)}
        isOpen={open}
        scrollBehavior="outside"
        size="2xl"
      >
        <ModalOverlay />

        <ModalContent overflow="hidden">
          <ModalBody>
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              backgroundColor={darkMode ? "gray.800" : "gray.200"}
              minHeight="48"
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Heading pl="6" pb="6">
                💩 About this Shit
              </Heading>

              <IconButton
                position="absolute"
                top="6"
                right="6"
                size="sm"
                borderRadius="full"
                aria-label="close"
                icon={<X size={16} />}
                onClick={() => setOpen(false)}
              />
            </Box>

            <Box mt="48" mb="4" pt="6">
              <ReactMarkdown
                children={aboutMarkdown}
                linkTarget="_blank"
                className="markdown-theme"
              />
            </Box>

            {social.map(site => (
              <Tooltip key={site.service} label={site.label}>
                <Link
                  isExternal
                  href={site.link}
                  color="twitter.500"
                  position="absolute"
                  bottom="8"
                  right="8"
                >
                  {site.icon}
                </Link>
              </Tooltip>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutDialog;
