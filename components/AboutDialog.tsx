import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC, ReactNode, useState } from "react";
import { AtSign, GitHub, Twitter, X } from "react-feather";
import ReactMarkdown from "react-markdown";
import { aboutMarkdown } from "../constants/about";

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
  },
  {
    link: "https://github.com/pulpmint",
    label: "Check my GitHub 🐱‍💻",
    service: "GitHub",
    icon: <GitHub size={20} />
  }
];

const AboutDialog: FC = () => {
  const buttonBg = useColorModeValue("transparent", "gray.900");
  const modalBg = useColorModeValue("gray.100", "gray.900");
  const headerBg = useColorModeValue("gray.200", "gray.800");

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Box bg={buttonBg} rounded="full" onClick={() => setOpen(true)}>
        <IconButton
          size="sm"
          aria-label="About"
          rounded="full"
          icon={<AtSign size={16} />}
        />
      </Box>

      <Modal
        isCentered
        onClose={() => setOpen(false)}
        isOpen={open}
        scrollBehavior="outside"
        size="2xl"
      >
        <ModalOverlay />

        <ModalContent overflow="hidden" bg={modalBg}>
          <ModalBody>
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              minHeight="48"
              display="flex"
              bg={headerBg}
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Heading pl="6" pb="6" fontWeight="extrabold">
                About the Project
              </Heading>

              <IconButton
                position="absolute"
                top="6"
                right="6"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                size="sm"
                variant="unstyled"
                rounded="full"
                aria-label="Close"
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

            <Box
              position="absolute"
              bottom="8"
              right="8"
              display="flex"
              flexDir="row"
              alignItems="center"
              gridGap="3"
            >
              {social.map(site => (
                <Tooltip key={site.service} label={site.label}>
                  <Link isExternal href={site.link} color="blue.400">
                    {site.icon}
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutDialog;
