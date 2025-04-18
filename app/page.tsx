"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f8fb]">
      <header className="border-b bg-white py-2 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl md:text-2xl">
            <span className="text-[#26a570]">Portaal</span>
            <span>voor</span>
            <span className="text-[#ff8a47]">Mij</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-[#26a570]">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-[#26a570]">
              Prijzen
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#26a570]">
              Contact
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-[#26a570] text-[#26a570] hover:bg-[#26a570] hover:text-white"
              >
                Inloggen
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-[#ff8a47] hover:bg-[#ff7a2d] text-white border-none">
                Aanmelden
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetContent side="right" className="w-[85%] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2 font-bold text-lg">
                      <span className="text-[#26a570]">Portaal</span>
                      <span>voor</span>
                      <span className="text-[#ff8a47]">Mij</span>
                    </div>
                    {/*
                    <Button variant="ghost" size="icon" aria-label="Close" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                    */}
                  </div>
                  <div className="flex flex-col p-4 space-y-4">
                    <Link
                      href="#features"
                      className="text-base py-2 font-medium hover:text-[#26a570]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </Link>
                    <Link
                      href="#pricing"
                      className="text-base py-2 font-medium hover:text-[#26a570]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Prijzen
                    </Link>
                    <Link
                      href="#contact"
                      className="text-base py-2 font-medium hover:text-[#26a570]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <Link href="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="outline"
                        className="w-full border-[#26a570] text-[#26a570] hover:bg-[#26a570] hover:text-white"
                      >
                        Inloggen
                      </Button>
                    </Link>
                    <Link href="/register" className="w-full" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-[#ff8a47] hover:bg-[#ff7a2d] text-white border-none">
                        Aanmelden
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#f0f8fb] to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-[#e6f5f0] px-3 py-1 text-sm text-[#26a570] font-medium mb-2">
                  Nieuw platform
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#333]">
                  Verbind klanten, verkopers en leveranciers op één platform
                </h1>
                <p className="max-w-[600px] text-gray-600 text-base md:text-lg">
                  Portaalvoormij.nl brengt alle partijen samen via een naadloze integratie met Salesdock. Beheer
                  campagnes, volg leads en automatiseer communicatie - voor een optimale klantervaring.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/register" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#ff8a47] hover:bg-[#ff7a2d] text-white border-none">
                      Start nu
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-[#26a570] text-[#26a570] hover:bg-[#26a570] hover:text-white"
                    >
                      Demo aanvragen
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center mt-8 lg:mt-0">
                <img
                  src="/interconnected-growth.png"
                  alt="Platform Overzicht"
                  className="rounded-lg object-cover w-full max-w-[500px] aspect-video overflow-hidden shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3 items-center justify-center">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#e6f5f0] hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-[#26a570] flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#26a570]">Voor verkopers</h3>
                <p className="text-gray-600">
                  Beheer campagnes, volg leads en automatiseer communicatie vanuit één dashboard.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#fff1e6] hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-[#ff8a47] flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-white"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#ff8a47]">Voor klanten</h3>
                <p className="text-gray-600">
                  Volg uw aanvragen, onderteken documenten en ontvang updates in een persoonlijk portaal.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#e6f5f0] hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-[#26a570] flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#26a570]">Voor leveranciers</h3>
                <p className="text-gray-600">
                  Ontvang gekwalificeerde leads en verwerk aanvragen efficiënt via Salesdock.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-20 bg-[#f0f8fb]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#26a570] px-3 py-1 text-sm text-white">Features</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#333]">
                  Alles wat u nodig heeft
                </h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-lg">
                  Ons platform biedt alle tools die u nodig heeft om uw verkoopprocessen te stroomlijnen
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#26a570] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#333]">Campagnebeheer</h3>
                <p className="mt-2 text-gray-600">Beheer al uw verkoopacties vanuit één centrale locatie.</p>
              </div>
              <div className="rounded-xl border border-[#fff1e6] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8a47] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#333]">Klantportaal</h3>
                <p className="mt-2 text-gray-600">Bied klanten inzicht in hun aanvragen via een branded portaal.</p>
              </div>
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#26a570] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#333]">Veilige API-integratie</h3>
                <p className="mt-2 text-gray-600">Beveiligde verbinding met Salesdock en andere systemen.</p>
              </div>
              <div className="rounded-xl border border-[#fff1e6] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8a47] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#333]">E-mailautomatisering</h3>
                <p className="mt-2 text-gray-600">Automatische e-mails op basis van statusveranderingen.</p>
              </div>
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#26a570] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#333]">Realtime statistieken</h3>
                <p className="mt-2 text-gray-600">Volg de prestaties van uw campagnes in realtime.</p>
              </div>
              <div className="rounded-xl border border-[#fff1e6] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8a47] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#333]">AVG/GDPR-compliant</h3>
                <p className="mt-2 text-gray-600">Volledig in lijn met de privacywetgeving.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same but with improved responsive classes */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#ff8a47] px-3 py-1 text-sm text-white">Hoe het werkt</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#333]">
                  Eenvoudig en efficiënt
                </h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-lg">
                  Zo verbindt portaalvoormij.nl klanten, verkopers en leveranciers
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#26a570] text-white mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#333]">Klant doet aanvraag</h3>
                  <p className="text-gray-600">Klant meldt zich aan via uw vergelijker of website.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff8a47] text-white mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#333]">Portaal verwerkt</h3>
                  <p className="text-gray-600">
                    Portaalvoormij.nl koppelt de lead aan de juiste campagne en leverancier.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#26a570] text-white mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#333]">Klant blijft betrokken</h3>
                  <p className="text-gray-600">
                    Klant volgt het proces via een persoonlijk portaal en ondertekent digitaal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-20 bg-[#f0f8fb]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#26a570] px-3 py-1 text-sm text-white">Prijzen</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#333]">
                  Transparante prijsstructuur
                </h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-lg">
                  Kies het pakket dat bij uw bedrijf past
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-[#333]">Compact</h3>
                  <p className="text-gray-600">Voor zelfstandigen en kleine bedrijven</p>
                  <div className="mt-4 text-4xl font-bold text-[#26a570]">
                    €99<span className="text-sm font-normal text-gray-600">/maand</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">5 campagnes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">500 leads per maand</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Basis e-mailautomatisering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">1 Salesdock-integratie</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Standaard klantportaal</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-[#26a570] hover:bg-[#1e8f5e] text-white border-none">
                    Kies Compact
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border-2 border-[#ff8a47] bg-white p-6 shadow-md hover:shadow-lg transition-all relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff8a47] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Populair
                </div>
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-[#333]">Team</h3>
                  <p className="text-gray-600">Voor groeiende bedrijven</p>
                  <div className="mt-4 text-4xl font-bold text-[#ff8a47]">
                    €249<span className="text-sm font-normal text-gray-600">/maand</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                    <span className="text-gray-600">10 campagnes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                    <span className="text-gray-600">2000 leads per maand</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                    <span className="text-gray-600">Geavanceerde e-mailautomatisering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                    <span className="text-gray-600">3 Salesdock-integraties</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                    <span className="text-gray-600">Branded klantportaal</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-[#ff8a47] hover:bg-[#ff7a2d] text-white border-none">Kies Team</Button>
                </div>
              </div>
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-[#333]">Enterprise</h3>
                  <p className="text-gray-600">Voor grote organisaties</p>
                  <div className="mt-4 text-4xl font-bold text-[#26a570]">
                    Op maat<span className="text-sm font-normal text-gray-600"></span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Onbeperkt campagnes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Onbeperkt leads</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Volledig aangepaste e-mailflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Onbeperkt Salesdock-integraties</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Volledig whitelabel klantportaal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                    <span className="text-gray-600">Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full border-[#26a570] text-[#26a570] hover:bg-[#26a570] hover:text-white"
                  >
                    Contact opnemen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#ff8a47] px-3 py-1 text-sm text-white">Klantervaring</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#333]">
                  Optimale klantbetrokkenheid
                </h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-lg">
                  Hoe portaalvoormij.nl de klantervaring verbetert
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-[#e6f5f0] bg-[#f0f8fb] p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-4 text-[#26a570]">Persoonlijk klantportaal</h3>
                  <p className="text-gray-600 mb-4">
                    Klanten krijgen toegang tot een persoonlijk portaal waar ze hun aanvragen kunnen volgen, documenten
                    kunnen inzien en ondertekenen, en direct kunnen communiceren met de verkoper.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                      <span className="text-gray-600">Realtime statusupdates</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                      <span className="text-gray-600">Digitaal ondertekenen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                      <span className="text-gray-600">Beveiligde documentenopslag</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#26a570]" />
                      <span className="text-gray-600">Direct contact met verkoper</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[#fff1e6] bg-[#fff8f3] p-6 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold mb-4 text-[#ff8a47]">Transparante communicatie</h3>
                  <p className="text-gray-600 mb-4">
                    Automatische e-mailflows houden klanten op de hoogte van elke stap in het proces, van aanvraag tot
                    ondertekening en levering.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                      <span className="text-gray-600">Gepersonaliseerde e-mails</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                      <span className="text-gray-600">Branded communicatie</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                      <span className="text-gray-600">Automatische herinneringen</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-[#ff8a47]" />
                      <span className="text-gray-600">Feedback mogelijkheden</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20 bg-[#f0f8fb]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#26a570] px-3 py-1 text-sm text-white">Contact</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#333]">
                  Neem contact met ons op
                </h2>
                <p className="max-w-[900px] text-gray-600 text-base md:text-lg">
                  Heeft u vragen of wilt u meer informatie? Neem contact met ons op.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-[#333]">Stuur ons een bericht</h3>
                <form className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Naam
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-[#e6f5f0] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26a570] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-[#e6f5f0] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26a570] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Uw e-mailadres"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Onderwerp
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-[#e6f5f0] bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26a570] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Onderwerp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-[#e6f5f0] bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26a570] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Uw bericht"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#ff8a47] hover:bg-[#ff7a2d] text-white border-none">Versturen</Button>
                </form>
              </div>
              <div className="rounded-xl border border-[#e6f5f0] bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-[#333]">Contactgegevens</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-2 h-10 w-10 rounded-full bg-[#e6f5f0] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-[#26a570]"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333]">Telefoon</h4>
                      <p className="mt-1 text-sm text-gray-600">+31 (0)20 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 h-10 w-10 rounded-full bg-[#fff1e6] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-[#ff8a47]"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333]">E-mail</h4>
                      <p className="mt-1 text-sm text-gray-600">info@portaalvoormij.nl</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 h-10 w-10 rounded-full bg-[#e6f5f0] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-[#26a570]"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333]">Adres</h4>
                      <p className="mt-1 text-sm text-gray-600">Hoofdstraat 123, 1234 AB Amsterdam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
            &copy; 2025 Portaalvoormij.nl. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-[#26a570]">
              Algemene voorwaarden
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#26a570]">
              Privacybeleid
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
