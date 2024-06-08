
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";


function ResultPage() {
  const [searchParams] = useSearchParams()

  return (
    <div className="h-screen w-screen flex p-6">
      <div className="">
        <div className="my-4">
          <Link to="/" className="text-[12px]"> &larr; Back</Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{searchParams.get("result")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>About {searchParams.get("result")}</p>
            <p></p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ResultPage;