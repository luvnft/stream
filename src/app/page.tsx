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
            The Livestream Club House for {" "}
            <Link href="https://jersey.fm" target="_blank">
              JERSEY.FM
            </Link>
            events.
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          <Text as="p" size="2">
            Join our Jersey Club metaverse{" "}
            <Link
              href="https://www.spatial.io/s/jerseyclubs-Digital-Hangout-6812bd5f5e2a67a19304853d"
              target="_blank"
            >
              here
            </Link>
            .
            {/* And also be sure to follow us on TikTok{" "}
            <Link
              href="https://tiktok.com/@jerseyclubtv"
              target="_blank"
            >
              IG
            </Link>{" "}
            and <Link href="https://instagram.com/jerseyclubfm" target="_blank">Instagram</Link>*/}
          </Text>
        </Flex>
      </Container>
    </main>
  );
}
