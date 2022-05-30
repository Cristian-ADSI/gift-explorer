import { AddCategory } from "./components/AddCategory";
import { useState } from "react";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";

const GiftExplorerApp = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  return (
    <div className="GiftExplorerApp">
      <Header />
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GiftExplorerApp;
