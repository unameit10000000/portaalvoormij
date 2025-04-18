import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Portaal</span>
              <span>voor</span>
              <span className="text-primary">Mij</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Inloggen</CardTitle>
          <CardDescription className="text-center">
            Voer uw e-mailadres en wachtwoord in om toegang te krijgen tot uw account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mailadres</Label>
            <Input id="email" type="email" placeholder="naam@bedrijf.nl" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Wachtwoord</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Wachtwoord vergeten?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Inloggen</Button>
          <div className="text-center text-sm">
            Nog geen account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Registreren
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
