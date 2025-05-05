import css from './SearchBar.module.css';
import { toast } from "react-hot-toast";

interface Props {
    onSearch: (val: string) => Promise<void>;
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({onSearch, onChange} : Props) {
    
    const hendleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
        ev.preventDefault();
        const form: HTMLFormElement = ev.currentTarget;
        const imgInput  = form.elements.namedItem("img") as HTMLInputElement;
        const image = imgInput.value;
        if (image.trim() === "") {
            toast.error("Input cannot be empty!", {
                position: "top-right",
            });
            
            return;
        }
    
        onSearch(image);
        form.reset();
    }

    return(
        <header>
            <form className={css.form} onSubmit={hendleSubmit}>
            <input className={css.input}
                autoComplete="off"
                name="img"
                id="img"
                autoFocus
                type="text"
                onChange={onChange}
                placeholder="Search images and photos"/>
            <button className={css.btnSearch} type="submit" > Search</button>
        </form>
        </header>
        
        
    )
}