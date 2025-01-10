'use client'
 
import { useParams } from 'next/navigation'
import courseData from "@/data/bio.courses.json";

function page() {
    const params = useParams<{ coursename : string }>()
  
    const coursename = params.coursename;

  const course = courseData.courses.find((course) => course.slug === coursename);

    if (!course) {
      return (
        <div className="min-h-screen bg-black py-12 pt-36 flex items-center justify-center text-white">
          <h1 className="text-3xl font-semibold">Course not found!</h1>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-black py-12 pt-36">
        <div className="flex flex-wrap justify-center">
          <div className="inter-var m-4">
            <div className="max-w-lg md:max-w-none text-white">
              <h2 className="text-2xl text-center font-semibold sm:text-3xl text-white">
                {course.title}
              </h2>
              <p className="mt-4 text-gray-400">{course.description}</p>
              <img
                src={"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={course.title}
                className="mt-6 w-full rounded-lg shadow-md"
              />
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Details</h3>
                {/* <ul className="mt-4 space-y-2 text-gray-300">
                  {course.details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span> {detail}
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="mt-8">
                <a
                  href="https://forms.gle/your-google-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-black rounded-lg shadow-lg hover:bg-[#1da653] transition-all"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
     

export default page
