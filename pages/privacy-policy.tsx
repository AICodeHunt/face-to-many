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
                <h2 className="text-xl font-semibold mb-6">Privacy Policy</h2>
                <p>
                    Welcome to Face To Many, accessible from facetomany.art. This Privacy Policy
                    outlines the types of information we collect, how we use it, and the choices you have concerning
                    your data.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    1.Information We Collect
                </h3>
                <p>
                    <ul className="list-inside list-disc">
                        <li>
                            <span className="font-bold mr-1">Personal Data:</span>
                            When you sign up for an account, we might ask for information like your name, email address,
                            and other relevant details.
                        </li>
                        <li>
                            <span className="font-bold mr-1">Usage Data:</span>
                            This may include information about your device's IP address, browser type, and pages of our
                            Service you visit.
                        </li>
                        <li>
                            <span className="font-bold mr-1">Cookies:</span>
                            We use cookies to track the activity on our Service and retain certain information.
                        </li>
                    </ul>
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    2.How We Use Your Information
                </h3>
                <p>
                    <ul className="list-inside list-disc">
                        <li>
                            To provide, maintain, and improve our Service.
                        </li>
                        <li>
                            To notify you about changes to our Service or any products/services we offer.
                        </li>
                        <li>
                            To monitor the usage of our Service.
                        </li>
                        <li>
                            To detect, prevent, and address technical issues.
                        </li>
                    </ul>
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    3.Data Retention
                </h3>
                <p>
                    We will retain your Personal Data only for as long as is necessary for the purposes set out in this
                    Privacy Policy. We will retain Usage Data for internal analysis purposes.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    4.Data Transfer
                </h3>
                <p>
                    Your information, including Personal Data, might be transferred to — and maintained on — computers
                    located outside of your state or country where the data protection laws may differ.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    5.Disclosure of Data
                </h3>
                <p>
                    We may disclose your Personal Data if required to do so by law or in the belief that such action is
                    necessary.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    6.Security of Data
                </h3>
                <p>
                    The security of your data is important to us. However, no method of transmission or electronic
                    storage is 100% secure. We strive to use commercially acceptable means to protect your Personal Data
                    but cannot guarantee its absolute security.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    7.Third-Party Services
                </h3>
                <p>
                    We might employ third-party services to facilitate our Service, and they may have access to your
                    Personal Data only to perform tasks on our behalf and are obligated not to disclose or use it for
                    any other purpose.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    8.Your Data Protection Rights
                </h3>
                <p>
                    You have the right to access, update, or delete your personal information. You can request this by
                    contacting us.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    9.Cookies Policy
                </h3>
                <p>
                    We use cookies and similar tracking technologies to monitor the activity on our Service. Most
                    browsers can refuse all cookies or indicate when a cookie is being sent.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    10.Links to Other Sites
                </h3>
                <p>
                    Our Service may contain links to other sites. If you click a third-party link, you will be directed
                    to their site. We have no control over and assume no responsibility for the content or privacy
                    policies of any third-party sites or services.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    11.Changes to This Privacy Policy
                </h3>
                <p>
                    We may update our Privacy Policy from time to time. You are advised to review this Privacy Policy
                    periodically for any changes.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                    12.Contact Us
                </h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at support at
                    <br/>
                    email: contact@facetomany.art
                </p>
            </div>
            <Footer/>
        </main>
    )
}
