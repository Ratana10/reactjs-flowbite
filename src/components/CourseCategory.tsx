const categories = [
  {
    id: 1,
    name: "Mobile Development",
    description:
      "Learn to build modern mobile applications for Android and iOS.",
    courses: 12,
    icon: "📱",
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Master frontend and backend technologies to build modern websites.",
    courses: 20,
    icon: "💻",
  },
  {
    id: 3,
    name: "Data Science",
    description:
      "Learn Python, data analysis, machine learning, and AI fundamentals.",
    courses: 15,
    icon: "📊",
  },
];

const CourseCategory = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-screen-xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Explore Course Categories
          </h2>

          <p className="mx-auto max-w-2xl text-gray-500">
            Choose a category and start learning the skills you need for your
            career.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {category.name}
              </h3>

              <p className="mb-5 min-h-[48px] text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  {category.courses} Courses
                </span>

                <button
                  type="button"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategory;
