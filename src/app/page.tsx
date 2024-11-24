import { HomeActions } from "@/components/home-actions";
import { Container, Flex, Kbd, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-10 sm:p-24">
      <Container size="1">
        <Flex direction="column" align="center" gap="5">
          <Image
            src="/wordmark.svg"
            alt="LiveKit"
            width="240"
            height="120"
            className="invert dark:invert-0 mt-8 mb-2"
          />
          <Text as="p">
            Hahz.live Web5 spiritual streaming TV app with a chat for Q&A.
            Learn about Hahz solutions {" "}
            <Link href="https://hahz.live" target="_blank">
              HAHZ.live
            </Link>
            {" "}
            <Kbd>⌘&thinsp;C</Kbd> !
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          <Text as="p" size="2">
            Follow the Wizard of Hahz on{" "}
            <Link
              href="https://tiktok.com/@wizardofhahz"
              target="_blank"
            >
              TikTok
            </Link>
            .
          </Text>
        </Flex>
      </Container>
    </main>
  );
}