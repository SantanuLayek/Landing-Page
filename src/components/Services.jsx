import Heading from "./Heading"
import Section from "./Section"
import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants/index.Js"
import Generating from "./Generating"
import {PhotoChatMessage, Gradient, VideoChatMessage} from "./design/Services";
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Express yourself Freely" text="LenkSen Unlocks a new world of Emotion Chatting"/>
      </div>
      <div className="relative">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                <img className="w-full h-full object-cover md:object-right" width={800} height={730} src={service1} alt="Emotion"/>
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Efficient Sentiment Analysis Model</h4>
                <p className="body-2 mb-[3rem] text-n-3">LenkSen Runs an efficient Sentiment Analysis Model that tracks the emotion of the messages</p>
                <ul className="body-2">
                    {brainwaveServices.map((item, index) =>(
                        <li key={index} className="flex items-start py-4 boder-t border-n-6">
                            <img src={check} width={24} height={24} alt="" />
                            <p className="ml-4">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"/>
        </div>
        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                    <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="robot"/>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                    <h4 className="h4 mb-4">Convery your emotions</h4>
                    <p className="body-2 mb-[3rem] text-n-3">Get sentiment feedback for each text messages</p>
                </div>
                <PhotoChatMessage/>
            </div>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                    <img src={service3} className="h-full w-full object-cover" width={630} height={750} alt="robot"/>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                    <h4 className="h4 mb-4">Convey and Respond Accordingly</h4>
                    <p className="body-2 mb-[3rem] text-n-3">Bring life to your conversations</p>
                </div>
                <VideoChatMessage/>
            </div>
        </div>
      </div>
    </Section>
  )
}

export default Services
