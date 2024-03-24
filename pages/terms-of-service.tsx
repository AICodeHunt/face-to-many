import {Header} from "@/components/Header";
import {HeadMeta} from "@/components/HeadMeta";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between pt-24 md:p-24 lg:p-24 lg:pb-2 pb-2 bg-white`}>
            <HeadMeta/>
            <Header/>
            <div
                className="text-slate-800 leading-8 text-base ml-6 mr-6 md:ml-4 mr:mr-40 lg:ml-60 lg:mr-60 mt-2 md:mt-6 lg:mt-6">
                <h2 className="text-xl font-semibold mb-6">Terms of Service</h2>
                <p>
                    Welcome to Face To Many, accessible from facetomany.art. Please read these Terms
                    of Service ("Terms", "Terms of Service") carefully before using the Face To Many web
                    application ("Service").
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    1.Acceptance of Terms
                </h3>
                <p>
                    By accessing and using our Service, you accept and agree to be bound by the terms and provisions of
                    these Terms.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    2.Changes to the Terms
                </h3>
                <p>
                    We reserve the right to modify these Terms at any time. It is your responsibility to check these
                    Terms periodically for changes.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    3.Use of the Service
                </h3>
                <p>
                    <ul className="list-inside list-disc">
                        <li>
                            You agree not to use the Service in any way that is harmful, illegal, or inappropriate.
                        </li>
                        <li>
                            You are responsible for maintaining the confidentiality of your account and password.
                        </li>
                    </ul>
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    4.Termination
                </h3>
                <p>
                    We may terminate or suspend your account without notice for conduct that we determine violates these
                    Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    5.Content
                </h3>
                <p>
                    <ul className="list-inside list-disc">
                        <li>
                            You are responsible for all content you upload, post, or otherwise make available through
                            the Service.
                        </li>
                        <li>
                            Face To Many has the right, but not the obligation, to monitor and review any
                            content provided by its users.
                        </li>
                        <li>
                            We may remove any content that, in our judgment, violates these Terms or may be harmful.
                        </li>
                    </ul>
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    6.Intellectual Property
                </h3>
                <p>
                    All content, features, and functionality of the Service are owned by Face To Many, its
                    licensors, or other providers and are protected by international copyright, trademark, and other
                    intellectual property laws.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    7.Links to Other Websites
                </h3>
                <p>
                    Our Service may contain links to third-party websites. If you click on a third-party link, you will
                    be directed to that site. We have no control over and assume no responsibility for the content or
                    practices of any third-party sites or services.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    8.Disclaimer
                </h3>
                <p>
                    The Service is provided on an "as is" and "as available" basis. Face To Many makes no
                    representations or warranties of any kind, whether express or implied, about the completeness,
                    accuracy, reliability, suitability, or availability of the Service.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    9.Limitation of Liability
                </h3>
                <p>
                    In no event shall Face To Many, nor its directors, employees, partners, or agents, be
                    liable for any indirect, incidental, special, or consequential damages resulting from your use or
                    inability to use the Service.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    10.Contact Us
                </h3>
                <p>
                    If you have any questions about this Terms of Service, please contact us at support at
                    <br/>
                    email: contact@facetomany.art
                </p>
            </div>
            <Footer/>
        </main>
    )
}
