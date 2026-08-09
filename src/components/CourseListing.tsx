import { useMemo, useState } from "react";
import {
  Card,
  Dropdown,
  TextInput,
  Button,
  Badge,
  DropdownItem,
} from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "React JS for Beginners",
    description:
      "Learn the fundamentals of React JS and build modern interactive web applications.",
    price: 49.99,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Laravel & PHP",
    description:
      "Build powerful backend applications and REST APIs using PHP and Laravel.",
    price: 59.99,
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Data Science with Python",
    description:
      "Learn Python, data analysis, visualization, and the fundamentals of data science.",
    price: 69.99,
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Flutter Mobile Development",
    description:
      "Create beautiful cross-platform mobile applications using Flutter and Dart.",
    price: 54.99,
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Node.js & Express",
    description:
      "Learn how to build scalable backend applications and APIs with Node.js.",
    price: 44.99,
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    description:
      "Understand UI/UX principles and design modern, user-friendly digital products.",
    price: 39.99,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
];

const CourseListing = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(keyword) ||
        course.description.toLowerCase().includes(keyword);

      const matchesCategory =
        category === "All Categories" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All Categories");
  };

  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Explore Courses
          </h1>

          <p className="text-gray-500">
            Find the right course and start learning today.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Search */}
            <div className="flex-1">
              <TextInput
                icon={HiSearch}
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="[&_input]:!bg-white [&_input]:!text-gray-900 [&_input]:!placeholder-gray-500"
              />
            </div>

            {/* Category */}
            <Dropdown
              label={category}
              color="light"
              className="w-full md:w-56 !bg-white !text-black"
            >
              {categories.map((item) => (
                <DropdownItem key={item} onClick={() => setCategory(item)}>
                  <p className="text-black">{item}</p>
                </DropdownItem>
              ))}
            </Dropdown>

            {/* Reset */}
            <Button color="light" onClick={resetFilters}>
              Reset
            </Button>
          </div>
        </div>

        {/* Result Count */}
        <div className="mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredCourses.length}
            </span>{" "}
            courses
          </p>
        </div>

        {/* Course Cards */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg !bg-white"
              >
                {/* Course Image */}
                <div className="-mx-5 -mt-5 mb-4 h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Category */}
                <Badge color="info" className="mb-2 w-fit">
                  {course.category}
                </Badge>

                {/* Title */}
                <h5 className="line-clamp-1 text-xl font-bold tracking-tight text-gray-900">
                  {course.title}
                </h5>

                {/* Description */}
                <p className="line-clamp-2 text-sm leading-6 text-gray-500">
                  {course.description}
                </p>

                {/* Price */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </span>

                  {/* Template string */}
                  <Link to={`/course/${course.id}`}>
                    <Button color="blue">View Course</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-lg border border-gray-200 bg-white py-16 text-center">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              No courses found
            </h3>

            <p className="mb-5 text-gray-500">
              Try changing your search or category filter.
            </p>

            <Button color="blue" onClick={resetFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseListing;
