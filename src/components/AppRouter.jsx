import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import LeftModal from "../components/LeftModal";
import ContextMenu from "../components/ContextMenu";
import { globalRoutes, privateRoutes } from "../routes";
import { Auth } from "../context";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

function AppRouter({lMod, contMenu, setLMod, setContMenu}) {
  const {auth, setAuth} = useContext(Auth);
  const [logoutModal, setLogoutModal] = useState(false);

  console.log(auth)

  return(
    <div>
        {auth
          ?<div><button className="buttonModal" onContextMenu={e => {e.preventDefault(); const x = e.pageX; const y = e.pageY; setContMenu({x, y})}} onClick={() => setLMod(true)}>→</button>
          <LeftModal vis={lMod} setVis={setLMod} child={<div style={{display: 'flex', flexDirection: 'column'}}><button className="buttonActive" onClick={() => {setLMod(false)}}>←</button><Link className="aLink" to="/about">about</Link><Link className="aLink" to="/posts">posts</Link><a className="aLink" onClick={() => setLogoutModal(true)}>выйти</a></div>}/>
          <Modal vis={logoutModal} setVis={setLogoutModal} child={<div style={{display: 'grid'}}><h1 style={{marginBottom: '20px'}}>вы точна хатите выйти?</h1><Button style={{marginLeft: '110px'}} type="button" value="выйти" onClick={() => {setLMod(false); setAuth(false); localStorage.removeItem('auth'); setLogoutModal(false)}}/></div>}/>
          <ContextMenu x={contMenu.x} y={contMenu.y} onClick={setLMod} onClose={() => setContMenu(false)}/>
            <Routes>
              {privateRoutes.map(el => <Route key={el.path} path={el.path} element={el.component}/>)}
            </Routes>
          </div>  
          :<div><button className="buttonModal" onContextMenu={e => {e.preventDefault(); const x = e.pageX; const y = e.pageY; setContMenu({x, y})}} onClick={() => setLMod(true)}>→</button>
          <LeftModal vis={lMod} setVis={setLMod} child={<div style={{display: 'flex', flexDirection: 'column'}}><button className="buttonActive" onClick={() => {setLMod(false)}}>←</button><Link className="aLink" to="/about">about</Link><Link className="aLink" to="/posts">posts</Link><Link className="aLink" to='/login'>войти</Link></div>}/>
          <ContextMenu x={contMenu.x} y={contMenu.y} onClick={setLMod} onClose={() => setContMenu(false)}/>
            <Routes>
              {globalRoutes.map(el => <Route key={el.path} path={el.path} element={el.component}/>)}
            </Routes>
          </div>  
        }
        </div>
    );
};

export default AppRouter;