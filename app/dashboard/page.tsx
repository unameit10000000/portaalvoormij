"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Settings,
  User,
  Users,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-[#f0f8fb]">
        <Sidebar className="hidden lg:block bg-white">
          <SidebarHeader className="flex h-14 items-center border-b px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <span className="text-[#26a570]">Portaal</span>
              <span>voor</span>
              <span className="text-[#ff8a47]">Mij</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive
                      className="bg-[#e6f5f0] text-[#26a570] hover:bg-[#d1efe5] hover:text-[#26a570] data-[active=true]:bg-[#e6f5f0] data-[active=true]:text-[#26a570]"
                    >
                      <Link href="/dashboard">
                        <Home className="h-4 w-4" />
                        <span>Overzicht</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-[#e6f5f0] hover:text-[#26a570]">
                      <Link href="/dashboard/campaigns">
                        <BarChart3 className="h-4 w-4" />
                        <span>Campagnes</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-[#e6f5f0] hover:text-[#26a570]">
                      <Link href="/dashboard/leads">
                        <Users className="h-4 w-4" />
                        <span>Leads</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-[#e6f5f0] hover:text-[#26a570]">
                      <Link href="/dashboard/integrations">
                        <CreditCard className="h-4 w-4" />
                        <span>Integraties</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Beheer</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-[#e6f5f0] hover:text-[#26a570]">
                      <Link href="/dashboard/settings">
                        <Settings className="h-4 w-4" />
                        <span>Instellingen</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="hover:bg-[#e6f5f0] hover:text-[#26a570]">
                      <Link href="/dashboard/users">
                        <User className="h-4 w-4" />
                        <span>Gebruikers</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Jan Jansen</span>
                <span className="text-xs text-gray-500">jan@bedrijf.nl</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Mijn account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profiel</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Instellingen</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Uitloggen</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
            <div className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-[#e6f5f0]"
                onClick={() => setIsMobileNavOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
              <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
                <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center gap-2 font-bold text-lg">
                        <span className="text-[#26a570]">Portaal</span>
                        <span>voor</span>
                        <span className="text-[#ff8a47]">Mij</span>
                      </div>
                      {/*
                      <Button variant="ghost" size="icon" aria-label="Close" onClick={() => setIsMobileNavOpen(false)}>
                        <X className="h-5 w-5" />
                      </Button>
                      */}
                    </div>
                    <div className="flex flex-col p-4 space-y-4">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md bg-[#e6f5f0] text-[#26a570]"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <Home className="h-5 w-5" />
                        Overzicht
                      </Link>
                      <Link
                        href="/dashboard/campaigns"
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md hover:bg-[#e6f5f0] hover:text-[#26a570]"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <BarChart3 className="h-5 w-5" />
                        Campagnes
                      </Link>
                      <Link
                        href="/dashboard/leads"
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md hover:bg-[#e6f5f0] hover:text-[#26a570]"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <Users className="h-5 w-5" />
                        Leads
                      </Link>
                      <Link
                        href="/dashboard/integrations"
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md hover:bg-[#e6f5f0] hover:text-[#26a570]"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <CreditCard className="h-5 w-5" />
                        Integraties
                      </Link>
                      <div className="h-px bg-gray-200 my-2"></div>
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md hover:bg-[#e6f5f0] hover:text-[#26a570]"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <Settings className="h-5 w-5" />
                        Instellingen
                      </Link>
                      <Link
                        href="/dashboard/users"
                        className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md hover:bg-[#e6f5f0] hover:text-[#26a570]"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <User className="h-5 w-5" />
                        Gebruikers
                      </Link>
                      <div className="h-px bg-gray-200 my-2"></div>
                      <div className="flex items-center gap-3 p-3 rounded-md border border-[#e6f5f0]">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">Jan Jansen</span>
                          <span className="text-xs text-gray-500">jan@bedrijf.nl</span>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setIsMobileNavOpen(false)}>
                          <LogOut className="h-4 w-4 mr-2" />
                          Uitloggen
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Input type="search" placeholder="Zoeken..." className="w-full md:w-[300px] pl-8 border-[#e6f5f0]" />
                  <div className="absolute left-2.5 top-2.5 text-gray-400">
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
                      className="h-4 w-4"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
            <SidebarTrigger className="hidden lg:flex" />
            <Button variant="outline" size="icon" className="relative border-[#e6f5f0]">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
              <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full p-0 text-[10px] bg-[#ff8a47]">3</Badge>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-[#e6f5f0]">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mijn account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profiel</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Instellingen</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Uitloggen</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl text-[#333]">Dashboard</h1>
              <Button className="ml-auto gap-1 bg-[#ff8a47] hover:bg-[#ff7a2d] text-white border-none" size="sm">
                <Plus className="h-4 w-4" />
                Nieuwe campagne
              </Button>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-white border border-[#e6f5f0] overflow-auto w-full flex-nowrap">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-[#e6f5f0] data-[state=active]:text-[#26a570]"
                >
                  Overzicht
                </TabsTrigger>
                <TabsTrigger
                  value="analytics"
                  className="data-[state=active]:bg-[#e6f5f0] data-[state=active]:text-[#26a570]"
                >
                  Statistieken
                </TabsTrigger>
                <TabsTrigger
                  value="reports"
                  className="data-[state=active]:bg-[#e6f5f0] data-[state=active]:text-[#26a570]"
                >
                  Rapporten
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-[#e6f5f0] data-[state=active]:text-[#26a570]"
                >
                  Notificaties
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-[#333]">Totaal leads</CardTitle>
                      <Users className="h-4 w-4 text-[#26a570]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#333]">1,248</div>
                      <p className="text-xs text-gray-500">+12.5% t.o.v. vorige maand</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-[#333]">Conversie</CardTitle>
                      <BarChart3 className="h-4 w-4 text-[#ff8a47]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#333]">24.3%</div>
                      <p className="text-xs text-gray-500">+2.1% t.o.v. vorige maand</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-[#333]">Actieve campagnes</CardTitle>
                      <FileText className="h-4 w-4 text-[#26a570]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#333]">12</div>
                      <p className="text-xs text-gray-500">+2 t.o.v. vorige maand</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-[#333]">Openstaande taken</CardTitle>
                      <MessageSquare className="h-4 w-4 text-[#ff8a47]" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[#333]">8</div>
                      <p className="text-xs text-gray-500">-3 t.o.v. vorige week</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-[#333]">Recente leads</CardTitle>
                      <CardDescription>Overzicht van de meest recente leads</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                            <AvatarFallback>PK</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Piet Klaassen</p>
                            <p className="text-sm text-gray-500">piet@example.com</p>
                          </div>
                          <div className="ml-auto font-medium">
                            <Badge className="bg-[#26a570] hover:bg-[#1e8f5e] text-white">Energie Campagne</Badge>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                            <AvatarFallback>MV</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Maria Visser</p>
                            <p className="text-sm text-gray-500">maria@example.com</p>
                          </div>
                          <div className="ml-auto font-medium">
                            <Badge className="bg-[#26a570] hover:bg-[#1e8f5e] text-white">Energie Campagne</Badge>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                            <AvatarFallback>JB</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Johan Bakker</p>
                            <p className="text-sm text-gray-500">johan@example.com</p>
                          </div>
                          <div className="ml-auto font-medium">
                            <Badge className="bg-[#ff8a47] hover:bg-[#ff7a2d] text-white">Internet Campagne</Badge>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                            <AvatarFallback>SD</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Sandra de Vries</p>
                            <p className="text-sm text-gray-500">sandra@example.com</p>
                          </div>
                          <div className="ml-auto font-medium">
                            <Badge className="bg-[#ff8a47] hover:bg-[#ff7a2d] text-white">Internet Campagne</Badge>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                            <AvatarFallback>KM</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Karel Meijer</p>
                            <p className="text-sm text-gray-500">karel@example.com</p>
                          </div>
                          <div className="ml-auto font-medium">
                            <Badge className="bg-[#26a570] hover:bg-[#1e8f5e] text-white">Energie Campagne</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-[#333]">Recente activiteiten</CardTitle>
                      <CardDescription>De laatste activiteiten in het systeem</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Nieuwe lead toegevoegd</p>
                            <p className="text-sm text-gray-500">Piet Klaassen is toegevoegd aan Energie Campagne</p>
                          </div>
                          <div className="ml-auto text-sm text-gray-500">5m geleden</div>
                        </div>
                        <div className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Handtekening ontvangen</p>
                            <p className="text-sm text-gray-500">Maria Visser heeft het contract ondertekend</p>
                          </div>
                          <div className="ml-auto text-sm text-gray-500">15m geleden</div>
                        </div>
                        <div className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">Nieuwe campagne gestart</p>
                            <p className="text-sm text-gray-500">Internet Campagne is geactiveerd</p>
                          </div>
                          <div className="ml-auto text-sm text-gray-500">3u geleden</div>
                        </div>
                        <div className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">API-sleutel toegevoegd</p>
                            <p className="text-sm text-gray-500">
                              Nieuwe Salesdock API-sleutel voor Energie Leverancier B.V.
                            </p>
                          </div>
                          <div className="ml-auto text-sm text-gray-500">5u geleden</div>
                        </div>
                        <div className="flex items-center">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none text-[#333]">E-mail verzonden</p>
                            <p className="text-sm text-gray-500">Herinneringsmail verzonden naar 24 klanten</p>
                          </div>
                          <div className="ml-auto text-sm text-gray-500">1d geleden</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-[#333]">Statistieken</CardTitle>
                    <CardDescription>Gedetailleerde statistieken van uw campagnes</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">Statistieken worden hier weergegeven</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-[#333]">Rapporten</CardTitle>
                    <CardDescription>Bekijk en download rapporten</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">Rapporten worden hier weergegeven</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-4">
                <Card className="bg-white border border-[#e6f5f0] hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-[#333]">Notificaties</CardTitle>
                    <CardDescription>Beheer uw notificatie-instellingen</CardHeader>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">Notificatie-instellingen worden hier weergegeven</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
