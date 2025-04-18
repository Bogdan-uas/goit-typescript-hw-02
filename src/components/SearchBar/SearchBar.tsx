import style from './SearchBar.module.css'
import { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { showError } from "../../services/toaster";

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [topic, setTopic] = useState<string>("");

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (topic.trim() === "") {
    showError("Please enter a search query");
    return;
    }
    onSubmit(topic);
    console.log(topic);
};

const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(evt.target.value);
};

    return (
<header className={style.header}>
    <form onSubmit={handleSubmit}>
        <input
            className={style.input}
            onChange={handleChange}
            value={topic}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
        />
        <Toaster />
        <button type="submit" className={style.button}>Search</button>
    </form>
</header>
)
}

export default SearchBar;