import React from 'react';

import './index.scss'

const LeftSidebarItems=[
    {type: 'text', value:"Лента новостей"},
    {type: 'text', value:"Группы"},
    {type: 'text', value:"Контакты"},
    {type: 'text', value:"Профиль покупателя"},

    {type:'button', value:"Распродажа", color: '#8e3a88'},
    {type:'button', value:"Каталог продукции", color: '#523bc5'},
    {type:'button', value:"Витрина продукции", color: '#000000'},

    {type: 'text', value:"Лента новостей"},
    {type: 'text', value:"Лента новостей"},
    {type: 'text', value:"Лента новостей"},
    {type: 'text', value:"Лента новостей"},
]

function LeftSidebar() {
    return (
        <div className="LeftSidebar">
            {LeftSidebarItems.map((item)=>{
                if (item.type === "text") return <a href="#" className="LeftSidebar_Item __Text">{item.value}</a>
                if (item.type === "button") return <a href="#" className="LeftSidebar_Item __Button" style={{backgroundColor: item.color}}>{item.value}</a>
            })}
        </div>
    );
}

export default LeftSidebar;
