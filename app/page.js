import { Button } from "@/components/ui/button"
import { Card,CardHeader,CardContent } from "@/components/ui/card";
import { Brain, Calendar, FerrisWheel, LeafyGreenIcon, Library, LockIcon, NotebookIcon, PenBox } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" h-screen relative container mx-auto px-4 pt-18 pb-16">
      <div className=" max-w-6xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-700 via-blue-300 to-blue-800">
          Feel it. Write it. Save it.
          <br />
          mood by mood
        </h1>
        <p className="text-lg text-blue-500">hello this is my journal app</p>
        <div className="relative">
          <div className=" bg-orange-200 rounded-2xl p-4 max-full mx-auto bg-gradient-to-b from-orange-200 to-orange-100 transparent">
            <div className="border-b border-orange-200 pb-4 mb-4 flex items-center justify-between">
              <Calendar className="h-6 w-6 text-orange-400" />
              <div className="flex gap-1">
                <div className="bg-red-400 rounded-full h-4 w-4"></div>
                <div className="bg-red-600 rounded-full h-4 w-4"></div>
                <div className="bg-red-800 rounded-full h-4 w-4"></div>
              </div>
            </div>
            <div className="pt-4 pb-4">Identify source of happiness</div>
            <div className="flex flex-col gap-2">
              <div className="bg-gray-500 rounded-2xl h-4 w-200"></div>
              <div className="bg-gray-500  rounded-2xl h-4 w-280"></div>
              <div className="bg-gray-500  rounded-2xl h-4 w-240"></div>
            </div>
          </div>
          <div className="pt-10">
            <Button variant="mybut" className="">
              <PenBox/>
              <a> start writing</a>
            </Button>
            <Button variant="outline" className="ml-2 " >
              <Library/>
              <a href="#features">Learn More</a></Button>
          </div>
        </div>
      </div>
      <section id="features" className="min-h-screen pt-20">
        <div className="flex items-center justify-center pt-10 gap-4">
          <Card className="max-w-100 ">
            <CardHeader>
              <NotebookIcon className="bg-amber-200 rounded-full h-12 w-12 p-2"/>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold"> Journal by Mood</h2>
              <p className="pt-2">Write your thoughts and let us detect your mood to organize your entries. Happy, sad, inspired – we've got a place for every feeling.
</p>
            </CardContent>
          </Card>
          <Card className="max-w-100">
            <CardHeader>
              <Brain className="bg-amber-200 rounded-full h-12 w-12 p-2"/>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold"> Reflect Smarter</h2>
              <p className="pt-2">Gain insights about your moods, patterns, and emotional journey through beautifully visualized data.</p>
            </CardContent>
          </Card>
          <Card className="max-w-100">
            <CardHeader>
              <LockIcon className="bg-amber-200 rounded-full h-12 w-12 p-2"/>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold"> Secure & Private</h2>
              <p className="pt-2">We encrypt your entries, so your private thoughts remain truly private – accessible only by you.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
