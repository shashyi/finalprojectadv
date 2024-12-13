import { useEffect } from "react";
import { db } from "../firebase"; 
import { collection, getDocs } from "firebase/firestore";

const Category = ({ onAddCategory }) => {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categoriesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        onAddCategory(categoriesList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [onAddCategory]);
  return (
    <div>
      <h2>Categories</h2>
      {}
    </div>
  );
};

export default Category;
