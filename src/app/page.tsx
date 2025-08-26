import Footer from "@/Components/Footer";
import Hero from "@/Components/hero";
import Newsletter from "@/Components/Newsletter";
import ProductHero from "@/Components/Product";
import Testimonials from "@/Components/Testimonials";




export default function Home() {
  return (
    <div >
<Hero/>

<ProductHero/>
<Testimonials/>
<Newsletter/>
<Footer/>
    </div>
  );
}
