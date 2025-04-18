import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterPage() {
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
          <CardTitle className="text-2xl font-bold text-center">Account aanmaken</CardTitle>
          <CardDescription className="text-center">
            Vul onderstaande gegevens in om een nieuw account aan te maken
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Voornaam</Label>
              <Input id="first-name" placeholder="Jan" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Achternaam</Label>
              <Input id="last-name" placeholder="Jansen" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Bedrijfsnaam</Label>
            <Input id="company" placeholder="Uw Bedrijf B.V." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mailadres</Label>
            <Input id="email" type="email" placeholder="naam@bedrijf.nl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Wachtwoord</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Bevestig wachtwoord</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Registreren</Button>
          <div className="text-center text-sm">
            Heeft u al een account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Inloggen
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
