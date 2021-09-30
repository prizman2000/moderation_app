import React from 'react';
import s from './Post.module.scss';
import A from "../../componentsService/A";
import {UserSvg} from "../Icons/Icons";

export default function Post() {

    return (
        <div className={s.ctn}>
            <div className={s.header}>
                <div className={s.post_info}>
                    <span className={s.text}><A className={s.link}>1234567</A> - 08:46, сегодня</span>
                </div>
                <div className={s.user_info}>
                    <div className={s.svg}>
                        <UserSvg/>
                    </div>
                    <A className={s.user_name}>1234567</A>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.title}>
                    <h1 className={s.text}>UI/UX Designer (Владивосток)</h1>
                </div>
                <div className={s.description}>
                    <div className={s.text}>
                        <p>
                            Мы — команда разработки. Используя современные технологии и стандарты мы создаем продукт для анализа рынка ценных бумаг и эффективного управления портфелем. Мы стремимся ежедневно добавлять в наш продукт значимый функционал, выполняя строгие требования к его качеству и быстродействию. Мы ценим честность, дисциплину и ответственность, сами планируем свою работу и организуем процесс, стремимся выдерживать сроки без переработок и вести работу прозрачно для коллег и заказчика. У нас есть веб-версия, мобильные приложения (android, ios) и телеграм-бот. Это разнообразие стоит на процессах TDD, Continious Integration и конечно же на нашей команде. Все работают удаленно (+- 2 часовых пояса от Москвы).
                        </p>
                        <p>
                            К себе в команду мы ищем профессионала, который умеет решать задачи пользователя в
                            веб и мобильных девайсах. Еще встречаются такие названия этой роли: Продуктовый-
                            дизайнер, UI / UX Designer, Дизайнер Интерфейсов, Проектировщик интерфейсов и т.п.,
                            чтобы все эти слова не значили.
                        </p>
                    </div>
                    <div className={s.images}>
                        <img src={'/test/img1.png'}/>
                        <img src={'/test/img2.png'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}