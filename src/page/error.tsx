 
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <img
          src="https://res.cloudinary.com/lacchinh/image/upload/v1727927491/404_gif_nsfalq.gif"
          alt="404 Error"
          width={400}
          height={300}
          className="mx-auto rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
        <p className="text-xl text-muted-foreground">
          Sorry, the page you're looking for does not exist.
        </p>
        <p className="text-muted-foreground">
          It might have been moved or deleted, or perhaps you mistyped the URL.
        </p>
        <div className="pt-6">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}