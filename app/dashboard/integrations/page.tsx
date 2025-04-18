"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertCircle, Copy, Eye, EyeOff, Plus } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function IntegrationsPage() {
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: "Energie Leverancier B.V.",
      key: "sd_test_abcdefghijklmnopqrstuvwxyz123456",
      created: "10 apr 2025",
      status: "active",
    },
    {
      id: 2,
      name: "Internet Provider N.V.",
      key: "sd_test_zyxwvutsrqponmlkjihgfedcba654321",
      created: "5 apr 2025",
      status: "active",
    },
  ])

  const [showKey, setShowKey] = useState<Record<number, boolean>>({})
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyValue, setNewKeyValue] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const toggleShowKey = (id: number) => {
    setShowKey((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const addNewKey = () => {
    if (newKeyName && newKeyValue) {
      const newKey = {
        id: apiKeys.length + 1,
        name: newKeyName,
        key: newKeyValue,
        created: new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" }),
        status: "active",
      }
      setApiKeys([...apiKeys, newKey])
      setNewKeyName("")
      setNewKeyValue("")
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Integraties</h1>
          <p className="text-muted-foreground">Beheer uw Salesdock API-sleutels en andere integraties</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nieuwe API-sleutel
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nieuwe API-sleutel toevoegen</DialogTitle>
              <DialogDescription>Voeg een nieuwe Salesdock API-sleutel toe voor een leverancier.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Naam leverancier</Label>
                <Input
                  id="name"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="Bijv. Energie Leverancier B.V."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="key">API-sleutel</Label>
                <Input
                  id="key"
                  value={newKeyValue}
                  onChange={(e) => setNewKeyValue(e.target.value)}
                  placeholder="sd_test_..."
                />
                <p className="text-sm text-muted-foreground">
                  De API-sleutel kunt u genereren in het Salesdock dashboard van de leverancier.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Annuleren
              </Button>
              <Button onClick={addNewKey}>Toevoegen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Belangrijk</AlertTitle>
        <AlertDescription>
          API-sleutels geven toegang tot uw Salesdock-account. Deel deze nooit met anderen en bewaar ze veilig.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="salesdock" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="salesdock">Salesdock</TabsTrigger>
          <TabsTrigger value="email">E-mail</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>
        <TabsContent value="salesdock" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Salesdock API-sleutels</CardTitle>
              <CardDescription>Beheer uw Salesdock API-sleutels voor verschillende leveranciers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{apiKey.name}</h3>
                        <p className="text-sm text-muted-foreground">Aangemaakt op {apiKey.created}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => toggleShowKey(apiKey.id)}>
                          {showKey[apiKey.id] ? (
                            <>
                              <EyeOff className="mr-2 h-4 w-4" />
                              Verbergen
                            </>
                          ) : (
                            <>
                              <Eye className="mr-2 h-4 w-4" />
                              Tonen
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(apiKey.key)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Kopiëren
                        </Button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {showKey[apiKey.id] ? apiKey.key : "••••••••••••••••••••••••••••••••••"}
                      </code>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm">Actief</span>
                      </div>
                      <div className="ml-auto">
                        <Link
                          href={`/dashboard/integrations/${apiKey.id}`}
                          className={buttonVariants({ variant: "link", size: "sm" })}
                        >
                          Instellingen
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Hulp nodig bij het instellen van uw API-sleutels? Bekijk onze{" "}
                <Link href="/docs/api" className="text-primary underline">
                  documentatie
                </Link>{" "}
                of{" "}
                <Link href="/contact" className="text-primary underline">
                  neem contact op
                </Link>{" "}
                met onze support.
              </p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Salesdock API-integratie handleiding</CardTitle>
              <CardDescription>
                Stap voor stap instructies voor het instellen van uw Salesdock API-integratie
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Stap 1: Genereer een API-sleutel in Salesdock</h3>
                  <p className="mt-1 text-sm">
                    Log in op het Salesdock dashboard van de leverancier en navigeer naar Instellingen &gt; API. Klik op
                    'Nieuwe API-sleutel genereren' en geef deze een duidelijke naam.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Stap 2: Voeg de API-sleutel toe aan portaalvoormij.nl</h3>
                  <p className="mt-1 text-sm">
                    Kopieer de gegenereerde API-sleutel en voeg deze toe via de 'Nieuwe API-sleutel' knop hierboven.
                    Geef de sleutel een duidelijke naam zodat u weet bij welke leverancier deze hoort.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Stap 3: Koppel de API-sleutel aan uw campagnes</h3>
                  <p className="mt-1 text-sm">
                    Ga naar het campagne-overzicht en koppel de juiste API-sleutel aan elke campagne. Zo weet het
                    systeem welke leverancier bij welke campagne hoort.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Stap 4: Test de integratie</h3>
                  <p className="mt-1 text-sm">
                    Voer een testlead in om te controleren of de integratie correct werkt. Controleer of de lead correct
                    wordt doorgestuurd naar Salesdock.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>E-mail integratie</CardTitle>
              <CardDescription>
                Configureer uw e-mailprovider voor het versturen van geautomatiseerde e-mails
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">SMTP-instellingen</h3>
                <div className="mt-4 grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-host">SMTP Host</Label>
                      <Input id="smtp-host" placeholder="smtp.example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">SMTP Poort</Label>
                      <Input id="smtp-port" placeholder="587" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-user">Gebruikersnaam</Label>
                      <Input id="smtp-user" placeholder="user@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-pass">Wachtwoord</Label>
                      <Input id="smtp-pass" type="password" placeholder="••••••••" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from-email">Afzender e-mail</Label>
                    <Input id="from-email" placeholder="noreply@uwbedrijf.nl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from-name">Afzender naam</Label>
                    <Input id="from-name" placeholder="Uw Bedrijfsnaam" />
                  </div>
                  <Button>Instellingen opslaan</Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">E-mail templates</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Configureer de e-mail templates die worden gebruikt voor verschillende statusupdates
                </p>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-confirmation">Bevestiging aanvraag</Label>
                    <Textarea
                      id="template-confirmation"
                      placeholder="Bedankt voor uw aanvraag bij {{campagne}}..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-reminder">Herinnering ondertekening</Label>
                    <Textarea
                      id="template-reminder"
                      placeholder="We hebben nog geen ondertekening ontvangen voor uw aanvraag..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-signed">Bevestiging ondertekend</Label>
                    <Textarea
                      id="template-signed"
                      placeholder="Bedankt voor het ondertekenen van uw aanvraag..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button>Templates opslaan</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="webhooks">
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Configureer webhooks om realtime updates te ontvangen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Webhook endpoints</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Configureer URL's waar statusupdates naartoe worden gestuurd
                </p>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="webhook-lead">Nieuwe lead</Label>
                    <Input id="webhook-lead" placeholder="https://uwbedrijf.nl/webhooks/new-lead" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-status">Status update</Label>
                    <Input id="webhook-status" placeholder="https://uwbedrijf.nl/webhooks/status-update" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhook-signed">Ondertekend</Label>
                    <Input id="webhook-signed" placeholder="https://uwbedrijf.nl/webhooks/signed" />
                  </div>
                  <Button>Webhooks opslaan</Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Webhook beveiliging</h3>
                <p className="mt-1 text-sm text-muted-foreground">Beveilig uw webhooks met een geheime sleutel</p>
                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="webhook-secret">Webhook geheime sleutel</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="webhook-secret"
                        type="password"
                        value="whsec_abcdefghijklmnopqrstuvwxyz123456"
                        readOnly
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard("whsec_abcdefghijklmnopqrstuvwxyz123456")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button>Nieuwe sleutel genereren</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
