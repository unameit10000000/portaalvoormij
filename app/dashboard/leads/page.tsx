"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, Download, Filter, MoreHorizontal, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const leads = [
  {
    id: 1,
    name: "Piet Klaassen",
    email: "piet@example.com",
    campaign: "Energie Vergelijker Campagne",
    status: "signed",
    date: "18 apr 2025",
  },
  {
    id: 2,
    name: "Maria Visser",
    email: "maria@example.com",
    campaign: "Energie Vergelijker Campagne",
    status: "signed",
    date: "17 apr 2025",
  },
  {
    id: 3,
    name: "Johan Bakker",
    email: "johan@example.com",
    campaign: "Internet Aanbieding Q2",
    status: "pending",
    date: "16 apr 2025",
  },
  {
    id: 4,
    name: "Sandra de Vries",
    email: "sandra@example.com",
    campaign: "Internet Aanbieding Q2",
    status: "pending",
    date: "15 apr 2025",
  },
  {
    id: 5,
    name: "Karel Meijer",
    email: "karel@example.com",
    campaign: "Energie Vergelijker Campagne",
    status: "processing",
    date: "14 apr 2025",
  },
  {
    id: 6,
    name: "Lisa Jansen",
    email: "lisa@example.com",
    campaign: "Glasvezel Campagne",
    status: "processing",
    date: "13 apr 2025",
  },
  {
    id: 7,
    name: "Thomas Vos",
    email: "thomas@example.com",
    campaign: "Groene Energie Actie",
    status: "failed",
    date: "12 apr 2025",
  },
]

export default function LeadsPage() {
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])

  const toggleLead = (id: number) => {
    setSelectedLeads((prev) => (prev.includes(id) ? prev.filter((leadId) => leadId !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    setSelectedLeads(selectedLeads.length === leads.length ? [] : leads.map((lead) => lead.id))
  }

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
          <p className="text-muted-foreground">Beheer en volg alle leads van uw campagnes</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exporteren
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lead overzicht</CardTitle>
          <CardDescription>Een overzicht van alle leads en hun status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between pb-4">
            <div className="flex gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Zoeken..." className="w-full pl-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuLabel>Filter op status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="status-signed" />
                    <label htmlFor="status-signed" className="flex-1 cursor-pointer">
                      Ondertekend
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="status-pending" />
                    <label htmlFor="status-pending" className="flex-1 cursor-pointer">
                      In afwachting
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="status-processing" />
                    <label htmlFor="status-processing" className="flex-1 cursor-pointer">
                      In behandeling
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="status-failed" />
                    <label htmlFor="status-failed" className="flex-1 cursor-pointer">
                      Mislukt
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Filter op campagne</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="campaign-1" />
                    <label htmlFor="campaign-1" className="flex-1 cursor-pointer">
                      Energie Vergelijker
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="campaign-2" />
                    <label htmlFor="campaign-2" className="flex-1 cursor-pointer">
                      Internet Aanbieding
                    </label>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Sorteer op" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle leads</SelectItem>
                  <SelectItem value="recent">Meest recent</SelectItem>
                  <SelectItem value="oldest">Oudste eerst</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              {selectedLeads.length > 0 && (
                <Button variant="outline" size="sm">
                  Bulk actie
                </Button>
              )}
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox
                      checked={selectedLeads.length === leads.length && leads.length > 0}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Naam
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Campagne</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Datum</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <Checkbox checked={selectedLeads.includes(lead.id)} onCheckedChange={() => toggleLead(lead.id)} />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder-user.jpg" alt={lead.name} />
                          <AvatarFallback>
                            {lead.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <Link href={`/dashboard/leads/${lead.id}`} className="hover:underline">
                          {lead.name}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.campaign}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          lead.status === "signed"
                            ? "default"
                            : lead.status === "pending"
                              ? "secondary"
                              : lead.status === "processing"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {lead.status === "signed"
                          ? "Ondertekend"
                          : lead.status === "pending"
                            ? "In afwachting"
                            : lead.status === "processing"
                              ? "In behandeling"
                              : "Mislukt"}
                      </Badge>
                    </TableCell>
                    <TableCell>{lead.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link href={`/dashboard/leads/${lead.id}`} className="flex w-full">
                              Bekijken
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>E-mail versturen</DropdownMenuItem>
                          <DropdownMenuItem>Status bijwerken</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Verwijderen</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Toont {leads.length} leads</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Vorige
            </Button>
            <Button variant="outline" size="sm" disabled>
              Volgende
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
