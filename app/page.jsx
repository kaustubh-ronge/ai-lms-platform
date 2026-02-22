// import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/nextjs";

// export default function Home() {
//   return (
//     <div>
//        <Button>hello</Button>
//        <UserButton />
//     </div>
//   );
// }


// app/page.jsx
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className='mt-40'>

<Header />
      <HeroSection />


      {/* <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">

                <div className="text-4xl font-bold text-blue-400 mb-2">{statsData.value}</div>
                <div className="text-gray-400">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="py-20 ">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to build your online courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (

              <Card key={index} className='p-6'>
                <CardContent className='space-y-4 pt-4'>
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>

                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-900 mb-[150px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">

                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>

                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-center text-white mb-4">Ready to Start Teaching and Learning?</h2>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and learners building the future of education with our AI platform.
          </p>
          <Link href='/dashboard'>
            <Button size='lg'
              className='bg-white text-blue-600 hover:bg-blue-50 animate-bounce'>
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

    </div>
  )
}