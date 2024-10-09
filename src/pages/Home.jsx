import { Link } from 'react-router-dom';
import AppNav from '../components/AppNav';
import PageNav from '../components/PageNav';

function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>World Wise</h1>
      <Link to='/app'>Go to to the app</Link>
    </div>
  );
}

export default Home;
