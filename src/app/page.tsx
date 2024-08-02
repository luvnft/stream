import GetStartedForm from "@/components/get-started";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ATL5D.shop Live",
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
           Live streaming social shopping app with a chat for Q&A. Subscribe and go live!
        </p>
          <p>To get started, enter a channel ID below and select an option:</p>
          <GetStartedForm />
          <p>
            Sell merch live today with $0 commission fees and zero algorithms! Subscribe with a 30-day free trial.
          </p>
          <p className="text-2xl">
            Live streaming social shopping app with a chat for Q&A.
             {" "}
            Subscribe and go live!
          </p>
          <p>To get started, enter a channel ID below and select an option:</p>
          <GetStartedForm />
          <p>
             Sell merch live today with $0 commission fees and zero algorithms! Subscribe with a 30-day free trial.
            <a href="https://atl5d.shop/product/midtown-vendor/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mt-4"
                alt="subscribe to ATL5D.shop"
                src="https://i.imgur.com/z2NXtco.png"
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
