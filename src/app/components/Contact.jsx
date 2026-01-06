import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-500 mb-10">
          Interested in working together or have a question?
          Feel free to reach out.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:njagipete12@gmail.com"
                className="text-blue-600 hover:underline"
              >
                njagipete12@gmail.com
              </a>
            </p>

            <p>
              💼 GitHub:{" "}
              <a
                href="https://github.com/Pete-Mp256"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                github.com/your-username
              </a>
            </p>

            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/pete-mbithi-571040368/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/your-profile
              </a>
            </p>

            <Button className="mt-4">Send Email</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
