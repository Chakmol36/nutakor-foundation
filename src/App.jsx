
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './Home';

import LuaAcademy from './pages/LuaAcademy';
import Ibadi from './pages/Ibadi';
import Uth4SC from './pages/Uth4SC';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ChildSafeguarding from './pages/ChildSafeguarding';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lua-academy" element={<LuaAcademy />} />
        <Route path="/ibadi" element={<Ibadi />} />
        <Route path="/uth4sc" element={<Uth4SC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
  path="/child-safeguarding"
  element={<ChildSafeguarding />}
/>
      </Route>
    </Routes>
  );
}

export default App;
