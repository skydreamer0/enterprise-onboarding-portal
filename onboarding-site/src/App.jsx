import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Roles from './pages/Roles';
import FormsLibrary from './pages/FormsLibrary';
import ProcessDetail from './pages/ProcessDetail';
import SkillDetail from './pages/SkillDetail';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="roles" element={<Roles />} />
        <Route path="forms" element={<FormsLibrary />} />
        <Route path="process/:id" element={<ProcessDetail />} />
        <Route path="skills/:id" element={<SkillDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
