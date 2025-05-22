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
          <Text as="p" className="text-center">
            🧡 ORANGE is Bitcoin's hottest livestream - where crypto meets clout. <br />
            Earn L$VE (likes), stack $RNT (rewards), and flex HAI$ (tips) 💸 <br />
            Powered by <Link href="https://luvnft.com" target="_blank" className="font-bold">LUV NFT</Link> - your digital 💘
          </Text>
          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          <Text as="p" size="2">
            Clout chasing? Boost your ORANGE stream on {" "}
            <Link
              href="https://irl.travel"
              target="_blank"
              className="underline font-semibold"
            >
              IRL.TRAVEL
            </Link>{" "}
            and get that bag 🚀
          </Text>
        </Flex>
      </Container>
    </main>
  );
}
