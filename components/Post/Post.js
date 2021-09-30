import React, {useEffect} from 'react';
import s from './Post.module.scss';
import A from "../../componentsService/A";
import {UserSvg} from "../Icons/Icons";
import {addCheckedPost, fetchPosts} from "../../store/slices/home/homeSlice";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {DECLINE, ESCALATE} from "../../hooks/chooseTypes";

export default function Post({comment, setComment}) {

    const {handleSubmit, register} = useForm();

    const dispatch = useDispatch();
    const postsData = useSelector((state) => state.homePage.posts);
    const activePost = useSelector((state) => state.homePage.activePost);

    const onSubmit = (data) => {

        if (comment === DECLINE) {
            dispatch(addCheckedPost({id: postsData.data[activePost].id, answer: DECLINE, message: data.message}));
        } else {
            dispatch(addCheckedPost({id: postsData.data[activePost].id, answer: ESCALATE, message: data.message}));
        }
        setComment(null);
    };

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div className={s.ctn}>
            {postsData.loading ?
                    <span>Loading...</span>
            :
                <>
                    {comment ?
                        <form className={s.form} onSubmit={handleSubmit((data) => onSubmit(data))}>
                            <textarea placeholder={'Введите примечание...'} className={s.comment} {...register('message')}/>
                            <button className={s.submit} type={"submit"}>Подтвердить</button>
                        </form>
                    :
                        <>
                            {postsData.data[activePost] ?
                                <>
                                    <div className={s.header}>
                                        <div className={s.post_info}>
                                            <span className={s.text}><A className={s.link}>{postsData.data[activePost].id}</A> - {postsData.data[activePost].publishDateString}</span>
                                        </div>
                                        <div className={s.user_info}>
                                            <div className={s.svg}>
                                                <UserSvg/>
                                            </div>
                                            <A className={s.user_name}>{postsData.data[activePost].ownerLogin}</A>
                                        </div>
                                    </div>
                                    <div className={s.content}>
                                        <div className={s.title}>
                                            <h1 className={s.text}>{postsData.data[activePost].bulletinSubject}</h1>
                                        </div>
                                        <div className={s.description}>
                                            <div className={s.text} dangerouslySetInnerHTML={{__html: postsData.data[activePost].bulletinText}}/>
                                            <div className={s.images}>
                                                {postsData.data[activePost].bulletinImages && postsData.data[activePost].bulletinImages.map((img, i) =>
                                                    <img src={img} key={i}/>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            :
                                <span>Все объявления просмотрены. Ура!</span>
                            }
                        </>
                    }
                </>
            }
        </div>
    );
}