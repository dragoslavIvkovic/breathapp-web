import { siteConfig } from "@/lib/site-config"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last updated: December 8, 2025</p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
          <p>
            Welcome to Pulse: Guided Breathing (“we”, “our”, or “us”). We respect your privacy and are committed to protecting it. This Privacy Policy explains what information we collect when you use our mobile application (the “App”), how we use it, and what choices you have.
          </p>
          <p className="mt-4">
            By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
          <p>
            We collect the minimum amount of data necessary to provide our services, manage subscriptions, and improve app stability and user experience.
          </p>
          
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">A. Data Linked to You</h3>
          <p>
            We do not collect personally identifiable information such as your name, email address, or phone number.
          </p>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">B. Data Not Linked to You</h3>
          <p>
            We may collect and process the following technical and usage data, which is not linked to your identity:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Identifiers (Device ID / App User ID):</strong> We use anonymous identifiers to manage your subscription status and maintain local settings.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect anonymous information about how you interact with the App (for example, screens visited, features used, session duration) to understand usage patterns and improve the user experience.
            </li>
            <li>
              <strong>Diagnostics:</strong> We may collect crash logs and performance data to identify issues, debug problems, and improve app stability.
            </li>
            <li>
              <strong>Purchase History:</strong> We collect information about your in-app purchases and subscription status to unlock and maintain access to premium content and features.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
          <p>We use the collected data solely for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>App Functionality:</strong> To store your preferences (such as sound settings, breathing patterns, and other local settings) and ensure the App operates as intended.
            </li>
            <li>
              <strong>Subscription Management:</strong> To verify, manage, and restore your in-app purchases and subscription status through our subscription provider.
            </li>
            <li>
              <strong>Analytics and Improvement:</strong> To understand which features are used, improve the App’s design and functionality, and fix bugs.
            </li>
          </ul>
          <p className="mt-4">
            We do not sell your data or use it for cross-app advertising tracking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
          <p>
            We use trusted third-party service providers to help us operate and improve the App. These providers have access only to the data necessary to perform tasks on our behalf and are obligated not to use it for any other purpose.
          </p>
          
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">RevenueCat:</h3>
              <p>
                We use RevenueCat to manage in-app purchases and subscriptions. RevenueCat processes purchase and subscription information as needed to verify and manage your access to premium content.
                <br />
                You can view their privacy policy here: <a href="https://www.revenuecat.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-foreground">PostHog:</h3>
              <p>
                We use PostHog for product analytics to understand how the App is used and to improve features and stability. Data sent to PostHog is pseudonymous and does not include information like your name or email.
                <br />
                You can view their privacy policy here: <a href="https://posthog.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://posthog.com/privacy</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">Sentry:</h3>
              <p>
                We use Sentry for error tracking and monitoring to identify and fix bugs in real-time. Sentry collects data related to errors and crashes to help us improve the App's stability and performance.
                <br />
                You can view their privacy policy here: <a href="https://sentry.io/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://sentry.io/privacy/</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground">Apple:</h3>
              <p>
                As the App is distributed via the Apple App Store, Apple may collect and process data in accordance with its own privacy policy and terms. Please refer to Apple’s documentation for details.
              </p>
            </div>
          </div>
          
          <p className="mt-4">
            These providers may process data on servers located in countries other than your own. Where required by law, we rely on appropriate safeguards to protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Storage, Retention, and Security</h2>
          <p>
            Preferences and progress data are primarily stored locally on your device.
          </p>
          <p className="mt-2">
             Subscription and analytics data are processed and stored by our third-party providers (such as RevenueCat and PostHog) in an anonymized or pseudonymous format.
          </p>
          <p className="mt-2">
            We retain data only for as long as necessary to provide and improve the App, to manage subscriptions, to comply with our legal obligations, or as required by our third-party providers’ retention policies.
          </p>
          <p className="mt-2">
            We use reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">6. Children’s Privacy</h2>
          <p>
            The App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that a child under 13 has provided us with information, please contact us so that we can delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
          <p>
            Depending on your location and applicable laws, you may have certain rights regarding your data, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>The right to access the data that is associated with your use of the App.</li>
            <li>The right to request correction or deletion of data where applicable.</li>
            <li>The right to object to or restrict certain types of processing.</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, or if you have questions about how your data is handled, you can contact us using the email address below. We will respond in accordance with applicable laws.
          </p>
          <p className="mt-4">
            You can also limit certain data collection by:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Adjusting your device settings (for example, disabling analytics or ad tracking where available).</li>
            <li>Uninstalling the App, which stops all future data collection from the App on that device.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted within the App and/or on the page where this Privacy Policy is made available. The “Last updated” date at the top of this page indicates when the latest changes were made.
          </p>
          <p className="mt-4">
            Your continued use of the App after changes are posted means you accept the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy, or if you wish to exercise your privacy rights, you can contact us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:ivekmilioner2@gmail.com" className="text-primary hover:underline">ivekmilioner2@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
