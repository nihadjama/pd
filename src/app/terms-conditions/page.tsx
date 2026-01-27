import type { Metadata } from "next";
import SectionContainer from "@/common/SectionContainer";
import { H1, H2, H3 } from "@/common/headings";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "PracticeDilly Terms and Conditions of Use - Please read these terms carefully before using our services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="relative bg-white border-b border-[#e5e7eb]">
        <GridBackground gridSize={1278/11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
            <H1>Terms & Conditions</H1>
            <p className="font-sans text-base leading-6 text-[#262626] max-w-2xl">
              Please read these terms and conditions of use carefully. By accessing or using this web site or the AppDilly services, you agree to be bound by the terms and conditions described herein.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <SectionContainer className="items-start">
        <div className="w-full px-4 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-10">
            {/* Terms and Conditions of Use */}
            <section className="flex flex-col gap-4">
              <H2>Terms and Conditions of Use</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                Please read these terms and conditions of use carefully. By accessing or using this web site or the AppDilly services, you agree to be bound by the terms and conditions described herein and all terms incorporated by reference. If you do not agree to all of these terms, do not use this web site.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                To the full extent permitted by applicable law, AppDilly reserves the right to change or modify any of the terms and conditions contained in the Terms of Use or any policy or guideline of the website, at any time and at its sole discretion by providing notice the Terms of Use have been modified. Such notice may be provided by sending an email or by posting on the website.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                If you have any question regarding the use of the website or AppDilly services, please e-mail us at <a href="mailto:info@appdilly.com" className="text-[#5e48f0] hover:underline">info@appdilly.com</a>
              </p>
            </section>

            {/* Electronic Communications */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Electronic Communications</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                When you access website, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on this site. You agree that all agreements, notices, disclosures and other communications that we provide you electronically satisfy any legal requirements that such communications be in writing.
              </p>
            </section>

            {/* License, Trademarks and Website access */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">License, Trademarks and Website access</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                AppDilly, LLC. grants you a limited license to access and make personal use of the website and it's service. This license does not include any resale or commercial use of the services or its contents. The software applications or any portion of the web site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of AppDilly, LLC. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of the website or third party providers without express written consent. Any unauthorized use terminates the permission or license granted by AppDilly, LLC.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                AppDilly logos and any other AppDilly product or service name or slogan contained in the website are trademarks of AppDilly or its licensors, and may not be copied, imitated or used, in whole or in part, without the prior written permission of AppDilly or the applicable trademark holder. You may not use any metatags or any other "hidden text" utilizing "AppDilly" or any other name, trademark or product or service name of AppDilly without AppDilly's prior written permission. In addition, the look and feel of the website, including all page headers, custom graphics, buttons, icons and scripts, is the service mark, trademark and/or trade dress of AppDilly and may not be copied, imitated or used, in whole or in part, without AppDilly's prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned in the website are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by us.
              </p>
            </section>

            {/* Payments */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Payments</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                A valid credit card is required for accounts in order to process orders. The service will be billed in monthly intervals. For each billing period, the Account Owner will receive an invoice via the email provided. Users have approximately two weeks to notify us and settle any issues with the billing.
              </p>
            </section>

            {/* Cancellation and Termination */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Cancellation and Termination</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                You may cancel your account at any time by selecting "Cancel Subscription" from your Billing Account. If you cancel the Service in the middle of the billing cycle, your service will be discontinued at the end of the billing cycle, and you will not be charged for the next billing cycle. Upon termination of the Services by either party for any reason: AppDilly, LLC will cease providing you with the Services and you will no longer be able to access your Account. Unless otherwise provided in the Terms of Service, you will not be entitled to any refunds of any Fees, pro rata or otherwise.
              </p>
            </section>

            {/* Modifications to the service and prices */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Modifications to the service and prices</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                Prices for using PracticeDilly are subject to change upon 60 days notice from AppDilly, LLC. Such notice will be provided to the email you furnished for your User Account. AppDilly, LLC reserves the right at any time to modify or discontinue the Service (or any part thereof) with or without notice.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                AppDilly, LLC shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.
              </p>
            </section>

            {/* Your Account */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Your Account</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                If you use the website, and AppDilly services, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your mobile device and your computer, and you agree to accept responsibility for all activities that occur under your account or password. AppDilly, LLC. reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders in their sole discretion.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                In addition, we may automatically gather general statistical information from the website such as browsers, pages viewed and number of visitors etc. But in doing so we do not reference you by individual name, e-mail address, home address, or telephone number. We use this data in the aggregate to determine how much our customers use parts of our website so we can improve further. We do not sell or rent or share personally identifying information collected during your use of our website without your permission. We collect and store your profile in order for you to manage your account.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                As part of our service, we may use cookies to store and sometimes track information about you. A cookie is a small amount of data that is sent to your browser from a Web server and stored on your computer's hard drive. Generally, we use cookies to: (i) remind us who you are and enable us to access your account information so you do not have to reenter it; (ii) gather statistical information about usage by registered or unregistered users and (iii) research visiting patterns. You can change those configurations on your computer if you desire. By changing your preferences, you can accept all cookies, you can be notified when a cookie is set, or you can reject all cookies. If you do so and cookies are disabled, you may be required to reenter your information more often.
              </p>
            </section>

            {/* Text message compliance */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Text message compliance</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                The Telephone Consumer Protection Act (TCPA) is a federal law regulating the way consumers are contacted by telephone, fax, and text message. The TCPA regulations apply to the text and automated landline messages you are able to send through the AppDilly Service to communicate with your patients.
              </p>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                TCPA regulations require that companies obtain consent from consumers prior to sending any sort of text or automated telephone messages. For HIPAA covered entities, requirements for how consent is obtained are different depending on whether the messaging only contains health-related information or if it includes marketing-focused content. AppDilly automates text message communications, but you are responsible for ensuring that the recipients of those communications have provided prior express written consent to receive them. Consent for Informational Health Care Messages : For HIPAA covered entities sending informational only health-related messages, the patient's consent can be written, electronic or verbal. With these guidelines, you can send your patients informational messages about their health care. Such health-related informational messages include appointment reminders without marketing content. We strongly recommend that your "Notice of Privacy Practices" or "Privacy Policy" specifically state that you may use your patient's landline or cell phone number to contact them with informational messages, specifically, that third party business associates may text them with reminders. We also suggest that you obtain written acknowledgement from each patient stating that they have received and reviewed your privacy policy. While these steps are a best practice, consent can also be obtained from patients in other ways (verbal consent is acceptable.). Specifically, by entering a cell phone number into your management system or the AppDilly system and not opting such cell phone out of the AppDilly text message feature, you are directing AppDilly to automatically send text message reminders and other communications to such cell phone and certifying that the user of such cell phone consents to the receipt of those messages.
              </p>
            </section>

            {/* Opt-Out */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Opt-Out</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                TCPA regulations require you to honor patient requests to opt-out of future telephone, or text messages. The AppDilly Service allows you to honor these requests on an individual basis. A patient may also opt-out of text messages at any time by replying with the word STOP or letter S to any text message sent through the AppDilly Service. You are responsible for all liability for any failure to receive consent or failure to opt users out of the text message feature.
              </p>
            </section>

            {/* Email compliance */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Email compliance</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                You agree to comply with all elements of CAN-SPAM and safe sender email practices. This includes but is not limited to including unsubscribe links, your full contact information in all correspondence, and not releasing private and/or confidential information. You may only use email services for those customers with whom you have an existing business relationship and which have indicated that they accept correspondence from you. You may not attempt to spoof sender domains, send spam or other offending email practices. Because of carrier technologies, AppDilly makes no expressed or implied warranty of individual message receipt. AppDilly is not liable for any issues that arise associated with the content that you provide or unforeseen liabilities of it being delivered.
              </p>
            </section>

            {/* Identity Disclosure */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Identity Disclosure</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                TCPA regulations require you to identify your practice by name in all text messages you send to patients. The AppDilly service enables you to comply with this rule by automatically including the identifying tokens in all text messages. Additionally, you may not attempt to spoof sender domains, send spam or other offending text messages. AppDilly makes no expressed or implied warranty of individual message receipt. Standard text message rates apply for all text message services. AppDilly shall not be liable for any issues that arise associated with the content that you provide or unforeseen liabilities of it being delivered. You shall be solely liable to comply with applicable laws and regulations within your jurisdiction in connection with telecommunication (e.g., email and text) messages that you send to your customers.
              </p>
            </section>

            {/* Data Consent for Services */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Data Consent for Services</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                In connection with the provision of technical support, training and other Services, you agree that AppDilly may remotely log-in to your computers, devices and systems for purposes of providing the support, training or other Services, including, without limitation, technical trouble shooting, answering questions, benchmarking and providing training to you or your personnel. You agree that AppDilly may automatically check the version of the Service that you are utilizing and may provide updates or upgrades remotely via the Internet. You consent to the receipt of updates or upgrades by means of download to your computers and systems. Additionally, your practice management software must always be accessible by AppDilly. It is your responsibility to contact AppDilly if you are upgrading or changing your computer systems.
              </p>
            </section>

            {/* Personal Information */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Personal Information</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                Your privacy is important to us. We always transmits the data between the website and the back-end storage securely. This prevents potential hackers from tapping a data conversation. Your account credentials are encrypted. We employ reasonable and current security methods to prevent unauthorized access, maintain data accuracy, and ensure correct use of information your account information and profile are password-protected. We recommend that you do not divulge your password to anyone. Our personnel will never ask you for your password in an unsolicited phone call or in an unsolicited e-mail.
              </p>
            </section>

            {/* Information Control */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">Information Control</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                We do not control the information provided by other users that is made available through our system. You may find other user's information to be offensive, harmful, inaccurate, or deceptive. Please use caution, and practice safe trading when using our site. Please note that there are also risks of dealing with underage persons or people acting under false pretense. Additionally, there may also be risks dealing with international trade and foreign nationals.
              </p>
            </section>

            {/* General */}
            <section className="flex flex-col gap-4">
              <H2 className="text-2xl md:text-3xl">General</H2>
              <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                This Agreement shall be governed in all respects by the laws of the State of California as such laws are applied to agreements entered into and to be performed entirely within California between California residents. We do not guarantee continuous, uninterrupted or secure access to our services, and operation of our website may be interfered with by numerous factors outside of our control. If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. You agree that this Agreement and all incorporated agreements may be automatically assigned by AppDilly, LLC in our sole discretion, to a third party in the event of a merger or acquisition. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. This Agreement sets forth the entire understanding and agreement between us with respect to the subject matter hereof.
              </p>
            </section>

            {/* Contact Information */}
            <section className="flex flex-col gap-4 pt-4 border-t border-[#e5e7eb]">
              <div className="flex flex-col gap-2 mt-4 p-6 bg-white border border-[#e5e7eb] rounded-[10px]">
                <p className="font-sans font-semibold text-base text-[#262626]">Our Address:</p>
                <p className="font-sans font-normal text-base leading-6 text-[#262626]">
                  AppDilly, LLC<br />
                  224 Kempton<br />
                  Irvine, CA 92620
                </p>
                <p className="font-sans font-normal text-base leading-6 text-[#262626] mt-2">
                  <a href="https://www.practicedilly.com" className="text-[#5e48f0] hover:underline">https://www.practicedilly.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
