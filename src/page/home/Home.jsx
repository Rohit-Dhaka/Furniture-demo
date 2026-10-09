import ContactSection from "../../components/common/ContactSection"
import ProductCategories from "../../components/common/ProductCategories"
import StatsSection from "../../components/common/StatsSection"
import TestimonialsSection from "../../components/common/TestimonialsSection"
import WhyChooseSection from "../../components/common/WhyChooseSection"
import Hero from "../../components/home/Hero"
import AboutSection from "../../components/layout/AboutSection"
import ProductShowcase from "../../components/Product/ProductShowcase"



const Home = () => {
  return (
    <main>
   <Hero/>
    <AboutSection/>
    <ProductShowcase/>
    <StatsSection/>
    <ProductCategories/>
    <WhyChooseSection/>
    <TestimonialsSection/>
    <ContactSection/>     
    </main>
  )
}

export default Home