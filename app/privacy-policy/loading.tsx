import { ScrollToTop } from "@/components/scroll-to-top";
import { Skeleton } from "@/components/ui/skeleton";

export default async function PageLoading() {
  return (
    <div className="max-w-336 mx-auto px-6 py-12">
      <ScrollToTop />
      <div className="mb-10">
        <h1 className="md:text-5xl text-3xl font-medium mb-10">
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-2 w-24 rounded mt-2" />
        </h1>
      </div>
      <div className="grid md:grid-cols-[3fr,1fr] gap-20">
        <div className="space-y-4">
          <Skeleton className="h-4 w-48 mt-4" />
          <Skeleton className="h-4 w-10/12 mb-2" />
          <Skeleton className="h-4 w-72 mt-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-48 mt-4" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-48 mt-4" />
          <Skeleton className="h-4 w-72 mt-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-48 mt-4" />
          <Skeleton className="h-4 w-10/12 mb-2" />
          <Skeleton className="h-4 w-48 mt-4" />
          <Skeleton className="h-4 w-72 mt-2" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-48 mt-4" />
        </div>
        <div className="h-fit sticky top-6">
          <Skeleton className="h-[350px] w-full max-w-[300px]" />
        </div>
      </div>
    </div>
  );
}
