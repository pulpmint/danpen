import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC, ReactNode, useState } from "react";
import { AtSign, Twitter, X } from "react-feather";
import ReactMarkdown from "react-markdown";
import {
  BACKGROUND_COLOR,
  ICON_BACKGROUND,
  ICON_BACKGROUND_HOVER
} from "../config/colors";
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
  }
];

const AboutDialog: FC = () => {
  const buttonBg = useColorModeValue("transparent", "gray.900");

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

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Box bg={buttonBg} rounded="full" onClick={() => setOpen(true)}>
        <IconButton
          size="sm"
          aria-label="About"
          variant="solid"
          rounded="full"
          bg={iconBackground}
          _hover={{ backgroundColor: iconBackgroundHover }}
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

        <ModalContent rounded="2xl" overflow="hidden" bg={backgroundColor}>
          <ModalBody>
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              minHeight="48"
              display="flex"
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
                bg={iconBackground}
                _hover={{ backgroundColor: iconBackgroundHover }}
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
