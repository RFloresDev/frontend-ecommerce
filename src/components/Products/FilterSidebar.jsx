import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filters, setFilters] = useState({
		category: "",
		gender: "",
		color: "",
		size: [],
		material: [],
		brand: [],
		minPrice: 0,
		maxPrice: 100,
	});

	const [priceRange, setPriceRange] = useState([0, 100]);
	const categories = ["Top Wear", "Bottom Wear"];
	const colors = ["Red", "Blue", "Green", "Black", "White"];
	const sizes = ["S", "M", "L", "XL", "XXL"];
	const materials = ["Cotton", "Polyester", "Wool", "Silk"];
	const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];
	const genders = ["Men", "Women"];

	useEffect(() => {
		const params = Object.fromEntries([...searchParams]);

		setFilters({
			category: params.category || "",
			gender: params.gender || "",
			color: params.color || "",
			size: params.size ? params.size.split(",") : [],
			material: params.material ? params.material.split(",") : [],
			brand: params.brand ? params.brand.split(",") : [],
			minPrice: params.minPrice || 0,
			maxPrice: params.maxPrice || 100,
		});
		setPriceRange([0, params.maxPrice || 100]);
	}, [searchParams]);

	return <div>FilterSidebar</div>;
};

export default FilterSidebar;
