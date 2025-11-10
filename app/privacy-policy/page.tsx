import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Easy Vacay | Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <div className="max-w-4xl break-keep ">
          <h1 className=" leading-none mt-4 mb-4 text-4xl md:text-[2.25rem] font-semibold">
            Easy Vacay Privacy Policy
          </h1>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            <strong className="font-semibold">
              Last Updated: September 16, 2025
            </strong>
          </p>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            At EasyVacayPlanner.com, we value your privacy. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you use our website or services.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            1. Information We Collect
          </h3>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            <strong className="font-normal">Personal Information:</strong> Your
            name, email, phone number, address, and other details you provide.
          </p>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            <strong className="font-normal">Usage Data:</strong> Information
            about how you use the site (e.g., pages visited, time spent, device
            info, IP address).
          </p>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            <strong className="font-normal">Cookies & Tracking:</strong> We use
            cookies and similar technologies to improve your experience and
            analyze traffic.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            2. How We Use Your Information
          </h3>

          <ul className="mb-3 text-base leading-relaxed text-[#141414] font-normal list-disc ml-6 space-y-3">
            <li>Provide and maintain our services</li>
            <li>Manage your account and respond to inquiries</li>
            <li>Send updates and promotions (opt out anytime)</li>
            <li>Improve the website and analyze usage trends</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            3. Sharing Your Information
          </h3>

          <ul className="mb-3 text-base leading-relaxed text-[#141414] font-normal list-disc ml-6 space-y-3">
            <li>
              With trusted service providers (analytics, hosting, support)
            </li>
            <li>During business transfers (merger/acquisition)</li>
            <li>If required by law or to protect our rights</li>
            <li>With your consent</li>
          </ul>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            We do not sell your personal information.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            4. Data Retention & Security
          </h3>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            We retain personal data only as long as necessary and take
            reasonable steps to protect it. However, no online transmission is
            100% secure.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            5. Your Rights
          </h3>

          <ul className="mb-3 text-base leading-relaxed text-[#141414] font-normal list-disc ml-6 space-y-3">
            <li>Access or correct your personal data</li>
            <li>Delete your account or data</li>
            <li>Opt out of marketing emails</li>
          </ul>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            Contact us at{" "}
            <a
              href="mailto:support@easyvacayplanner.com"
              className="text-blue-700 underline hover:text-blue-900"
            >
              support@easyvacayplanner.com
            </a>{" "}
            for any data-related requests.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            6. Children's Privacy
          </h3>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            We do not knowingly collect data from children under 13. If we learn
            we have, we'll delete it promptly.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            7. External Links
          </h3>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            Our site may link to third-party websites. We are not responsible
            for their privacy practices.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            8. Changes to This Policy
          </h3>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            We may update this Privacy Policy occasionally. Changes take effect
            once posted on this page.
          </p>

          <h3 className="text-gray-800 mt-6 leading-9 mb-2 text-2xl md:text-[1.275rem] font-bold">
            9. Contact Us
          </h3>

          <p className="text-base leading-relaxed my-2 text-[#141414] font-normal">
            Questions? Reach out:
          </p>

          <ul className="mb-3 text-base leading-relaxed text-[#141414] font-normal list-disc ml-6 space-y-3">
            <li>
              📧{" "}
              <a
                href="mailto:support@easyvacayplanner.com"
                className="text-blue-700 underline hover:text-blue-900"
              >
                support@easyvacayplanner.com
              </a>
            </li>
            <li>
              📞{" "}
              <a
                href="tel:8558537122"
                className="text-blue-700 underline hover:text-blue-900"
              >
                855-853-7122
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
