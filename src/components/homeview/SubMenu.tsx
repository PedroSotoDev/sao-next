"use client"
import { useState, useRef, useEffect } from 'react';

const styles ={
    container: "relative inline-block",
    btn: "w-33 text-[rgb(70,70,70)] text-sm px-4 py-2 border rounded-md flex items-center justify-between gap-2 hover:bg-blue-600 transition-colors",
    span: "bg-pink-200 text-black text-xs font-bold px-2 py-1 rounded-full",
    menu: "w-50 mt-2 p-4 absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50",
    tittle: "font-semibold text-gray-800 mb-2",
    wrapper: "space-y-2 max-h-60 overflow-y-auto",
    label: "flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer",
    checkBox: "w-4 h-4 text-pink-500 rounded focus:ring-blue-400",
    text: "ml-3 text-gray-700",
    closeBtn: "w-full mt-2 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors",

}

interface options {
    id: string;
    label: string;
    checked: boolean;
}

interface subMenuProps {
    tittle: string;
    list:options[];
}

const SubMenu = ({list, tittle}:subMenuProps) => {
    const [optionsList, setOptionsList] = useState<options[]>(list);
    const [menu, setMenu] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const counter = optionsList.filter(s => s.checked).length;

    const toggleOptions = (id: string) => {
        setOptionsList(optionsList.map(opt =>
        opt.id === id 
            ? { ...opt, checked: !opt.checked } 
            : opt
        ));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenu(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    },[]);

    return (
        <div className={styles.container} ref={menuRef}>

        <button className={styles.btn} type="button" onClick={() => setMenu(!menu)}>
            <span>{tittle}</span>

            {counter > 0 && (
            <span className={styles.span}> {counter}</span>
            )}

            <span className={`transform transition-transform ${menu ? 'rotate-180' : ''}`}>˅</span>
        </button>


        {menu && (
            <div className={styles.menu}> 
                <h3 className={styles.tittle}>Selecciona servicios:</h3>
                
                <div className={styles.wrapper}>
                    {optionsList.map((opt) => (
                        <label className={styles.label} key={opt.id}>
                            <input
                                className={styles.checkBox}
                                type="checkbox"
                                checked={opt.checked}
                                onChange={() => toggleOptions(opt.id)}
                            />
                            <span className={styles.text}>{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        )}
        </div>
    );
};

export default SubMenu;