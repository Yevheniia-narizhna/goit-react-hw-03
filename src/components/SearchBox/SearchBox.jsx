export default function SearchBox({ handleChange, inputValue }) {
  return (
    <div>
      <label htmlFor="search-input">Find contacts by name</label>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}
