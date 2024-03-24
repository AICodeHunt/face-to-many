import {Header} from "@/components/Header";
import {MainPage} from "@/components/MainPage";
import {HeadMeta} from "@/components/HeadMeta";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between pt-24 md:p-24 lg:p-24 lg:pb-2 pb-2 bg-white`}>
            <HeadMeta />
            <Header />
            <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
            </div>
            <MainPage />
            <div className="w-full md:w-4/5 lg:w-4/5 pl-4 pr-4">
            </div>
            <Footer />
        </main>
    )
}
