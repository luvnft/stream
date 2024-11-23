import GetStartedForm from "@/components/get-started";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Hahz.live streaming app",
};

export default function IndexPage() {
  return (
    <section className="container mx-auto flex flex-1 flex-col px-4 pt-6 pb-8 max-w-[680px]">
      <div className="mx-auto flex w-full flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter text-black dark:text-black">
            📺✨ HAHZ.live TV
          </h1>
        </div>
        <div className="flex flex-col gap-6 text-foreground text-center">
          <p className="text-lg">
            Hahz.live Web5 spiritual streaming TV app with a chat for Q&A. Earn crypto
            for tapping in to live events!
          </p>
          <p>To get started, enter a channel ID below and select an option:</p>
          <div className="w-full max-w-xs mx-auto">
            <GetStartedForm />
          </div>
          <p>
            Follow{" "}
            <a
              href="https://tiktok.com/@wizardofhahz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black underline"
            >
              @WizardofHahz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
