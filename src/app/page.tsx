import GetStartedForm from "@/components/get-started";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Hahz.live streaming app",
};

export default function IndexPage() {
  return (
    <section className="items-start px-6 container mx-auto flex max-w-[680px] flex-1 flex-col pt-6 pb-8">
      <div className="mx-auto flex w-full flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-[48pt] leading-tight tracking-tighter text-black dark:text-black">
            👁️ LIVE
          </h1>
        </div>
        <div className="flex flex-col gap-6 text-foreground">
          <p className="text-2xl">
            Hahz.live Web5 streaming app with a chat for Q&A. Earn crypto for tapping in to live events!
          </p>
          <p>To get started, enter a channel ID below and select an option:</p>
          <GetStartedForm />
          <p>
            Follow @WizardofHahz
            <a href="https://tiktok.com/@wizardofhahz">
              {/* eslint-disable-next-line @next/next/no-img-element */}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
