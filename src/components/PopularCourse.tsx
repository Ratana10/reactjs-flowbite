import React from "react";
import { Card, Badge, Button } from "flowbite-react";

const courses = [
  {
    id: 1,
    title: "ReactJS for Beginners",
    category: "Web Development",
    description:
      "Learn React components, props, state, hooks, and routing step by step.",
    rating: 4.8,
    students: 120,
    price: 25,
    instructor: "John Doe",
    role: "Senior Developer",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    description:
      "Learn how to create clean, modern, and user-friendly interfaces.",
    rating: 4.6,
    students: 85,
    price: 20,
    instructor: "Jane Smith",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    category: "Programming",
    description: "Master JavaScript fundamentals for modern web development.",
    rating: 4.9,
    students: 150,
    price: 18,
    instructor: "Michael Lee",
    role: "JavaScript Developer",
    avatar: "https://i.pravatar.cc/100?img=15",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
  },
];

const PopularCourse = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <Badge color="info" className="mx-auto mb-3 w-fit px-4 py-1 text-sm">
            ⭐ Popular Courses
          </Badge>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Courses
          </h2>

          <p className="mt-3 text-gray-600">
            Explore our most popular courses and start learning today.
          </p>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="!border-gray-200 !bg-white !text-gray-900 shadow-sm"
              renderImage={() => (
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover"
                />
              )}
            >
              {/* Category */}
              <Badge color="info" className="w-fit">
                {course.category}
              </Badge>

              {/* Title */}
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                {course.title}
              </h5>

              {/* Description */}
              <p className="min-h-[48px] text-gray-600">{course.description}</p>

              {/* Instructor + Rating */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={course.avatar}
                    alt={course.instructor}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">
                      {course.instructor}
                    </p>

                    <p className="text-sm text-gray-500">{course.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-xl text-yellow-400">★</span>

                    <span className="font-bold text-gray-900">
                      {course.rating}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500">
                    ({course.students} students)
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  ${course.price}
                </span>

                <Button>
                  View Course
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
