import style from './css/Generic.module.css';

export default function Form() {
    return (
        <form className={style.formContainer}>
            <label for="uname">Username:</label><br />
            <input type="text" name="uname" />
            <input type="submit" value="submit" />
        </form >
    );
}