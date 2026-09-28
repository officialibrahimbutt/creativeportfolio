import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/components/layout/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = legalMetadata(
  "Privacy Policy",
  "How TechGrowth Creative collects, uses and protects information submitted through this website."
);

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="January 2025"
      intro="We collect as little as the website functionally needs, and we don't sell data — ours or yours. This page explains what that means in plain language."
      sections={[
        {
          heading: "What we collect",
          body: [
            `When you submit the contact form, we receive what you typed: your name, business or brand name, email address, niche, platform preference, website (if you share it), and your message. Nothing else is required to start a conversation.`,
            "Like most websites, our infrastructure may record standard technical logs (such as IP address and browser type) for security and reliability purposes. We don't use those logs to profile you.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "Contact details are used for one thing: replying to your enquiry and, if we proceed, running the engagement you asked for. Your message may be read by the people at TechGrowth Creative who would work with you.",
            "We do not sell, rent or trade your personal information. We do not add you to marketing lists without asking.",
          ],
        },
        {
          heading: "How it's stored",
          body: [
            "Form submissions are stored in our secured database and retained only as long as they serve an active or potential engagement. Access is limited to the studio team.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "This website loads web fonts from a font delivery service and links out to WhatsApp for conversations. When you click a WhatsApp link, your communication moves to WhatsApp under their own terms and privacy policy.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You can ask us to access, correct or delete the information you submitted at any time. Email ${site.contact.email} and we'll handle it directly — no forms, no verification hoops beyond confirming who you are.`,
          ],
        },
        {
          heading: "Changes",
          body: [
            "If this policy changes materially, the updated version will be posted on this page with a new date. Continued use of the website after changes means you accept the revised policy.",
          ],
        },
      ]}
    />
  );
}
