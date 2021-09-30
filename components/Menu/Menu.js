import React from 'react';
import s from './Menu.module.scss';
import cn from 'classnames';

export default function Menu() {

    return (
        <div className={s.ctn}>
            <div className={s.item}>
                <span className={s.action}>Одобрить</span>
                <div className={cn(s.light, s.green)}/>
                <span className={s.button}>Пробел</span>
            </div>
            <div className={s.item}>
                <span className={s.action}>Отклонить</span>
                <div className={cn(s.light, s.orange)}/>
                <span className={s.button}>Del</span>
            </div>
            <div className={s.item}>
                <span className={s.action}>Эскалация</span>
                <div className={cn(s.light, s.blue)}/>
                <span className={s.button}>Shift+Enter</span>
            </div>
            <div className={s.item}>
                <span className={s.action}>Сохранить</span>
                <div className={cn(s.light, s.none)}/>
                <span className={s.button}>F7</span>
            </div>
        </div>
    );
}