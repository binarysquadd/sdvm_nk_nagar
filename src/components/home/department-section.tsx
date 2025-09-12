export default function DepartmentSection(){
    return (
        <section className='min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center mb-12 gap-2">
                    {/* Left accent line */}
                    <div className="w-6 h-1 bg-[#FF8A00]/60 rounded-full"></div>

                    {/* Heading */}
                    <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                        Featured Honer's
                    </h2>
                    </div>

                    {/* Right accent line */}
                    <div className="w-6 h-1 bg-[#FF8A00]/60 rounded-full"></div>
                </div>

            </div>
        </section>
    )
}