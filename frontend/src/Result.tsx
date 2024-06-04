
import { Link, useSearchParams } from "react-router-dom";

function ResultPage() {
  const [searchParams] = useSearchParams()

  return (
    <div className="h-screen w-screen flex p-6">
      <div className="">
        <div className="my-4">
          <Link to="/" className="text-[12px]"> == Back</Link>
        </div>
      <h1>Results</h1>
        <p>The result of:
        <span className="capitalize mx-2">
          {searchParams.get("result")}
        </span>
        </p>
      </div>
    </div>
  )
}

export default ResultPage;