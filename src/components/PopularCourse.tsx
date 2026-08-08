
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "ReactJS for Beginners",
    description:
      "Learn the fundamentals of ReactJS and build modern interactive web applications.",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Laravel Web Development",
    description:
      "Learn PHP Laravel and build powerful, scalable web applications from scratch.",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Tailwind CSS Mastery",
    description:
      "Build beautiful and responsive websites quickly using Tailwind CSS.",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
];

const PopularCourse = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Popular Learning Courses
          </h2>

          <p className="mx-auto max-w-2xl text-gray-500">
            Improve your skills with our popular courses designed to help you
            learn and build real-world projects.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="h-52 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </span>

                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
