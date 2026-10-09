import CustomerStories from "../../components/about/CustomerStories"
import GalleryHero from "../../components/gallery/GalleryHero"
import WorkShowcase from "../../components/gallery/WorkShowcase"


const Gallery = () => {
  return (
    <main>
        <GalleryHero/>
        <WorkShowcase/>
        <CustomerStories/>
    </main>
  )
}

export default Gallery