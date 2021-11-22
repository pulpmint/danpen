import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { FC, ReactNode, useState } from "react";
import { AtSign, Twitter, X } from "react-feather";
import ReactMarkdown from "react-markdown";
import { BACKGROUND_COLOR, ICON_BACKGROUND } from "../config/colors";
import { aboutMarkdown } from "../constants/about";
import CustomButton from "./CustomButton";

export interface SocialTags {
  link: string;
  service: string;
  icon: ReactNode;
}

const social: SocialTags[] = [
  {
    link: "https://twitter.com/pulpmint",
    service: "Twitter",
    icon: <Twitter size={16} />
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

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Box bg={buttonBg} rounded="full" onClick={() => setOpen(true)}>
        <CustomButton
          buttonProps={{
            p: "0",
            onClick: () => setOpen(true)
          }}
          label="About"
        >
          <AtSign size={16} />
        </CustomButton>
      </Box>

      <Modal
        isCentered
        onClose={() => setOpen(false)}
        isOpen={open}
        scrollBehavior="outside"
        size="2xl"
      >
        <ModalOverlay />

        <ModalContent
          rounded="2xl"
          overflow="hidden"
          bg={backgroundColor}
          borderColor={iconBackground}
          borderWidth="thin"
          borderStyle="solid"
          shadow="none"
        >
          <ModalBody p="6">
            <Box
              pos="relative"
              minH="48"
              display="flex"
              flexDir="column"
              justifyContent="flex-end"
            >
              <Heading fontWeight="extrabold">About the Project</Heading>

              <CustomButton
                buttonProps={{
                  p: "0",
                  pos: "absolute",
                  top: "0",
                  right: "0",
                  onClick: () => setOpen(false)
                }}
              >
                <X size={16} />
              </CustomButton>
            </Box>

            <Box pos="relative" pt="6">
              <ReactMarkdown
                children={aboutMarkdown}
                linkTarget="_blank"
                className="markdown-theme"
              />

              <Box
                position="absolute"
                bottom="0.5"
                right="0.5"
                display="flex"
                flexDir="row"
                alignItems="center"
                gridGap="3"
              >
                {social.map(site => (
                  <Link
                    key={site.link}
                    isExternal
                    href={site.link}
                    color="blue.400"
                  >
                    {site.icon}
                  </Link>
                ))}
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutDialog;
