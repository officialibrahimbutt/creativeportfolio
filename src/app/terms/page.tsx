import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/components/layout/LegalPage";

export const metadata: Metadata = legalMetadata(
  "Terms of Service",
  "The terms that govern use of the TechGrowth Creative website and the studio's engagement framework."
);

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="January 2025"
      intro="Short version: be straightforward with us and we'll be straightforward with you. The longer version below covers the website and how engagements are framed."
      sections={[
        {
          heading: "The website",
          body: [
            "This website presents the services of TechGrowth Creative, a performance creative studio. Content on this site — including the Creative Vault — is provided for information. Spec concepts in the vault are labeled as such and do not represent client results or performance claims.",
            "We don't publish pricing on this website. Scope and pricing are discussed directly, because creative programs are scoped to the brand rather than sold off a shelf.",
          ],
        },
        {
          heading: "Engagements",
          body: [
            "Actual work is governed by the agreement (proposal, scope document, or contract) signed for each engagement. That document — not this page — defines deliverables, timelines, revisions and payment terms.",
            "Unless an agreement states otherwise: revision rounds are limited and defined per scope; concept and hypothesis development is included; unlimited concepts or revisions are not.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "Finished creative assets delivered under a signed engagement belong to the client per that agreement. Spec concepts shown in the Creative Vault remain the property of TechGrowth Creative unless agreed otherwise in writing.",
            "Client work is only shown publicly with permission.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "Don't misuse this website: no attempts to breach security, submit spam, scrape content at scale, or misrepresent your identity through our forms. We may restrict access for abuse.",
          ],
        },
        {
          heading: "No guarantees",
          body: [
            "We commit to process, craft and honest communication. We don't guarantee ad performance metrics — anyone who guarantees ROAS is selling you something other than creative.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about these terms can go to the studio through the Contact page. If something here conflicts with a signed agreement, the signed agreement wins.",
          ],
        },
      ]}
    />
  );
}
