import { siteConfig } from "@/lib/site-config"

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using the {siteConfig.name} mobile application (the "App"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you may not access the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">2. Medical Disclaimer</h2>
          <p className="font-medium text-foreground">
            The App provides breathwork and meditation guidance for relaxation and stress reduction purposes only. It is not a medical device and does not provide medical advice, diagnosis, or treatment.
          </p>
          <p className="mt-2">
            Consult with a healthcare professional before starting any new breathing or meditation practice, especially if you have any pre-existing medical conditions (such as respiratory issues, heart conditions, or anxiety disorders). If you experience any discomfort, dizziness, or distress while using the App, stop immediately and consult a doctor.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
          <p>
            The App and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of {siteConfig.creator} and its licensors. The App is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">4. License</h2>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download and install a copy of the App on a mobile device that you own or control and to run such copy of the App solely for your own personal, non-commercial purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">5. Subscriptions and Purchases</h2>
          <p>
            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
          </p>
          <p className="mt-2">
            At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or we cancel it. You may cancel your Subscription renewal either through your online account management page or by contacting our customer support team.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
             All purchases are final and non-refundable, except as required by applicable law or as otherwise stated in our refund policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">6. User Conduct</h2>
          <p>
            You agree not to use the App for any unlawful purpose or in any way that could damage, disable, overburden, or impair the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall {siteConfig.creator}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the App; (ii) any conduct or content of any third party on the App; (iii) any content obtained from the App; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href={`mailto:support@breath-app.com`} className="text-primary hover:underline">support@breath-app.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
