import style from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState("");
    
    const handleInput = (evt) => {
    setQuery(evt.target.value);
    };

    const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === "") {
        toast(
        'Please, type some key word(-s), describing what pictures you want, in the input before submitting',
        {
    duration: 6000,
    icon: '❗',
    }
    );
        setQuery("");
        return;
    }
    onSubmit(query);
    setQuery(query);
};
    

    return (
<header className={style.header}>
    <form onSubmit={handleSubmit}>
        <input
            className={style.input}
            onChange={handleInput}
            value={query}
            type="text"
            name="query"
            autoFocus
            placeholder="Search images and photos"
            required
        />
        <button type="submit" className={style.button}>Search</button>
    </form>
</header>
)
}