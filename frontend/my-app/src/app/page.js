
import Navbar from "../component/Navbar";
import Facts from "../component/facts"
import Pages from '@/app/HomePage/page'
import Page from '@/app/Book/page'
function Home() {
  return (
    <div>
      <Navbar/>

      <Facts/>
      <Pages/>
      </div>


  );
}
export default Home