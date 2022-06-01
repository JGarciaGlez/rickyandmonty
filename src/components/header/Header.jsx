import { Link, Route, Routes } from 'solid-app-router';
import CharacterbyName from '../../pages/CharacterbyName';
import Home from '../../pages/Home';
import './header.scss';

function Header() {
  return (
    <>
      <nav class="navbar">
        <span class="logo">Ricky and Monthy</span>
        <div class="menu">
          {' '}
          <Link href="/">Home</Link>
          <Link href="/filterbyname">Character by Name</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filterbyname" element={<CharacterbyName />} />
      </Routes>
    </>
  );
}

export default Header;
