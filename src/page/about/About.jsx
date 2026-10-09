import AboutHero from "../../components/about/AboutHero"
import CraftsmanshipProcess from "../../components/about/CraftsmanshipProcess"
import CraftsmanshipSection from "../../components/about/CraftsmanshipSection"
import CustomerStories from "../../components/about/CustomerStories"
import FaqSection from "../../components/about/FaqSection"
import WhyChooseAbout from "../../components/about/WhyChooseAbout"


const About = () => {
  return (
    <main>
        <AboutHero/>
        <WhyChooseAbout/>
        <CraftsmanshipSection/>
        <CraftsmanshipProcess/>
        <CustomerStories/>
        <FaqSection/>
    </main>
  )
}

export default About