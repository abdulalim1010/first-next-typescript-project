import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="container mx-auto py-10 space-y-10">
      {/* Header */}
      <section className="text-center space-y-4">
        <Badge variant="secondary">About Us</Badge>
        <h1 className="text-4xl font-bold tracking-tight">
          Building Modern Web Experiences
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We focus on creating fast, scalable, and user-friendly web
          applications using modern technologies like Next.js, TypeScript, and
          shadcn/ui.
        </p>
      </section>

      <Separator />

      {/* Content */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            We are passionate developers who love clean code, beautiful design,
            and meaningful user experiences. Our goal is to build products that
            are easy to use, maintain, and scale.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What We Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-muted-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>Full-stack web development</li>
              <li>UI/UX design with shadcn/ui</li>
              <li>API & database integration</li>
              <li>Performance & SEO optimization</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="inline-block">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">
              Want to work with us?
            </h2>
            <p className="text-muted-foreground">
              Let’s build something amazing together.
            </p>
            <Button>Contact Us</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
