import { siteConfig } from "@/lib/site-config"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
          <p>
            Welcome to {siteConfig.name} ("we," "our," or "us"). We respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you use the {siteConfig.name} mobile application (the "App") and our practices for collecting, using, maintaining, protected, and disclosing that information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
          <p>
            Our App is designed with your privacy in mind. We collect minimal data necessary to provide our services.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Device ID:</strong> We may collect your unique Device ID (Identifier for Vendors or IDFV) solely for the purpose of app functionality, such as maintaining your local settings or preferences on your device. We do not link this Device ID to any other personal information.
            </li>
          </ul>
          <p className="mt-4">
            We <strong>do not</strong> collect your name, email address, phone number, location data, or any other personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
          <p>
            We use the Device ID solely for internal app operations, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Ensuring the App functions correctly on your device.</li>
            <li>Storing your local preferences (e.g., sound settings, meditation progress) directly on your device.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Storage and Security</h2>
          <p>
            Since we do not collect personal data, we do not store your personal information on our servers. Any preferences or progress data is stored locally on your device. You have full control over this data and can delete it by uninstalling the App or clearing the App's data in your device settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
          <p>
            The App is distributed via the Apple App Store. Apple may collect data as described in their own privacy policy. We encourage you to review Apple's Privacy Policy for more information on how they handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">6. Children's Privacy</h2>
          <p>
            Our App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">7. Changes to Our Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. If we make material changes to how we treat our users' information, we will post the new privacy policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Information</h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, please contact us at: <a href={`mailto:support@breath-app.com`} className="text-primary hover:underline">support@breath-app.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
