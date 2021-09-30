import React, {useState} from "react";
import s from '../styles/pages/home.module.scss';
import Post from "../components/Post/Post";
import Menu from "../components/Menu/Menu";
import useEvent from "../hooks/useEvent";
import {useDispatch, useSelector} from "react-redux";
import {addCheckedPost, enterInSystem, nextPost, postPostsResults, saveChanges} from "../store/slices/home/homeSlice";
import {APPROVE, DECLINE, ESCALATE} from "../hooks/chooseTypes";

export default function Home() {

    const [escalate, setEscalate] = useState(false);
    const [comment, setComment] = useState(null);

    const dispatch = useDispatch();
    const postsData = useSelector((state) => state.homePage.posts);
    const activePost = useSelector((state) => state.homePage.activePost);
    const enter = useSelector((state) => state.homePage.enter);
    const toSave = useSelector((state) => state.homePage.toSave);
    const end = useSelector((state) => state.homePage.end);
    const checkedPosts = useSelector((state) => state.homePage.checkedPosts);

    const handleKeyPress = (e) => {
        if (enter && !comment && !toSave && !end) {
            if (e.code === 'Space') {
                dispatch(addCheckedPost({id: postsData.data[activePost].id, answer: APPROVE}));
                dispatch(nextPost());
            }
            if (e.key === 'Backspace') {
                setComment(DECLINE);
                dispatch(nextPost());
            }
            if (e.key === 'Shift') {
                setEscalate(true);
            } else if (e.key === 'Enter' && escalate) {
                setComment(ESCALATE);
                dispatch(nextPost());
                setEscalate(false);
            } else {
                setEscalate(false);
            }
        } else if (!enter && e.key === 'Enter') {
            dispatch(enterInSystem());
        } else if (toSave && enter && e.key === 'F7') {
            console.log(checkedPosts)
            dispatch(postPostsResults(checkedPosts));
            dispatch(saveChanges());
        }
    }


    useEvent('keydown', handleKeyPress);


  return (
      <>
          <body>
              <div className={s.ctn}>
                  {enter &&
                      <div className={s.container}>
                          <div className={s.post_block}>
                              {toSave ?
                                <span>Сохраните изменения</span>
                              :
                                  <Post comment={comment} setComment={setComment}/>
                              }
                          </div>
                          <div className={s.menu_block}>
                              <Menu/>
                          </div>
                      </div>
                  }
              </div>
          </body>
      </>
  )
}
