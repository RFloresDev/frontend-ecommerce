const SortOptions = () => {
  return (
    <div className="mb-4 flex items-center justify-end">
      <select id="sort" className="border p-2 rounded-md focus:outline-none">
        <option value="">Default</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default SortOptions;
