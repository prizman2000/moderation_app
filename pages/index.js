import React from "react";
import s from '../styles/pages/home.module.scss';
import Post from "../components/Post/Post";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
      <body>
        <div className={s.ctn}>
          <div className={s.container}>
            <div className={s.post_block}>
              <Post/>
            </div>
            <div className={s.menu_block}>
              <Menu/>
            </div>
          </div>
        </div>
      </body>
  )
}
