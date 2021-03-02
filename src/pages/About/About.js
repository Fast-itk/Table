import React from 'react'
import { Link } from 'react-router-dom'
import cls from './About.module.scss'

const About = () => {
    return (
        <div>
            <div className={cls.About}>
                <h2>Информация о проекте</h2>
                <p>Тестовое задание для Crazy Panda</p>
                <Link to="/1">
                    <button className={cls.aboutBtn}>Главная</button>
                </Link>
                
            </div>
        </div>
    )
}

export default About