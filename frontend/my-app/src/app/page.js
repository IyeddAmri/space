

import Navbar from "../component/Navbar";
import Facts from "../component/facts"
import Pages from '@/app/HomePage/page'
import Page from '@/app/Book/page'
import Homes from '../component/edu'

function Home() {
  return (
    <div>
      <Navbar/>
      <Homes/>

      <Facts/>
      <Pages/>
      <Page/>
      </div>


  );
}
export default Home
