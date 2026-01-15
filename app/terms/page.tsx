import { siteConfig } from "@/lib/site-config"

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Terms of Use (EULA)</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>Last Updated: January 15, 2026</p>
        
        <p>
          These Terms of Use ("Agreement") constitute a legal agreement between you ("You" or "User") and <strong>Pulse Team</strong> ("We" or "Licensor") governing your use of the <strong>{siteConfig.name}</strong> mobile application ("The Application").
        </p>
        <p>
          By downloading, accessing, or using the Application, you agree to be bound by these terms. If you do not agree, do not use the Application.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">1. Acknowledgment</h2>
          <p>
            This Agreement is concluded between You and the Licensor only, and not with Apple Inc. ("Apple"). The Licensor is solely responsible for the Application and the content thereof. Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">2. Medical Disclaimer (Important)</h2>
          <p className="font-medium text-foreground uppercase">
            The Application is not a medical device.
          </p>
          <p className="mt-2">
            {siteConfig.name} provides breathing exercises, affirmations, and relaxation techniques (e.g., Box Breathing, 4-7-8). These tools are intended for general well-being and relaxation purposes only.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>No Medical Advice:</strong> The Application does not provide medical advice, diagnosis, or treatment.
            </li>
            <li>
              <strong>Consult a Professional:</strong> Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read in this Application.
            </li>
            <li>
              <strong>Emergencies:</strong> If you think you may have a medical emergency, call your doctor or emergency services immediately.
            </li>
            <li>
              <strong>Adverse Reactions:</strong> If you feel dizzy, lightheaded, or short of breath while using the Application, stop immediately and rest.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">3. Scope of License</h2>
          <p>
            The Licensor grants You a limited, non-exclusive, non-transferable, revocable license to use the Application on any Apple-branded products that You own or control, as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions. You may not distribute, lease, loan, sell, or sublicense the Application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">4. Subscriptions & Payments</h2>
          <p>
            The Application may offer auto-renewing subscription plans (e.g., <strong>"Breath Pro Monthly"</strong>) to access premium features.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Payment:</strong> Payment will be charged to your Apple ID account at confirmation of purchase.
            </li>
            <li>
              <strong>Automatic Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
            </li>
            <li>
              <strong>Renewal Charges:</strong> Your account will be charged for renewal within 24 hours prior to the end of the current period at the then-current subscription price.
            </li>
            <li>
              <strong>Management:</strong> You can manage your subscriptions and turn off auto-renewal by going to your App Store <strong>Account Settings</strong> after purchase.
            </li>
            <li>
              <strong>No Refunds:</strong> Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">5. Privacy</h2>
          <p>
            Your use of the Application is subject to our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>. The Application may collect data not linked to your identity (such as Usage Data and Diagnostics) to improve user experience and app performance. By using the Application, you consent to such collection and processing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">6. No Warranty ("As Is")</h2>
          <p className="uppercase text-sm">
            To the maximum extent permitted by applicable law, the Application is provided "as is" and "as available," with all faults and without warranty of any kind. The Licensor hereby disclaims all warranties and conditions with respect to the Application, either express, implied, or statutory, including, but not limited to, the implied warranties of merchantability, satisfactory quality, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
          <p className="uppercase text-sm">
            To the extent not prohibited by law, in no event shall the Licensor be liable for personal injury, or any incidental, special, indirect, or consequential damages whatsoever, including, without limitation, damages for loss of profits, loss of data, business interruption, or any other commercial damages or losses, arising out of or related to your use or inability to use the Application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">8. Third-Party Beneficiary</h2>
          <p>
            You acknowledge and agree that Apple, and Apple's subsidiaries, are third-party beneficiaries of this Agreement, and that, upon Your acceptance of the terms and conditions of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against You as a third-party beneficiary thereof.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Information</h2>
          <p>
            If you have any questions, complaints, or claims with respect to the Application, please contact us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:ivekmilioner2@gmail.com" className="text-primary hover:underline">ivekmilioner2@gmail.com</a>
          </p>
          <p className="mt-1">
            Website: <a href={siteConfig.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{siteConfig.url}</a>
          </p>
        </section>
      </div>
    </div>
  )
}
