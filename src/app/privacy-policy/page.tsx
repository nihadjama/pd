import type { Metadata } from "next";
import SectionContainer from "@/common/SectionContainer";
import { H1, H2, H3 } from "@/common/headings";
import { Paragraph, ContentListItem } from "@/common/typography";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PracticeDilly Privacy Policy - Learn how we protect your privacy and handle your information in compliance with HIPAA, CalOPPA, COPPA, and CAN-SPAM Act.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-card border-b border-border">
        <GridBackground gridSize={1280/11} contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
            <H1>Privacy Policy</H1>
            <Paragraph className="max-w-2xl">
              Please read this Policy carefully. By accessing the website and using the Services, you affirm that you have read and understood the Policy and that you agree to abide by them.
            </Paragraph>
            <Paragraph variant="sm" color="muted">
              Last updated: January 2018
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <SectionContainer className="items-start">
        <div className="w-full px-4 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
            {/* Introduction */}
            <section className="flex flex-col gap-4">
              <Paragraph>
                We may change this Policy from time to time. If we make changes, we will notify you by revising the date at the bottom of the Policy and, in some cases, we may provide you with additional notice. We encourage you to review the Policy from time to time to stay informed about our information practices and the ways you can help protect your privacy.
              </Paragraph>
              <Paragraph>
                AppDilly is committed to protecting your privacy. We treat our users' information as if it were our own personal information. AppDilly does not sell, share our users' personally identifiable information unless required by law. AppDilly does not send e-mail or other communications without user permission. AppDilly does not send spam. AppDilly will not use customer information for the purposes of marketing to, or otherwise communicating directly with about AppDilly or any third party products or services.
              </Paragraph>
            </section>

            {/* Types of Information Collected */}
            <section className="flex flex-col gap-4">
              <H2>Types of Information Collected</H2>
              <Paragraph>
                The information you provide us in order to use our services are stored in our secured database and are required for us to offer you our products/services. Information we may collect includes your name, contact information (such as email address, postal address, phone number, and mobile number), location and other information you choose to provide including such as passwords and so forth.
              </Paragraph>
              <Paragraph>
                We may use User Data to send you information about our company or our products or services, or to contact you when necessary. We do not use any of your Messaging Data or Financial Data, except in connection with providing you the services offered via our services and products. AppDilly is based in the United States and the information we collect is governed by U.S. law. We respect your privacy and do not share any User Data, Messaging Data, or Demographic Data with advertisers or other third parties.
              </Paragraph>
            </section>

            {/* Information Protection */}
            <section className="flex flex-col gap-4">
              <H2>Information Protection</H2>
              <Paragraph>
                Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site is as safe as possible. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
              </Paragraph>
              <Paragraph>
                We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information. All transactions are processed through a gateway provider and are not stored or processed on our servers.
              </Paragraph>
            </section>

            {/* HIPAA Notice */}
            <section className="flex flex-col gap-4">
              <H2>HIPAA Notice of Privacy Practices</H2>
              <Paragraph>
                This notice applies to information about you that is protected under HIPAA (the Health Insurance Portability and Accountability Act), a federal law designed to protect certain types of health information, known as "protected health information." This includes your health information we collect, create or maintain as part of the Services that identify who you are and information about your health.
              </Paragraph>
              <Paragraph>
                We use and share your health information in the following ways:
              </Paragraph>
              <ul className="flex flex-col gap-3 pl-4">
                <ContentListItem variant="disc">We may share your health information with dental professionals who are treating you.</ContentListItem>
                <ContentListItem variant="disc">We may use and share your health information to improve the Services and contact you when necessary.</ContentListItem>
                <ContentListItem variant="disc">We use and share your health information to help dentists bill you for services performed when receiving dental care/services.</ContentListItem>
                <ContentListItem variant="disc">We will share health information about you if we are legally required to do so in several ways. These include sharing your health information with the Department of Health and Human Services; in responding to legal actions; in response to a court or administrative order, or in response to a subpoena; in response to and, in connection with research purposes when approved by a privacy board.</ContentListItem>
              </ul>
            </section>

            {/* California Online Privacy Protection Act */}
            <section className="flex flex-col gap-4">
              <H2>California Online Privacy Protection Act</H2>
              <Paragraph>
                CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.
              </Paragraph>
              <Paragraph>
                According to CalOPPA, we agree to the following:
              </Paragraph>
              <ul className="flex flex-col gap-3 pl-4">
                <ContentListItem variant="disc">Users can visit our site anonymously.</ContentListItem>
                <ContentListItem variant="disc">Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</ContentListItem>
                <ContentListItem variant="disc">Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</ContentListItem>
              </ul>
            </section>

            {/* COPPA */}
            <section className="flex flex-col gap-4">
              <H2>COPPA (Children Online Privacy Protection Act)</H2>
              <Paragraph>
                When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
              </Paragraph>
              <Paragraph>
                We do not specifically market to children under the age of 13 years old.
              </Paragraph>
            </section>

            {/* CAN SPAM Act */}
            <section className="flex flex-col gap-4">
              <H2>CAN SPAM Act</H2>
              <Paragraph>
                The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
              </Paragraph>
              <Paragraph>
                We collect your email address in order to:
              </Paragraph>
              <ul className="flex flex-col gap-3 pl-4">
                <ContentListItem variant="disc">Send information, respond to inquiries, and/or other requests or questions.</ContentListItem>
                <ContentListItem variant="disc">Process orders and to send information and updates pertaining to orders.</ContentListItem>
                <ContentListItem variant="disc">Send you additional information related to your product and/or service.</ContentListItem>
              </ul>
              <Paragraph>
                To be in accordance with CAN-SPAM, we agree to the following:
              </Paragraph>
              <ul className="flex flex-col gap-3 pl-4">
                <ContentListItem variant="disc">Not use false or misleading subjects or email addresses.</ContentListItem>
                <ContentListItem variant="disc">Identify the message as an advertisement in some reasonable way.</ContentListItem>
                <ContentListItem variant="disc">Include the physical address of our business or site headquarters.</ContentListItem>
                <ContentListItem variant="disc">Monitor third-party email marketing services for compliance, if one is used.</ContentListItem>
                <ContentListItem variant="disc">Honor opt-out/unsubscribe requests quickly.</ContentListItem>
                <ContentListItem variant="disc">Allow users to unsubscribe by using the link at the bottom of each email. If at any time you would like to unsubscribe from receiving future emails, you can email us at: <a href="mailto:admin@appdilly.com" className="text-primary hover:underline">admin@appdilly.com</a>.</ContentListItem>
                <ContentListItem variant="disc">Follow the instructions at the bottom of each email, and we will promptly remove you from all correspondence.</ContentListItem>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="flex flex-col gap-4 pt-4 border-t border-border">
              <H2>Contact Us</H2>
              <Paragraph>
                If you have any questions about AppDilly's Privacy Policy, please contact us at: <a href="mailto:info@appdilly.com" className="text-primary hover:underline">info@appdilly.com</a>
              </Paragraph>
              <div className="flex flex-col gap-2 mt-4 p-6 bg-card border border-border rounded-[10px]">
                <Paragraph weight="semibold">Our Address:</Paragraph>
                <Paragraph>
                  AppDilly, LLC<br />
                  224 Kempton<br />
                  Irvine, CA 92620
                </Paragraph>
                <Paragraph className="mt-2">
                  <a href="https://www.practicedilly.com" className="text-primary hover:underline">https://www.practicedilly.com</a>
                </Paragraph>
              </div>
            </section>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
