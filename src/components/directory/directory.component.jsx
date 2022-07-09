import CategoryFunction from "../category-item/categories.component";

import "./directory.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryFunction key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
