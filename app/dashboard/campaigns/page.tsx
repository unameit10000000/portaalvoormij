"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, Filter, MoreHorizontal, Plus, Search } from "lucide-react"

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

const campaigns = [
  {
    id: 1,
    name: "Energie Vergelijker Campagne",
    status: "active",
    leads: 342,
    conversion: "24.3%",
    supplier: "Energie Leverancier B.V.",
    created: "10 apr 2025",
  },
  {
    id: 2,
    name: "Internet Aanbieding Q2",
    status: "active",
    leads: 156,
    conversion: "18.7%",
    supplier: "Internet Provider N.V.",
    created: "5 apr 2025",
  },
  {
    id: 3,
    name: "Zomer Energie Actie",
    status: "draft",
    leads: 0,
    conversion: "0%",
    supplier: "Energie Leverancier B.V.",
    created: "15 apr 2025",
  },
  {
    id: 4,
    name: "Glasvezel Campagne",
    status: "active",
    leads: 89,
    conversion: "12.4%",
    supplier: "Internet Provider N.V.",
    created: "1 apr 2025",
  },
  {
    id: 5,
    name: "Groene Energie Actie",
    status: "paused",
    leads: 203,
    conversion: "21.8%",
    supplier: "Energie Leverancier B.V.",
    created: "25 mrt 2025",
  },
]

export default function CampaignsPage() {
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([])

  const toggleCampaign = (id: number) => {
    setSelectedCampaigns((prev) => (prev.includes(id) ? prev.filter((campaignId) => campaignId !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    setSelectedCampaigns(selectedCampaigns.length === campaigns.length ? [] : campaigns.map((campaign) => campaign.id))
  }

  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Campagnes</h1>
          <p className="text-muted-foreground">Beheer uw verkoopacties en volg de resultaten</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nieuwe campagne
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campagne overzicht</CardTitle>
          <CardDescription>Een overzicht van al uw actieve en inactieve campagnes</CardDescription>
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
                    <Checkbox id="status-active" />
                    <label htmlFor="status-active" className="flex-1 cursor-pointer">
                      Actief
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="status-paused" />
                    <label htmlFor="status-paused" className="flex-1 cursor-pointer">
                      Gepauzeerd
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="status-draft" />
                    <label htmlFor="status-draft" className="flex-1 cursor-pointer">
                      Concept
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Filter op leverancier</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="supplier-1" />
                    <label htmlFor="supplier-1" className="flex-1 cursor-pointer">
                      Energie Leverancier B.V.
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Checkbox id="supplier-2" />
                    <label htmlFor="supplier-2" className="flex-1 cursor-pointer">
                      Internet Provider N.V.
                    </label>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue placeholder="Sorteer op" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle campagnes</SelectItem>
                  <SelectItem value="active">Alleen actief</SelectItem>
                  <SelectItem value="paused">Alleen gepauzeerd</SelectItem>
                  <SelectItem value="draft">Alleen concepten</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              {selectedCampaigns.length > 0 && (
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
                      checked={selectedCampaigns.length === campaigns.length && campaigns.length > 0}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Naam
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>Conversie</TableHead>
                  <TableHead>Leverancier</TableHead>
                  <TableHead>Aangemaakt op</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedCampaigns.includes(campaign.id)}
                        onCheckedChange={() => toggleCampaign(campaign.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <Link href={`/dashboard/campaigns/${campaign.id}`} className="hover:underline">
                        {campaign.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          campaign.status === "active"
                            ? "default"
                            : campaign.status === "paused"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {campaign.status === "active"
                          ? "Actief"
                          : campaign.status === "paused"
                            ? "Gepauzeerd"
                            : "Concept"}
                      </Badge>
                    </TableCell>
                    <TableCell>{campaign.leads}</TableCell>
                    <TableCell>{campaign.conversion}</TableCell>
                    <TableCell>{campaign.supplier}</TableCell>
                    <TableCell>{campaign.created}</TableCell>
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
                            <Link href={`/dashboard/campaigns/${campaign.id}`} className="flex w-full">
                              Bekijken
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Bewerken</DropdownMenuItem>
                          <DropdownMenuItem>Dupliceren</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {campaign.status === "active" ? (
                            <DropdownMenuItem>Pauzeren</DropdownMenuItem>
                          ) : campaign.status === "paused" ? (
                            <DropdownMenuItem>Activeren</DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>Publiceren</DropdownMenuItem>
                          )}
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
          <p className="text-sm text-muted-foreground">Toont {campaigns.length} campagnes</p>
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
