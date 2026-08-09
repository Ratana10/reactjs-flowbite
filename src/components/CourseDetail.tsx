import {
  Card,
  Accordion,
  Button,
  Rating,
  RatingStar,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";

const CourseDetail = () => {
  const course = {
    title: "React JS for Beginners",
    description:
      "Learn React JS from the ground up and build modern, interactive web applications. This course covers components, props, state, hooks, forms, API integration, and more.",
    price: 49.99,
    instructor: "San Ratana",
    instructorRole: "Senior Frontend Developer",
    rating: 4.8,
    students: 1250,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
  };

  const lessons = [
    {
      id: 1,
      title: "Introduction to React",
      lessons: [
        "What is React?",
        "Setting up React project",
        "Understanding React components",
      ],
    },
    {
      id: 2,
      title: "React Components & Props",
      lessons: [
        "Creating components",
        "Passing props",
        "Reusable components",
      ],
    },
    {
      id: 3,
      title: "State & Events",
      lessons: [
        "Understanding state",
        "useState Hook",
        "Handling events",
      ],
    },
    {
      id: 4,
      title: "React Hooks",
      lessons: [
        "useEffect",
        "useContext",
        "Custom Hooks",
      ],
    },
    {
      id: 5,
      title: "Working with APIs",
      lessons: [
        "Fetching API data",
        "Axios",
        "Displaying API results",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Course Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Course Image */}
          <div className="lg:col-span-2">
            <img
              src={course.image}
              alt={course.title}
              className="h-[300px] w-full rounded-lg object-cover shadow-sm sm:h-[400px]"
            />
          </div>

          {/* Course Summary */}
          <Card className="!bg-white">
            <h1 className="mb-3 text-2xl font-bold text-gray-900">
              {course.title}
            </h1>

            {/* Rating */}
            <div className="mb-4 flex items-center gap-3">
              <Rating>
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar filled={false} />
              </Rating>

              <span className="text-sm font-medium text-gray-600">
                {course.rating} ({course.students} students)
              </span>
            </div>

            {/* Instructor */}
            <div className="mb-5">
              <p className="text-sm text-gray-500">
                Instructor
              </p>

              <p className="font-semibold text-gray-900">
                {course.instructor}
              </p>

              <p className="text-sm text-gray-500">
                {course.instructorRole}
              </p>
            </div>

            {/* Price */}
            <div className="mb-5">
              <span className="text-3xl font-bold text-blue-600">
                ${course.price}
              </span>
            </div>

            <Button
              color="blue"
              className="w-full"
            >
              Enroll Now
            </Button>
          </Card>
        </div>

        {/* Course Content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Description */}
          <div className="lg:col-span-2">
            <Card className="!bg-white">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                About This Course
              </h2>

              <p className="leading-7 text-gray-600">
                {course.description}
              </p>
            </Card>

            {/* Lessons */}
            <Card className="mt-6 !bg-white">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Course Lessons
              </h2>

              <Accordion collapseAll>
                {lessons.map((section) => (
                  <AccordionPanel key={section.id}>
                    <AccordionTitle className="!bg-white ">
                      <div className="flex items-center justify-between">
                        <span className="text-black">
                          {section.id}. {section.title}
                        </span>
                      </div>
                    </AccordionTitle>

                    <AccordionContent className="!bg-white">
                      <div className="space-y-3">
                        {section.lessons.map((lesson, index) => (
                          <div
                            key={lesson}
                            className="flex items-center gap-3 rounded-lg bg-gray-50 p-3"
                          >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-700">
                              {index + 1}
                            </span>

                            <span className="text-sm text-gray-700">
                              {lesson}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionPanel>
                ))}
              </Accordion>
            </Card>
          </div>

          {/* Course Information */}
          <div>
            <Card className="!bg-white">
              <h2 className="mb-5 text-xl font-bold text-gray-900">
                Course Information
              </h2>

              <div className="space-y-4">

                <div>
                  <p className="text-sm text-gray-500">
                    Instructor
                  </p>

                  <p className="font-medium text-gray-900">
                    {course.instructor}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Students
                  </p>

                  <p className="font-medium text-gray-900">
                    {course.students.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Rating
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <Rating>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar filled={false} />
                    </Rating>

                    <span className="text-sm text-gray-600">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Lessons
                  </p>

                  <p className="font-medium text-gray-900">
                    {lessons.reduce(
                      (total, section) =>
                        total + section.lessons.length,
                      0
                    )}{" "}
                    lessons
                  </p>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;