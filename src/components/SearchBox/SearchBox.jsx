import s from "./SearchBox.module.css";
export default function SearchBox({ handleChange, inputValue }) {
  return (
    <div className={s.searchbox}>
      <label className={s.lable} htmlFor="search-input">
        <span className={s.text}>Find contacts by name</span>
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
}
